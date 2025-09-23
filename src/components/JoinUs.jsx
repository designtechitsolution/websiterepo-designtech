import React, { useState, useEffect } from "react";
import { Phone, Mail, User } from "lucide-react";

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
    <section id="joinus" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0077b6] text-center mb-4">
          Join Us
        </h2>
        <p className="text-center text-gray-700 mb-10 text-base sm:text-lg">
          Fill the form below to apply for opportunities with us.
        </p>

        <form
          className="flex flex-col gap-5 bg-white p-8 rounded-xl border border-[#00b4d8] shadow-md hover:-translate-y-1 transition-transform duration-300"
          onSubmit={handleSubmit}
        >
          {/* Honeypot */}
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="hidden"
          />

          <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-[#00b4d8] transition">
            <User size={20} className="text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="flex-1 outline-none text-gray-700"
            />
          </div>

          <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-[#00b4d8] transition">
            <Mail size={20} className="text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="flex-1 outline-none text-gray-700"
            />
          </div>

          <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-[#00b4d8] transition">
            <Phone size={20} className="text-gray-400" />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="flex-1 outline-none text-gray-700"
            />
          </div>

          <textarea
            name="message"
            placeholder="Tell us about yourself"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            className="p-4 border border-gray-300 rounded-lg resize-none focus:border-[#0077b6] focus:ring-2 focus:ring-[#00b4d8] outline-none text-gray-700"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#0077b6] text-white py-3 rounded-lg font-semibold hover:bg-[#005f8a] transition-colors duration-300"
          >
            {loading ? "Sending..." : "Apply Now"}
          </button>
        </form>

        {/* Popup */}
        {showPopup && (
          <div
            className={`${getPopupClass()} fixed top-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg text-white font-medium shadow-lg transition-all duration-300`}
          >
            {status}
          </div>
        )}
      </div>
    </section>
  );
};

export default JoinUs;
