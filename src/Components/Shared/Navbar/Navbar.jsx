"use client";
import Container from "@/Components/Container/Container";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [open, setOpen] = useState(false);

  // Effect to hide/show the navbar on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to lock body scroll when the drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: "0%" },
    exit: { x: "100%" },
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-me" },
    { name: "Services", path: "/service" },
    { name: "Blog", path: "/blog" },
    { name: "FAQs", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* The main header component that hides/shows */}
      <header
        className={`fixed top-0 w-full p-4 transition-transform duration-300 z-50 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Container className="flex items-center justify-between py-4">
          {/* Logo + desktop links */}
          <div className="flex items-end gap-4">
            <h1 className="text-2xl font-bold text-white">Dr. Ruma</h1>
            <div className="hidden md:flex gap-6 text-sm text-white">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="hover:text-accent transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop contact */}
          <div className="lg:flex items-center gap-4 hidden">
            <Link
              href="tel:+8801781131905"
              className="hover:opacity-90 flex items-center text-white"
            >
              <img src="/contact.svg" alt="" /> <span>+8801781131905</span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden">
            <button onClick={() => setOpen(!open)} className="p-2 text-white">
              {open ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
            </button>
          </div>
        </Container>
      </header>

      {/* The mobile drawer menu, now outside the header */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 z-[55]"
            />

            {/* Drawer */}
            <motion.div
              key="mobileMenu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[80%] bg-primary/95 text-white z-[60] shadow-lg"
            >
              <button
                onClick={() => setOpen(!open)}
                className="p-2 text-white ml-5 mt-10"
              >
                <HiOutlineX size={32} />
              </button>
              <div className="p-8 pl-16 flex flex-col gap-4 text-lg">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="py-2 hover:text-accent transition"
                    onClick={() => setOpen(!open)}
                  >
                    {item.name}
                  </Link>
                ))}
                <button
                  onClick={() => setOpen(false)}
                  className="mt-4 bg-white text-primary px-5 py-3 rounded-lg font-semibold hover:bg-primary-light transition"
                >
                  Book Appointment
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
