import { Play } from "lucide-react";
import Link from "next/link";
import Container from "../Container/Container";
const JourneyImage = "/work.webp";

const WorkingJourney = () => {
  return (
    <section id="working-journey" className="lg:py-10 bg-white">
      <Container>
        <div
          className="rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row bg-white"
          data-aos="fade-up"
        >
          <div className="relative lg:w-3/5 lg:min-h-[350px] object-cover ">
            <img
              src={JourneyImage}
              alt="Doctor discussing with patient"
              className="w-full h-[200px] lg:h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          <div className="lg:w-2/5 bg-[#0C1B2A] text-white p-8 lg:p-12 flex flex-col justify-center relative">
            <div className="absolute top-0 left-0 h-16 w-1 bg-green-600 hidden lg:block"></div>

            <h3 className="text-3xl font-bold mb-4">My Working Journey</h3>

            <p className="text-gray-300 text-sm mb-8">
              I'm Dr. Runa Akhter Dhola a [Specialization, e.g., Internal
              Medicine Specialist] with a passion for providing holistic,
              evidence-based medical care. passion for providing holistic,
              evidence-based medical care.
            </p>

            <Link
              href="/"
              className="inline-flex items-center space-x-3 text-green-500 font-semibold group transition duration-300"
              aria-label="Watch video about my working journey"
            >
              <div className="w-12 h-12 rounded-full border-2 border-green-500 flex items-center justify-center transition-colors group-hover:bg-green-500 group-hover:text-[#0C1B2A]">
                <Play className="w-5 h-5 fill-current" />
              </div>

              <span className="text-sm tracking-widest text-white uppercase group-hover:text-green-500">
                Watching Video
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkingJourney;
