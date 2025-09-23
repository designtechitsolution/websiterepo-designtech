import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo-1.png";
import company from "../assets/company.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Dropdowns
  const [servicesOpen, setServicesOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);

  // Mobile sidebar
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileNewsOpen, setMobileNewsOpen] = useState(false);

  // Router tools
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown")) {
        setServicesOpen(false);
        setNewsOpen(false);
      }
      if (
        mobileOpen &&
        !e.target.closest(".mobile-menu") &&
        !e.target.closest(".hamburger-btn")
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mobileOpen]);

  // Smooth scroll helper
  const handleScrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300); // delay for navigation
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Toggles
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleNews = () => setNewsOpen(!newsOpen);
  const toggleMobileServices = () => setMobileServicesOpen(!mobileServicesOpen);
  const toggleMobileNews = () => setMobileNewsOpen(!mobileNewsOpen);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled ? "shadow-xl" : ""
      } bg-white border-b-2 border-teal-400`}
    >
      <div className="flex justify-between items-center py-4 px-4 md:px-12 w-full">
        {/* Logo + Company */}
        <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
          <Link to="/">
            <img
              src={logo}
              alt="Design Tech IT Solution"
              className="h-12 md:h-14 lg:h-16 xl:h-20 object-contain"
            />
          </Link>
          <img
            src={company}
            alt="Design Tech IT Solution"
            className="w-[140px] md:w-[180px] lg:w-[220px] xl:w-[280px] object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2 md:gap-4 items-center">
          <Link
            to="/"
            className="px-4 py-2 text-gray-800 font-medium rounded hover:bg-gradient-to-r hover:from-blue-100 hover:to-teal-100 hover:text-teal-800 transition-all"
          >
            Home
          </Link>
          <button
            onClick={() => handleScrollTo("about")}
            className="px-4 py-2 text-gray-800 font-medium rounded hover:bg-gradient-to-r hover:from-blue-100 hover:to-teal-100 hover:text-teal-800 transition-all"
          >
            About
          </button>
          <button
            onClick={() => handleScrollTo("vision")}
            className="px-4 py-2 text-gray-800 font-medium rounded hover:bg-gradient-to-r hover:from-blue-100 hover:to-teal-100 hover:text-teal-800 transition-all"
          >
            Vision & Mission
          </button>

          {/* IT Services Dropdown */}
          <div className="relative dropdown">
            <div
              onClick={toggleServices}
              className="flex items-center gap-1 px-4 py-2 text-gray-800 font-medium rounded cursor-pointer hover:bg-gradient-to-r hover:from-blue-100 hover:to-teal-100 transition-all"
            >
              IT Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="none"
                viewBox="0 0 16 16"
                className={`stroke-teal-700 transform transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              >
                <path d="M1.5 5.5l6 6 6-6" strokeWidth="2" />
              </svg>
            </div>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-white shadow-2xl rounded-lg overflow-hidden z-50 border border-gray-200">
                <Link
                  to="/cloud"
                  className="block px-6 py-3 text-teal-700 font-medium hover:bg-teal-50 transition"
                >
                  Lumora Cloud
                </Link>
                <Link
                  to="/ai"
                  className="block px-6 py-3 text-teal-700 font-medium hover:bg-teal-50 transition"
                >
                  Lumora AI
                </Link>
                <Link
                  to="/secure"
                  className="block px-6 py-3 text-teal-700 font-medium hover:bg-teal-50 transition"
                >
                  Lumora Secure
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={() => handleScrollTo("staffing")}
            className="px-4 py-2 text-gray-800 font-medium rounded hover:bg-gradient-to-r hover:from-blue-100 hover:to-teal-100 hover:text-teal-800 transition-all"
          >
            Staffing
          </button>

          {/* News Dropdown */}
          <div className="relative dropdown">
            <div
              onClick={toggleNews}
              className="flex items-center gap-1 px-4 py-2 text-gray-800 font-medium rounded cursor-pointer hover:bg-gradient-to-r hover:from-blue-100 hover:to-teal-100 transition-all"
            >
              News
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="none"
                viewBox="0 0 16 16"
                className={`stroke-teal-700 transform transition-transform duration-300 ${
                  newsOpen ? "rotate-180" : ""
                }`}
              >
                <path d="M1.5 5.5l6 6 6-6" strokeWidth="2" />
              </svg>
            </div>
            {newsOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-white shadow-2xl rounded-lg overflow-hidden z-50 border border-gray-200">
                <Link
                  to="/upload-news"
                  className="block px-6 py-3 text-teal-700 font-medium hover:bg-teal-50 transition"
                >
                  Upload News
                </Link>
                <Link
                  to="/view-news"
                  className="block px-6 py-3 text-teal-700 font-medium hover:bg-teal-50 transition"
                >
                  View News
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={() => handleScrollTo("contact")}
            className="px-4 py-2 text-gray-800 font-medium rounded hover:bg-gradient-to-r hover:from-blue-100 hover:to-teal-100 hover:text-teal-800 transition-all"
          >
            Contact
          </button>
          <button
            onClick={() => handleScrollTo("joinus")}
            className="px-4 py-2 text-gray-800 font-medium rounded hover:bg-gradient-to-r hover:from-blue-100 hover:to-teal-100 hover:text-teal-800 transition-all"
          >
            Join Us
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="hamburger-btn text-white bg-blue-500 p-2 rounded-md focus:outline-none relative z-50"
          >
            <div className="w-6 h-6 flex flex-col justify-between items-center">
              <span
                className={`block h-0.5 w-6 bg-white transform transition duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white transition duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white transform transition duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-auto min-h-screen w-64 bg-white text-blue-500 shadow-2xl border-l border-gray-200 z-40 transform transition-transform duration-300 ease-in-out mobile-menu ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col mt-20 p-4 gap-2">
          <Link
            to="/"
            className="py-3 px-3 rounded-lg hover:bg-teal-100 hover:shadow-md transition-all font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <button
            onClick={() => {
              handleScrollTo("about");
              setMobileOpen(false);
            }}
            className="py-3 px-3 rounded-lg hover:bg-teal-100 hover:shadow-md transition-all font-medium text-left"
          >
            About
          </button>
          <button
            onClick={() => {
              handleScrollTo("vision");
              setMobileOpen(false);
            }}
            className="py-3 px-3 rounded-lg hover:bg-teal-100 hover:shadow-md transition-all font-medium text-left"
          >
            Vision & Mission
          </button>

          {/* Mobile IT Services Accordion */}
          <div className="flex flex-col">
            <div
              onClick={toggleMobileServices}
              className="flex justify-between items-center cursor-pointer py-3 px-3 rounded-lg hover:bg-teal-100 hover:shadow-md transition-all font-medium"
            >
              IT Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="none"
                viewBox="0 0 16 16"
                className={`stroke-teal-700 transform transition-transform duration-300 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              >
                <path d="M1.5 5.5l6 6 6-6" strokeWidth="2" />
              </svg>
            </div>
            {mobileServicesOpen && (
              <div className="flex flex-col ml-4 mt-2 gap-1">
                <Link
                  to="/cloud"
                  className="py-2 px-3 rounded-lg hover:bg-teal-50 hover:shadow-sm transition-all font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  Lumora Cloud
                </Link>
                <Link
                  to="/ai"
                  className="py-2 px-3 rounded-lg hover:bg-teal-50 hover:shadow-sm transition-all font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  Lumora AI
                </Link>
                <Link
                  to="/secure"
                  className="py-2 px-3 rounded-lg hover:bg-teal-50 hover:shadow-sm transition-all font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  Lumora Secure
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              handleScrollTo("staffing");
              setMobileOpen(false);
            }}
            className="py-3 px-3 rounded-lg hover:bg-teal-100 hover:shadow-md transition-all font-medium text-left"
          >
            Staffing
          </button>

          {/* Mobile News Accordion */}
          <div className="flex flex-col">
            <div
              onClick={toggleMobileNews}
              className="flex justify-between items-center cursor-pointer py-3 px-3 rounded-lg hover:bg-teal-100 hover:shadow-md transition-all font-medium"
            >
              News
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="none"
                viewBox="0 0 16 16"
                className={`stroke-teal-700 transform transition-transform duration-300 ${
                  mobileNewsOpen ? "rotate-180" : ""
                }`}
              >
                <path d="M1.5 5.5l6 6 6-6" strokeWidth="2" />
              </svg>
            </div>
            {mobileNewsOpen && (
              <div className="flex flex-col ml-4 mt-2 gap-1">
                <Link
                  to="/upload-news"
                  className="py-2 px-3 rounded-lg hover:bg-teal-50 hover:shadow-sm transition-all font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  Upload News
                </Link>
                <Link
                  to="/view-news"
                  className="py-2 px-3 rounded-lg hover:bg-teal-50 hover:shadow-sm transition-all font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  View News
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              handleScrollTo("contact");
              setMobileOpen(false);
            }}
            className="py-3 px-3 rounded-lg hover:bg-teal-100 hover:shadow-md transition-all font-medium text-left"
          >
            Contact
          </button>
          <button
            onClick={() => {
              handleScrollTo("joinus");
              setMobileOpen(false);
            }}
            className="py-3 px-3 rounded-lg hover:bg-teal-100 hover:shadow-md transition-all font-medium text-left"
          >
            Join Us
          </button>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-gray-500/40 z-30"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
