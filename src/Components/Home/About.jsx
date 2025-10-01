import React from "react";
import Container from "../Container/Container";

export default function About() {
  return (
    <section id="about" className="py-16 bg-primary-light">
      <Container className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5" data-aos="fade-right">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/about-doctor.jpg" alt="about" className="w-full h-full object-cover"/>
          </div>
        </div>
        <div className="md:col-span-7" data-aos="fade-left">
          <h3 className="text-3xl font-bold text-deep">About Me</h3>
          <p className="mt-4 text-gray-700 max-w-xl">
            Dr. Runa Akhter Dhola — Consultant Obstetrics & Gynecology with over 20 years of experience. Expert in laparoscopic surgery, fertility treatments, high-risk pregnancy and preventive women’s health care.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h5 className="text-sm font-semibold text-primary">Education</h5>
              <p className="text-xs text-gray-600 mt-1">MBBS, FCPS, MS (Ob & Gyn)</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h5 className="text-sm font-semibold text-primary">Experience</h5>
              <p className="text-xs text-gray-600 mt-1">Senior Consultant — Green Life Hospital</p>
            </div>
          </div>

          <div className="mt-6">
            <button className="bg-primary text-white px-5 py-3 rounded-full">Read More</button>
            <button className="ml-3 border border-primary text-primary px-4 py-3 rounded-full">Contact</button>
          </div>
        </div>
      </Container>
    </section>
  );
}
