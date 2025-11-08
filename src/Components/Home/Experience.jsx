import Container from "../Container/Container";

const hospitals = [
  {
    name: "Green Life Hospital, Dhaka",
    img: "/experiance_one.png",
    role: "Senior Consultant – Obstetrics, Gynecology & Feto-Maternal Medicine",
    duration: "2018 – Present",
    desc: "Providing specialized care in high-risk pregnancy, prenatal diagnosis, and women’s reproductive health. Leading advanced ultrasound and maternal-fetal monitoring programs.",
  },
  {
    name: "Square Hospital, Dhaka",
    img: "/experiance_two.png",
    role: "Consultant – Obstetrics & Gynecology",
    duration: "2015 – 2018",
    desc: "Delivered comprehensive maternity and gynecological care, performing minimally invasive procedures and managing complex maternal cases with a multidisciplinary team.",
  },
  {
    name: "United Hospital, Dhaka",
    img: "/experance_three.png",
    role: "Registrar – OB-GYN Department",
    duration: "2012 – 2015",
    desc: "Gained extensive hands-on experience in labor management, antenatal counseling, infertility evaluation, and postnatal patient care.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-50"
      style={{
        backgroundImage: "url(/about_bg.svg)",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-12">
          Professional Experience
        </h3>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {hospitals.map((h, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition duration-300 hover:shadow-xl p-4"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="flex items-center justify-center h-36 lg:h-40 mb-4 overflow-hidden">
                <img
                  src={h.img}
                  alt={h.name}
                  className="w-[160px] h-[120px] lg:w-[180px] object-contain rounded-md"
                />
              </div>

              <div className="lg:p-2">
                <h4 className="font-bold text-lg lg:text-xl text-gray-800">
                  {h.name}
                </h4>

                <div className="flex justify-between items-baseline mt-1 mb-3">
                  <p className="text-sm lg:text-base font-semibold text-gray-700">
                    {h.role}
                  </p>
                  <p className="text-sm text-gray-500 font-light">
                    {h.duration}
                  </p>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {h.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
