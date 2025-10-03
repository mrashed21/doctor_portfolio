import { ArrowRight, Check } from "lucide-react";
import Container from "../Container/Container";

// Mock data for the feature list
const features = [
  "Monthly Checkups",
  "Caring & Support Always",
  "Proactive and Fast Results",
  "Depending X-Ray",
  "Cosmetic Filling",
  "Complete Crown",
];

// Placeholder images
const Image1 = "about_one.png";
const Image2 = "/about_three.png";
const Image3 = "/about_two.png";
const Image4 = "/about_two.png";

const AboutSection = () => {
  return (
    <section>
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LEFT COLUMN: Image Collage & Experience Badge (Col Span 5) */}
            <div className="lg:col-span-5 relative h-full min-h-[500px] flex justify-center lg:justify-start">
              {/* Main Portrait Card - Slightly overlapped */}
              <div className="absolute top-1/4 lg:top-auto lg:bottom-0 left-1/4 lg:left-1/3 w-3/4 max-w-[350px] bg-white shadow-2xl rounded-xl overflow-hidden">
                {/* We combine the large doctor image and the uterus model image here */}
                <div className="relative">
                  <img
                    src={Image3}
                    alt="Doctor Portrait"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  {/* The small uterus model image placed over the doctor's hand area */}
                  <img
                    src={Image4}
                    alt="Uterus Model"
                    className="absolute bottom-2 right-2 w-24 h-24 object-contain"
                  />
                </div>
              </div>

              {/* Top Left Image Card */}
              <div className="absolute top-0 left-0 w-[250px] h-[180px] bg-white shadow-xl rounded-xl overflow-hidden">
                <img
                  src={Image1}
                  alt="Patient Discussion"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Middle Top Right Image Card (Smallest) */}
              <div className="absolute top-0 right-0 w-[150px] h-[120px] bg-white shadow-xl rounded-xl overflow-hidden">
                <img
                  src={Image2}
                  alt="Medical Checkup"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience Badge (20+ Years) */}
              <div className="absolute bottom-4 left-0 lg:left-1/4 transform -translate-x-1/2 lg:translate-x-0 w-32 h-32 bg-green-600 rounded-full flex items-center justify-center text-center shadow-xl">
                <div className="text-white">
                  <div className="text-4xl font-bold leading-none">20+</div>
                  <div className="text-sm leading-tight">
                    Years of experience
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Text Content and Features (Col Span 7) */}
            <div className="lg:col-span-7 pt-40 lg:pt-0 pl-0 lg:pl-16 space-y-4">
              <p className="text-green-600 font-semibold text-base tracking-wider">
                About Me
              </p>
              <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
                Dr. Runa Akhter Dhola
              </h2>
              <p className="text-gray-600 mt-2 text-base max-w-2xl">
                I'm Dr. Runa Akhter Dhola a [Specialization, e.g., Internal
                Medicine Specialist] with a passion for providing holistic,
                evidence-based medical care. passion for providing holistic,
                evidence-based medical care.
              </p>

              {/* Features List (Two Columns) */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 pt-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Book Appointment Button/Link */}
              <a
                href="#"
                className="inline-flex items-center space-x-2 text-green-600 font-bold mt-6 text-base group"
              >
                <span>Book An Appointment</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default AboutSection;
