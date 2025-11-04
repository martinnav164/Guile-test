import React from "react";
import styles from "./SideBar.module.css";
import { MoreMenu } from "../../molecules/MoreMenu";
import facebook from "../../../assets/facebook.svg";
import instagram from "../../../assets/instagram.svg";
import linkedin from "../../../assets/linkedin.svg";
import spotify from "../../../assets/spotify.svg";

export default function SideBar({
  photo,
  name = "malik johnson",
  role = "senior barber",
  city = "somerville ma",
  shop = { label: "Good Looks Barbershop", href: "#" },
  availability = { labelLeft: "next available", labelRight: "today at 3PM" },
  socials = {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    spotify: "#",
  },
  onBook,
  bookLabel = "book an appointment",
}) {
  return (
    <aside className={styles.wrap}>
      <div className={styles.general}>
        <figure className={styles.avatarWrap}>
          <img className={styles.avatar} src={photo} alt={`${name}`} />
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
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M12 2C8.687 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.687-6-6-6Zm0 8.5A2.5 2.5 0 1 1 12 5.5a2.5 2.5 0 0 1 0 5Z" />
              </svg>
            </div>
            <a className={styles.shop} href={shop?.href} target="_blank" rel="noreferrer">
              {shop?.label}
            </a>
          </div>

          <div className={styles.availability}>
            <div className={styles.cal}>
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M7 2v2H5a2 2 0 0 0-2 2v2h18V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7Zm14 8H3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10Zm-6 3h4v4h-4v-4Z" />
              </svg>
            </div>
            <div className={styles.when}>
              <span className={styles.muted2}>{availability.labelLeft}</span>
              <span className={styles.dot} aria-hidden />
              <span className={styles.muted2}>{availability.labelRight}</span>
              <svg width="8" height="4" viewBox="0 0 8 4" className={styles.chev}>
                <path d="M0 0l4 4 4-4z" />
              </svg>
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
