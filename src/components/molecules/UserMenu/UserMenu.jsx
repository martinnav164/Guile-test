import React, { useEffect, useId, useRef, useState } from 'react';
import avatar from '../../../assets/avatar.png';
import styles from './UserMenu.module.css';
import downArrow from '../../../assets/down-arrow.svg';

function cx(...v) {
  return v.filter(Boolean).join(' ');
}


export const UserMenu = ({
  avatarSrc = avatar,
  avatarAlt = 'user avatar',
  items = [],
  privacyHref = '#',
  termsHref = '#',
  defaultOpen = false,
  className,
  onOpenChange,
}) => {
  const [open, setOpen] = useState(defaultOpen);
  const [pressed, setPressed] = useState(false);
  const [theme, setTheme] = useState('system'); 
  const btnRef = useRef(null);
  const popoverRef = useRef(null);
  const menuId = useId();

  useEffect(() => {
    function onDocClick(e) {
      if (!open) return;
      const t = e.target;
      if (btnRef.current?.contains(t)) return;
      if (popoverRef.current?.contains(t)) return;
      setOpen(false);
      onOpenChange && onOpenChange(false);
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [open, onOpenChange]);

  function toggleOpen() {
    setOpen((o) => {
      const next = !o;
      onOpenChange && onOpenChange(next);
      return next;
    });
  }

  return (
    <div className={cx(styles.root, className)}>
      <button
        ref={btnRef}
        type="button"
        className={cx(styles.trigger, open && styles.triggerOpen, pressed && styles.triggerPressed)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={toggleOpen}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(true);
            onOpenChange && onOpenChange(true);
            requestAnimationFrame(() => {
              const first = popoverRef.current?.querySelector(
                '[role="menuitem"]:not([aria-disabled="true"])'
              );
              first?.focus();
            });
          }
        }}
      >
        <img className={styles.avatar} src={avatarSrc} alt={avatarAlt} />
        <img src={downArrow} alt="down arrow" className={styles.downArrow} />
      </button>

      <div
        ref={popoverRef}
        id={menuId}
        role="menu"
        className={cx(styles.menu, open ? styles.menuOpen : styles.menuClosed)}
      >
        <div className={styles.row} role="none">
          <span className={styles.rowLabel}>theme</span>
          <div className={styles.themeSwitch} role="group" aria-label="Theme">
            <button
              type="button"
              className={cx(styles.themeBtn, theme === 'light' && styles.themeBtnActive)}
              aria-pressed={theme === 'light'}
              onClick={() => setTheme('light')}
              title="Light"
            >
              <span className={styles.icon} />
            </button>
            <button
              type="button"
              className={cx(styles.themeBtn, theme === 'dark' && styles.themeBtnActive)}
              aria-pressed={theme === 'dark'}
              onClick={() => setTheme('dark')}
              title="Dark"
            >
              <span className={styles.icon} />
            </button>
            <button
              type="button"
              className={cx(styles.themeBtn, theme === 'system' && styles.themeBtnActive)}
              aria-pressed={theme === 'system'}
              onClick={() => setTheme('system')}
              title="System"
            >
              <span className={styles.icon} />
            </button>
          </div>
        </div>

        <hr className={styles.divider} />

        <ul className={styles.list} role="none">
          {items.map((it) => (
            <React.Fragment key={it.id}>
              {it.separatorAbove && <hr className={styles.divider} />}
              <li role="none">
                {it.href ? (
                  <a
                    className={cx(
                      styles.item,
                      it.disabled && styles.itemDisabled,
                      it.kind === 'muted' && styles.itemMuted
                    )}
                    role="menuitem"
                    aria-disabled={!!it.disabled}
                    href={it.disabled ? undefined : it.href}
                    tabIndex={0}
                    onClick={(e) => {
                      if (it.disabled) e.preventDefault();
                      else it.onSelect && it.onSelect();
                    }}
                  >
                    <span className={styles.itemLabel}>{it.label}</span>
                    {typeof it.countBadge === 'number' && (
                      <span className={styles.badge}>{it.countBadge}</span>
                    )}
                  </a>
                ) : (
                  <button
                    type="button"
                    className={cx(
                      styles.item,
                      it.disabled && styles.itemDisabled,
                      it.kind === 'muted' && styles.itemMuted
                    )}
                    role="menuitem"
                    aria-disabled={!!it.disabled}
                    onClick={() => !it.disabled && it.onSelect && it.onSelect()}
                  >
                    <span className={styles.itemLabel}>{it.label}</span>
                    {typeof it.countBadge === 'number' && (
                      <span className={styles.badge}>{it.countBadge}</span>
                    )}
                  </button>
                )}
              </li>
            </React.Fragment>
          ))}
        </ul>

        <hr className={styles.divider} />

        <div className={styles.footer} role="none">
          <a className={styles.footerLink} href={privacyHref}>
            Privacy
          </a>
          <a className={styles.footerLink} href={termsHref}>
            Terms
          </a>
        </div>
      </div>
    </div>
  );
};
