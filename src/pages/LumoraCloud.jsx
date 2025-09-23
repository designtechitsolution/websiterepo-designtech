import React from "react";
import { Cloud } from "lucide-react";

const LumoraCloud = () => {
  const features = [
    "Seamless migration to cloud platforms (AWS, Azure, Google Cloud)",
    "Business continuity with backup, disaster recovery, and failover solutions",
    "Hybrid & Multi-Cloud Management for smooth operations",
    "Cost Optimization to pay only for what you need",
    "Scalability on Demand to meet growing customer and market needs",
  ];

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-[#E0F2F1] via-[#B2DFDB] to-[#80CBC4] px-6 py-16">
      
      {/* Header */}
      <div className="relative w-full max-w-6xl text-center mb-20">
        <div className="bg-gradient-to-r from-[#0077B6] via-[#00A6C3] to-[#00B4D8] text-white py-16 px-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
          <Cloud className="w-24 h-24 mx-auto text-white animate-bounce" />
          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg">
            Lumora Cloud – “Your Business, Anywhere”
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-100">
            Transform your IT infrastructure into a secure, scalable, and agile environment.
          </p>
        </div>
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-[#0077B6] shadow-xl flex items-center justify-center animate-pulse">
          <Cloud className="w-12 h-12 text-white" />
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start gap-4 hover:scale-105 transition-transform duration-300"
          >
            {/* Numbered Circle */}
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-full text-white font-bold text-xl">
              {idx + 1}
            </div>

            <p className="text-gray-800 font-medium text-lg">{feature}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href="#contact"
        className="mt-16 px-10 py-4 bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all text-lg"
      >
        Contact Us
      </a>
      
    </section>
  );
};

export default LumoraCloud;
