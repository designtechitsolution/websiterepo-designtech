import React, { useState, useEffect } from "react";
import { Phone, Mail, User, Briefcase, Send, Sparkles } from "lucide-react";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^[0-9]{10,15}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.website.trim() !== "") {
      setStatus("⚠️ Spam detected.");
      setShowPopup(true);
      return;
    }
    if (!isValidEmail(formData.email)) {
      setStatus("⚠️ Please enter a valid email.");
      setShowPopup(true);
      return;
    }
    if (!isValidPhone(formData.phone)) {
      setStatus("⚠️ Please enter a valid phone number.");
      setShowPopup(true);
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("http://localhost:5001/joinus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.result === "success") {
        setStatus("✅ Application sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "", website: "" });
      } else {
        setStatus("❌ Something went wrong.");
      }
    } catch (error) {
      setStatus("⚠️ Error sending data.");
    } finally {
      setLoading(false);
      setShowPopup(true);
    }
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const getPopupClass = () => {
    if (status.includes("✅")) return "bg-green-600";
    if (status.includes("⚠️")) return "bg-yellow-300 text-black";
    if (status.includes("❌")) return "bg-red-600";
    return "bg-gray-700";
  };

  return (
    <section id="joinus" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-white overflow-hidden">
      {/* Animated Background Elements - Optimized for mobile */}
      <div className="absolute top-4 sm:top-10 left-4 sm:left-10 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 bg-blue-400/15 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-float"></div>
      <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 w-52 sm:w-64 md:w-80 h-52 sm:h-64 md:h-80 bg-teal-400/15 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-yellow-300/10 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-pulse"></div>
      
      <div className="relative z-10 container mx-auto px-3 sm:px-4 max-w-3xl">
        {/* Enhanced Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-fadeInUp">
          <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-500 animate-pulse" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0077b6] via-[#00a6c3] to-[#00b4d8]">
              Join Our Team
            </h2>
            <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2">
            Start your journey with us! We're looking for talented individuals to join our growing team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-1 sm:gap-2 bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
              <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-600 flex-shrink-0" />
              <span>Multiple Positions</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center gap-1 sm:gap-2 bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-600 flex-shrink-0" />
              <span>Quick Response</span>
            </div>
          </div>
        </div>

        <form
          className="flex flex-col gap-3 sm:gap-4 md:gap-5 bg-white/80 backdrop-blur-lg p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-2 border-[#00b4d8]/20 sm:border-[#00b4d8]/30 shadow-lg sm:hover:-translate-y-2 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-blue-500/20 sm:hover:shadow-blue-500/30 transition-all duration-300 sm:duration-500 group relative overflow-hidden animate-fadeInUp"
          style={{ animationDelay: '0.3s' }}
          onSubmit={handleSubmit}
        >
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-teal-500/0 group-hover:from-blue-500/5 group-hover:to-teal-500/5 transition-all duration-300 sm:duration-500 rounded-xl sm:rounded-2xl"></div>
          
          {/* Corner accents - Smaller on mobile */}
          <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-blue-400/10 rounded-bl-full group-hover:scale-125 sm:group-hover:scale-150 transition-transform duration-300 sm:duration-500"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-teal-400/10 rounded-tr-full group-hover:scale-125 sm:group-hover:scale-150 transition-transform duration-300 sm:duration-500"></div>
          
          <div className="relative z-10 space-y-3 sm:space-y-4">
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="hidden"
              aria-hidden="true"
              tabIndex="-1"
            />

            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-xs sm:text-sm font-semibold text-gray-700 ml-1 flex items-center gap-1.5">
                <User size={14} className="text-blue-600 flex-shrink-0" />
                Full Name
              </label>
              <div className="flex items-center gap-2 sm:gap-3 border border-gray-300 sm:border-2 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 focus-within:ring-1 sm:focus-within:ring-2 focus-within:ring-[#00b4d8] focus-within:border-[#00b4d8] transition-all duration-200 hover:border-blue-400 hover:shadow-sm sm:hover:shadow-md group/input bg-white/50">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="flex-1 w-full outline-none text-sm sm:text-base text-gray-700 bg-transparent placeholder:text-gray-400"
                  aria-required="true"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-xs sm:text-sm font-semibold text-gray-700 ml-1 flex items-center gap-1.5">
                <Mail size={14} className="text-blue-600 flex-shrink-0" />
                Email Address
              </label>
              <div className="flex items-center gap-2 sm:gap-3 border border-gray-300 sm:border-2 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 focus-within:ring-1 sm:focus-within:ring-2 focus-within:ring-[#00b4d8] focus-within:border-[#00b4d8] transition-all duration-200 hover:border-blue-400 hover:shadow-sm sm:hover:shadow-md group/input bg-white/50">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="flex-1 w-full outline-none text-sm sm:text-base text-gray-700 bg-transparent placeholder:text-gray-400"
                  aria-required="true"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="text-xs sm:text-sm font-semibold text-gray-700 ml-1 flex items-center gap-1.5">
                <Phone size={14} className="text-blue-600 flex-shrink-0" />
                Phone Number
              </label>
              <div className="flex items-center gap-2 sm:gap-3 border border-gray-300 sm:border-2 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 focus-within:ring-1 sm:focus-within:ring-2 focus-within:ring-[#00b4d8] focus-within:border-[#00b4d8] transition-all duration-200 hover:border-blue-400 hover:shadow-sm sm:hover:shadow-md group/input bg-white/50">
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="flex-1 w-full outline-none text-sm sm:text-base text-gray-700 bg-transparent placeholder:text-gray-400"
                  aria-required="true"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-xs sm:text-sm font-semibold text-gray-700 ml-1 flex items-center gap-1.5">
                <Briefcase size={14} className="text-blue-600 flex-shrink-0" />
                Tell Us About Yourself
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Share your experience, skills, and why you'd like to join our team..."
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full border border-gray-300 sm:border-2 rounded-lg sm:rounded-xl p-3 sm:p-4 focus:ring-1 sm:focus:ring-2 focus:ring-[#00b4d8] focus:border-[#00b4d8] transition-all duration-200 hover:border-blue-400 hover:shadow-sm sm:hover:shadow-md bg-white/50 resize-none outline-none text-sm sm:text-base text-gray-700 placeholder:text-gray-400"
                aria-required="true"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`mt-2 sm:mt-4 w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-bold text-white bg-gradient-to-r from-[#0077b6] to-[#00b4d8] hover:from-[#00b4d8] hover:to-[#0077b6] transition-all duration-200 sm:duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:shadow-blue-500/20 sm:hover:shadow-blue-500/30 transform active:scale-95 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#00b4d8] focus:ring-offset-2 ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
              aria-busy={loading}
              aria-live="polite"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Sending...</span>
                </>
              ) : (
                <>
                  <Send size={16} className="flex-shrink-0" />
                  <span className="text-sm sm:text-base">Submit Application</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Status Popup */}
        {showPopup && (
          <div 
            className={`fixed left-1/2 top-20 sm:top-32 transform -translate-x-1/2 px-6 py-3 rounded-full text-sm font-medium text-white shadow-lg z-[99999] flex items-center justify-center gap-2 animate-bounceIn ${getPopupClass()} max-w-[90%] sm:max-w-max backdrop-blur-sm min-w-[200px]`}
          >
            {status}
          </div>
        )}
      </div>
    </section>
  );
};

export default JoinUs;
