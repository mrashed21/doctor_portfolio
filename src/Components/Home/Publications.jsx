import Link from "next/link";
import Container from "../Container/Container";
// --- Swiper Imports ---
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const publications = [
  {
    id: 1,
    year: "2023",
    title: "Hormonal Therapy & Fertility",
    journal: "Journal of Reproductive Health",
    image: "/research_one.png",
    link: "/",
  },
  {
    id: 2,
    year: "2023",
    title: "Understanding Uterine Fibroids",
    journal: "Clinical Gynecology Review",
    image: "/research_two.png",
    link: "/",
  },
  {
    id: 3,
    year: "2023",
    title: "Cervical Cancer Screening",
    journal: "Research in Women's Health",
    image: "/research_three.png",
    link: "/",
  },
  {
    id: 4,
    year: "2024",
    title: "Minimally Invasive Surgery",
    journal: "Laparoscopic Advances",
    image: "/research_one.png",
    link: "/",
  },
  {
    id: 5,
    year: "2024",
    title: "Post-Menopausal Care Study",
    journal: "Journal of Senior Medicine",
    image: "/research_two.png",
    link: "/",
  },

  {
    id: 6,
    year: "2024",
    title: "Managing High-Risk Pregnancy",
    journal: "Obstetrics Today",
    image: "/research_three.png",
    link: "/",
  },
];

const Publications = () => {
  const shouldEnableSwiper = publications.length > 3;

  return (
    <section id="publications" className="py-20 bg-white">
      <Container className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-center px-5">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          className="lg:col-span-1 space-y-4 pr-6"
        >
          <p className="text-green-600 font-semibold text-sm tracking-wider">
            Research and Publications
          </p>
          <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-800 leading-tight">
            Discover My Work in Medical Science
          </h2>
          <p className="text-gray-500 mt-2 text-base">
            Explore my research, publications, and scientific studies that
            contribute to advancements in women's health and medical innovation.
          </p>
        </div>

        <div className="lg:col-span-3">
          {!shouldEnableSwiper ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {publications.map((pub) => (
                <PublicationCard key={pub.id} pub={pub} />
              ))}
            </div>
          ) : (
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              loop={false}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },

                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              className="pb-12"
              onSlideChange={() => AOS.refresh()}
            >
              {publications.map((pub, i) => (
                <SwiperSlide key={pub.id} className="h-auto">
                  <PublicationCard pub={pub} i={i} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </Container>
    </section>
  );
};

const PublicationCard = ({ pub, i }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={i * 200}
    className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl h-full flex flex-col w-full"
  >
    <div className="h-40 overflow-hidden">
      <img
        src={pub.image}
        alt={pub.title}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="p-5 flex-grow flex flex-col justify-between">
      <div>
        <p className="text-sm text-gray-400 mb-2">{pub.year}</p>
        <h4 className="font-semibold text-lg text-gray-800 mb-2 leading-snug">
          {pub.title}
        </h4>
        <div className="flex items-center text-xs gap-2 text-gray-500 mb-5">
          <img src="/journal.svg" alt="icon" className="w-4" />
          <span>{pub.journal}</span>
        </div>
      </div>

      <Link
        href={pub.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto block w-full text-center bg-green-600 text-white py-1 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
      >
        View Paper
      </Link>
    </div>

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
  </div>
);

export default Publications;
