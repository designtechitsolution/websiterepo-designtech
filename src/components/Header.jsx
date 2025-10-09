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
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "shadow-2xl bg-white/95 backdrop-blur-lg border-b border-blue-200/50" 
          : "bg-white/90 backdrop-blur-md border-b-2 border-gradient-to-r from-blue-400 via-purple-400 to-teal-400"
      }`}
    >
      <div className="flex justify-between items-center py-3 md:py-4 px-4 md:px-12 w-full">
        {/* Logo + Company */}
        <div className="flex items-center gap-2 md:gap-4 lg:gap-6 group">
          <Link to="/" className="transform transition-all duration-300 hover:scale-110">
            <img
              src={logo}
              alt="Design Tech IT Solution"
              className="h-12 md:h-14 lg:h-16 xl:h-20 object-contain drop-shadow-lg"
            />
          </Link>
          <img
            src={company}
            alt="Design Tech IT Solution"
            className="w-[140px] md:w-[180px] lg:w-[220px] xl:w-[280px] object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1 md:gap-2 lg:gap-3 items-center">
          <Link
            to="/"
            className="relative px-3 lg:px-4 py-2 text-gray-700 font-semibold rounded-lg hover:text-blue-600 transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10">Home</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></span>
          </Link>
          <button
            onClick={() => handleScrollTo("about")}
            className="relative px-3 lg:px-4 py-2 text-gray-700 font-semibold rounded-lg hover:text-blue-600 transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10">About</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></span>
          </button>
          <button
            onClick={() => handleScrollTo("vision")}
            className="relative px-3 lg:px-4 py-2 text-gray-700 font-semibold rounded-lg hover:text-blue-600 transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10">Vision & Mission</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></span>
          </button>

          {/* IT Services Dropdown */}
          <div className="relative dropdown">
            <div
              onClick={toggleServices}
              className="relative flex items-center gap-1 px-3 lg:px-4 py-2 text-gray-700 font-semibold rounded-lg cursor-pointer hover:text-blue-600 transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10">IT Services</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="none"
                viewBox="0 0 16 16"
                className={`relative z-10 stroke-current transform transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              >
                <path d="M1.5 5.5l6 6 6-6" strokeWidth="2" />
              </svg>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></span>
            </div>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-3 w-56 bg-white/95 backdrop-blur-lg shadow-2xl rounded-xl overflow-hidden z-50 border border-blue-100 animate-fadeInUp">
                <Link
                  to="/cloud"
                  className="group flex items-center gap-3 px-6 py-3 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform"></span>
                  Lumora Cloud
                </Link>
                <Link
                  to="/ai"
                  className="group flex items-center gap-3 px-6 py-3 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300"
                >
                  <span className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-125 transition-transform"></span>
                  Lumora AI
                </Link>
                <Link
                  to="/secure"
                  className="group flex items-center gap-3 px-6 py-3 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300"
                >
                  <span className="w-2 h-2 rounded-full bg-teal-500 group-hover:scale-125 transition-transform"></span>
                  Lumora Secure
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={() => handleScrollTo("staffing")}
            className="relative px-3 lg:px-4 py-2 text-gray-700 font-semibold rounded-lg hover:text-blue-600 transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10">IT Staffing</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></span>
          </button>

          {/* News Dropdown */}
          <div className="relative dropdown">
            <div
              onClick={toggleNews}
              className="relative flex items-center gap-1 px-3 lg:px-4 py-2 text-gray-700 font-semibold rounded-lg cursor-pointer hover:text-blue-600 transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10">News</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="none"
                viewBox="0 0 16 16"
                className={`relative z-10 stroke-current transform transition-transform duration-300 ${
                  newsOpen ? "rotate-180" : ""
                }`}
              >
                <path d="M1.5 5.5l6 6 6-6" strokeWidth="2" />
              </svg>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></span>
            </div>
            {newsOpen && (
              <div className="absolute top-full left-0 mt-3 w-56 bg-white/95 backdrop-blur-lg shadow-2xl rounded-xl overflow-hidden z-50 border border-blue-100 animate-fadeInUp">
                <Link
                  to="/upload-news"
                  className="group flex items-center gap-3 px-6 py-3 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform"></span>
                  Upload News
                </Link>
                <Link
                  to="/view-news"
                  className="group flex items-center gap-3 px-6 py-3 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300"
                >
                  <span className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-125 transition-transform"></span>
                  View News
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={() => handleScrollTo("contact")}
            className="relative px-3 lg:px-4 py-2 text-gray-700 font-semibold rounded-lg hover:text-blue-600 transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10">Contact</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></span>
          </button>
          <button
            onClick={() => handleScrollTo("joinus")}
            className="relative px-4 lg:px-6 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] text-white font-bold rounded-full hover:bg-right transition-all duration-500 transform hover:scale-105 hover:shadow-lg shadow-md overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></span>
            <span className="relative z-10">Join Us</span>
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="hamburger-btn text-white bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg focus:outline-none relative z-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <div className="w-6 h-6 flex flex-col justify-between items-center">
              <span
                className={`block h-0.5 w-6 bg-white transform transition duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white transition duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white transform transition duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-auto min-h-screen w-72 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 backdrop-blur-xl text-gray-700 shadow-2xl border-l border-blue-200/50 z-40 transform transition-transform duration-500 ease-out mobile-menu ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col mt-20 p-6 gap-2">
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
            IT Staffing
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
