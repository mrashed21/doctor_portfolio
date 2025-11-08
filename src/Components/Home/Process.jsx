import { Calendar, FileText, HeartPulse, Stethoscope } from "lucide-react";
import Container from "../Container/Container";

const steps = [
  {
    title: "Book an Appointment",
    desc: "Schedule your consultation easily through phone or online booking. Emergency and follow-up appointments are prioritized for expectant mothers and high-risk cases.",
    Icon: Calendar,
  },
  {
    title: "Initial Consultation & Checkup",
    desc: "During the first visit, a detailed medical history is reviewed and necessary clinical examinations or ultrasound tests are performed to assess your condition.",
    Icon: FileText,
  },
  {
    title: "Diagnosis & Treatment Planning",
    desc: "Based on test results, an individualized care plan is created—covering prenatal care, gynecological issues, fertility support, or feto-maternal evaluations.",
    Icon: Stethoscope,
  },
  {
    title: "Follow-up & Ongoing Care",
    desc: "Patients receive continuous monitoring, lifestyle guidance, and compassionate support to ensure safe recovery and the best maternal-fetal outcomes.",
    Icon: HeartPulse,
  },
];

const Process = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mt-10 mb-16">
          My Consultation Process
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          <div className="relative space-y-7 lg:space-y-12">
            <div className="absolute left-3 lg:left-5 top-0 bottom-0 w-1 bg-green-200 z-0"></div>
            {steps.map((s, i) => (
              <div
                key={i}
                data-aos="fade-right"
                data-aos-delay={i * 200}
                className="flex items-start relative z-10"
              >
                <div className="flex-shrink-0 w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg">
                  <s.Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                </div>

                <div className="ml-8 pt-1 max-w-md">
                  <h4 className="text-lg lg:text-xl font-bold text-gray-800 mb-1">
                    {s.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative hidden lg:block h-[500px]">
            <div className="w-[80%] h-[80%] bg-[#00984A] top-12 right-16 absolute rounded-xl"></div>

            <div className="absolute right-0 top-0 w-[80%] h-[80%] overflow-hidden shadow-2xl z-10 rounded-xl">
              <img
                src="/working_process_main.png"
                alt="Dr. Runa Akhter Dola during consultation"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute left-[5%] bottom-0 w-[55%] h-[35%] rounded-xl overflow-hidden shadow-xl z-20">
              <img
                src="/working_process_two.png"
                alt="Doctor performing ultrasound checkup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Process;
