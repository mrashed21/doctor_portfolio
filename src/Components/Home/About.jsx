import { ArrowUpRight, Check } from "lucide-react";
import Container from "../Container/Container";

const imageMain = "/about_one.png";
const imageTopLeft = "/about_three.png";
const imageBottomLeft = "/about_two.png";

const features = [
  "Monthly Checkups",
  "Cosmetic Filling",
  "Caring & Support Always",
  "Depending X-Ray",
  "Proactive and Fast Results",
  "Complete Crown",
];
const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 overflow-hidden"
      style={{
        backgroundImage: "url(/about_bg.svg)",
        backgroundSize: "cover",
      }}
    >
      <Container className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6 relative h-[450px]" data-aos="fade-right">
          {/* Main Doctor Image (Center/Right) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[65%] h-full rounded-2xl overflow-hidden shadow-2xl z-10">
            <img
              src={imageMain}
              alt="Dr. Runa Dhola"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top-Left Image */}
          <div className="absolute left-0 top-0 w-[45%] h-[45%] rounded-xl overflow-hidden shadow-lg">
            <img
              src={imageTopLeft}
              alt="Doctor with Patient"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom-Left Image */}
          <div className="absolute left-0 bottom-0 w-[45%] h-[45%] rounded-xl overflow-hidden shadow-lg">
            <img
              src={imageBottomLeft}
              alt="Doctor Consulting"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute left-[35%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24rounded-full flex items-center justify-center shadow-xl rotate-45">
            <img src="/about_circle.png" alt="about" />
          </div>
        </div>
        <div className="md:col-span-6 md:pl-8" data-aos="fade-left">
          <p className="text-green-600 font-semibold text-base mb-2">
            About Me
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Dr. Runa Akhter Dhola
          </h2>

          <p className="mt-4 text-gray-600 mb-8 max-w-xl">
            I'm Dr. Runa Akhter Dhola a [Specialization, e.g., Internal Medicine
            Specialist] with a passion for providing holistic, evidence-based
            medical care, passion for providing holistic, evidence-based medical
            care.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-700 text-base">{feature}</span>
              </div>
            ))}
          </div>

          {/* Read More Link */}
          <a
            href="#"
            className="inline-flex items-center space-x-1 text-blue-600 font-semibold hover:text-blue-700 transition"
          >
            <span>Read More</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default About;
