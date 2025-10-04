"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Awards from "../Home/Awards";
import Publications from "../Home/Publications";
import HeroComponents from "../Shared/Hero/HeroComponents";
import AboutSection from "./AboutSection";
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
    <section>
      <HeroComponents
        title="About Me"
        subtitle="I'm Dr. Runa Akhter Dhola a [Specialization, e.g., Internal Medicine Specialist] with a passion for providing holistic, evidence-based medical care."
        breadcrumbPath=""
        backgroundImage=""
      />
      <AboutSection />
      <WhyChooseMe />
      <Publications />
      <WorkingJourney />
      <Awards />
      <CTA />
    </section>
  );
};

export default AboutMe;
