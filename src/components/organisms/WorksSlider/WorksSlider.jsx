import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./WorksSlider.module.css";

export default function WorksSlider({
  title = "my works",
  slides = [],
  interval = 5000,
}) {
  const [index, setIndex] = useState(0);
  const wrapRef = useRef(null);
  const count = slides.length;

  useEffect(() => {
    if (!count) return;
    let timer;
    const start = () => (timer = setInterval(() => setIndex((i) => (i + 1) % count), interval));
    const stop = () => timer && clearInterval(timer);

    start();
    const node = wrapRef.current;
    node?.addEventListener("mouseenter", stop);
    node?.addEventListener("mouseleave", start);

    return () => {
      stop();
      node?.removeEventListener("mouseenter", stop);
      node?.removeEventListener("mouseleave", start);
    };
  }, [count, interval]);

  const go = (i) => setIndex((i + count) % count);
  const active = useMemo(() => slides[index] ?? null, [slides, index]);

  return (
    <section className={styles.block} ref={wrapRef} aria-label="works slider">
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <Slide key={i} slide={s} />
          ))}
        </div>

        <div className={styles.controls} aria-hidden>
          <button className={styles.nav} onClick={() => go(index - 1)}>&larr;</button>
          <button className={styles.nav} onClick={() => go(index + 1)}>&rarr;</button>
        </div>
      </div>

      <div className={styles.pagination} role="tablist" aria-label="slide navigation">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === index}
            className={`${styles.dot} ${i === index ? styles.active : ""}`}
            onClick={() => go(i)}
            title={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function Slide({ slide }) {
  const { layout, images = [] } = slide || {};

  const safe = (src) => src || "";

  if (layout === "A") {
    const [smallTop, smallBottom, big] = images;
    return (
      <figure className={`${styles.slide} ${styles.layoutA}`}>
        <div className={styles.aSmallColumn}>
          <img className={styles.aSmallTop} src={safe(smallTop)} alt="" />
          <img className={styles.aSmallBottom} src={safe(smallBottom)} alt="" />
        </div>
        <img className={styles.aBig} src={safe(big)} alt="" />
      </figure>
    );
  }

  if (layout === "B") {
    const [left, right] = images;
    return (
      <figure className={`${styles.slide} ${styles.layoutB}`}>
        <img className={styles.bLeft} src={safe(left)} alt="" />
        <img className={styles.bRight} src={safe(right)} alt="" />
      </figure>
    );
  }

  const [big, smallTop, smallBottom] = images;
  return (
    <figure className={`${styles.slide} ${styles.layoutC}`}>
      <img className={styles.cBig} src={safe(big)} alt="" />
      <div className={styles.cSmallColumn}>
        <img className={styles.cSmallTop} src={safe(smallTop)} alt="" />
        <img className={styles.cSmallBottom} src={safe(smallBottom)} alt="" />
      </div>
    </figure>
  );
}
