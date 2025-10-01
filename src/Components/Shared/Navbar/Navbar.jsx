"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, PhoneCall, Search, X } from "lucide-react";
import { useState } from "react";

const Container = ({ children, className = "" }) => {
  return (
    <motion.section className={`max-w-[1600px] w-[95%] mx-auto ${className}`}>
      {children}
    </motion.section>
  );
};

const navItems = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "SERVICE", href: "#service" },
  { name: "BLOG", href: "#blog" },
  { name: "FAQS", href: "#faqs" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Framer Motion variants for mobile menu
  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  // Framer Motion variants for desktop menu items (staggered effect)
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      {/* Container is now directly available */}
      <Container className="py-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-green-600 tracking-wider"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Logo
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <AnimatePresence>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 transition duration-300"
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </AnimatePresence>
          </div>

          {/* Icons & Contact Info */}
          <div className="flex items-center space-x-6">
            <motion.div
              className="hidden md:flex items-center space-x-2 text-green-600 cursor-pointer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Search className="w-5 h-5" />
            </motion.div>

            <motion.div
              className="flex items-center space-x-2 text-green-600 border border-green-600 p-2 rounded-full hover:bg-green-50 transition duration-300 cursor-pointer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <PhoneCall className="w-5 h-5" />
              <span className="hidden lg:inline text-sm font-semibold">
                +1-555-123-4567
              </span>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-green-600 transition duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-16 right-0 w-full bg-white lg:hidden shadow-lg border-t border-gray-100"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
