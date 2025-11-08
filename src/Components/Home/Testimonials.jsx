"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../Container/Container";

const testimonials = [
  {
    name: "মাহমুদা আক্তার",
    clinic: "ঢাকা",
    text: "ডা. রুনা আখতার দোলা আপা আমার হাই-রিস্ক প্রেগনেন্সির সময় যেভাবে যত্ন নিয়েছিলেন, তা সত্যিই প্রশংসনীয়। আমি আর আমার বেবি দুজনেই এখন সুস্থ আছি। আল্লাহ তাকে ভালো রাখুন।",
    avatar: "/about_three.png",
  },
  {
    name: "Sadia Rahman",
    clinic: "Green Life Hospital, Dhaka",
    text: "Dr. Runa Akhter Dola is one of the most caring doctors I’ve ever met. She explains everything clearly and gives you confidence throughout your treatment.",
    avatar: "/about_three.png",
  },
  {
    name: "নুসরাত জাহান",
    clinic: "ময়মনসিংহ",
    text: "প্রথম সন্তান জন্মের সময় ভয় পাচ্ছিলাম, কিন্তু দোলা আপার সহানুভূতিশীল আচরণ আর দক্ষ হাতে সব কিছু খুব সুন্দরভাবে হয়েছে। আন্তরিক ধন্যবাদ।",
    avatar: "/about_three.png",
  },
  {
    name: "Farzana Ahmed",
    clinic: "United Hospital, Dhaka",
    text: "Her expertise in fetal medicine is outstanding. She handled my complicated pregnancy with utmost care and professionalism. Highly recommended!",
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
    <section className="lg:py-20 bg-white relative">
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-no-repeat bg-right"
        style={{ backgroundImage: "url(/testimonial_bg.svg)" }}
      ></div>

      <Container className="relative z-10">
        <div
          data-aos="zoom-in-down"
          data-aos-delay={100}
          className="border-t border-b border-dashed border-gray-300 py-6 mb-16 px-4 flex flex-col md:flex-row justify-between items-center bg-white shadow-sm"
        >
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-gray-800 mb-1">
              Do You Have Health Concerns?
            </h4>
            <p className="text-gray-600 text-sm">
              Need Immediate Medical Attention? Get Expert Help From Dr. Runa
              Akhter Dola — Specialist in High-Risk Pregnancy & Feto-Maternal
              Medicine.
            </p>
          </div>
          <h2 className="mt-4 md:mt-0 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-md text-sm cursor-pointer">
            I NEED HELP
          </h2>
        </div>

        <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-10">
          What Patients Are Saying!
          <br />
        </h3>

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
                  <p className="text-gray-700 text-base mb-6 leading-relaxed font-medium">
                    {t.text}
                  </p>
                </div>
                <div className="mt-auto">
                  <StarRating />
                  <div className="flex items-center space-x-3 mt-3">
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

      <style jsx global>{`
        .swiper-pagination {
          bottom: 0px !important;
          margin-top: 25px;
          text-align: center;
          position: relative !important;
        }
        .swiper-pagination-bullet {
          margin: 0 6px !important;
          width: 10px;
          height: 10px;
          background: #00984a !important;
          opacity: 0.5;
          transition: transform 0.3s, opacity 0.3s;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
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
