"use client";
import { motion } from "framer-motion";
import { ArrowRight, Award, Clock, Dna, HeartPulse, Star } from "lucide-react";
import Container from "../Container/Container";
import StatBlock from "./StatBlock";

const HeroSection = () => {
  const stats = [
    { icon: HeartPulse, value: "95%", label: "Patients satisfied" },
    { icon: Award, value: "20+", label: "Years of experience" },
    { icon: Dna, value: "2000+", label: "Disease solved annually" },
  ];

  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, type: "spring", stiffness: 50 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative pt-24 pb-12 overflow-hidden min-h-screen flex items-center bg-green-700">
      <div className="absolute inset-0 bg-green-800 opacity-90"></div>
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-green-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="hidden md:block absolute bottom-[-150px] left-[-50px] w-[600px] h-[600px] border-[50px] border-green-500/20 rounded-full rotate-45"></div>

      {/* Main Content Container */}
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Content Area (Title, Description, CTAs) */}
          <div className="lg:col-span-6 text-white pt-10">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              Trusted & Care for Women's Health.
            </motion.h1>

            <motion.p
              className="text-green-100 max-w-lg mb-8 text-lg"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              Dr. Runa Akhter is a highly experienced and compassionate
              specialization (e.g., Gynecologist Doctors and Surgeons).
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              <button className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-orange-600 transition duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center">
                <span>BOOK AN APPOINTMENT</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex items-center text-sm font-medium border border-green-300 text-green-300 py-2 px-4 rounded-full">
                <Clock className="w-4 h-4 mr-2" />
                24 HOUR AVAILABLE
              </div>
            </motion.div>
          </div>

          {/* Right Content Area (Image, Stats, Secondary Text) */}
          <div className="lg:col-span-6 flex flex-col items-center relative">
            {/* Doctor Image */}
            <motion.div
              className="relative w-full max-w-md lg:max-w-none"
              variants={imageContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Using a placeholder image URL for the doctor */}
              <img
                src="https://placehold.co/800x800/22c55e/ffffff?text=Dr.+Runa+Akhter"
                alt="Trusted Doctor"
                className="w-full h-auto object-cover rounded-xl shadow-2xl relative z-10"
                style={{ maxHeight: "70vh" }}
              />
              {/* Star Rating Overlay */}
              <div className="absolute bottom-10 left-[-20px] md:bottom-20 md:left-0 bg-white p-3 rounded-xl shadow-xl transform rotate-[-5deg] w-40 text-center">
                <div className="flex justify-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-gray-700 mt-1">
                  Trusted by patients
                </p>
              </div>
            </motion.div>

            {/* Statistics and Secondary Text */}
            <div className="mt-10 lg:mt-0 lg:absolute lg:top-1/4 lg:right-[-20%] xl:right-[-10%] w-full lg:w-96 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4 w-full">
                {stats.map((stat, index) => (
                  <StatBlock
                    key={index}
                    icon={stat.icon}
                    value={stat.value}
                    label={stat.label}
                    delay={0.8 + index * 0.2}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
