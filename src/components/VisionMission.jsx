import React from "react";
import visionBanner from "../assets/vision.jpg";
import missionBanner from "../assets/mission.jpg";
import { Eye, Target, Sparkles } from "lucide-react";

const VisionMission = () => {
  return (
    <section
      id="vision"
      className="relative py-20 md:py-24 lg:py-28 px-6 md:px-10 lg:px-12 bg-gradient-to-br from-[#F8FDFF] via-[#F0FAFF] to-[#E6F7FB] text-gray-800 overflow-hidden animate-gradient"
    >
      {/* Morphing decorative glows */}
      <div className="absolute -top-40 -right-40 w-[450px] h-[450px] bg-gradient-to-br from-blue-400 to-cyan-400 opacity-30 blur-3xl animate-floatSlow animate-morphing"></div>
      <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] bg-gradient-to-br from-teal-400 to-green-400 opacity-30 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-gradient-to-br from-yellow-300 to-orange-300 opacity-20 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] bg-gradient-to-br from-purple-300 to-pink-300 opacity-20 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '3s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-20 md:space-y-24 lg:space-y-32">
        {/* Vision Row - Content left, Image right */}
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-16 group">
          {/* Image first on mobile/tablet, second on desktop */}
          <div className="w-full lg:flex-1 lg:flex-[1.1] lg:order-2 relative animate-slideInRight">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-teal-400 rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
            <img
              src={visionBanner}
              alt="Vision Banner"
              className="relative w-full h-[300px] md:h-[350px] lg:h-[450px] object-cover rounded-3xl shadow-xl transition-all duration-700 group-hover:scale-[1.08] group-hover:rotate-2 group-hover:shadow-2xl group-hover:shadow-[#0077B6]/30"
            />
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0077B6]/50 transition duration-500"></div>
          </div>

          {/* Text card second on mobile/tablet, first on desktop */}
          <div className="w-full lg:flex-1 lg:flex-[0.9] lg:order-1 text-center lg:text-left bg-white/80 backdrop-blur-lg p-8 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl shadow-2xl border-2 border-[#A3D8F4]/50 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-[#0077B6]/30 group-hover:bg-white/90 lg:group-hover:-translate-x-4 animate-slideInLeft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="flex items-center justify-center lg:justify-start gap-2 md:gap-3 mb-5 md:mb-6">
              <Eye className="w-8 md:w-10 lg:w-10 h-8 md:h-10 lg:h-10 text-[#0077B6] animate-glow" />
              <h2 className="text-[#0077B6] text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight relative">
                Our Vision
              </h2>
            </div>
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed mb-5 md:mb-6 relative">
              "To be a trusted partner for businesses worldwide, empowering them
              to achieve growth, innovation, and excellence through skilled people
              and cutting-edge technology."
            </p>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed relative">
              Our vision emphasizes{" "}
              <span className="font-semibold text-[#0077B6] transition-colors duration-300 hover:text-teal-600">trust</span>,{" "}
              <span className="font-semibold text-[#0077B6] transition-colors duration-300 hover:text-teal-600">collaboration</span>, and{" "}
              <span className="font-semibold text-[#0077B6] transition-colors duration-300 hover:text-teal-600">impact</span>,
              focusing on <em>client success</em> over mere service delivery.
            </p>
          </div>
        </div>

        {/* Mission Row - Image left, Content right */}
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-16 group">
          {/* Image first on all screens */}
          <div className="w-full lg:flex-1 lg:flex-[1.1] lg:order-1 relative animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
            <img
              src={missionBanner}
              alt="Mission Banner"
              className="relative w-full h-[300px] md:h-[350px] lg:h-[450px] object-cover rounded-3xl shadow-xl transition-all duration-700 group-hover:scale-[1.08] group-hover:rotate-2 group-hover:shadow-2xl group-hover:shadow-[#00A6C3]/30"
            />
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#00A6C3]/50 transition duration-500"></div>
          </div>

          {/* Text card second on all screens */}
          <div className="w-full lg:flex-1 lg:flex-[0.9] lg:order-2 text-center lg:text-left bg-white/80 backdrop-blur-lg p-8 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl shadow-2xl border-2 border-[#00A6C3]/50 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-[#00A6C3]/30 group-hover:bg-white/90 lg:group-hover:translate-x-4 animate-slideInRight relative overflow-hidden" style={{ animationDelay: '0.2s' }}>
            <div className="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-teal-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="flex items-center justify-center lg:justify-start gap-2 md:gap-3 mb-5 md:mb-6">
              <Target className="w-8 md:w-10 lg:w-10 h-8 md:h-10 lg:h-10 text-[#00A6C3] animate-glow" />
              <h2 className="text-[#00A6C3] text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight relative">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed mb-5 md:mb-6 relative">
              Our mission is to empower businesses to thrive by connecting them with
              the right talent and delivering technology solutions that simplify operations
              and drive growth.
            </p>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed mb-5 md:mb-6 relative">
              We aim to:
            </p>
            <ul className="space-y-4 md:space-y-5 text-left relative">
              {[
                "Build lasting partnerships rooted in trust and collaboration.",
                "Deliver innovative solutions in Cloud, Cybersecurity, AI, and IT Support.",
                "Enable sustainable growth by combining people, processes, and technology.",
              ].map((point, idx) => (
                <li
                  key={idx}
                  className="relative pl-8 md:pl-10 text-gray-700 font-medium text-base md:text-lg before:absolute before:left-0 before:top-0 before:text-[#00A6C3] before:content-['✔'] transition-all duration-300 hover:translate-x-2 hover:text-[#00A6C3]"
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
