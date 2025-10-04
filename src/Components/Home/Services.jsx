"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Container from "../Container/Container";

const IconPlaceholder = ({ className = "w-6 h-6" }) => (
  <div className={`bg-green-50 text-green-700 p-2 rounded-lg ${className}`}>
    <img src="/service_icon.svg" alt="icon" />
  </div>
);

const cards = [
  {
    title: "Endometriosis",
    desc: "Non-cancerous tumors that grow in the uterus, often causing pain and heavy bleeding, causing pain and heavy bleeding.",
  },
  {
    title: "Ovarian Cysts",
    desc: "Non-cancerous tumors that grow in the uterus, often causing pain and heavy bleeding, causing pain and heavy bleeding.",
  },
  {
    title: "Cervical Cancer",
    desc: "Non-cancerous tumors that grow in the uterus, often causing pain and heavy bleeding, causing pain and heavy bleeding.",
  },
  {
    title: "Uterine Fibroids",
    desc: "Non-cancerous tumors that grow in the uterus, often causing pain and heavy bleeding, causing pain and heavy bleeding.",
  },
  {
    title: "Uterine Fibroids",
    desc: "Non-cancerous tumors that grow in the uterus, often causing pain and heavy bleeding, causing pain and heavy bleeding.",
  },
];

const Services = () => {
  const serviceCards = cards.slice(0, 5);
  return (
    <section id="services" className="py-16 bg-white">
      <Container className="px-5">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="col-span-1  space-y-4 pt-10 pb-4">
            <p className="text-green-600 font-semibold text-sm tracking-wider">
              What I Provide
            </p>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-800">
              My Medical <br /> servicess
            </h2>
            <p className="text-gray-500 lg:mt-2 pr-4">
              Non-cancerous tumors that grow in the uterus, often causing pain
              and heavy bleeding.
            </p>
          </div>

          {serviceCards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm transition hover:shadow-lg"
            >
              <IconPlaceholder className="w-10 h-10 mb-4" />

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {c.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{c.desc}</p>

              <Link
                href="/"
                className="relative text-sm text-blue-600 hover:text-blue-700 font-medium transition 
             after:content-[''] after:absolute after:left-0 after:-bottom-0.5 
             after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 
             hover:after:w-full"
              >
                Read More
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: serviceCards.length * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className="relative col-span-1 sm:col-span-2 lg:col-span-2  bg-gray-900 rounded-xl overflow-hidden text-white p-6 flex  flex-col lg:flex-row justify-between"
          >
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="lg:text-2xl font-bold mb-4">
                I Provide <br /> Best Medical <br /> Treatment.
              </h3>
              <p className="text-sm text-gray-300 flex-grow">
                Dr. Runa Akhtar is a highly experienced and compassionate
                doctor.
              </p>

              <Link
                href="/"
                className="lg:flex items-center space-x-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition hidden "
              >
                <span className="hidden sm:inline text-white">
                  BOOK AN APPOINTMENT
                </span>
                <span className="text-white bg-blue-600 rounded-full p-2">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </Link>
            </div>

            <div className="flex flex-col items-end justify-between  ">
              <div className="border-l-2 border-b-2 border-dashed border-white p-2 rounded-bl-lg">
                <img
                  src="/service_image.png"
                  alt="Doctor"
                  className="w-56 h-56 rounded-lg object-cover "
                />
              </div>
              <Link
                href="/"
                className="lg:hidden mt-5 items-center space-x-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition flex "
              >
                <span className="inline text-white">BOOK AN APPOINTMENT</span>
                <span className="text-white bg-blue-600 rounded-full p-2">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
