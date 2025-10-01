import React from "react";
import Container from "../Container/Container";

const steps = [
  { title: "Book an Appointment", desc: "Choose date & time, quick confirmation." },
  { title: "Conduct Checkup", desc: "Detailed consultation & diagnosis." },
  { title: "Perform Treatment", desc: "Surgical or non-surgical plan." },
  { title: "Prescribe & Payment", desc: "Secure payment and post-op care." },
];

export default function Process() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <h3 className="text-3xl font-bold text-center text-deep">My Working Process</h3>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i*100} className="bg-primary-light p-6 rounded-2xl text-deep shadow">
              <div className="text-sm font-semibold">{s.title}</div>
              <p className="mt-3 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
