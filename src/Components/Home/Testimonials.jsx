import Container from "../Container/Container";

const test = [
  {
    name: "Jenny",
    text: "Friendly staff and excellent care throughout my pregnancy.",
  },
  { name: "Rima", text: "Professional and attentive — deeply recommended." },
  { name: "Tania", text: "I felt safe and informed the whole time." },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <h3 className="text-3xl font-bold text-center text-deep">
          What Patients Are Saying
        </h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {test.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow"
              data-aos="zoom-in"
              data-aos-delay={i * 120}
            >
              <p className="text-gray-700 italic">“{t.text}”</p>
              <div className="mt-4 font-semibold text-primary">— {t.name}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
