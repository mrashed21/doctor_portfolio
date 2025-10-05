"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";
import Container from "../Container/Container";
import HeroComponents from "../Shared/Hero/HeroComponents";
import BlogPostDetail from "./BlogPostDetail";
const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);
  return (
    <section>
      <HeroComponents
        title="Blog"
        subtitle="I'm Dr. Runa Akhter Dhola a [Specialization, e.g., Internal Medicine Specialist] with a passion for providing holistic, evidence-based medical care."
        breadcrumbPath=""
        backgroundImage=""
      />
      <BlogPostDetail />
      {/* <CommentSection /> */}

      {/* TOP BANNER: Action Callout */}
      <Container>
        <div className="border-t border-b border-dashed border-gray-300 py-6 mb-16 px-4 flex flex-col md:flex-row justify-between items-center bg-white shadow-sm my-10">
          <div className="text-center md:text-left">
            <h4 className=" lg:text-xl font-bold text-gray-800 mb-1">
              Do You Have Health Problems
            </h4>
            <p className="text-gray-600 text-sm">
              Need Immediate Medical Attention? Get Emergency Help From Our
              Specialist Doctor Anytime
            </p>
          </div>
          <Link
            href="/"
            className="mt-4 md:mt-0 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-md text-xs lg:text-base"
          >
            I NEED HELP
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
