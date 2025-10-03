"use client";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../Container/Container";

const testimonials = [
  {
    name: "Jenny Akhter",
    clinic: "Happy Clinic",
    text: "Non-cancerous tumors that grow in the uterus, often causing pain and heavy bleeding. Non-cancerous tumors that grow in the uterus, often causing pain and heavy bleeding.",
    avatar: "/about_three.png",
  },
  {
    name: "Rima Akhter",
    clinic: "Happy Clinic",
    text: "Non-cancerous tumors that grow in the uterus, often causing pain and heavy bleeding. Non-cancerous tumors that grow in the uterus, often causing pain and heavy bleeding.",
    avatar: "/about_three.png",
  },
  {
    name: "Tania Akhter",
    clinic: "Happy Clinic",
    text: "Non-cancerous tumors that grow in the uterus, often causing pain and heavy bleeding. Non-cancerous tumors that grow in the uterus, often causing pain and heavy bleeding.",
    avatar: "/about_three.png",
  },

  {
    name: "Shila Ghosh",
    clinic: "Best Care",
    text: "Outstanding service and personalized attention. Highly recommend Dr. Dhola for any women's health issue.",
    avatar: "/about_three.png",
  },
];

// Reusable Star Rating Component
const StarRating = () => (
  <div className="flex space-x-0.5 text-yellow-400">
    {"★"
      .repeat(5)
      .split("")
      .map((star, i) => (
        <span key={i} className="text-lg leading-none">
          {star}
        </span>
      ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 bg-white relative">
      {/* Background Pattern Mockup (DNA/Hexagon) */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "url(/mock-hex-pattern.svg)" }} // Replace with your actual pattern
      ></div>

      <Container className="relative z-10">
        {/* TOP BANNER: Action Callout */}
        <div className="border-t border-b border-dashed border-gray-300 py-6 mb-16 px-4 flex flex-col md:flex-row justify-between items-center bg-white shadow-sm">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-gray-800 mb-1">
              Do You Have Health Problems
            </h4>
            <p className="text-gray-600 text-sm">
              Need Immediate Medical Attention? Get Emergency Help From Our
              Specialist Doctor Anytime
            </p>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-md"
          >
            I NEED HELP
          </a>
        </div>

        {/* Testimonials Title */}
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          What Patients are Saying!
        </h3>
        {/* SWIPER COMPONENT */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="pb-16"
        >
          {testimonials.map((t, i) => (
            // 1. SwiperSlide takes the height of the tallest slide
            <SwiperSlide key={i} className="h-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                // 2. Card itself must stretch to full height
                // 3. Use flex-col and justify-between to push the footer to the bottom
                className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col"
              >
                {/* Content Wrapper (everything above the footer) */}
                <div className="flex-grow">
                  {/* Quote Icon */}
                  <div className="text-4xl text-green-300 font-serif opacity-70 mb-4">
                    ❝
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-600 text-base mb-6">{t.text}</p>
                </div>

                {/* Patient Info (Footer - fixed position at the bottom) */}
                <div className="mt-auto">
                  {" "}
                  {/* mt-auto helps push it down */}
                  <StarRating />
                  <div className="flex items-center space-x-3 mt-2">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <p className="text-base font-semibold text-gray-800">
                        {t.name}
                      </p>
                      <p className="text-sm text-gray-500">{t.clinic}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* Note: Swiper automatically handles the pagination dots in the custom-styled `swiper-pagination` */}
    </section>
  );
};

export default Testimonials;
