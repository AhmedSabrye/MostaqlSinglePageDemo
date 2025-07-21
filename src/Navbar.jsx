import React, { useState } from "react";
import { Link } from "react-scroll";
import { useLanguage } from "./App";
import logo from "./assets/logo.png";
export default function Navbar() {
  const { language, setLanguage, isArabic } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const content = {
    EN: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    AR: {
      home: "الرئيسية",
      services: "خدماتنا",
      portfolio: "أعمالنا",
      contact: "تواصل معنا",
    },
  };

  const currentContent = content[language];

  return (
    <nav className="w-full shadow-sm bg-white/80 backdrop-blur-md fixed top-0 z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={1000}
          className="cursor-pointer flex items-center bg-black/70 rounded-full p-2"
        >
          <img src={logo} alt="logo" className="w-10 h-10" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-10 items-center">
          {[
            { name: currentContent.home, to: "home" },
            { name: currentContent.services, to: "services" },
            { name: currentContent.portfolio, to: "portfolio" },
            { name: currentContent.contact, to: "contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              duration={1000}
              spy={true}
              smooth={true}
              offset={-80}
              className="cursor-pointer text-gray-600 font-medium hover:text-[#44b3b8] transition"
              activeClass="text-[#44b3b8] font-semibold border-b-2 border-[#44b3b8] pb-1"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Language Switcher + Hamburger Button */}
        <div className="flex items-center gap-6">
          {/* Language Switcher */}
          <div className="flex bg-gray-200 rounded-full shadow px-3 py-2 gap-2">
            <button
              className={`text-sm font-bold px-5 py-2 rounded-full focus:outline-none transition ${
                language === "EN"
                  ? "bg-[#44b3b8] text-white"
                  : "text-gray-500 hover:bg-gray-300"
              }`}
              onClick={() => setLanguage("EN")}
            >
              EN
            </button>
            <button
              className={`text-sm font-bold px-5 py-2 rounded-full focus:outline-none transition ${
                language === "AR"
                  ? "bg-[#44b3b8] text-white"
                  : "text-gray-500 hover:bg-gray-300"
              }`}
              onClick={() => setLanguage("AR")}
            >
              AR
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {/* Hamburger Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-60 opacity-100 visible"
            : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 py-4 flex flex-col space-y-4">
          {[
            { name: currentContent.home, to: "home", offset: -80 },
            { name: currentContent.services, to: "services", offset: -80 },
            { name: currentContent.portfolio, to: "portfolio", offset: -80 },
            { name: currentContent.contact, to: "contact", offset: 40 },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              duration={1000}
              spy={true}
              smooth={true}
              offset={item.offset}
              className="block py-2 text-gray-700 hover:text-[#44b3b8] font-medium transition"
              activeClass="text-[#44b3b8] font-semibold"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
