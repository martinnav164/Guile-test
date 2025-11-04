import React, { useMemo, useState } from "react";
import { ReviewCard } from "../../molecules/ReviewCard";
import styles from "./Testimonials.module.css";
import { CaretRight, CaretLeft } from "@phosphor-icons/react";

export function Testimonials({
  title = "testimonials",
  reviews,
  startIndex = 0,
  onMore = () => {},
}) {
  const [index, setIndex] = useState(startIndex);
  const count = reviews.length || 0;

  const main = useMemo(() => (count ? reviews[index] : null), [reviews, index, count]);
  const next = useMemo(
    () => (count ? reviews[(index + 1) % count] : null),
    [reviews, index, count]
  );

  const go = (dir) => {
    if (!count) return;
    setIndex((i) => (i + dir + count) % count);
  };

  if (!count) return null;

  return (
    <section className={styles.block} aria-label="testimonials">
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.row}>
        <div className={styles.main}>
          {main && (
            <ReviewCard
              avatar={main.avatar}
              name={main.name}
              text={main.text}
              date={main.date}
              state="default"
              compact={false}
              quote
            />
          )}
        </div>

        <aside className={styles.preview} aria-hidden>
          {next && (
            <ReviewCard
              avatar={next.avatar}
              name={next.name}
              text={next.text}
              date={next.date}
              state="inactive"   
              compact             
              quote={false}
            />
          )}
        </aside>
      </div>

      <div className={styles.footer}>
        <button
          type="button"
          className={styles.pill}
          onClick={onMore}
          aria-label="read more reviews"
        >
          <span className={styles.pillText}>read more reviews</span>
        </button>

        <div className={styles.arrows}>
          <button
            className={styles.arrow}
            aria-label="previous testimonial"
            onClick={() => go(-1)}
          >
            <CaretLeft size={32} className={styles.arrowIcon}/>
          </button>
          <button
            className={styles.arrow}
            aria-label="next testimonial"
            onClick={() => go(1)}
          >
            <CaretRight size={32} className={styles.arrowIcon}/>
          </button>
        </div>
      </div>
    </section>
  );
}
