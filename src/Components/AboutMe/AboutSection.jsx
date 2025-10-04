import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Container from "../Container/Container";

const features = [
  "Monthly Checkups",
  "Caring & Support Always",
  "Proactive and Fast Results",
  "Depending X-Ray",
  "Cosmetic Filling",
  "Complete Crown",
];

const Image1 = "about_one.png";
const Image2 = "/about_three.png";
const Image3 = "/about_two.png";
const Image4 = "/about_two.png";

const AboutSection = () => {
  return (
    <section>
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Mobile/Tablet: Simplified stacked layout */}
            <div className="lg:hidden w-full px-4">
              <div className="flex flex-col items-center gap-6 mb-8">
                {/* Main image */}
                <div className="w-full max-w-[300px] sm:max-w-[350px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={Image3}
                    alt="Doctor Portrait"
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>

                {/* Secondary images row */}
                <div className="flex gap-3 sm:gap-4 justify-center w-full">
                  <div className="w-32 sm:w-40 h-24 sm:h-28 rounded-xl overflow-hidden shadow-md">
                    <img
                      src={Image1}
                      alt="Patient Discussion"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-32 sm:w-40 h-24 sm:h-28 rounded-xl overflow-hidden shadow-md">
                    <img
                      src={Image2}
                      alt="Medical Checkup"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Experience badge */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 bg-green-600 rounded-full flex items-center justify-center text-center shadow-xl">
                  <div className="text-white">
                    <div className="text-3xl sm:text-4xl font-bold leading-none">
                      20+
                    </div>
                    <div className="text-xs sm:text-sm leading-tight mt-1">
                      Years of experience
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Original complex layout */}
            <div className="hidden lg:block lg:col-span-5 relative h-full min-h-[500px]">
              <div className="absolute top-1/4 z-50 lg:bottom-0 left-1/4 lg:left-1/3 w-3/4 max-w-[350px] rounded-xl overflow-hidden">
                <div className="relative">
                  <img
                    src={Image3}
                    alt="Doctor Portrait"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              <div className="absolute top-0 left-0 w-[250px] h-[180px] rounded-xl overflow-hidden">
                <img
                  src={Image1}
                  alt="Patient Discussion"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-0 left-[260px] w-[150px] h-[120px] rounded-xl overflow-hidden">
                <img
                  src={Image2}
                  alt="Medical Checkup"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-[200px] left-[60px] transform -translate-x-1/2 lg:translate-x-0 w-32 h-32 bg-green-600 rounded-full flex items-center justify-center text-center shadow-xl">
                <div className="text-white">
                  <div className="text-4xl font-bold leading-none">20+</div>
                  <div className="text-sm leading-tight">
                    Years of experience
                  </div>
                </div>
              </div>
            </div>

            {/* Text content - responsive for all screens */}
            <div className="lg:col-span-7 px-4 lg:px-0 lg:pl-16 space-y-3 md:space-y-4">
              <p className="text-green-600 font-semibold text-sm md:text-base tracking-wider">
                About Me
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 leading-tight">
                Dr. Runa Akhter Dhola
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-2xl">
                I'm Dr. Runa Akhter Dhola a [Specialization, e.g., Internal
                Medicine Specialist] with a passion for providing holistic,
                evidence-based medical care. passion for providing holistic,
                evidence-based medical care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 md:gap-y-4 gap-x-4 md:gap-x-8 pt-3 md:pt-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <span className="bg-blue-500 rounded-full p-1 flex-shrink-0">
                      <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </span>
                    <span className="text-gray-700 text-sm md:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/"
                className="inline-flex items-center space-x-2 text-blue-500 font-semibold mt-4 md:mt-6 text-sm md:text-base group"
              >
                <span>Book An Appointment</span>
                <span className="border border-blue-500 rounded-full  p-1">
                  {" "}
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1 -rotate-45" />
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default AboutSection;
