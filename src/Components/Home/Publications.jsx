import Container from "../Container/Container";
// --- Swiper Imports ---
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
    image:
      "https://via.placeholder.com/300x200/F0F4F8/333333?text=PUBLISHED+PAPER",
    link: "/",
  },
  {
    id: 2,
    year: "2023",
    title: "Understanding Uterine Fibroids",
    journal: "Clinical Gynecology Review",
    image:
      "https://via.placeholder.com/300x200/E8F0F5/555555?text=STACK+OF+PAPERS",
    link: "/",
  },
  {
    id: 3,
    year: "2023",
    title: "Cervical Cancer Screening",
    journal: "Research in Women's Health",
    image:
      "https://via.placeholder.com/300x200/D0DDE7/777777?text=RESEARCH+PAPER",
    link: "/",
  },
  {
    id: 4,
    year: "2024",
    title: "Minimally Invasive Surgery",
    journal: "Laparoscopic Advances",
    image:
      "https://via.placeholder.com/300x200/BCC3CB/999999?text=SURGERY+STUDY",
    link: "/",
  },
  {
    id: 5,
    year: "2024",
    title: "Post-Menopausal Care Study",
    journal: "Journal of Senior Medicine",
    image:
      "https://via.placeholder.com/300x200/A0ACB9/BBBBBB?text=WOMEN+HEALTH",
    link: "/",
  },
  // Added two extra to clearly demonstrate the slide effect
  {
    id: 6,
    year: "2024",
    title: "Managing High-Risk Pregnancy",
    journal: "Obstetrics Today",
    image:
      "https://via.placeholder.com/300x200/90A2B0/DDDDDD?text=PREGNANCY+STUDY",
    link: "/",
  },
];

const DownloadIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const Publications = () => {
  // Check if there are more than 3 publications to enable Swiper on desktop
  const shouldEnableSwiper = publications.length > 3;

  return (
    <section id="publications" className="py-20 bg-white">
      <Container className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-center">
        {/* LEFT COLUMN: Section Title and Description */}
        <div className="lg:col-span-1 space-y-4 pr-6">
          <p className="text-green-600 font-semibold text-sm tracking-wider">
            Research and Publications
          </p>
          <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
            Discover My Work in Medical Science
          </h2>
          <p className="text-gray-500 mt-2 text-base">
            Explore my research, publications, and scientific studies that
            contribute to advancements in women's health and medical innovation.
          </p>
        </div>

        {/* RIGHT COLUMNS: Publication Cards Container */}
        <div className="lg:col-span-3">
          {/* Use grid layout if there are 3 or fewer items, or if the screen is large and you want a fixed 3-column view */}
          {!shouldEnableSwiper ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {publications.map((pub) => (
                <PublicationCard key={pub.id} pub={pub} />
              ))}
            </div>
          ) : (
            // SWIPER SLIDER for dynamic data / mobile view
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              loop={false}
              breakpoints={{
                // 640px and above: 2 slides
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // 1024px and above: 3 slides (matching the original design grid)
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="pb-12" // Add padding for pagination dots
            >
              {publications.map((pub) => (
                <SwiperSlide key={pub.id} className="h-auto">
                  <PublicationCard pub={pub} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </Container>
    </section>
  );
};

// Extracted the card into a separate component for cleanliness
const PublicationCard = ({ pub }) => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl h-full flex flex-col">
    {/* Publication Image */}
    <div className="h-40 overflow-hidden">
      <img
        src={pub.image}
        alt={pub.title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Publication Details */}
    <div className="p-5 flex-grow flex flex-col justify-between">
      <div>
        <p className="text-sm text-gray-400 mb-2">{pub.year}</p>
        <h4 className="font-semibold text-lg text-gray-800 mb-2 leading-snug">
          {pub.title}
        </h4>
        <div className="flex items-center text-xs text-gray-500 mb-5">
          <DownloadIcon className="w-4 h-4 mr-1 text-gray-400" />
          <span>{pub.journal}</span>
        </div>
      </div>

      {/* View Paper Button */}
      <a
        href={pub.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto block w-full text-center bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
      >
        View Paper
      </a>
    </div>
  </div>
);

export default Publications;
