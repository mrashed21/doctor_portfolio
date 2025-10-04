import { Clock } from "lucide-react";
import Container from "../Container/Container";

const reasons = [
  {
    title: "Trust & Experience",
    description: "Non-cancerous tumors that grow in the uterus, often.",
    Icon: "/choose_me_one.svg",
  },
  {
    title: "Reputation & Reviews",
    description: "Non-cancerous tumors that grow in the uterus, often.",
    Icon: "/choose_me_two.svg",
  },
  {
    title: "Communication & Empathy",
    description: "Non-cancerous tumors that grow in the uterus, often.",
    Icon: "/choose_me_three.svg",
  },
  {
    title: "Modern & Evidence-Based Practice",
    description: "Non-cancerous tumors that grow in the uterus, often.",
    Icon: "/choose_me_four.svg",
  },
];

const DoctorImage = "/hero_doctor.png";
const DoctorImage2 = "/image_1.svg";

const WhyChooseMe = () => {
  return (
    <section>
      <section id="why-choose-me" className="py-12 md:py-16 lg:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 md:space-y-8 px-4 lg:px-0">
              <div className="space-y-2 md:space-y-3">
                <p className="text-green-600 font-semibold text-sm md:text-base tracking-wider">
                  Why Choose Me
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 leading-tight">
                  Why My Patients Recommendsed Me?
                </h2>
                <p className="text-gray-600 text-sm md:text-base max-w-lg">
                  Non-cancerous tumors that grow in the uterus, often causing
                  pain and heavy bleeding.
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                {reasons.map((reason, i) => (
                  <div
                    key={i}
                    data-aos="fade-right"
                    data-aos-delay={i * 200}
                    className="bg-white p-3 md:p-4 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-3 md:space-x-4 transition duration-300 hover:shadow-md"
                  >
                    <div className="flex-shrink-0 p-2 md:p-3 rounded-full bg-green-500/10 text-green-600 border border-green-200">
                      <img
                        src={reason.Icon}
                        alt={reason.title}
                        className="w-8 h-8 md:w-10 md:h-10"
                      />
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm md:text-base text-gray-800">
                        {reason.title}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 mt-1">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Section */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end px-4 lg:px-0 mt-8 lg:mt-0 overflow-hidden">
              <div className="relative max-w-[280px] sm:max-w-sm lg:max-w-md w-full">
                {/* Doctor Main Image */}
                <img
                  src={DoctorImage}
                  alt="Smiling Doctor"
                  className="w-full h-auto object-cover relative z-10"
                />

                <div className="absolute top-6 sm:top-10 lg:top-48 left-1/2 lg:-left-[120px] -translate-x-1/2 lg:translate-x-0 bg-green-600  rounded-2xl shadow-2xl p-4 sm:p-5 lg:p-6 text-white w-[90%] sm:min-w-[320px] lg:min-w-[380px]  min-h-[350px] sm:min-h-[400px] lg:min-h-[450px]">
                  <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1">
                    Hello!
                  </h4>

                  <div className="flex items-center gap-2 text-base sm:text-lg mb-3 sm:mb-4">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-medium">24/7</span>
                  </div>
                  <p className="text-[10px] font-semibold lg:hidden -ml-2">
                    +8801712345678
                  </p>

                  {/* Decorative Image */}
                  <img
                    src={DoctorImage2}
                    alt="icon"
                    className="absolute hidden sm:block top-52 sm:top-60 lg:top-60 -left-5 w-24 sm:w-32 lg:w-40"
                  />

                  {/* Contact Box */}
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 inline-block absolute bottom-3 left-1/2 lg:left-2 transform -translate-x-1/2 lg:translate-x-0 mt-auto">
                    <p className="text-xs sm:text-sm font-semibold">
                      +8801712345678
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default WhyChooseMe;
