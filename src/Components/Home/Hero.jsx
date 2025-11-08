import { FaArrowRightLong } from "react-icons/fa6";
import Container from "../Container/Container";

const HeroSection = () => {
  return (
    <div className="relative bg-[url('/hero_banner.jpg')] bg-cover bg-center bg-no-repeat lg:pt-24 pb-12 overflow-hidden min-h-screen flex items-center">
      <Container className="px-5">
        <section className="flex flex-col lg:flex-row items-center justify-between w-full">
          <div className="w-full lg:w-auto pt-20 lg:pt-0">
            <h1 className="text-2xl lg:text-6xl mt-10 lg:mt-0 font-bold text-white text-center lg:text-start">
              Expert in High-Risk Pregnancy & Fetal Medicine
            </h1>

            <p className="text-white/80 mt-2 lg:mt-5 text-sm lg:text-base font-medium text-center lg:text-start lg:max-w-[80%] ">
              Dr. Runa Akhter Dola is a government specialist doctor with over
              18 years of experience, dedicated to women’s health, high-risk
              pregnancy, and feto-maternal medicine in Bangladesh.
            </p>

            <div className="flex flex-col items-center lg:items-start">
              <div className="border-2 rounded-md border-white shadow inline-flex items-center justify-center gap-2 px-4 py-2 mt-10">
                <div className="h-2 w-2 rounded-full bg-[#00EE7F]"></div>
                <h2 className="text-white/80 font-medium text-sm lg:text-base">
                  24 HOUR AVAILABLE
                </h2>
              </div>

              <div className="mt-5">
                <button className="rounded-md font-semibold text-sm lg:text-lg px-5 py-2.5 bg-[#FD9800] flex items-center justify-between gap-2.5">
                  BOOK AN APPOINTMENT
                  <FaArrowRightLong className="-rotate-45 text-white font-bold" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:absolute lg:bottom-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 relative mt-8 lg:mt-0">
            <img
              src="/hero_doctor.png"
              alt="Dr. Runa Akhter Dola"
              className="w-[320px] lg:w-[420px] relative mx-auto"
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
                  {[...Array(6)].map((_, i) => (
                    <img
                      key={i}
                      className="h-6 w-6 lg:h-7 lg:w-7 rounded-full border-2 border-white object-cover"
                      src="/Ellipse 59.png"
                      alt={`Patient ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="ml-4 bg-green-500 text-white text-xs lg:text-sm font-bold h-6 w-6 lg:h-7 lg:w-7 rounded-full flex items-center justify-center shadow-lg transform translate-x-1">
                  +2k
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col justify-end translate-z-60">
            <div className="flex items-center gap-2 ml-40 mt-20">
              <div className="h-10 w-1 bg-white/90"></div>
              <p className="text-white/90 font-medium">
                Providing compassionate, evidence-based care for women’s health,
                high-risk pregnancies, and fetal medicine for over a decade.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-2 ml-64 mt-20">
                <img src="/hero_one.svg" alt="95%" />
                <div>
                  <h1 className="text-white font-bold text-xl">95%</h1>
                  <p className="text-white/90 font-medium">
                    Patients satisfied
                  </p>
                </div>
              </div>

              <div className="flex gap-2 ml-72 mt-10">
                <img src="/hero_two.svg" alt="20+" />
                <div>
                  <h1 className="text-white font-bold text-xl">18+</h1>
                  <p className="text-white/90 font-medium">
                    Years of experience
                  </p>
                </div>
              </div>

              <div className="flex gap-2 ml-96 mt-10">
                <img src="/hero_three.svg" alt="2000+" />
                <div>
                  <h1 className="text-white font-bold text-xl">2000+</h1>
                  <p className="text-white/90 font-medium">
                    Successful cases annually
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden w-full mt-12">
            <div className="flex items-start gap-2 mb-6">
              <div className="h-10 w-1 bg-white/90 flex-shrink-0"></div>
              <p className="text-white/90 font-medium text-sm">
                Providing compassionate, evidence-based care for women’s health,
                high-risk pregnancies, and fetal medicine for over a decade.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3 items-center">
                <img src="/hero_one.svg" alt="95%" className="w-10 h-10" />
                <div>
                  <h1 className="text-white font-bold text-xl">95%</h1>
                  <p className="text-white/90 font-medium text-sm">
                    Patients satisfied
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <img src="/hero_two.svg" alt="18+" className="w-10 h-10" />
                <div>
                  <h1 className="text-white font-bold text-xl">18+</h1>
                  <p className="text-white/90 font-medium text-sm">
                    Years of experience
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <img src="/hero_three.svg" alt="2000+" className="w-10 h-10" />
                <div>
                  <h1 className="text-white font-bold text-xl">2000+</h1>
                  <p className="text-white/90 font-medium text-sm">
                    Successful cases annually
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
