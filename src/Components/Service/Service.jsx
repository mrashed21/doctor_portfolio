"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Appointment from "../Home/Appointment";
import Blog from "../Home/Blog";
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
        title="Service"
        subtitle="I'm Dr. Runa Akhter Dhola a [Specialization, e.g., Internal Medicine Specialist] with a passion for providing holistic, evidence-based medical care."
        breadcrumbPath=""
        backgroundImage=""
      />
      <MyMedicalServices />
      <Appointment />
      <section className="py-10">
        <Blog />
      </section>
    </section>
  );
};

export default Service;
