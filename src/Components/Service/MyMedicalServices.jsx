import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "../Container/Container";

const services = [
  {
    title: "Endometriosis",
    description:
      "Non-cancerous tumors that grow in the uterus, often causing pain and heavy.",
    img: "/service_one.png",
  },
  {
    title: "Ovarian Cysts",
    description:
      "Non-cancerous tumors that grow in the uterus, often causing pain and heavy.",
    img: "/service_two.png",
  },
  {
    title: "Cervical Cancer",
    description:
      "Non-cancerous tumors that grow in the uterus, often causing pain and heavy.",
    img: "/service_three.png",
  },
  {
    title: "Uterine Fibroids",
    description:
      "Non-cancerous tumors that grow in the uterus, often causing pain and heavy.",
    img: "/service_four.png",
  },
  {
    title: "Endometriosis",
    description:
      "Non-cancerous tumors that grow in the uterus, often causing pain and heavy.",
    img: "/service_five.png",
  },
  {
    title: "Ovarian Cysts",
    description:
      "Non-cancerous tumors that grow in the uterus, often causing pain and heavy.",
    img: "/service_six.png",
  },
  {
    title: "Cervical Cancer",
    description:
      "Non-cancerous tumors that grow in the uterus, often causing pain and heavy.",
    img: "/service_seven.png",
  },
  {
    title: "Uterine Fibroids",
    description:
      "Non-cancerous tumors that grow in the uterus, often causing pain and heavy.",
    img: "/service_eight.png",
  },
];

const ServiceCard = ({ service, index }) => (
  <div
    className="rounded-2xl bg-white shadow-lg border border-gray-100 overflow-hidden"
    data-aos="fade-up"
    data-aos-delay={index * 50}
  >
    <div className="relative h-48">
      <img
        src={service.img}
        alt={service.title}
        className="w-full h-full object-cover transition duration-500 hover:scale-105"
      />

      <div className="absolute -bottom-6 left-4 p-3 z-40 rounded-full bg-green-600 text-white shadow-xl">
        <img src="/icon_nine.svg" alt="hello" className="w-10 h-10 " />
      </div>
    </div>

    <div className="p-5 pt-10">
      <h4 className="font-bold text-xl text-gray-800 mb-2">{service.title}</h4>
      <p className="text-sm text-gray-500 mb-4">{service.description}</p>

      {/* Read More Link */}
      <Link
        href="/"
        className="inline-flex items-center space-x-1 text-blue-500 font-semibold text-sm  pt-3 group"
      >
        <span>Read More</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x- -rotate-45" />
      </Link>
    </div>
  </div>
);

const MyMedicalServices = () => {
  return (
    <section id="medical-services" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-green-600 font-semibold text-base tracking-wider">
            What I Provide
          </p>
          <h2 className="text-4xl font-extrabold text-gray-800 mt-2">
            My Medical Services
          </h2>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MyMedicalServices;
