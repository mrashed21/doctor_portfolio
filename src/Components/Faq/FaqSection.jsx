"use client";
import { Mail, Minus, Plus } from "lucide-react";
import { useState } from "react";
import Container from "../Container/Container";

// Mock Data for the FAQs
const faqData = [
  {
    question: "What do we treat?",
    answer:
      "Common health issue Ask anything you would normally ask your GP. You can have an instant video with one of our GPs via a digital consultation from anywhere, at any time of day. Specialist advice Sometimes it’s helpful to see a specialist when you want. And get educational advice, pre-screening, monitoring and follow-ups. You will receive a personalised care plan and prescriptions if needed. It also includes support to help you manage your weight and other health risks, to stay healthy. More than 20 different specialties are available on DocTime. Common health issue Ask anything you would normally ask your GP. You can have an instant video with one of our GPs via a digital consultation from anywhere, at any time of day. Specialist advice Sometimes it’s helpful to see a specialist when you want.",
  },
  {
    question: "How does it work?",
    answer:
      "The process is simple: 1. Book an appointment online. 2. Receive a consultation video link via email. 3. Connect with the doctor at the scheduled time. 4. Receive your diagnosis and treatment plan electronically.",
  },
  {
    question: "Who provides consultation on me?",
    answer:
      "All consultations are provided by certified specialists, ensuring you receive the highest standard of evidence-based medical care.",
  },
  {
    question: "Are the registered patients verified?",
    answer:
      "Yes, we adhere to strict verification standards to ensure all registered patients are authentic and meet our requirements.",
  },
  {
    question: "When are the doctors available for consultation?",
    answer:
      "Doctors are available for consultation 24/7. You can view real-time availability when booking your appointment.",
  },
  {
    question: "Can we select a doctor of our own choice?",
    answer:
      "Absolutely! You can browse doctor profiles, view their qualifications, and select the specialist that best fits your needs when booking.",
  },
  {
    question: "How much do I need to pay for the consultation?",
    answer:
      "Consultation fees vary depending on the specialist and service. Full pricing details are clearly displayed during the booking process.",
  },
];

// Reusable Accordion Item Component
const AccordionItem = ({
  question,
  answer,
  isOpen,
  toggleAccordion,
  index,
}) => {
  // Determine the visibility and styling based on the isOpen state
  const contentClasses = isOpen
    ? "max-h-[500px] opacity-100 py-4 transition-all duration-500 ease-in-out"
    : "max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out";

  const borderColor =
    index === 0 && isOpen ? "border-b-transparent" : "border-b-gray-200";

  return (
    <div
      className={`border-t border-b ${borderColor} last:border-b transition-colors duration-300`}
    //   data-aos="fade-up"
    //   data-aos-delay={index * 50}
    >
      <button
        className="flex justify-between items-center w-full py-4 text-left font-semibold text-gray-700 hover:text-green-600 transition"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        {/* Question */}
        <span className="text-base sm:text-lg">{question}</span>

        {/* Icon (Plus or Minus) */}
        <div className="text-green-600">
          {isOpen ? (
            <Minus className="w-5 h-5" />
          ) : (
            <Plus className="w-5 h-5" />
          )}
        </div>
      </button>

      {/* Answer Content */}
      <div className={contentClasses}>
        <p className="text-sm text-gray-600 pr-10">{answer}</p>
      </div>
    </div>
  );
};

const FaqSection = () => {
  // State to track which item is currently open (stores the index)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-accordion" className="py-20 bg-gray-50">
      <Container>
        {/* Header Block */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Have Any Questions?
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            Find below our frequently asked questions, if you have other
            questions please
            <a
              href="mailto:info@example.com"
              className="text-green-600 font-medium ml-1 hover:underline flex items-center justify-center space-x-1"
            >
              <Mail className="w-4 h-4" /> <span>Contact me.</span>
            </a>
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10">
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
