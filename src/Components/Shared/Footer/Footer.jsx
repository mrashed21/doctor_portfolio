import Container from "@/Components/Container/Container";
import { Phone } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { label: "Women’s Health", href: "/" },
  { label: "Pregnancy & Antenatal Care", href: "/" },
  { label: "Fetal Medicine", href: "/" },
  { label: "Infertility Treatment", href: "/" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Dr. Runa Akhter Dola", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-gray-300">
      <Container className="px-5">
        <div className="pt-12 md:pt-20 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">
          <div className="lg:col-span-3 lg:pr-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Dr. Runa Akhter Dola
            </h3>
            <p className="text-sm leading-relaxed text-gray-400 mb-4">
              MBBS, BCS (Health), FCPS (Gynae & Obs), FICS (Feto-Maternal
              Medicine) <br />
              Consultant (Obstetrics, Gynaecology & Feto-Maternal Medicine){" "}
              <br />
              Medinova Medical Services Ltd., Malibagh, Dhaka
            </p>

            <div className="mt-4 flex items-center gap-3">
              <Phone className="text-green-500 w-5 h-5" />
              <a
                href="tel:01790118866"
                className="text-white font-semibold hover:text-green-400 transition"
              >
                01790-118866
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white mb-4 text-base">
              Services
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

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white mb-4 text-base">
              Contact & Location
            </h4>
            <div className="text-sm space-y-2 text-gray-400">
              <p>
                <strong>Chamber:</strong> Medinova Medical Services Ltd.
                (Malibagh Branch)
              </p>
              <p>House #71/A, New Circular Road, Malibagh, Dhaka-1217</p>

              <div className="mt-4">
                <p className="font-medium text-white">Email</p>
                <a
                  href="mailto:info@medinova.com.bd"
                  className="hover:text-green-500 break-all"
                >
                  info@medinova.com.bd
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

        <div className="flex flex-col md:flex-row justify-center items-center py-4 text-xs gap-4">
          <p className="text-white dark:text-white/90 mt-3 text-center md:text-left text-center">
            &copy; {new Date().getFullYear()} All rights reserved. Developed by{" "}
            <Link
              href="https://www.classicit.com.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              Classic IT
            </Link>
          </p>

          {/* Social Icons */}
          {/* <div className="flex space-x-3 order-1 md:order-3">
            <a
              href="https://www.facebook.com/MedinovaTV"
              aria-label="Facebook"
              className="bg-[#2E3547] p-2 rounded-full hover:bg-blue-600 transition"
            >
              <Facebook className="w-4 h-4 text-gray-300" />
            </a>
            <a
              href="https://www.instagram.com/medinova.bd"
              aria-label="Instagram"
              className="bg-[#2E3547] p-2 rounded-full hover:bg-pink-600 transition"
            >
              <Instagram className="w-4 h-4 text-gray-300" />
            </a>
            <a
              href="https://www.youtube.com/@MedinovaTV"
              aria-label="YouTube"
              className="bg-[#2E3547] p-2 rounded-full hover:bg-red-600 transition"
            >
              <Youtube className="w-4 h-4 text-gray-300" />
            </a>
          </div> */}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
