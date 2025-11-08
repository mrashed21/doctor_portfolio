import Container from "../Container/Container";

const services = [
  {
    title: "High-Risk Pregnancy Care",
    description:
      "Specialized care for women with high-risk pregnancies, ensuring both mother and baby are monitored and treated with utmost precision.",
    img: "/service_one.png",
  },
  {
    title: "Endometriosis Management",
    description:
      "Diagnosis and treatment of endometriosis to relieve pain, improve fertility, and enhance quality of life.",
    img: "/service_two.webp",
  },
  {
    title: "Ovarian Cysts Treatment",
    description:
      "Comprehensive care for ovarian cysts including diagnosis, monitoring, and surgical or non-surgical management.",
    img: "/service_three.webp",
  },
  {
    title: "Uterine Fibroids Management",
    description:
      "Effective treatment options for uterine fibroids to reduce symptoms like heavy bleeding and pelvic pain.",
    img: "/service_four.webp",
  },
  {
    title: "Cervical Screening & Care",
    description:
      "Regular cervical screenings, early detection of abnormalities, and timely treatment for cervical health.",
    img: "/service_five.jpg",
  },
  {
    title: "Fetal Medicine & Ultrasound",
    description:
      "Advanced fetal monitoring and diagnostic ultrasound for early detection of complications.",
    img: "/service--six.webp",
  },
  {
    title: "Infertility Consultation",
    description:
      "Guidance and treatment plans for couples experiencing infertility issues, focusing on personalized reproductive care.",
    img: "/service-seven.jpg",
  },
  {
    title: "Gynecological Surgery",
    description:
      "Minimally invasive and advanced surgical procedures for various gynecological conditions.",
    img: "/service-eight.webp",
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
        <img src="/icon_nine.svg" alt="icon" className="w-10 h-10 " />
      </div>
    </div>

    <div className="p-5 pt-10">
      <h4 className="font-bold text-xl text-gray-800 mb-2">{service.title}</h4>
      <p className="text-sm text-gray-500 mb-4">{service.description}</p>

      {/* <Link
        href="/"
        className="inline-flex items-center space-x-1 text-blue-500 font-semibold text-sm pt-3 group"
      >
        <span>Read More</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link> */}
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
