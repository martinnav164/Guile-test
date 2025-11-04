import React from "react";
import styles from "./AddonsCard.module.css";

export default function AddonsCard({
  title = "skin fade",
  description = "smooth, seamless fade with a sharp transition from skin to hair",
  duration = "40 min",
  price = 45,
  addons = 7, 
  className = "",
  ...props
}) {
  const hasAddons = addons > 0;
  const addonsText = hasAddons ? `${addons} add-ons available` : "no extras included";

  return (
    <article className={`${styles.card} ${className}`} {...props}>
      <header className={styles.top}>
        <span className={`${styles.addons} ${!hasAddons ? styles.addonsNone : ""}`}>
          {addonsText}
        </span>

        <div className={styles.row}>
          <h3 className={styles.title}>{title}</h3>

          <div className={styles.right}>
            <span className={styles.duration}>{duration}/</span>
            <span className={styles.price}>
              {typeof price === "number" ? `$${price}` : price}
            </span>
          </div>
        </div>
      </header>

      {description ? <p className={styles.desc}>{description}</p> : null}
    </article>
  );
}
