"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";

const HeroComponents = ({
  title,
  subtitle,
  breadcrumbPath,
  backgroundImage,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <section
      className="relative flex items-center justify-center text-center py-20 md:py-28 h-[80vh]"
      style={{
        backgroundImage: `url(${backgroundImage || "/hero_bg.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-700/70"></div>

      <div className="relative z-10 max-w-3xl px-6 mt-10" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-white text-sm md:text-base leading-relaxed mb-6">
          {subtitle}
        </p>

        {/* Breadcrumb */}
        <div className="mx-auto flex items-center justify-center space-x-2 text-white text-sm rounded-full bg-black/70 px-5 py-2 w-max">
          <Link href="/" className="hover:underline">
            HOME
          </Link>
          <span>—</span>
          <span>{breadcrumbPath || title}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroComponents;
