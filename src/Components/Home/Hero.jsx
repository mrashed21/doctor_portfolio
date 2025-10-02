"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import Container from "../Container/Container";

const HeroSection = () => {
  return (
    <div className="relative bg-[url('/hero_banner.jpg')] bg-cover bg-center bg-no-repeat pt-24 pb-12 overflow-hidden min-h-screen flex items-center">
      {/* Main Content Container */}
      <Container className=" ">
        <section className="flex items-center justify-between w-full">
          {/* leftside */}
          <div className="">
            <h1 className="text-6xl font-bold text-white">
              Trusted & Care for Women’s Health.
            </h1>
            <p className="text-white/80 mt-5 font-medium">
              Dr. Runa Akhter is a highly experienced and compassionate
              Specialization, e.g., Gynecologist Doctorsand Surgeons.
            </p>

            <div className="border-2 rounded-md border-white shadow inline-flex items-center justify-center gap-2 px-4 py-2 mt-10 ">
              {" "}
              <div className="h-2 w-2 rounded-full bg-[#00EE7F] "></div>{" "}
              <h2 className="text-white/80 font-medium">24 HOUR AVAILABLE</h2>
            </div>
            <div className="mt-5">
              <button className=" rounded-md font-semibold text-lg px-5 py-2.5 bg-[#FD9800] flex items-center justify-between gap-2.5">
                BOOK AN APPOIUNTMENT{" "}
                <FaArrowRightLong className="-rotate-45 text-white font-bold" />
              </button>
            </div>
          </div>

          {/* image */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <img
              src="/hero_doctor.png"
              alt="doctor"
              className="w-[320px] relative"
            />

            <div className=" absolute w-[250px] h-24 bg-white bottom-10 -right-32 px-5 py-2 rounded-md">
              <div class="flex space-x-1">
                <span class="text-base text-yellow-400">★</span>
                <span class="text-base text-yellow-400">★</span>
                <span class="text-base text-yellow-400">★</span>
                <span class="text-base text-yellow-400">★</span>
                <span class="text-base text-yellow-400">★</span>
              </div>

              <p class="text-lg font-semibold text-gray-700">
                Trusted by patients
              </p>

              <div class="flex items-center">
                <div class="flex -space-x-3">
                  <img
                    class="h-7 w-7 rounded-full border-2 border-white object-cover"
                    src="/Ellipse 59.png"
                    alt="Patient 1"
                  />
                  <img
                    class="h-7 w-7 rounded-full border-2 border-white object-cover"
                    src="/Ellipse 59.png"
                    alt="Patient 2"
                  />
                  <img
                    class="h-7 w-7 rounded-full border-2 border-white object-cover"
                    src="/Ellipse 59.png"
                    alt="Patient 3"
                  />
                  <img
                    class="h-7 w-7 rounded-full border-2 border-white object-cover"
                    src="/Ellipse 59.png"
                    alt="Patient 4"
                  />
                  <img
                    class="h-7 w-7 rounded-full border-2 border-white object-cover"
                    src="/Ellipse 59.png"
                    alt="Patient 5"
                  />
                  <img
                    class="h-7 w-7 rounded-full border-2 border-white object-cover"
                    src="/Ellipse 59.png"
                    alt="Patient 6"
                  />
                </div>

                <div class="ml-4 bg-green-500 text-white text-sm font-bold h-7 w-7 rounded-full flex items-center justify-center shadow-lg transform translate-x-1">
                  +2k
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flex flex-col justify-end translate-z-60">
            <div className="flex items-center gap-2 ml-40 mt-20">
              <div className="h-10 w-1 bg-white/90"></div>
              <p className="text-white/90 font-medium ">
                Trusted Care for Women’s Health" ensures compassionate, expert
                medical support tailored to every stage of a woman's life and
                wellness.
              </p>
            </div>
            <div className="flex flex-col">
              {/* card 1 */}
              <div className="flex gap-2 ml-64 mt-20">
                <div className="">
                  <img src="/hero_one.svg" alt="95%" />
                </div>
                <div className="">
                  <h1 className="text-white font-bold text-xl">95%</h1>

                  <p className="text-white/90 font-medium ">
                    Patients satisfied
                  </p>
                </div>
              </div>
              {/* card 2 */}
              <div className="flex gap-2 ml-72 mt-10">
                <div className="">
                  <img src="/hero_two.svg" alt="95%" />
                </div>
                <div className="">
                  <h1 className="text-white font-bold text-xl">20+</h1>

                  <p className="text-white/90 font-medium ">
                    Years of experience
                  </p>
                </div>
              </div>
              {/* card 3 */}
              <div className="flex gap-2 ml-96 mt-10">
                <div className="">
                  <img src="/hero_three.svg" alt="95%" />
                </div>
                <div className="">
                  <h1 className="text-white font-bold text-xl">2000+</h1>

                  <p className="text-white/90 font-medium ">
                    Disease solved annually
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default HeroSection;
