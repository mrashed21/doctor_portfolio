// import { ArrowUpRight, Check } from "lucide-react";
// import Link from "next/link";
// import Container from "../Container/Container";

// const imageMain = "/about_one.png";
// const imageTopLeft = "/about_three.png";
// const imageBottomLeft = "/about_two.png";

// const features = [
//   "Monthly Checkups",
//   "Cosmetic Filling",
//   "Caring & Support Always",
//   "Depending X-Ray",
//   "Proactive and Fast Results",
//   "Complete Crown",
// ];
// const About = () => {
//   return (
//     <section
//       id="about"
//       className=" overflow-hidden"
//       style={{
//         backgroundImage: "url(/about_bg.svg)",
//         backgroundSize: "cover",
//       }}
//     >
//       <section className="bg-[#fdfdff7f] py-20">
//         <Container className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center ">
//           <div
//             className="md:col-span-6 relative h-[650px]"
//             data-aos="fade-right"
//           >
//             {/* Main Doctor Image (Center/Right) */}
//             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-[70%] rounded-2xl overflow-hidden shadow-2xl z-10">
//               <img
//                 src={imageMain}
//                 alt="Dr. Runa Dhola"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Top-Left Image */}
//             <div className="absolute -left-3 top-5 w-[45%] h-[50%] rounded-xl overflow-hidden shadow-lg">
//               <img
//                 src={imageTopLeft}
//                 alt="Doctor with Patient"
//                 className="w-full h-full object-cover rounded-xl"
//               />
//             </div>

//             {/* Bottom-Left Image */}
//             <div className="absolute -left-3 bottom-0 w-[45%] h-[45%] rounded-xl overflow-hidden shadow-lg">
//               <img
//                 src={imageBottomLeft}
//                 alt="Doctor Consulting"
//                 className="w-full h-full object-cover rounded-xl"
//               />
//             </div>

//             <div className="absolute left-[45%] bg-none top-[53%] transform -translate-x-1/2 -translate-y-1/2 z-20 w-28 h-28 rounded-full flex items-center justify-center rotate-45">
//               <img src="/about_circle.png" alt="about" />
//             </div>
//           </div>

//           <div className="md:col-span-6 md:pl-8" data-aos="fade-left">
//             <p className="text-green-600 font-semibold text-base mb-2">
//               About Me
//             </p>
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">
//               Dr. Runa Akhter Dhola
//             </h2>

//             <p className="mt-4 text-gray-600 mb-8 max-w-xl">
//               I'm Dr. Runa Akhter Dhola a [Specialization, e.g., Internal
//               Medicine Specialist] with a passion for providing holistic,
//               evidence-based medical care, passion for providing holistic,
//               evidence-based medical care.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-8">
//               {features.map((feature, index) => (
//                 <div key={index} className="flex items-center space-x-2">
//                   <span className="bg-blue-500 rounded-full p-1">
//                     <Check className="w-4 h-4  flex-shrink-0 text-white" />
//                   </span>
//                   <span className="text-gray-700 text-base">{feature}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Read More Link */}
//             <Link
//               href="/"
//               className="inline-flex items-center space-x-1 text-blue-600 font-semibold hover:text-blue-700 transition relative text-sm after:content-[''] after:absolute after:left-0 after:-bottom-0.5  after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300
//              hover:after:w-full"
//             >
//               <span>Read More</span>
//               <ArrowUpRight className="w-4 h-4" />
//             </Link>
//           </div>
//         </Container>
//       </section>
//     </section>
//   );
// };

// export default About;

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
      className="overflow-hidden"
      style={{
        backgroundImage: "url(/about_bg.svg)",
        backgroundSize: "cover",
      }}
    >
      <section className="bg-[#fdfdff7f] py-20">
        <Container className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center px-5">
          {/* Desktop Image Layout */}
          <div
            className="hidden md:block md:col-span-6 relative h-[650px]"
            data-aos="fade-right"
          >
            {/* Main Doctor Image (Center/Right) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-[70%] rounded-2xl overflow-hidden shadow-2xl z-10">
              <img
                src={imageMain}
                alt="Dr. Runa Dhola"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top-Left Image */}
            <div className="absolute -left-3 top-5 w-[45%] h-[50%] rounded-xl overflow-hidden shadow-lg">
              <img
                src={imageTopLeft}
                alt="Doctor with Patient"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Bottom-Left Image */}
            <div className="absolute -left-3 bottom-0 w-[45%] h-[45%] rounded-xl overflow-hidden shadow-lg">
              <img
                src={imageBottomLeft}
                alt="Doctor Consulting"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="absolute left-[45%] bg-none top-[53%] transform -translate-x-1/2 -translate-y-1/2 z-20 w-28 h-28 rounded-full flex items-center justify-center rotate-45">
              <img src="/about_circle.png" alt="about" />
            </div>
          </div>

          {/* Mobile Image Layout */}
          <div className="md:hidden relative h-[500px] mb-8">
            {/* Main Doctor Image (Center) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[70%] h-[60%] rounded-2xl overflow-hidden shadow-2xl z-10">
              <img
                src={imageMain}
                alt="Dr. Runa Dhola"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top-Left Image */}
            <div className="absolute left-0 top-[45%] w-[45%] h-[30%] rounded-xl overflow-hidden shadow-lg">
              <img
                src={imageTopLeft}
                alt="Doctor with Patient"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Bottom-Right Image */}
            <div className="absolute right-0 top-[45%] w-[45%] h-[30%] rounded-xl overflow-hidden shadow-lg">
              <img
                src={imageBottomLeft}
                alt="Doctor Consulting"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 top-[40%] z-20 w-20 h-20 rounded-full flex items-center justify-center rotate-45">
              <img
                src="/about_circle.png"
                alt="about"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="md:col-span-6 md:pl-8" data-aos="fade-left">
            <p className="text-green-600 font-semibold text-base mb-2">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Dr. Runa Akhter Dhola
            </h2>

            <p className="mt-4 text-gray-600 mb-8 max-w-xl text-sm md:text-base">
              I'm Dr. Runa Akhter Dhola a [Specialization, e.g., Internal
              Medicine Specialist] with a passion for providing holistic,
              evidence-based medical care, passion for providing holistic,
              evidence-based medical care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="bg-blue-500 rounded-full p-1">
                    <Check className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0 text-white" />
                  </span>
                  <span className="text-gray-700 text-sm md:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Read More Link */}
            <a
              href="/"
              className="inline-flex items-center space-x-1 text-blue-600 font-semibold hover:text-blue-700 transition relative text-sm after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              <span>Read More</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default About;
