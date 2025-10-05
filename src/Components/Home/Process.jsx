import { Calendar, DollarSign, FileText, Stethoscope } from "lucide-react";
import Container from "../Container/Container";

const steps = [
  {
    title: "Book an Appointment",
    desc: "Non-cancerous tumors that grow in the uterus, often causing pain and heavy bleeding.",
    Icon: Calendar,
  },
  {
    title: "Conduct Checkup",
    desc: "Non-cancerous tumors that grow in the uterus, often causing pain and heavy bleeding.",
    Icon: FileText,
  },
  {
    title: "Perform Treatment",
    desc: "Non-cancerous tumors that grow in the uterus, often causing pain and heavy bleeding.",
    Icon: Stethoscope,
  },
  {
    title: "Prescribe & Payment",
    desc: "Non-cancerous tumors that grow in the uterus, often causing pain and heavy bleeding.",
    Icon: DollarSign,
  },
];

const Process = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mt-10 mb-16">
          My Working Process
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
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg">
                  <s.Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                </div>

                <div className="ml-8 pt-1 max-w-md">
                  <h4 className="text-lg lg:text-xl font-bold text-gray-800 mb-1">
                    {s.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative hidden lg:block h-[500px]">
            <div className=" w-[80%] h-[80%] bg-[#00984A] top-12 right-16 absolute"></div>
            <div className="absolute right-0 top-0 w-[80%] h-[80%]  overflow-hidden shadow-2xl z-10">
              <img
                src="/working_process_main.png"
                alt="Medical Model"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="absolute left-[5%] bottom-0 w-[55%] h-[35%] rounded-xl overflow-hidden shadow-xl z-20">
              <img
                src="/working_process_two.png"
                alt="Doctor"
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
