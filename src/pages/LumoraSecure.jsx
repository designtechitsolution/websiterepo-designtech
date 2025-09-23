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
    <section className="w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-gray-100 to-white px-6 py-16">
      
      {/* Header */}
      <div className="relative w-full max-w-6xl text-center mb-20">
        <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white py-16 px-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
          <Shield className="w-24 h-24 mx-auto text-yellow-400 animate-bounce" />
          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg">
            Lumora Secure – “Your Digital Shield”
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-100">
            Protect your business from modern cyber threats while maintaining trust and compliance.
          </p>
        </div>
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-yellow-400 shadow-xl flex items-center justify-center animate-pulse">
          <Shield className="w-12 h-12 text-white" />
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-start gap-4 hover:scale-105 transition-transform duration-300"
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
        className="mt-16 px-10 py-4 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all text-lg"
      >
        Contact Us
      </a>
      
    </section>
  );
};

export default LumoraSecure;
