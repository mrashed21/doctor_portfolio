import Container from "@/Components/Container/Container";

import { Facebook, Instagram, Youtube } from "lucide-react";

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
    img: "https://via.placeholder.com/100x40/C9003E/FFFFFF?text=bKash",
  },
  {
    name: "Nagad",
    img: "https://via.placeholder.com/100x40/FF5400/FFFFFF?text=Nagad",
  },
  {
    name: "MasterCard",
    img: "https://via.placeholder.com/100x40/000000/FFFFFF?text=MasterCard",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#191928] text-gray-300">
      <Container>
        {/* Top Section: Logo, Subscribe, Links, Contact, Payment */}
        <div className="pt-20 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">
          {/* 1. Logo and Description (Col Span 3 on large screens) */}
          <div className="lg:col-span-3 pr-8">
            <h3 className="text-4xl font-bold text-white mb-4">Logo</h3>
            <p className="text-sm leading-relaxed text-gray-400 mb-6 max-w-sm">
              It is a long-established fact that a reader will be distracted the
              road readable content of a page when looking at layout.
            </p>

            {/* Subscribe Form */}
            <div className="flex w-full max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-3 rounded-l-lg text-gray-900 focus:outline-none"
              />
              <button className="bg-green-600 text-white p-3 rounded-r-lg font-semibold hover:bg-green-700 transition duration-300 whitespace-nowrap">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* 2. Quick Links (Col Span 1) */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
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

          {/* 3. Company Links (Col Span 1) */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-4">Company</h4>
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

          {/* 4. Contact Info (Col Span 1) */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="text-sm space-y-2 text-gray-400">
              <p>102/B Street, Mohammadpur, Dhaka</p>
              <div className="mt-4">
                <p className="font-medium text-white">Email</p>
                <a
                  href="mailto:info@companyname.com"
                  className="hover:text-green-500"
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

          {/* 5. Pay With (Col Span 1) */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-4">Pay With</h4>
            <div className="space-y-3">
              {paymentIcons.map((icon, i) => (
                <img
                  key={i}
                  src={icon.img}
                  alt={icon.name}
                  className="w-24 rounded-md shadow-md"
                />
              ))}
            </div>
          </div>
        </div>

        {/* --- Divider --- */}
        <hr className="border-gray-700 mb-6" />

        {/* Bottom Section: Copyright and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 text-xs">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <span className="text-gray-400">Sign up for our Newsletter</span>
          </div>

          <p className="text-gray-500 mb-4 md:mb-0">
            © 2025 Health Company Bangladesh Ltd. All rights reserved.
          </p>

          <div className="flex space-x-3">
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
