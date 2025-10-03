import { ArrowUpRight, Calendar } from "lucide-react"; // Using Lucide icons for Calendar and Arrow
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../Container/Container";

import "swiper/css";
import "swiper/css/pagination";

const posts = [
  {
    title: "Obstetrics & Gynecology Blog",
    date: "July 08 2025",
    desc: "Creekside Center for Women is a renowned establishment providing gynecology, obstetrics, and midwife services.",
    img: "https://via.placeholder.com/400x500/F0F4F8/333333?text=Doctor+Consulting",
  },
  {
    title: "Pregnancy Health Tips",
    date: "July 08 2025",
    desc: "Creekside Center for Women is a renowned establishment providing gynecology, obstetrics, and midwife services.",
    img: "https://via.placeholder.com/400x500/D0DDE7/555555?text=Nurse+Assisting",
  },
  {
    title: "Hormonal Therapy Insights",
    date: "July 08 2025",
    desc: "Creekside Center for Women is a renowned establishment providing gynecology, obstetrics, and midwife services.",
    img: "https://via.placeholder.com/400x500/B0C4DE/777777?text=Doctor+with+Patient",
  },
  // Add more posts here to see the sliding effect
  {
    title: "Understanding Women's Health",
    date: "August 15 2025",
    desc: "Creekside Center for Women is a renowned establishment providing gynecology, obstetrics, and midwife services.",
    img: "https://via.placeholder.com/400x500/A2B5CD/999999?text=Healthcare+Team",
  },
];

// Extracted the card content for clean Swiper mapping
const BlogCard = ({ post }) => (
  <div className="rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative h-full">
    {/* Blog Image */}
    <img
      src={post.img}
      alt={post.title}
      className="w-full h-[300px] object-cover"
    />

    {/* White Content Box (Overlays the bottom of the image) */}
    <div className="absolute left-0 right-0 bottom-0 p-5 pt-10 bg-white rounded-t-3xl shadow-2xl">
      {/* Date Tag */}
      <div className="absolute -top-4 left-5 bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-600 shadow-md flex items-center space-x-1">
        <Calendar className="w-3 h-3 text-green-600" />
        <span>{post.date}</span>
      </div>

      {/* Title & Description */}
      <h4 className="font-bold text-xl text-gray-800 mb-2">{post.title}</h4>
      <p className="text-sm text-gray-500 mb-4">{post.desc}</p>

      {/* Read More Link/Button */}
      <a
        href="#"
        className="inline-flex items-center space-x-1 text-green-600 font-semibold text-sm border-t border-green-200 pt-3"
      >
        <span>Read More</span>
        <ArrowUpRight className="w-4 h-4" />
      </a>

      {/* Green Bottom Underline (Visual element from the image) */}
      <div className="absolute left-0 bottom-0 w-full h-1 bg-green-600"></div>
    </div>

    {/* This spacing div ensures the card content box doesn't overlap the Swiper pagination dots */}
    <div className="h-[200px] lg:h-[220px]"></div>
  </div>
);

const Blog = () => {
  return (
    <section id="blog" className="py-16 bg-white">
      <Container>
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Best Helpful Blog
        </h3>

        {/* SWIPER CONTAINER */}
        <div className="mt-8">
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
              // 1024px and above: 3 slides
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-12" // Add padding for the pagination dots
          >
            {posts.map((p, i) => (
              <SwiperSlide key={i} className="h-auto">
                <BlogCard post={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
