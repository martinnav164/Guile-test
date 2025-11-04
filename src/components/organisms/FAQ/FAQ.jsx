import React from 'react';
import { FAQItem } from '../../molecules/FAQItem';
import styles from './FAQ.module.css';

export default function FAQ({ items }) {
  return (
    <div className={styles.faq}>
        <h3 className={styles.title}>got questions?</h3>
      {items.map((it, i) => (
        <FAQItem
          key={it.id ?? i}
          index={i + 1}
          question={it.question}
          answer={<p>{it.answer}</p>}
          defaultOpen={!!it.open}
        />
      ))}
    </div>
  );
}
