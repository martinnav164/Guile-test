import React, { useMemo, useState } from "react";
import styles from "./SideBar.module.css";
import { MoreMenu } from "../../molecules/MoreMenu";
import facebook from "../../../assets/facebook.svg";
import instagram from "../../../assets/instagram.svg";
import linkedin from "../../../assets/linkedin.svg";
import spotify from "../../../assets/spotify.svg";
import { CalendarDots, MapPinSimpleArea } from "@phosphor-icons/react";

export default function SideBar({
  photo,
  name = "malik johnson",
  role = "senior barber",
  city = "somerville ma",
  shop = { label: "Good Looks Barbershop", href: "#" },
  availability = { labelLeft: "next available", labelRight: "today at 3PM" },
  socials = { facebook: "#", instagram: "#", linkedin: "#", spotify: "#" },
  hours: hoursProp,
  onBook,
  bookLabel = "book an appointment",
}) {
  const [open, setOpen] = useState(false);

  const hours = useMemo(
    () =>
      hoursProp ?? [
        { day: "wed", time: "11 AM – 6 PM" },
        { day: "thu", time: "11 AM – 6 PM" },
        { day: "fri", time: "10 AM – 6 PM" },
        { day: "sat", time: "9 AM – 5 PM" },
        { day: "sun", time: "Day off" },
        { day: "mon", time: "Day off" },
        { day: "tue", time: "10 AM – 4 PM" },
      ],
    [hoursProp]
  );

  const toggleHours = () => setOpen((v) => !v);

  return (
    <aside className={styles.wrap}>
      <div className={styles.general}>
        <figure className={styles.avatarWrap}>
          <img className={styles.avatar} src={photo} alt={name} />
          <img className={styles.avatarSmallBW} src={photo} alt="" aria-hidden />
          <div className={styles.more}>
            <MoreMenu />
          </div>
        </figure>

        <div className={styles.info}>
          <div className={styles.heading}>
            <h1 className={styles.name}>{name}</h1>

            <div className={styles.subrow}>
              <span className={styles.muted}>{role}</span>
              <span className={styles.pipe} aria-hidden />
              <span className={styles.muted}>{city}</span>
            </div>
          </div>

          <div className={styles.linkRow}>
            <div className={styles.pin}>
              <MapPinSimpleArea size={20} />
            </div>
            <a className={styles.shop} href={shop?.href} target="_blank" rel="noreferrer">
              {shop?.label}
            </a>
          </div>

          {!open && <div className={styles.availability}>
            <div className={styles.cal}>
              <CalendarDots size={20} />
            </div>
            <button
              type="button"
              className={`${styles.when} ${open ? styles.open : ""}`}
              onClick={toggleHours}
              aria-expanded={open}
              aria-controls="working-hours"
            >
              <span className={styles.muted2}>{availability.labelLeft}</span>
              <span className={styles.dot} aria-hidden />
              <span className={styles.muted2}>{availability.labelRight}</span>
              <svg width="8" height="4" viewBox="0 0 8 4" className={styles.chev} aria-hidden>
                <path d="M0 4 4 0 8 4Z" />
              </svg>
            </button>
          </div>}

          <div
            id="working-hours"
            className={`${styles.hours} ${open ? styles.hoursOpen : ""}`}
            role="region"
            aria-label="working hours"
          >
            <div className={styles.hoursHeader} onClick={toggleHours}>
              <span>Working hours</span>
              <span className={styles.chevUp} aria-hidden>▲</span>
            </div>

            <div className={styles.hoursList}>
              {hours.map(({ day, time }) => {
                const isOff = /day\s*off/i.test(time);
                return (
                  <React.Fragment key={`${day}-${time}`}>
                    <div className={styles.hoursDay}>{day}</div>
                    <div className={`${styles.hoursTime} ${isOff ? styles.off : ""}`}>{time}</div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <nav className={styles.socials} aria-label="social links">
            <a href={socials.facebook} aria-label="facebook" className={styles.socialBtn}>
              <img src={facebook} alt="facebook" />
            </a>
            <a href={socials.instagram} aria-label="instagram" className={styles.socialBtn}>
              <img src={instagram} alt="instagram" />
            </a>
            <a href={socials.linkedin} aria-label="linkedin" className={styles.socialBtn}>
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href={socials.spotify} aria-label="spotify" className={styles.socialBtn}>
              <img src={spotify} alt="spotify" />
            </a>
          </nav>
        </div>
      </div>

      <button className={styles.cta} onClick={onBook}>
        <span className={styles.ctaText}>{bookLabel}</span>
      </button>
    </aside>
  );
}
