import React from "react";
import visionBanner from "../assets/vision.jpg";
import missionBanner from "../assets/mission.jpg";
import { Eye, Target, Sparkles } from "lucide-react";

const VisionMission = () => {
  return (
    <section
      id="vision"
      className="relative py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F8FDFF] via-[#F0FAFF] to-[#E6F7FB] text-gray-800 overflow-hidden animate-gradient"
    >
      {/* Morphing decorative glows */}
      <div className="absolute -top-40 -right-40 w-[450px] h-[450px] bg-gradient-to-br from-blue-400 to-cyan-400 opacity-30 blur-3xl animate-floatSlow animate-morphing"></div>
      <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] bg-gradient-to-br from-teal-400 to-green-400 opacity-30 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-gradient-to-br from-yellow-300 to-orange-300 opacity-20 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] bg-gradient-to-br from-purple-300 to-pink-300 opacity-20 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '3s' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center mb-10 sm:mb-12 lg:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-5">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077B6] via-[#00A6C3] to-[#0077B6] animate-gradient bg-[length:200%_100%]">
            Our Vision & Mission
          </span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
          Guiding principles that drive our commitment to excellence and innovation
        </p>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto space-y-10 sm:space-y-12 lg:space-y-14">
        {/* Vision Row - Content left, Image right */}
        <div className="flex flex-col lg:flex-row items-center gap-5 sm:gap-6 lg:gap-8 group">
          {/* Image first on mobile/tablet, second on desktop */}
          <div className="w-full lg:flex-1 lg:flex-[1.1] lg:order-2 relative animate-slideInRight">
            <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl sm:rounded-3xl opacity-15 sm:opacity-20 blur-xl group-hover:opacity-30 sm:group-hover:opacity-40 transition-opacity duration-300 sm:duration-500"></div>
            <img
              src={visionBanner}
              alt="Vision Banner"
              className="relative w-full h-[220px] sm:h-[280px] lg:h-[350px] object-cover rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg transition-all duration-300 group-hover:scale-[1.02] lg:group-hover:scale-[1.03] group-hover:shadow-lg group-hover:shadow-[#0077B6]/20"
            />
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent group-hover:border-[#0077B6]/30 sm:group-hover:border-[#0077B6]/50 transition duration-300 sm:duration-500"></div>
          </div>

          {/* Text card second on mobile/tablet, first on desktop */}
          <div className="w-full lg:flex-1 lg:flex-[0.9] lg:order-1 text-center lg:text-left bg-white/90 backdrop-blur-md p-5 sm:p-6 lg:p-8 rounded-xl shadow-lg border-2 border-[#A3D8F4]/50 transition-all duration-300 group-hover:shadow-md group-hover:shadow-[#0077B6]/15 group-hover:bg-white/95 lg:group-hover:-translate-x-1 animate-slideInLeft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Eye className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#0077B6] animate-glow" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight relative text-[#0077B6]">
                Our Vision
              </h2>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 relative">
              "To be a trusted partner for businesses worldwide, empowering them
              to achieve growth, innovation, and excellence through skilled people
              and cutting-edge technology."
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed relative">
              Our vision emphasizes{" "}
              <span className="font-semibold text-[#0077B6] transition-colors duration-300 hover:text-teal-600">trust</span>,{" "}
              <span className="font-semibold text-[#0077B6] transition-colors duration-300 hover:text-teal-600">collaboration</span>, and{" "}
              <span className="font-semibold text-[#0077B6] transition-colors duration-300 hover:text-teal-600">impact</span>,
              focusing on <em className="font-semibold not-italic">client success</em> over mere service delivery.
            </p>
          </div>
        </div>

        {/* Mission Row - Image left, Content right */}
        <div className="flex flex-col lg:flex-row items-center gap-5 sm:gap-6 lg:gap-8 group">
          {/* Image first on all screens */}
          <div className="w-full lg:flex-1 lg:flex-[1.1] lg:order-1 relative animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-2xl sm:rounded-3xl opacity-15 sm:opacity-20 blur-xl group-hover:opacity-30 sm:group-hover:opacity-40 transition-opacity duration-300 sm:duration-500"></div>
            <img
              src={missionBanner}
              alt="Mission Banner"
              className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] object-cover rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl transition-all duration-500 sm:duration-700 group-hover:scale-[1.04] sm:group-hover:scale-[1.06] lg:group-hover:scale-[1.08] group-hover:rotate-0 sm:group-hover:rotate-1 group-hover:shadow-xl sm:group-hover:shadow-2xl group-hover:shadow-[#00A6C3]/20 sm:group-hover:shadow-[#00A6C3]/30"
            />
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent group-hover:border-[#00A6C3]/30 sm:group-hover:border-[#00A6C3]/50 transition duration-300 sm:duration-500"></div>
          </div>

          {/* Text card second on all screens */}
          <div className="w-full lg:flex-1 lg:flex-[0.9] lg:order-2 text-center lg:text-left bg-white/80 backdrop-blur-lg p-6 sm:p-8 lg:p-10 xl:p-12 rounded-2xl shadow-xl sm:shadow-2xl border-2 border-[#00A6C3]/50 transition-all duration-500 sm:duration-700 group-hover:shadow-xl sm:group-hover:shadow-2xl group-hover:shadow-[#00A6C3]/20 sm:group-hover:shadow-[#00A6C3]/30 group-hover:bg-white/90 lg:group-hover:translate-x-2 xl:group-hover:translate-x-4 animate-slideInRight relative overflow-hidden" style={{ animationDelay: '0.2s' }}>
            <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:w-32 xl:h-32 bg-teal-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#00A6C3] animate-glow" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight relative text-[#00A6C3]">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 relative">
              Our mission is to empower businesses to thrive by connecting them with
              the right talent and delivering technology solutions that simplify operations
              and drive growth.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 relative font-medium">
              We aim to:
            </p>
            <ul className="space-y-2 text-left relative">
              {[
                "Build lasting partnerships rooted in trust and collaboration.",
                "Deliver innovative solutions in Cloud, Cybersecurity, AI, and IT Support.",
                "Enable sustainable growth by combining people, processes, and technology.",
              ].map((point, idx) => (
                <li
                  key={idx}
                  className="relative pl-6 text-gray-700 text-sm sm:text-base before:absolute before:left-0 before:top-0 before:text-[#00A6C3] before:content-['✔'] transition-all duration-200 hover:translate-x-1 hover:text-[#00A6C3]"
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
