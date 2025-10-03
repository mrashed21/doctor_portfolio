import { Award, Medal, Shield, Star, Trophy } from "lucide-react"; // Assuming you use lucide-react for icons
import Container from "../Container/Container";

// Mock Data for Qualifications
const qualifications = [
  {
    id: 1,
    college: "Dhaka Medical College",
    degree: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
    duration: "Jan 2014 - Dec 2018",
    img: "https://via.placeholder.com/80x80/2C3E50/FFFFFF?text=DMC", // Mock Image
  },
  {
    id: 2,
    college: "Dhaka Medical College",
    degree: "FCPS (Obstetrics & Gynecology)",
    duration: "Jan 2019 - Present",
    img: "https://via.placeholder.com/80x80/16A085/FFFFFF?text=FCPS",
  },
  {
    id: 3,
    college: "Dhaka Medical College",
    degree: "MS (Master of Surgery in Ob & Gyn)",
    duration: "Jan 2019 - Present",
    img: "https://via.placeholder.com/80x80/2980B9/FFFFFF?text=MS",
  },
  {
    id: 4,
    college: "Dhaka Medical College",
    degree: "Best Doctor Award (2022)",
    duration: "Certified",
    img: "https://via.placeholder.com/80x80/E67E22/FFFFFF?text=AWARD",
  },
];

// Mock Data for Minor Awards/Icons
const minorAwards = [
  { name: "Lasker Award", Icon: Trophy, color: "text-green-600" },
  { name: "Medawar Medal", Icon: Medal, color: "text-red-500" },
  { name: "Ascension Prize", Icon: Star, color: "text-yellow-500" },
  { name: "Base prize", Icon: Shield, color: "text-blue-500" },
  { name: "Winner Award", Icon: Award, color: "text-gray-400" },
];

const Awards = () => {
  return (
    <section id="awards" className="py-20 bg-gray-50">
      <Container>
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
          My Qualification and Awards
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT COLUMN: Qualification List (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-4">
            {qualifications.map((q, i) => (
              <div
                key={q.id}
                className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex items-center space-x-4 transition hover:shadow-lg"
                data-aos="fade-right"
                data-aos-delay={i * 100}
              >
                {/* Image/Icon Placeholder */}
                <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                  <img
                    src={q.img}
                    alt={q.college}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-grow">
                  <h4 className="font-semibold text-lg text-gray-800">
                    {q.college}
                  </h4>
                  <p className="text-sm text-gray-700">{q.degree}</p>
                </div>

                {/* Duration/Date */}
                <div className="text-right text-xs text-gray-500 flex-shrink-0">
                  {q.duration}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: Awards Section (lg:col-span-6) */}
          <div
            className="lg:col-span-6 bg-white p-8 rounded-xl shadow-xl border border-gray-100 flex flex-col items-center text-center"
            data-aos="fade-left"
          >
            {/* Main Award Trophy Mockup */}
            <div className="text-6xl text-orange-400 mb-4">
              <Trophy
                className="w-20 h-20 mx-auto"
                fill="#fdb342"
                stroke="#fdb342"
              />
            </div>
            <h4 className="text-3xl font-bold text-gray-800 mb-2">
              Lasker Award
            </h4>

            <p className="text-gray-600 max-w-lg mb-8">
              In 1945 Albert Lasker and Mary Woodard Lasker created the Lasker
              Awards. Every year since then the award has been given to the
              living person considered to have made the greatest contribution to
              medical science or who has demonstrated public service on behalf
              of medicine.
            </p>

            {/* Minor Awards Row */}
            <div className="flex justify-center space-x-6 flex-wrap mt-auto pt-6 border-t border-gray-100 w-full">
              {minorAwards.map((award, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center max-w-[80px] mb-4"
                >
                  <div
                    className={`p-2 rounded-full border-2 ${award.color} border-current mb-2`}
                  >
                    <award.Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs text-gray-700 font-medium whitespace-nowrap">
                    {award.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Awards;
