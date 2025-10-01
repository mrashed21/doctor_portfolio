"use client";
import { motion } from "framer-motion";
import Container from "../Container/Container";

const cards = [
  { title: "Endometriosis", desc: "Diagnosis & minimally invasive treatment." },
  { title: "Ovarian Cysts", desc: "Monitoring and laparoscopic solutions." },
  { title: "Cervical Cancer", desc: "Screening, vaccination and treatment." },
  { title: "Uterine Fibroids", desc: "Uterine-preserving options & surgery." },
  { title: "Infertility Care", desc: "Fertility assessment & IVF referrals." },
  { title: "Prenatal Care", desc: "Pregnancy monitoring & delivery plans." },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-deep">My Medical Services</h2>
          <p className="text-gray-600 mt-2">
            Comprehensive womens healthcare services focusing on evidence-based
            care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: false, amount: 0.2 }} // 👈 animate every time in view
              className="bg-white border rounded-2xl p-6 shadow"
            >
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
