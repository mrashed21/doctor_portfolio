import React from "react";
import Container from "../Container/Container";

const items = [
  "MBBS - Dhaka Medical College",
  "FCPS - Obstetrics & Gynecology",
  "Best Doctor Award 2022",
];

export default function Awards() {
  return (
    <section id="awards" className="py-16 bg-gray-50">
      <Container>
        <h3 className="text-3xl font-bold text-center text-deep">My Qualification & Awards</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((a,i)=>(
            <div key={i} className="bg-white p-6 rounded-2xl shadow" data-aos="zoom-in" data-aos-delay={i*100}>
              <h4 className="font-semibold text-deep">{a}</h4>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
