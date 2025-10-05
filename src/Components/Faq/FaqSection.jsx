"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import Container from "../Container/Container";

const faqData = [
  {
    question: "What do we treat?",
    answer:
      "Common health issue Ask anything you would normally ask your GP. You can have an instant video with one of our GPs via a digital consultation from anywhere, at any time of day. Specialist advice Sometimes it’s helpful to see a specialist when you want. And get educational advice, pre-screening, monitoring and follow-ups. For maternal and infant health care, chronic disease issues such as diabetes, or other conditions, DocTime can help you to connect with the right specialist doctor and to stay healthy. More than 20 different specialties are available on DocTime. Common health issue Ask anything you would normally ask your GP. You can have an instant video with one of our GPs via a digital consultation from anywhere, at any time of day. Specialist advice Sometimes it’s helpful to see a specialist when you want.",
  },
  {
    question: "How does it work?",
    answer:
      "You can easily book an appointment through our website or app. Once booked, you’ll receive a link to join the consultation. Simply click on the link at your scheduled time and connect with your doctor via secure video call.",
  },
  {
    question: "Who provides consultation on me?",
    answer:
      "All consultations are conducted by certified and verified doctors who specialize in a range of medical fields to ensure you receive the best care possible.",
  },
  {
    question: "Are the registered patients verified?",
    answer:
      "Yes, all registered patients are verified to maintain safety and authenticity within our platform.",
  },
  {
    question: "When are the doctors available for consultation?",
    answer:
      "Doctors are available for consultation 24/7. You can view each doctor’s availability in real time when scheduling your appointment.",
  },
  {
    question: "Can we select a doctor of our own choice?",
    answer:
      "Yes, you can browse our list of doctors, view their specialties, and choose the one you prefer for your consultation.",
  },
  {
    question: "How much do I need to pay for the consultation?",
    answer:
      "Consultation fees vary depending on the doctor’s specialty and experience. The exact cost will be displayed during booking before confirmation.",
  },
  {
    question: "How do I make payment?",
    answer:
      "Payments can be made online using credit/debit cards, mobile banking, or digital wallet options available on our platform.",
  },
  {
    question:
      "If I decide to cancel my consultation after making payment, how do I get a refund?",
    answer:
      "If you cancel before the consultation starts, you’ll be eligible for a refund according to our cancellation policy. Refunds are processed within a few business days.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, all data shared through our platform is encrypted and securely stored in compliance with data protection regulations.",
  },
  {
    question: "Do I need to prepare anything before the video consultation?",
    answer:
      "Please ensure a stable internet connection, a quiet environment, and any medical reports or prescriptions you may want to share with your doctor.",
  },
  {
    question: "How do I get a prescription for my consultation?",
    answer:
      "After your consultation, your doctor will issue a digital prescription, which you can download or view directly in your account.",
  },
  {
    question:
      "If the doctor finds out that my problem is not treatable over video call?",
    answer:
      "If the issue requires in-person care, the doctor will guide you on the next steps and refer you to an appropriate healthcare facility if needed.",
  },
  {
    question:
      "Are there any consultants available from doctors outside Bangladesh?",
    answer:
      "Yes, we have international consultants from various countries who are available for online consultations based on your needs.",
  },
  {
    question: "Can I get consultation if I am outside Bangladesh?",
    answer:
      "Yes, you can access our services from anywhere in the world as long as you have an internet connection.",
  },
  {
    question: "Who ensures that the correct doctor is giving the consultation?",
    answer:
      "Our verification and quality assurance team ensures all doctors are licensed and matched correctly to their area of expertise.",
  },
  {
    question: "Can I order medicine on DocTime?",
    answer:
      "Yes, you can order prescribed medicines directly from our platform and get them delivered to your doorstep.",
  },
  {
    question: "Can I order diagnostics tests through DocTime?",
    answer:
      "Yes, diagnostic tests can be booked online and samples can be collected from your home depending on your location.",
  },
  {
    question:
      "What are the benefits of the healthcare and protection plans/ subscription packages?",
    answer:
      "Our healthcare plans offer regular check-ups, discounts on consultations, lab tests, and medicines, and priority access to doctors for continuous care and protection.",
  },
];

const AccordionItem = ({
  question,
  answer,
  isOpen,
  toggleAccordion,
  index,
}) => {
  const contentClasses = isOpen
    ? "max-h-[800px] opacity-100 py-4 transition-all duration-500 ease-in-out"
    : "max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out";

  return (
    <div
      className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      <button
        className="flex justify-between items-center w-full p-4 text-left font-medium text-gray-800 hover:text-green-600 transition"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg">{question}</span>
        <div className="text-green-600">
          {isOpen ? (
            <Minus className="w-5 h-5" />
          ) : (
            <Plus className="w-5 h-5" />
          )}
        </div>
      </button>

      <div className={contentClasses}>
        <p className="text-sm text-gray-600 px-4 pb-4 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 80,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="faq-accordion" className="py-12 md:py-20 bg-gray-50">
      <Container>
        {/* Header */}
        <div
          className="text-center mb-10 max-w-2xl mx-auto px-4"
          data-aos="fade-up"
        >
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Have Any Questions?
          </h2>
          <p
            className="text-gray-500 mt-3 text-sm md:text-base"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Find below our frequently asked questions. If you have other
            questions please contact me.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto px-4 space-y-3 md:space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleAccordion={() => toggleAccordion(index)}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
