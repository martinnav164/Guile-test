import React from 'react';
import { Quotes } from "@phosphor-icons/react";
import styles from './ReviewCard.module.css';

export default function ReviewCard({
  avatar,
  name,
  text,
  date,
  state = 'default', 
  compact = false,   
  quote = true,
}) {
  return (
    <article  
      className={[
        styles.card,
        styles[`is-${state}`],
        compact ? styles.compact : '',
      ].join(' ')}
    >
      <header className={styles.header}>
        <div className={styles.person}>
          <img className={styles.avatar} src={avatar} alt="" />
          <span className={styles.name}>{name}</span>
        </div>

        {quote && (
          <Quotes size={32} weight="fill" className={styles.quoteIcon}/>
        )}
      </header>

      <p className={styles.text}>{text}</p>
      <div className={styles.meta}>{date}</div>
    </article>
  );
}
