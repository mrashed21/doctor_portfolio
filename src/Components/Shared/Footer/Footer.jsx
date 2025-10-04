import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

// Mock Data for Quick Links and Company Links
const quickLinks = [
  { label: "General Health Check-Ups", href: "#" },
  { label: "Stress & Lifestyle Counselling", href: "#" },
  { label: "Vaccinations & Immunizations", href: "#" },
  { label: "Referral to Specialists", href: "#" },
];

const companyLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Service", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Content", href: "#" },
];

// Mock Payment Icons
const paymentIcons = [
  {
    name: "bKash",
    img: "/bkash.svg",
  },
  {
    name: "Nagad",
    img: "nagad.svg",
  },
  {
    name: "MasterCard",
    img: "/master.png",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#191928] text-gray-300">
      <Container>
        <div className="pt-12 md:pt-20 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">
          {/* Logo and Newsletter Section */}
          <div className="lg:col-span-3 lg:pr-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Logo
            </h3>
            <p className="text-sm leading-relaxed text-gray-400 mb-6 ">
              It is a long-established fact that a reader will be distracted the
              road readable content of a page when looking at layout.
            </p>

            <div className="flex w-full ">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-3 rounded-l-lg text-gray-900 bg-white focus:outline-none text-sm"
              />
              <button className="bg-green-600 text-white px-4 py-3 rounded-r-lg font-semibold hover:bg-green-700 transition duration-300 whitespace-nowrap text-sm">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-4 text-base">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-500 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-4 text-base">Company</h4>
            <ul className="space-y-2 text-sm">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-500 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-4 text-base">Contact</h4>
            <div className="text-sm space-y-2 text-gray-400">
              <p>102/B Street, Mohammadpur, Dhaka</p>
              <div className="mt-4">
                <p className="font-medium text-white">Email</p>
                <a
                  href="mailto:info@companyname.com"
                  className="hover:text-green-500 break-all"
                >
                  info@companyname.com
                </a>
              </div>
              <div className="mt-4">
                <p className="font-medium text-white">Call</p>
                <a href="tel:+880123456789" className="hover:text-green-500">
                  +880 1234 567 890
                </a>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-4 text-base">
              Pay With
            </h4>
            <div className="flex lg:flex-col items-center lg:items-start gap-3">
              {paymentIcons.map((icon, i) => (
                <img
                  key={i}
                  src={icon.img}
                  alt={icon.name}
                  className="w-20 md:w-24 rounded-md shadow-md"
                />
              ))}
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 text-xs gap-4">
          {/* <div className="order-2 md:order-1">
            <span className="text-gray-400">Sign up for our Newsletter</span>
          </div> */}

          <p className="text-white dark:text-white/90 mt-5">
            &copy; {new Date().getFullYear()} all right reserved. Developed by :{" "}
            {""}
            <Link
              href="https://www.classicit.com.bd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Classic IT.
            </Link>
          </p>

          <div className="flex space-x-3 order-1 md:order-3">
            <a
              href="#"
              aria-label="Facebook"
              className="bg-[#2E3547] p-2 rounded-full hover:bg-blue-600 transition"
            >
              <Facebook className="w-4 h-4 text-gray-300" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="bg-[#2E3547] p-2 rounded-full hover:bg-pink-600 transition"
            >
              <Instagram className="w-4 h-4 text-gray-300" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="bg-[#2E3547] p-2 rounded-full hover:bg-red-600 transition"
            >
              <Youtube className="w-4 h-4 text-gray-300" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
