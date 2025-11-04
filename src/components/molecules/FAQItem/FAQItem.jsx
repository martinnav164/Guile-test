import React, { useId, useState } from 'react';
import { ArrowDown } from '@phosphor-icons/react';
import styles from './FAQItem.module.css';

export default function FAQItem({ index, question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <article className={styles.item} data-open={open}>
      <h3 className={styles.header}>
        <button
          className={styles.trigger}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() => setOpen(v => !v)}
        >
          <span className={styles.title}>{index}. {question}</span>
          <span className={styles.icon} aria-hidden>
          <ArrowDown size={32} className={styles.chevron} />
          </span>
        </button>
      </h3>
      <div id={`${id}-panel`} role="region" hidden={!open} className={styles.panel}>
        {answer}
      </div>
    </article>
  );
}
