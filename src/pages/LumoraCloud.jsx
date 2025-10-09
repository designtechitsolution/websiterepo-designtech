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
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-[#E0F2F1] via-[#B2DFDB] to-[#80CBC4] px-6 py-16 overflow-hidden animate-gradient">
      {/* Animated Background Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-300/15 rounded-full blur-3xl animate-pulse"></div>
      
      {/* Header */}
      <div className="relative w-full max-w-6xl text-center mb-20 z-10 animate-fadeInUp">
        <div className="bg-gradient-to-r from-[#0077B6] via-[#00A6C3] to-[#00B4D8] text-white py-16 px-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 group relative overflow-hidden">
          {/* Shimmer effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 animate-shimmer"></div>
          </div>
          <div className="relative z-10">
            <Cloud className="w-24 h-24 mx-auto text-white animate-float" />
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg">
              Lumora Cloud – "Your Business, Anywhere"
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-100">
              Transform your IT infrastructure into a secure, scalable, and agile environment.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-[#0077B6] shadow-xl flex items-center justify-center animate-pulse-glow">
          <Cloud className="w-12 h-12 text-white animate-bounce-slow" />
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex flex-col items-start gap-4 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 group relative overflow-hidden animate-fadeInUp"
            style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400/10 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
            
            {/* Numbered Circle */}
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-full text-white font-bold text-xl shadow-lg group-hover:rotate-[360deg] group-hover:scale-110 transition-all duration-500">
              {idx + 1}
            </div>

            <p className="text-gray-800 font-medium text-lg group-hover:text-[#0077B6] transition-colors duration-300">{feature}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href="#contact"
        className="relative z-10 mt-16 px-10 py-4 bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white font-bold rounded-full shadow-lg hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 text-lg animate-fadeInUp group overflow-hidden"
        style={{ animationDelay: '0.8s' }}
      >
        <span className="relative z-10">Contact Us →</span>
        <div className="absolute inset-0 bg-gradient-to-r from-[#00B4D8] to-[#0077B6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </a>
      
    </section>
  );
};

export default LumoraCloud;
