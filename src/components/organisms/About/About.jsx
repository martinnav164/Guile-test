import React from "react";
import styles from "./About.module.css";

export default function About({
  text = "I’ve been cutting hair for 7 years, and for me, it’s more than just a job—it’s a craft. Whether you want a fresh fade, a classic cut, or a beard.",
  years = 7,
  languages = ["en", "sp"], 
}) {
  const langDisplay = Array.isArray(languages) ? languages.join(" / ") : languages;

  return (
    <section className={styles.wrap} aria-label="about barber">
      <p className={styles.copy}>{text}</p>

      <div className={styles.statsRow}>
        <div className={styles.stat}>
          <div className={styles.value}>{years}</div>
          <div className={styles.caption}>years cutting</div>
        </div>

        <div className={styles.statLang}>
          <div className={styles.langValue}>
            <span className={styles.langLeft}>
              {langDisplay.split("/")[0]?.trim()}
            </span>
            <span className={styles.slash}>/</span>
            <span className={styles.langRight}>
              {langDisplay.split("/")[1]?.trim()}
            </span>
          </div>
          <div className={styles.caption}>languages i speak</div>
        </div>
      </div>
    </section>
  );
}
