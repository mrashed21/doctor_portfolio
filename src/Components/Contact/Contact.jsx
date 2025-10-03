"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Appointment from "../Home/Appointment";
import HeroComponents from "../Shared/Hero/HeroComponents";
import ContactInfoSection from "./ContactInfoSection";
import MapAndCtaSection from "./MapAndCtaSection";
const Contact = () => {
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
        title="Contact"
        subtitle="I'm Dr. Runa Akhter Dhola a [Specialization, e.g., Internal Medicine Specialist] with a passion for providing holistic, evidence-based medical care."
        breadcrumbPath=""
        backgroundImage=""
      />
      <ContactInfoSection />
      <Appointment />
      <MapAndCtaSection />
    </section>
  );
};

export default Contact;
