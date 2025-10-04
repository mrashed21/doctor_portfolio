import { FaArrowRightLong } from "react-icons/fa6";
import Container from "../Container/Container";

const HeroSection = () => {
  return (
    <div className="relative bg-[url('/hero_banner.jpg')] bg-cover bg-center bg-no-repeat lg:pt-24 pb-12 overflow-hidden min-h-screen flex items-center">
      {/* Main Content Container */}
      <Container className="">
        <section className="flex flex-col lg:flex-row items-center justify-between w-full">
          {/* leftside */}
          <div className="w-full lg:w-auto pt-20 lg:pt-0">
            <h1 className="text-2xl lg:text-6xl font-bold text-white">
              Trusted & Care for Women's Health.
            </h1>
            <p className="text-white/80 mt-5 text-sm lg:text-base text-justify font-medium">
              Dr. Runa Akhter is a highly experienced and compassionate
              Specialization, e.g., Gynecologist Doctorsand Surgeons.
            </p>

            <div className="">
              <div className="border-2 rounded-md border-white shadow inline-flex items-center justify-center gap-2 px-4 py-2 mt-10">
                <div className="h-2 w-2 rounded-full bg-[#00EE7F]"></div>
                <h2 className="text-white/80 font-medium text-sm lg:text-base">
                  24 HOUR AVAILABLE
                </h2>
              </div>

              <div className="mt-5">
                <button className="rounded-md font-semibold text-sm lg:text-lg px-5 py-2.5 bg-[#FD9800] flex items-center justify-between gap-2.5">
                  BOOK AN APPOIUNTMENT
                  <FaArrowRightLong className="-rotate-45 text-white font-bold" />
                </button>
              </div>
            </div>
          </div>

          {/* image - Desktop positioned, mobile centered */}
          <div className="lg:absolute lg:bottom-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 relative mt-8 lg:mt-0">
            <img
              src="/hero_doctor.png"
              alt="doctor"
              className="w-[250px] lg:w-[320px] relative mx-auto"
            />

            <div className="absolute w-[200px] lg:w-[250px] h-20 lg:h-24 bg-white -bottom-2 -right-4 lg:bottom-10 lg:-right-32 px-3 lg:px-5 py-2 rounded-md">
              <div className="flex space-x-1">
                <span className="text-sm lg:text-base text-yellow-400">★</span>
                <span className="text-sm lg:text-base text-yellow-400">★</span>
                <span className="text-sm lg:text-base text-yellow-400">★</span>
                <span className="text-sm lg:text-base text-yellow-400">★</span>
                <span className="text-sm lg:text-base text-yellow-400">★</span>
              </div>

              <p className="text-base lg:text-lg font-semibold text-gray-700">
                Trusted by patients
              </p>

              <div className="flex items-center">
                <div className="flex -space-x-3">
                  <img
                    className="h-6 w-6 lg:h-7 lg:w-7 rounded-full border-2 border-white object-cover"
                    src="/Ellipse 59.png"
                    alt="Patient 1"
                  />
                  <img
                    className="h-6 w-6 lg:h-7 lg:w-7 rounded-full border-2 border-white object-cover"
                    src="/Ellipse 59.png"
                    alt="Patient 2"
                  />
                  <img
                    className="h-6 w-6 lg:h-7 lg:w-7 rounded-full border-2 border-white object-cover"
                    src="/Ellipse 59.png"
                    alt="Patient 3"
                  />
                  <img
                    className="h-6 w-6 lg:h-7 lg:w-7 rounded-full border-2 border-white object-cover"
                    src="/Ellipse 59.png"
                    alt="Patient 4"
                  />
                  <img
                    className="h-6 w-6 lg:h-7 lg:w-7 rounded-full border-2 border-white object-cover"
                    src="/Ellipse 59.png"
                    alt="Patient 5"
                  />
                  <img
                    className="h-6 w-6 lg:h-7 lg:w-7 rounded-full border-2 border-white object-cover"
                    src="/Ellipse 59.png"
                    alt="Patient 6"
                  />
                </div>

                <div className="ml-4 bg-green-500 text-white text-xs lg:text-sm font-bold h-6 w-6 lg:h-7 lg:w-7 rounded-full flex items-center justify-center shadow-lg transform translate-x-1">
                  +2k
                </div>
              </div>
            </div>
          </div>

          {/* right side - Desktop version */}
          <div className="hidden lg:flex flex-col justify-end translate-z-60">
            <div className="flex items-center gap-2 ml-40 mt-20">
              <div className="h-10 w-1 bg-white/90"></div>
              <p className="text-white/90 font-medium">
                Trusted Care for Women's Health" ensures compassionate, expert
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
                  <p className="text-white/90 font-medium">
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
                  <p className="text-white/90 font-medium">
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
                  <p className="text-white/90 font-medium">
                    Disease solved annually
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Stats Section */}
          <div className="lg:hidden w-full mt-12">
            {/* Mobile Description */}
            <div className="flex items-start gap-2 mb-6">
              <div className="h-10 w-1 bg-white/90 flex-shrink-0"></div>
              <p className="text-white/90 font-medium text-sm">
                Trusted Care for Women's Health" ensures compassionate, expert
                medical support tailored to every stage of a woman's life and
                wellness.
              </p>
            </div>

            {/* Mobile Stats Cards */}
            <div className="space-y-4">
              {/* card 1 */}
              <div className="flex gap-3 items-center">
                <div className="">
                  <img src="/hero_one.svg" alt="95%" className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-white font-bold text-xl">95%</h1>
                  <p className="text-white/90 font-medium text-sm">
                    Patients satisfied
                  </p>
                </div>
              </div>

              {/* card 2 */}
              <div className="flex gap-3 items-center">
                <div className="">
                  <img src="/hero_two.svg" alt="20+" className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-white font-bold text-xl">20+</h1>
                  <p className="text-white/90 font-medium text-sm">
                    Years of experience
                  </p>
                </div>
              </div>

              {/* card 3 */}
              <div className="flex gap-3 items-center">
                <div className="">
                  <img
                    src="/hero_three.svg"
                    alt="2000+"
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <h1 className="text-white font-bold text-xl">2000+</h1>
                  <p className="text-white/90 font-medium text-sm">
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
