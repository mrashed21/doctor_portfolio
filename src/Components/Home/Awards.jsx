import { useEffect, useRef, useState } from "react";
import Container from "../Container/Container";

const qualifications = [
  {
    id: 1,
    college: "Mymensingh Girls’ Cadet College",
    degree: "SSC & HSC – Board of Intermediate and Secondary Education, Dhaka",
    duration: "Completed with Distinction",
    img: "/Mymensingh_Girls'_Cadet_College.jpg",
  },
  {
    id: 2,
    college: "Sir Salimullah Medical College, Dhaka",
    degree:
      "MBBS – Achieved 9th Position in Combined Merit List (1st Professional Exam)",
    duration: "Graduated with Honors",
    img: "/SSMC_Garden_and_New_Building.jpg",
  },
  {
    id: 3,
    college: "Bangladesh College of Physicians and Surgeons (BCPS)",
    degree: "FCPS (Obstetrics & Gynaecology)",
    duration: "Completed",
    img: "/Bangladesh-College-Of-Physicians-And-Surgeons-Bcps.jpg",
  },
  {
    id: 4,
    college: "Bangladesh College of Physicians and Surgeons (BCPS)",
    degree: "FCPS (Feto-Maternal Medicine)",
    duration: "Completed",
    img: "/Bangladesh-College-Of-Physicians-And-Surgeons-Bcps.jpg",
  },
  {
    id: 5,
    college: "University of the Philippines",
    degree: "Community Fellowship in Fetal Medicine & Maternal Health",
    duration: "Completed",
    img: "/UPD-campus-by-Jun-Madrid-UP-MPRO-AM.jpg",
  },
];

const minorAwards = [
  {
    name: "SS Ratnam Young Gynaecologist Award (2019)",
    Icon: "/award_one.svg",
    desc: "Awarded by the Asia and Oceania Federation of Obstetrics and Gynaecology (AOFOG) for outstanding research and contribution to women's health.",
  },
  {
    name: "National Master Trainer – MCCoD",
    Icon: "/award_two.svg",
    desc: "Recognized nationally for leading the Medical Certification of Cause of Death (MCCoD) training program under the Ministry of Health.",
  },
  {
    name: "National Master Trainer – SMoL",
    Icon: "/award_three.svg",
    desc: "Served as a national trainer for the Start-up Mortality List (SMoL) project improving maternal and neonatal death surveillance.",
  },
  {
    name: "Government Service Excellence",
    Icon: "/award_four.svg",
    desc: "Honored for 18 years of dedicated service as a government health cadre (25th BCS), contributing to maternal health at national level.",
  },
  {
    name: "Academic Excellence & Teaching Recognition",
    Icon: "/award_five.svg",
    desc: "Acknowledged for teaching excellence as Assistant Professor of OBGYN at Sir Salimullah Medical College & Mitford Hospital.",
  },
];

const Awards = () => {
  const [selectedAward, setSelectedAward] = useState(minorAwards[0]);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const syncHeights = () => {
      if (window.innerWidth >= 1024) {
        const leftHeight = leftRef.current?.offsetHeight || 0;
        const rightHeight = rightRef.current?.offsetHeight || 0;
        const maxHeight = Math.max(leftHeight, rightHeight);
        if (leftRef.current) leftRef.current.style.minHeight = `${maxHeight}px`;
        if (rightRef.current)
          rightRef.current.style.minHeight = `${maxHeight}px`;
      } else {
        if (leftRef.current) leftRef.current.style.minHeight = "auto";
        if (rightRef.current) rightRef.current.style.minHeight = "auto";
      }
    };
    syncHeights();
    window.addEventListener("resize", syncHeights);
    return () => window.removeEventListener("resize", syncHeights);
  }, [selectedAward]);

  return (
    <section
      className="py-20 bg-gray-50 overflow-hidden relative"
      style={{
        backgroundImage: "url(/about_bg.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <h3
          className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12"
          data-aos="zoom-in"
        >
          Qualifications & Professional Achievements
          <br />
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6" ref={leftRef}>
            <div className="space-y-4 h-full">
              {qualifications.map((q, i) => (
                <div
                  key={q.id}
                  className="bg-white p-5 rounded-xl shadow-md border border-gray-100 flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-4 transition hover:shadow-lg relative overflow-hidden"
                  data-aos="fade-right"
                  data-aos-delay={i * 100}
                >
                  <div className="absolute left-0 top-0 w-[6px] h-full bg-green-500 rounded-r"></div>

                  <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      src={q.img}
                      alt={q.college}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-base md:text-lg text-gray-800">
                      {q.college}
                    </h4>
                    <p className="text-xs text-gray-500">{q.duration}</p>
                    <p className="text-sm text-gray-700 mt-1">{q.degree}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex" ref={rightRef}>
            <div
              className="bg-white p-6 md:p-8 rounded-xl shadow-xl border border-gray-100 flex flex-col lg:justify-between items-center text-center lg:h-full w-full"
              data-aos="fade-left"
            >
              <div>
                <div className="mb-4">
                  <img
                    src={selectedAward.Icon}
                    alt={selectedAward.name}
                    className="w-16 h-16 md:w-24 md:h-24 object-contain mx-auto"
                  />
                </div>

                <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  {selectedAward.name}
                </h4>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                  {selectedAward.desc}
                </p>
              </div>

              <div className="grid grid-cols-3 lg:flex justify-center gap-4 md:gap-6 flex-wrap pt-6 border-t border-gray-100 w-full">
                {minorAwards.map((award, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center w-[100px] cursor-pointer transition transform hover:scale-105 h-fit ${
                      selectedAward.name === award.name
                        ? "border-2 border-green-500 rounded-lg p-1 bg-green-50"
                        : ""
                    }`}
                    onClick={() => setSelectedAward(award)}
                  >
                    <div className="p-2 rounded-md mb-2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                      <img
                        src={award.Icon}
                        alt={award.name}
                        className="w-full h-fit object-contain"
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
        </div>
      </Container>
    </section>
  );
};

export default Awards;
