import React, { useEffect, useId, useRef, useState } from 'react';
import { HeaderButton } from '../../molecules/HeaderButton';
import { UserMenu } from '../../molecules/UserMenu';
import styles from './Header.module.css';
import logo from '../../../assets/logo.svg';
import bell from '../../../assets/bell.svg';

function useClickAway(open, refs, onClose) {
  useEffect(() => {
    function onDoc(e) {
      if (!open) return;
      if (refs.some(r => r.current?.contains(e.target))) return;
      onClose();
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open, refs, onClose]);
}

function NotificationBell({ unread = 0, items = [] }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const popRef = useRef(null);
  const id = useId();

  useClickAway(open, [btnRef, popRef], () => setOpen(false));

  return (
    <div className={styles.bellWrap}>
      <button
        ref={btnRef}
        type="button"
        className={styles.iconBtn}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(o => !o)}
      >
        <img src={bell} alt="bell" className={styles.bell} />
        {unread > 0 && <span className={styles.dot} />}
      </button>

      <div
        ref={popRef}
        id={id}
        className={`${styles.panel} ${open ? styles.open : ''}`}
        role="dialog"
      >
        <div className={styles.panelHeader}>
          <div className={styles.panelTitle}>
            <span>notifications</span>
            <span className={styles.count}>{unread}</span>
          </div>
          <button className={styles.smallIcon} aria-label="settings">
            <svg viewBox="0 0 24 24"><path d="M12 8a4 4 0 100 8 4 4 0 000-8z" fill="currentColor"/></svg>
          </button>
        </div>

        <div className={styles.panelList}>
          {items.map((n) => (
            <div key={n.id} className={styles.note}>
              <img src={n.avatar} alt="" className={styles.noteAvatar} />
              <div className={styles.noteBody}>
                <div className={styles.noteText}>{n.text}</div>
                <div className={styles.noteDate}>{n.date}</div>
                {n.cta && (
                  <button className={styles.ctaBtn} onClick={n.cta.onClick}>
                    {n.cta.label}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header({
  variant = 'default',          
  loggedIn = true,
  unread = 0,
  notifications = [],
  onBack,
  onLogin,
}) {
  return (
    <header className={styles.header}>
      {variant === 'default' ? (
        <div className={styles.left}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
      ) : (
        <button type="button" onClick={onBack} className={styles.backPill}>
          <span className={styles.backIcon} aria-hidden>❮</span>
          <span>back to malik</span>
        </button>
      )}

      <div className={styles.right}>
        {loggedIn ? (
          <>
            <HeaderButton label="view appointments" state="default" count={0} />
            <span className={styles.divider} aria-hidden />
            <NotificationBell unread={unread} items={notifications} />
            <UserMenu />
          </>
        ) : (
          <button type="button" className={styles.loginBtn} onClick={onLogin}>
            login
          </button>
        )}
      </div>
    </header>
  );
}
