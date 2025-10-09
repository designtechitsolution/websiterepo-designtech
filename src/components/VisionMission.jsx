import React from "react";
import visionBanner from "../assets/vision.jpg";
import missionBanner from "../assets/mission.jpg";
import { Eye, Target, Sparkles } from "lucide-react";

const VisionMission = () => {
  return (
    <section
      id="vision"
      className="relative py-28 px-6 md:px-12 bg-gradient-to-br from-[#F8FDFF] via-[#F0FAFF] to-[#E6F7FB] text-gray-800 overflow-hidden animate-gradient"
    >
      {/* Morphing decorative glows */}
      <div className="absolute -top-40 -right-40 w-[450px] h-[450px] bg-gradient-to-br from-blue-400 to-cyan-400 opacity-30 blur-3xl animate-floatSlow animate-morphing"></div>
      <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] bg-gradient-to-br from-teal-400 to-green-400 opacity-30 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-gradient-to-br from-yellow-300 to-orange-300 opacity-20 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] bg-gradient-to-br from-purple-300 to-pink-300 opacity-20 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '3s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-32">
        {/* Vision Row */}
        <div className="flex flex-col md:flex-row items-center gap-16 group animate-fadeInUp">
          {/* Image comes first on mobile, second on desktop */}
          <div className="flex-1 relative order-1 md:order-2 animate-fadeInRight">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-teal-400 rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
            <img
              src={visionBanner}
              alt="Vision Banner"
              className="relative w-full rounded-3xl shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#0077B6]/30 animate-float"
            />
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0077B6]/50 transition duration-500"></div>
          </div>

          {/* Text card */}
          <div className="flex-1 text-center md:text-left bg-white/80 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border-2 border-[#A3D8F4]/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#0077B6]/30 group-hover:bg-white/90 group-hover:scale-105 order-2 md:order-1 animate-slideInLeft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <Eye className="w-10 h-10 text-[#0077B6] animate-glow" />
              <h2 className="text-[#0077B6] text-5xl md:text-6xl font-extrabold tracking-tight relative">
                Our Vision
              </h2>
            </div>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 relative">
              "To be a trusted partner for businesses worldwide, empowering them
              to achieve growth, innovation, and excellence through skilled people
              and cutting-edge technology."
            </p>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed relative">
              Our vision emphasizes{" "}
              <span className="font-semibold text-[#0077B6] transition-colors duration-300 hover:text-teal-600">trust</span>,{" "}
              <span className="font-semibold text-[#0077B6] transition-colors duration-300 hover:text-teal-600">collaboration</span>, and{" "}
              <span className="font-semibold text-[#0077B6] transition-colors duration-300 hover:text-teal-600">impact</span>,
              focusing on <em>client success</em> over mere service delivery.
            </p>
          </div>
        </div>

        {/* Mission Row */}
        <div className="flex flex-col md:flex-row items-center gap-16 group animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          {/* Image comes first on mobile, first on desktop */}
          <div className="flex-1 relative order-1 md:order-1 animate-fadeInLeft">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
            <img
              src={missionBanner}
              alt="Mission Banner"
              className="relative w-full rounded-3xl shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#00A6C3]/30 animate-float"
              style={{ animationDelay: '1s' }}
            />
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#00A6C3]/50 transition duration-500"></div>
          </div>

          {/* Text card */}
          <div className="flex-1 text-center md:text-left bg-white/80 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border-2 border-[#00A6C3]/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#00A6C3]/30 group-hover:bg-white/90 group-hover:scale-105 order-2 md:order-2 animate-slideInRight relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <Target className="w-10 h-10 text-[#00A6C3] animate-glow" />
              <h2 className="text-[#00A6C3] text-5xl md:text-6xl font-extrabold tracking-tight relative">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 relative">
              Our mission is to empower businesses to thrive by connecting them with
              the right talent and delivering technology solutions that simplify operations
              and drive growth.
            </p>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6 relative">
              We aim to:
            </p>
            <ul className="space-y-5 text-left relative">
              {[
                "Build lasting partnerships rooted in trust and collaboration.",
                "Deliver innovative solutions in Cloud, Cybersecurity, AI, and IT Support.",
                "Enable sustainable growth by combining people, processes, and technology.",
              ].map((point, idx) => (
                <li
                  key={idx}
                  className="relative pl-10 text-gray-700 font-medium text-lg before:absolute before:left-0 before:top-0 before:text-[#00A6C3] before:content-['✔'] transition-all duration-300 hover:translate-x-2 hover:text-[#00A6C3]"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
