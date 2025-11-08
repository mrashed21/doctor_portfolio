"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "../Home/About";
import Awards from "../Home/Awards";
import HeroComponents from "../Shared/Hero/HeroComponents";
import CTA from "./CTA";
import WhyChooseMe from "./WhyChooseMe";
import WorkingJourney from "./WorkingJourney";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="overflow-hidden">
      <HeroComponents
        title="About Dr. Runa Akhter Dhola"
        subtitle="High-Risk Pregnancy & Fetal Medicine Specialist | Consultant OBGYN, Bangladesh Government | 18+ Years of Dedicated Service"
        breadcrumbPath="Home / About Me"
        backgroundImage="/about_hero_bg.jpg"
      />
      <About />
      <WhyChooseMe />
      {/* <Publications /> */}
      <WorkingJourney />
      <Awards />
      <section className="overflow-y-visible">
        <CTA />
      </section>
    </section>
  );
};

export default AboutMe;
