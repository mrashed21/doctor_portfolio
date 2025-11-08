"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import Container from "../Container/Container";

const faqData = [
  {
    question:
      "What type of patients do you treat? / আপনি কী ধরনের রোগীদের চিকিৎসা করেন?",
    answer:
      "I specialize in Obstetrics and Gynaecology — including high-risk pregnancy, fetal medicine, infertility, menstrual disorders, PCOS, uterine fibroids, and other women’s health issues. আমি গর্ভবতী মায়েদের উচ্চ ঝুঁকির চিকিৎসা, সন্তান জন্মদান, বন্ধ্যাত্ব, মাসিক সমস্যা, ফাইব্রয়েড, এবং নারীদের অন্যান্য শারীরিক সমস্যার চিকিৎসা করি।",
  },
  {
    question: "What is a high-risk pregnancy? / উচ্চ ঝুঁকিপূর্ণ গর্ভাবস্থা কী?",
    answer:
      "A high-risk pregnancy involves conditions like diabetes, high blood pressure, twins, or previous complications that need special monitoring. উচ্চ রক্তচাপ, ডায়াবেটিস, যমজ সন্তান বা পূর্ববর্তী জটিলতা থাকলে গর্ভাবস্থা উচ্চ ঝুঁকিপূর্ণ হয় এবং বিশেষ যত্নের প্রয়োজন হয়।",
  },
  {
    question:
      "When should I visit a gynecologist? / কখন গাইনী ডাক্তারের কাছে যাওয়া উচিত?",
    answer:
      "You should visit a gynecologist if you have irregular periods, pain, infertility, unusual discharge, or pregnancy-related complications. মাসিক অনিয়ম, ব্যথা, সন্তান ধারণে সমস্যা, বা গর্ভাবস্থার জটিলতা থাকলে গাইনী ডাক্তারের পরামর্শ নেওয়া উচিত।",
  },
  {
    question: "What is fetal medicine? / ফিটাল মেডিসিন কী?",
    answer:
      "Fetal medicine deals with the care of the baby inside the womb. It includes early detection of fetal abnormalities, growth monitoring, and managing complications. ফিটাল মেডিসিন হলো গর্ভের শিশুর যত্ন — যেখানে শিশুর বৃদ্ধি, অস্বাভাবিকতা বা জটিলতা শনাক্ত ও চিকিৎসা করা হয়।",
  },
  {
    question:
      "How often should I go for antenatal checkups? / গর্ভকালীন চেকআপ কতবার করা উচিত?",
    answer:
      "Ideally, once every month during the first 7 months, twice a month in the 8th month, and weekly during the 9th month. সাধারণত প্রথম ৭ মাসে মাসে একবার, ৮ম মাসে দুইবার, এবং ৯ম মাসে প্রতি সপ্তাহে একবার করে চেকআপ করা উচিত।",
  },
  {
    question:
      "Can I have a normal delivery after cesarean? / সিজারিয়ান হওয়ার পর কি স্বাভাবিক সন্তান জন্ম সম্ভব?",
    answer:
      "In some cases, yes — depending on your health and previous delivery condition. It’s called VBAC (Vaginal Birth After Cesarean). কিছু ক্ষেত্রে সিজারিয়ানের পর স্বাভাবিক সন্তান জন্ম দেওয়া সম্ভব, তবে এটি সম্পূর্ণ নির্ভর করে মায়ের শারীরিক অবস্থা ও পূর্ববর্তী প্রসবের ইতিহাসের উপর।",
  },
  {
    question:
      "How can I prevent gynecological problems? / গাইনী সমস্যা প্রতিরোধ করা যায় কিভাবে?",
    answer:
      "Regular checkups, maintaining hygiene, balanced diet, exercise, and avoiding stress help prevent many gynecological problems. নিয়মিত চেকআপ, পরিচ্ছন্নতা বজায় রাখা, সুষম খাবার, ব্যায়াম, ও মানসিক চাপ কমালে বেশিরভাগ গাইনী সমস্যা প্রতিরোধ করা যায়।",
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
            Frequently Asked Questions (FAQ)
          </h2>
          <p
            className="text-gray-500 mt-3 text-sm md:text-base"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Here are some of the most common questions my patients ask. নিচে
            রোগীদের কিছু সাধারণ প্রশ্ন এবং তার উত্তর দেওয়া হলো।
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
