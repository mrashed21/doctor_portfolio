"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeroComponents from "../Shared/Hero/HeroComponents";
import MyMedicalServices from "./MyMedicalServices";

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);
  return (
    <section>
      <HeroComponents
        title="Medical Services"
        subtitle="Dr. Runa Akhter Dhola is a high-risk pregnancy and fetal medicine specialist with over 18 years of experience in women's health, providing compassionate and evidence-based care."
        breadcrumbPath=""
        backgroundImage="/service_hero_bg.png"
      />
      <MyMedicalServices />
      {/* <Appointment /> */}
      {/* <section className="py-10">
        <Blog />
      </section> */}
    </section>
  );
};

export default Service;
