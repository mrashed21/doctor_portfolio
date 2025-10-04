import Container from "../Container/Container";

// Mock Data for Qualifications
const qualifications = [
  {
    id: 1,
    college: "Dhaka Medical College",
    degree: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
    duration: "Jan 2014 - Dec 2018",
    img: "/award_one.png",
  },
  {
    id: 2,
    college: "Dhaka Medical College",
    degree: "FCPS (Obstetrics & Gynecology)",
    duration: "Jan 2019 - Present",
    img: "/award_two.png",
  },
  {
    id: 3,
    college: "Dhaka Medical College",
    degree: "MS (Master of Surgery in Ob & Gyn)",
    duration: "Jan 2019 - Present",
    img: "/award_three.png",
  },
  {
    id: 4,
    college: "Dhaka Medical College",
    degree: "Best Doctor Award (2022)",
    duration: "Certified",
    img: "/award_one.png",
  },
];

const minorAwards = [
  { name: "Lasker Award", Icon: "/award_one.svg", color: "text-green-600" },
  { name: "Medawar Medal", Icon: "/award_two.svg", color: "text-red-500" },
  {
    name: "Ascension Prize",
    Icon: "/award_three.svg",
    color: "text-yellow-500",
  },
  { name: "Base prize", Icon: "/award_four.svg", color: "text-blue-500" },
  { name: "Winner Award", Icon: "/award_five.svg", color: "text-gray-400" },
];

const Awards = () => {
  return (
    <section id="awards" className="py-20 bg-gray-50 overflow-hidden">
      <Container>
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
          My Qualification and Awards
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Qualifications List */}
          <div className="lg:col-span-6 space-y-4">
            {qualifications.map((q, i) => (
              <div
                key={q.id}
                className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-4 transition hover:shadow-lg relative"
                data-aos="fade-right"
                data-aos-delay={i * 100}
              >
                <div className="h-[80%] w-[10px] rounded-r bg-[#00984A] absolute -left-1 top-1/2 -translate-y-1/2"></div>

                <div className="flex items-center space-x-4 w-full md:w-auto">
                  <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      src={q.img}
                      alt={q.college}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-grow md:flex-grow-0">
                    <h4 className="font-semibold text-base md:text-lg text-gray-800">
                      {q.college}
                    </h4>
                    <p className="text-xs text-gray-500">{q.duration}</p>
                  </div>
                </div>

                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[80%] border-l-2 border-dashed border-gray-400"></div>

                <div className="md:ml-6 pl-20 md:pl-0">
                  <p className="text-sm text-gray-700 lg:ml-24 ">{q.degree}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="lg:col-span-6 bg-white p-6 md:p-8 rounded-xl shadow-xl border border-gray-100 flex flex-col items-center text-center"
            data-aos="fade-left"
          >
            <div className="text-6xl text-orange-400 mb-4">
              <img
                src="/award_one.svg"
                alt=""
                className="w-20 h-20 md:w-28 md:h-28"
              />
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Lasker Award
            </h4>

            <p className="text-sm md:text-base text-gray-600 max-w-lg mb-8 text-justify">
              In 1945 Albert Lasker and Mary Woodard Lasker created the Lasker
              Awards. Every year since then the award has been given to the
              living person considered to have made the greatest contribution to
              medical science or who has demonstrated public service on behalf
              of medicine.
            </p>

            {/* Minor Awards Row */}
            <div className=" grid grid-cols-3 lg:flex justify-center gap-4 md:gap-6 flex-wrap mt-auto pt-6 border-t border-gray-100 w-full">
              {minorAwards.map((award, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center w-16 md:w-20"
                >
                  <div className="p-2 rounded-md border border-gray-300 mb-2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                    <img
                      src={award.Icon}
                      alt={award.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs text-gray-700 font-medium text-center leading-tight">
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
