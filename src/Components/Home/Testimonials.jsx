"use client";
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
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-no-repeat bg-right"
        style={{ backgroundImage: "url(/testimonial_bg.svg)" }}
      ></div>
      <Container className="relative z-10">
        {/* Banner */}
        <div
          data-aos="zoom-in-down"
          data-aos-delay={100}
          className="border-t border-b border-dashed border-gray-300 py-6 mb-16 px-4 flex flex-col md:flex-row justify-between items-center bg-white shadow-sm"
        >
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

        {/* Title */}
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          What Patients are Saying!
        </h3>

        {/* Swiper */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="pb-16"
          style={{ height: "auto" }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="!h-auto flex">
              <div

                className="bg-white p-6 rounded-2xl shadow border border-gray-100 flex flex-col w-full z-30"
                style={{ height: "100%" }}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="flex-grow">
                  <div className="text-4xl text-green-300 font-serif opacity-70 mb-4">
                    ❝
                  </div>
                  <p className="text-gray-600 text-base mb-6">{t.text}</p>
                </div>
                <div className="mt-auto">
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* Pagination Style */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 20px !important;
          margin-top: 20px;
          text-align: center;
          position: relative !important;
        }
        .swiper-pagination-bullet {
          margin: 0 6px !important;
          width: 10px;
          height: 10px;
          background: #00984a !important;
          opacity: 0.5; /* inactive dots at 50% opacity */
          transition: transform 0.3s, opacity 0.3s;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important; /* active dot fully opaque */
          transform: scale(1.2);
          background: #00984a !important;
        }
        .swiper-slide {
          height: auto !important;
          display: flex !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
