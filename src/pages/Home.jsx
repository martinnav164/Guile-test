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

export function Home() {
  return (
    <div
      style={{
        overflow: "hidden",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header {...headerData} />
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          gap: "241px",
          overflow: "hidden",
          minHeight: 0,
          marginTop: "23px",
          paddingLeft: "100px"
        }}
      >
        <SideBar {...sideBarData} />
        <div
        className="hide-scrollbar"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "120px",
            overflow: "auto",
            flex: 1,
            padding: "20px",
            maxWidth: "732px",
          }}
        >
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
