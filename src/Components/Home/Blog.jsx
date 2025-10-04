import { ArrowUpRight, Calendar } from "lucide-react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../Container/Container";

import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";

const posts = [
  {
    title: "Obstetrics & Gynecology Blog",
    date: "July 08 2025",
    desc: "Creekside Center for Women is a renowned establishment providing gynecology, obstetrics, and midwife services.",
    img: "/blog_one.png",
  },
  {
    title: "Pregnancy Health Tips",
    date: "July 08 2025",
    desc: "Creekside Center for Women is a renowned establishment providing gynecology, obstetrics, and midwife services.",
    img: "/blog_two.png",
  },
  {
    title: "Hormonal Therapy Insights",
    date: "July 08 2025",
    desc: "Creekside Center for Women is a renowned establishment providing gynecology, obstetrics, and midwife services.",
    img: "/blog_three.png",
  },

  {
    title: "Understanding Women's Health",
    date: "August 15 2025",
    desc: "Creekside Center for Women is a renowned establishment providing gynecology, obstetrics, and midwife services.",
    img: "/blog_one.png",
  },
];

const BlogCard = ({ post, i }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={i * 200}
    className="rounded-2xl overflow-hidden relative group"
  >
    <img
      src={post.img}
      alt={post.title}
      className="w-full h-[450px] object-cover"
    />

    <div className="relative -mt-20 mx-10 bg-white border-b-4 border-green-600 rounded-2xl shadow-md p-5">
      <div className="absolute top-2 left-5  px-3 py-1  text-xs font-medium text-gray-600  flex items-center space-x-1">
        <Calendar className="w-3 h-3 text-green-600" />
        <span>{post.date}</span>
      </div>

      <h4 className="font-bold text-lg text-gray-800 mt-5 mb-2 line-clamp-2">
        {post.title}
      </h4>

      <p className="text-sm text-gray-500 mb-4 line-clamp-3">{post.desc}</p>

      {/* Read More */}
      <Link
        href="/"
        className="inline-flex items-center space-x-1relative text-sm text-blue-600 hover:text-blue-700 font-medium transition 
             after:content-[''] after:absolute after:left-0 after:-bottom-0.5 
             after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 
             hover:after:w-full"
      >
        <span>Read More</span>
        <ArrowUpRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
);

const Blog = () => {
  return (
    <section id="blog" className="lg:py-16 bg-white">
      <Container>
        <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-10">
          Best Helpful Blog
        </h3>

        <div className="mt-8">
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
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-12"
          >
            {posts.map((p, i) => (
              <SwiperSlide key={i} className="h-auto">
                <BlogCard post={p} i={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
