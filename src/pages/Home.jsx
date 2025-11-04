import React from "react";
import { Header } from "../components/organisms/Header";
import { WorksSlider } from "../components/organisms/WorksSlider";
import { Testimonials } from "../components/organisms/Testimonials";
import { FAQ } from "../components/organisms/FAQ";
import {
  headerData,
  sideBarData,
  workSliderData,
  faqData,
  servicesData,
  testimonialsData,
} from "../data/mock-data";
import { SideBar } from "../components/organisms/SideBar";
import { About } from "../components/organisms/About";
import { Services } from "../components/organisms/Services";
import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={styles.container}>
      <Header {...headerData} />
      <div className={styles.mainContent}>
        <SideBar {...sideBarData} />
        <div className={`${styles.contentArea} hide-scrollbar`}>
          <About />
          <WorksSlider {...workSliderData} />
          <Services {...servicesData} />
          <Testimonials {...testimonialsData} />
          <FAQ items={faqData} />
        </div>
      </div>
    </div>
  );
}