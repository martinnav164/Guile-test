import React from 'react';
import styles from './HeaderButton.module.css';

function cx(...v) {
  return v.filter(Boolean).join(' ');
}

export const HeaderButton = ({
  label,
  count,
  state = 'default',
  className,
  onClick,
  ...rest
}) => {
  const withBadge = typeof count === 'number';

  return (
    <button
      type="button"
      className={cx(
        styles.root,
        withBadge ? styles.withBadge : styles.noBadge,
        state === 'hovered' && styles.isHover,
        state === 'pressed' && styles.isPressed,
        className
      )}
      onClick={onClick}
      {...rest}
    >
      <span className={styles.label}>{label}</span>

      {withBadge && (
        <span className={styles.badge} aria-label={`${count} new`}>
          {count}
        </span>
      )}
    </button>
  );
};
