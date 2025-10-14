import React from "react";
import { Shield } from "lucide-react";

const LumoraSecure = () => {
  const features = [
    "24/7 Threat Monitoring to detect and block intrusions",
    "Penetration Testing to proactively identify vulnerabilities",
    "Data Protection & Compliance adhering to GDPR, HIPAA, ISO standards",
    "Cloud Security for hybrid and multi-cloud workloads",
    "Identity & Access Management ensuring secure access",
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-gray-100 to-white px-6 py-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
      
      {/* Header */}
      <div className="relative w-full max-w-6xl text-center mb-20 z-10 animate-fadeInUp">
        <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white py-16 px-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 group relative overflow-hidden">
          {/* Shimmer effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 animate-shimmer"></div>
          </div>
          <div className="relative z-10">
            <Shield className="w-24 h-24 mx-auto text-yellow-400 animate-float" />
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg">
              Lumora Secure – "Your Digital Shield"
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-100">
              Protect your business from modern cyber threats while maintaining trust and compliance.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-yellow-400 shadow-xl flex items-center justify-center animate-pulse-glow">
          <Shield className="w-12 h-12 text-white animate-bounce-slow" />
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 flex flex-col items-start gap-4 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 group relative overflow-hidden animate-fadeInUp"
            style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-400/10 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
            
            {/* Numbered Circle */}
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-full text-white font-bold text-xl shadow-lg group-hover:rotate-[360deg] group-hover:scale-110 transition-all duration-500">
              {idx + 1}
            </div>

            <p className="text-gray-800 font-medium text-lg group-hover:text-cyan-700 transition-colors duration-300">{feature}</p>
          </div>
        ))}
      </div>

      
      
    </section>
  );
};

export default LumoraSecure;
