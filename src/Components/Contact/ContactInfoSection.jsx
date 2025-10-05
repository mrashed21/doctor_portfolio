"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";
import Container from "../Container/Container";

const contactCards = [
  {
    title: "Our Location",
    details: "121 King Street, Melbourne Victoria 3000 Bangladesh.",
    actionText: "Get Direction",
    actionLink: "/",
    iconUrl: "/maps.png",
  },
  {
    title: "Send me Email",
    details: (
      <>
        support@medwell.com
        <br />
        support@medwell.com
      </>
    ),
    actionText: "Send Email",
    actionLink: "mailto:support@medwell.com",
    iconUrl: "/email.png",
  },
  {
    title: "Our Location",
    details: (
      <>
        +880 1252656296
        <br />
        +880 1252656296
      </>
    ),
    actionText: "Call Me",
    actionLink: "tel:+8801252656296",
    iconUrl: "/phone.png",
  },
];

const ContactCard = ({ card, index }) => {
  return (
    <div
      className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md hover:shadow-xl p-8 transition-all duration-300 h-full"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Icon Circle */}
      <div className="flex justify-center items-center w-24 h-24 rounded-full bg-white mb-6 shadow-sm">
        <img
          src={card.iconUrl}
          alt={`${card.title} icon`}
          className="w-16 h-16 object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
        {card.title}
      </h3>

      {/* Details */}
      <p className="text-sm text-gray-500 mb-4 leading-relaxed">
        {card.details}
      </p>

      {/* Action Link */}
      <Link
        href={card.actionLink}
        className="text-blue-600 text-sm font-medium hover:underline transition-colors"
      >
        {card.actionText}
      </Link>
    </div>
  );
};

const ContactInfoSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">

      <div className="absolute inset-0 bg-[url('/background_image.webp')] opacity-10 bg-center bg-cover"></div>

      <Container>
        {/* Header */}
        <div className="relative text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <p className="text-green-600 font-semibold text-sm md:text-base tracking-wider uppercase">
            Get In Touch
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mt-2">
            Feel Free To Contact
          </h2>
        </div>

        {/* Contact Cards */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
          {contactCards.map((card, index) => (
            <ContactCard key={index} card={card} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ContactInfoSection;
