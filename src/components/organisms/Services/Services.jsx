import React from "react";
import AddonsCard from "../../molecules/AddonsCard";
import styles from "./Services.module.css";

export default function Services({
  title = "services & add-ons",
  items = [],
  onViewAll,          
  viewAllLabel = "view all services",
  className = "",
  ...props
}) {
  return (
    <section className={`${styles.block} ${className}`} {...props}>
      <h5 className={styles.heading}>{title}</h5>

      <div className={styles.stack}>
        {items.map((svc, i) => (
          <AddonsCard
            key={svc.id ?? i}
            title={svc.title}
            description={svc.description}
            duration={svc.duration}
            price={svc.price}
            addons={svc.addons}
          />
        ))}

        <button
          type="button"
          className={styles.viewAll}
          onClick={() => {}}
          aria-label={viewAllLabel}
        >
          <span className={styles.viewAllText}>{viewAllLabel}</span>
        </button>
      </div>
    </section>
  );
}
