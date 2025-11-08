"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "./About";
import Appointment from "./Appointment";
import Awards from "./Awards";
import Blog from "./Blog";
import Experience from "./Experience";
import Hero from "./Hero";
import Process from "./Process";
import Publications from "./Publications";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="border-red-500">
      <Hero />
      <Services />
      <About />
      {/* <Appointment /> */}
      <Process />
      <Experience />
      <Testimonials />
      {/* <Publications /> */}
      {/* <Blog /> */}
      <Awards />
    </section>
  );
};

export default Home;
