import { ArrowRight, Leaf } from "lucide-react"; // Using Leaf as a generic icon for the service badge
import Container from "../Container/Container";

// Mock Data for the 8 Service Cards
const services = [
  {
    title: "Endometriosis",
    description:
      "Non-cancerous tumors that grow in the uterus, often causing pain and heavy.",
    img: "https://via.placeholder.com/300x200/F0F4F8/333333?text=Doctor+and+Uterus+Model",
  },
  {
    title: "Ovarian Cysts",
    description:
      "Non-cancerous tumors that grow in the uterus, often causing pain and heavy.",
    img: "https://via.placeholder.com/300x200/E0F2F1/333333?text=Surgery+Hand",
  },
  {
    title: "Cervical Cancer",
    description:
      "Non-cancerous tumors that grow in the uterus, often causing pain and heavy.",
    img: "https://via.placeholder.com/300x200/B9E6A6/333333?text=Pregnancy+Checkup",
  },
  {
    title: "Uterine Fibroids",
    description:
      "Non-cancerous tumors that grow in the uterus, often causing pain and heavy.",
    img: "https://via.placeholder.com/300x200/D1F0CC/333333?text=Uterus+Diagram",
  },
  {
    title: "Endometriosis",
    description:
      "Non-cancerous tumors that grow in the uterus, often causing pain and heavy.",
    img: "https://via.placeholder.com/300x200/E6EBF0/333333?text=Doctor+on+Computer",
  },
  {
    title: "Ovarian Cysts",
    description:
      "Non-cancerous tumors that grow in the uterus, often causing pain and heavy.",
    img: "https://via.placeholder.com/300x200/F0F0F0/333333?text=Consultation+Room",
  },
  {
    title: "Cervical Cancer",
    description:
      "Non-cancerous tumors that grow in the uterus, often causing pain and heavy.",
    img: "https://via.placeholder.com/300x200/CCE5CC/333333?text=Medical+Model",
  },
  {
    title: "Uterine Fibroids",
    description:
      "Non-cancerous tumors that grow in the uterus, often causing pain and heavy.",
    img: "https://via.placeholder.com/300x200/A0D1B0/333333?text=Nurse+with+Child",
  },
];

const ServiceCard = ({ service, index }) => (
  <div
    className="rounded-2xl bg-white shadow-lg border border-gray-100 overflow-hidden"
    data-aos="fade-up"
    data-aos-delay={index * 50} // Staggered animation
  >
    {/* Image Section */}
    <div className="relative h-48 overflow-hidden">
      <img
        src={service.img}
        alt={service.title}
        className="w-full h-full object-cover transition duration-500 hover:scale-105"
      />

      {/* Green Icon Badge (Overlays the bottom-left corner of the image) */}
      <div className="absolute -bottom-6 left-4 p-3 rounded-full bg-green-600 text-white shadow-xl">
        <Leaf className="w-6 h-6" />
      </div>
    </div>

    {/* Text Content */}
    <div className="p-5 pt-10">
      <h4 className="font-bold text-xl text-gray-800 mb-2">{service.title}</h4>
      <p className="text-sm text-gray-500 mb-4">{service.description}</p>

      {/* Read More Link */}
      <a
        href="#"
        className="inline-flex items-center space-x-1 text-green-600 font-semibold text-sm border-t border-green-200 pt-3 group"
      >
        <span>Read More</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
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
