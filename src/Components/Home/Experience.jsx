import React from "react";
import Container from "../Container/Container";

const hospitals = [
  { name: "Green Life Hospital, Dhaka", img: "/hospital1.jpg" },
  { name: "Square Hospital, Dhaka", img: "/hospital2.jpg" },
  { name: "United Hospital, Dhaka", img: "/hospital3.jpg" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-white">
      <Container>
        <h3 className="text-3xl font-bold text-center text-deep">Working Experience</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {hospitals.map((h, i) => (
            <div key={i} className="bg-white rounded-2xl shadow p-4" data-aos="fade-up" data-aos-delay={i*100}>
              <img src={h.img} alt={h.name} className="w-full h-36 object-cover rounded-lg"/>
              <h4 className="mt-3 font-semibold text-deep">{h.name}</h4>
              <p className="text-sm text-gray-600">Senior Consultant — Obstetrics & Gynecology</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
