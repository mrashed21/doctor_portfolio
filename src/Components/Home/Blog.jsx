import React from "react";
import Container from "../Container/Container";

const posts = [
  { title: "Obstetrics & Gynecology Blog", img: "/blog1.jpg" },
  { title: "Pregnancy Health Tips", img: "/blog2.jpg" },
  { title: "Hormonal Therapy Insights", img: "/blog3.jpg" },
];

export default function Blog() {
  return (
    <section id="blog" className="py-16 bg-white">
      <Container>
        <h3 className="text-3xl font-bold text-center text-deep">Best Helpful Blog</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border" data-aos="fade-up" data-aos-delay={i*100}>
              <img src={p.img} alt={p.title} className="w-full h-44 object-cover"/>
              <div className="p-4">
                <div className="text-sm text-primary font-medium">Obstetrics & Gynecology</div>
                <h4 className="mt-2 font-semibold text-deep">{p.title}</h4>
                <button className="mt-3 text-sm text-primary">Read More →</button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
