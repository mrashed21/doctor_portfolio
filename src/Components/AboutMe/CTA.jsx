import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "../Container/Container";

const DoctorImage = "/hero_doctor.png";

const CTA = () => {
  return (
    <section className="pt-20 -mb-5 bg-white">
      <Container>
        <div className="relative flex flex-col lg:flex-row items-center justify-between bg-green-600 rounded-2xl shadow-2xl px-6 sm:px-10 lg:px-14 py-10  lg:w-[70%] mx-auto">
          {/* Doctor Image */}
          <div className="relative flex-shrink-0 mb-6 lg:mb-0 lg:absolute lg:left-10 bottom-0 hidden lg:flex">
            <img
              src={DoctorImage}
              alt="Smiling Doctor"
              className="w-44 sm:w-52 md:w-60 lg:w-72 xl:w-80 object-contain"
            />
          </div>

          {/* Text Content */}
          <div
            className="lg:ml-auto text-center lg:text-left space-y-3 lg:space-y-4 max-w-xl"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <p className="text-white font-medium uppercase text-xs sm:text-sm tracking-widest">
              Get In Touch
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug">
              Provide The Best Quality Service for You!
            </h2>

            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-white font-semibold sm:font-bold text-sm sm:text-base group mt-4 hover:text-green-100 transition duration-300"
            >
              <span>Book An Appointment</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 -rotate-45" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
