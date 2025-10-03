import { Play } from "lucide-react";
import Container from "../Container/Container";

// Placeholder image for the background
const JourneyImage =
  "https://via.placeholder.com/1000x500/F0F4F8/333333?text=Doctor+Patient+Consultation";

const WorkingJourney = () => {
  return (
    <section id="working-journey" className="py-10 bg-white">
      <Container>
        {/* Main Card Container */}
        <div
          className="rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row bg-white"
          data-aos="fade-up"
        >
          {/* LEFT: Image Section (Wide on desktop) */}
          <div className="relative lg:w-3/5 min-h-[350px] overflow-hidden">
            <img
              src={JourneyImage}
              alt="Doctor discussing with patient"
              className="w-full h-full object-cover"
            />
            {/* Optional subtle overlay to blend with the text box */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* RIGHT: Text Content and Video CTA (Narrow on desktop) */}
          <div className="lg:w-2/5 bg-[#0C1B2A] text-white p-8 lg:p-12 flex flex-col justify-center relative">
            {/* Small Green Accent Line */}
            <div className="absolute top-0 left-0 h-16 w-1 bg-green-600 hidden lg:block"></div>

            <h3 className="text-3xl font-bold mb-4">My Working Journey</h3>

            <p className="text-gray-300 text-sm mb-8">
              I'm Dr. Runa Akhter Dhola a [Specialization, e.g., Internal
              Medicine Specialist] with a passion for providing holistic,
              evidence-based medical care. passion for providing holistic,
              evidence-based medical care.
            </p>

            {/* Watch Video Button/CTA */}
            <a
              href="#"
              className="inline-flex items-center space-x-3 text-green-500 font-semibold group transition duration-300"
              aria-label="Watch video about my working journey"
            >
              {/* Play Icon Circle */}
              <div className="w-12 h-12 rounded-full border-2 border-green-500 flex items-center justify-center transition-colors group-hover:bg-green-500 group-hover:text-[#0C1B2A]">
                <Play className="w-5 h-5 fill-current" />
              </div>

              <span className="text-sm tracking-widest text-white uppercase group-hover:text-green-500">
                Watching Video
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkingJourney;
