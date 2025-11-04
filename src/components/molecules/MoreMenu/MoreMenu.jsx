import React, { useEffect, useId, useRef, useState } from 'react';
import moreMenu from '../../../assets/more-menu.svg';
import styles from './MoreMenu.module.css';

export function MoreMenu({
  items = [],
  align = 'end',       
  openOnMount = false,
  className,
}) {
  const [open, setOpen] = useState(openOnMount);
  const btnRef = useRef(null);
  const popRef = useRef(null);
  const id = useId();

  useEffect(() => {
    function onDoc(e) {
      if (!open) return;
      if (btnRef.current?.contains(e.target)) return;
      if (popRef.current?.contains(e.target)) return;
      setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  return (
    <div className={`${styles.root} ${className || ''}`}>
      <button
        ref={btnRef}
        type="button"
        className={styles.btn}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(o => !o)}
      >
        <img src={moreMenu} alt="more menu" className={styles.icon} />
      </button>

      <div
        ref={popRef}
        id={id}
        role="menu"
        className={`${styles.menu} ${open ? styles.open : ''} ${align === 'start' ? styles.alignStart : styles.alignEnd}`}
      >
        {items.map(({ id, icon, label, onSelect }) => (
          <button
            key={id}
            type="button"
            role="menuitem"
            className={styles.item}
            onClick={() => {
              onSelect?.();
              setOpen(false);
            }}
          >
            <span className={styles.icon} aria-hidden>
              {icon}
            </span>
            <span className={styles.label}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
