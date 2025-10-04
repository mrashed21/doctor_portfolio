import Container from "../Container/Container";

const hospitals = [
  {
    name: "Green Life Hospital, Dhaka",
    img: "/experiance_one.png",
    role: "Senior Consultant – OB-GYN",
    duration: "2018 - Present",
  },
  {
    name: "Square Hospital, Dhaka",
    img: "/experiance_two.png",
    role: "Senior Consultant – OB-GYN",
    duration: "2018 - Present",
  },
  {
    name: "United Hospital, Dhaka",
    img: "/experance_three.png",
    role: "Senior Consultant – OB-GYN",
    duration: "2018 - Present",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 "
      style={{
        backgroundImage: "url(/about_bg.svg)",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Working Experience
        </h3>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {hospitals.map((h, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition duration-300 hover:shadow-xl p-3"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={h.img}
                  alt={h.name}
                  className="w-[180px] rounded-md h-full object-cover"
                />
              </div>

              <div className="p-5">
                <h4 className="font-bold text-xl text-gray-800">{h.name}</h4>

                <div className="flex justify-between items-baseline mt-2 mb-3">
                  <p className="text-base font-semibold text-gray-700">
                    {h.role}
                  </p>
                  <p className="text-sm text-gray-500 font-light">
                    {h.duration}
                  </p>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed">
                  Non-cancerous tumors that grow in the uterus, often causing
                  pain and heavy bleeding. Non-cancerous tumors that.
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
