import { ArrowRight } from "lucide-react";
import Container from "../Container/Container";

// Placeholder image for the doctor
const DoctorImage =
  "https://via.placeholder.com/300x400/FFFFFF/555555?text=Smiling+Doctor+Arms+Crossed";

const CTA = () => {
  return (
    <section id="cta-appointment" className="pt-20 -mb-5 bg-white">
      <Container>
        {/* The main card container */}
        <div
          className="relative flex justify-center items-center h-[350px] lg:h-[300px]"
          data-aos="zoom-in"
        >
          {/* Green Background Block */}
          <div className="absolute inset-0 bg-green-600 rounded-2xl shadow-2xl"></div>

          {/* Content Wrapper */}
          <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12">
            {/* Doctor Image (Overlaps the left side) */}
            <div className="absolute left-0 bottom-0 h-full w-auto flex items-end transform -translate-x-1/2 md:translate-x-0 lg:static lg:h-[calc(100%+80px)] lg:w-[35%]">
              <img
                src={DoctorImage}
                alt="Smiling Doctor"
                className="h-[calc(100%+50px)] w-auto object-cover rounded-b-2xl lg:rounded-b-none lg:rounded-l-2xl shadow-xl"
              />
            </div>

            {/* Text and CTA Buttons */}
            <div className="lg:ml-auto lg:w-[65%] text-center lg:text-left space-y-4 pt-44 lg:pt-0 pl-0 lg:pl-16">
              <p className="text-white font-medium uppercase text-sm tracking-widest">
                Get In Touch
              </p>

              <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Provide The Best Quality Service for You!
              </h2>

              {/* Book Appointment Button */}
              <a
                href="#"
                className="inline-flex items-center space-x-2 text-white font-bold text-base group mt-6 transition duration-300 hover:text-green-200"
              >
                <span>Book An Appointment</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
