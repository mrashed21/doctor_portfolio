import { CheckCircle, Heart, MessageSquare, Users } from "lucide-react";
import Container from "../Container/Container";

const reasons = [
  {
    title: "Trust & Experience",
    description: "Non-cancerous tumors that grow in the uterus, often.",
    Icon: Users,
  },
  {
    title: "Reputation & Reviews",
    description: "Non-cancerous tumors that grow in the uterus, often.",
    Icon: MessageSquare,
  },
  {
    title: "Communication & Empathy",
    description: "Non-cancerous tumors that grow in the uterus, often.",
    Icon: Heart,
  },
  {
    title: "Modern & Evidence-Based Practice",
    description: "Non-cancerous tumors that grow in the uterus, often.",
    Icon: CheckCircle,
  },
];

const DoctorImage =
  "https://via.placeholder.com/400x550/FFFFFF/555555?text=Smiling+Doctor";

const WhyChooseMe = () => {
  return (
    <section>
      <section id="why-choose-me" className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LEFT COLUMN: Title and Feature List (Col Span 6) */}
            <div className="lg:col-span-6 space-y-8">
              {/* Title Block */}
              <div className="space-y-2">
                <p className="text-green-600 font-semibold text-base tracking-wider">
                  Why Choose Me
                </p>
                <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
                  Why My Patients Recommendsed Me?
                </h2>
                <p className="text-gray-600 text-base max-w-lg">
                  Non-cancerous tumors that grow in the uterus, often causing
                  pain and heavy bleeding.
                </p>
              </div>

              {/* Feature List Cards */}
              <div className="space-y-4">
                {reasons.map((reason, i) => (
                  <div
                    key={i}
                    data-aos="fade-right"
                    data-aos-delay={i * 200}
                    className="bg-white p-4 rounded-xl shadow border border-gray-100 flex items-start space-x-4 transition duration-300 hover:shadow-md"
                  >
                    {/* Icon Circle */}
                    <div className="flex-shrink-0 p-3 rounded-full bg-green-500/10 text-green-600 border border-green-200">
                      <reason.Icon className="w-5 h-5" />
                    </div>

                    {/* Text Content */}
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {reason.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Doctor Image and Call-Out (Col Span 6) */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
              {/* Background Green Shape/Blob */}
              <div className="absolute right-0 bottom-0 w-full lg:w-[400px] h-[400px] bg-green-600 rounded-2xl transform translate-y-1/4 lg:translate-y-0 translate-x-1/4 lg:translate-x-1/4"></div>

              {/* Doctor Image Container */}
              <div className="relative z-10 w-full max-w-sm lg:max-w-md shadow-2xl rounded-2xl overflow-hidden">
                <img
                  src={DoctorImage}
                  alt="Smiling Doctor"
                  className="w-full h-full object-cover"
                />

                {/* Hello! 24/7 Call-Out Box */}
                <div className="absolute top-1/4 left-0 transform -translate-x-1/2 p-6 bg-green-600 text-white rounded-xl shadow-xl">
                  <h4 className="text-4xl font-bold mb-1">Hello!</h4>
                  <p className="text-lg">24/7</p>

                  {/* Call Icon/Number (mocked to match the image) */}
                  <div className="flex items-center mt-4 text-sm font-semibold">
                    {/* Mock Call Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-1"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M6.62 10.79a15.25 15.25 0 0 0 6.59 6.59l2.25-2.25a.86.86 0 0 1 .86-.06l3.96 1.18a.86.86 0 0 1 .69.86v3.25a.86.86 0 0 1-.86.86A17.9 17.9 0 0 1 3 4.86a.86.86 0 0 1 .86-.86h3.25a.86.86 0 0 1 .86.69l1.18 3.96a.86.86 0 0 1-.06.86l-2.25 2.25z" />
                    </svg>
                    <span>+880 123...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default WhyChooseMe;
