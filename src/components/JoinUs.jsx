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
    if (status.includes("⚠️")) return "bg-yellow-400 text-black";
    if (status.includes("❌")) return "bg-red-600";
    return "bg-gray-700";
  };

  return (
    <section id="joinus" className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/15 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative z-10 container mx-auto px-4 max-w-3xl">
        {/* Enhanced Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
            <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0077b6] via-[#00a6c3] to-[#00b4d8]">
              Join Our Team
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Start your journey with us! We're looking for talented individuals to join our growing team.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <span>Multiple Positions</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Send className="w-5 h-5 text-blue-600" />
              <span>Quick Response</span>
            </div>
          </div>
        </div>

        <form
          className="flex flex-col gap-5 bg-white/80 backdrop-blur-lg p-8 rounded-2xl border-2 border-[#00b4d8]/30 shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 group relative overflow-hidden animate-fadeInUp"
          style={{ animationDelay: '0.3s' }}
          onSubmit={handleSubmit}
        >
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-teal-500/0 group-hover:from-blue-500/5 group-hover:to-teal-500/5 transition-all duration-500 rounded-2xl"></div>
          
          {/* Corner accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-400/10 rounded-tr-full group-hover:scale-150 transition-transform duration-500"></div>
          
          <div className="relative z-10">
          {/* Honeypot */}
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="hidden"
          />

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700 ml-1 flex items-center gap-2">
              <User size={16} className="text-blue-600" />
              Full Name
            </label>
            <div className="flex items-center gap-3 border-2 border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#00b4d8] focus-within:border-[#00b4d8] transition-all duration-300 hover:border-blue-400 hover:shadow-md group/input bg-white/50">
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="flex-1 outline-none text-gray-700 bg-transparent placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700 ml-1 flex items-center gap-2">
              <Mail size={16} className="text-blue-600" />
              Email Address
            </label>
            <div className="flex items-center gap-3 border-2 border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#00b4d8] focus-within:border-[#00b4d8] transition-all duration-300 hover:border-blue-400 hover:shadow-md group/input bg-white/50">
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="flex-1 outline-none text-gray-700 bg-transparent placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700 ml-1 flex items-center gap-2">
              <Phone size={16} className="text-blue-600" />
              Phone Number
            </label>
            <div className="flex items-center gap-3 border-2 border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#00b4d8] focus-within:border-[#00b4d8] transition-all duration-300 hover:border-blue-400 hover:shadow-md group/input bg-white/50">
              <input
                type="text"
                name="phone"
                placeholder="+91 9876543210"
                value={formData.phone}
                onChange={handleChange}
                required
                className="flex-1 outline-none text-gray-700 bg-transparent placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700 ml-1 flex items-center gap-2">
              <Briefcase size={16} className="text-blue-600" />
              Tell Us About Yourself
            </label>
            <textarea
              name="message"
              placeholder="Share your experience, skills, and why you'd like to join our team..."
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
              className="p-4 border-2 border-gray-300 rounded-xl resize-none focus:border-[#0077b6] focus:ring-2 focus:ring-[#00b4d8] outline-none text-gray-700 transition-all duration-300 hover:border-blue-400 hover:shadow-md bg-white/50 placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="relative w-full max-w-md bg-gradient-to-r from-[#0077b6] via-[#00a6c3] to-[#00b4d8] text-white py-4 rounded-xl font-bold text-lg hover:from-[#005f8a] hover:via-[#008fb3] hover:to-[#0099cc] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group/btn overflow-hidden"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 animate-shimmer"></div>
              </div>
              
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending Application...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    Apply Now
                  </>
                )}
              </span>
            </button>
            
            <p className="text-center text-sm text-gray-600">
              We'll get back to you within 24-48 hours
            </p>
          </div>
          </div>
        </form>

        {/* Enhanced Popup - Above Header */}
        {showPopup && (
          <div
            className={`${getPopupClass()} fixed top-24 left-1/2 -translate-x-1/2 px-8 py-4 rounded-xl text-white font-semibold shadow-2xl z-[100] animate-fadeInUp flex items-center gap-3`}
          >
            {status.includes("✅") && <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">✓</div>}
            {status.includes("⚠️") && <div className="w-6 h-6 bg-black/20 rounded-full flex items-center justify-center">!</div>}
            {status.includes("❌") && <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">✕</div>}
            <span>{status}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default JoinUs;
