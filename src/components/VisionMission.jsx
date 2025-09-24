import React from "react";
import visionBanner from "../assets/vision.jpg";
import missionBanner from "../assets/mission.jpg";

const VisionMission = () => {
  return (
    <section
      id="vision"
      className="relative py-28 px-6 md:px-12 bg-gradient-to-br from-[#F8FDFF] via-[#F0FAFF] to-[#E6F7FB] text-gray-800 overflow-hidden"
    >
      {/* Decorative pastel glows */}
      <div className="absolute -top-40 -right-40 w-[450px] h-[450px] bg-[#A3D8F4]/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] bg-[#B2F7EF]/30 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-32">
        {/* Vision Row */}
        <div className="flex flex-col md:flex-row items-center gap-16 group">
          {/* Image comes first on mobile, second on desktop */}
          <div className="flex-1 relative order-1 md:order-2">
            <img
              src={visionBanner}
              alt="Vision Banner"
              className="w-full rounded-3xl shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[#0077B6]/30"
            />
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0077B6]/30 transition duration-500"></div>
          </div>

          {/* Text card */}
          <div className="flex-1 text-center md:text-left bg-white/70 backdrop-blur-lg p-12 rounded-3xl shadow-lg border border-[#A3D8F4]/30 transition duration-500 group-hover:shadow-2xl group-hover:shadow-[#0077B6]/20 order-2 md:order-1">
            <h2 className="text-[#0077B6] text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
              "To be a trusted partner for businesses worldwide, empowering them
              to achieve growth, innovation, and excellence through skilled people
              and cutting-edge technology."
            </p>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Our vision emphasizes{" "}
              <span className="font-semibold text-[#0077B6]">trust</span>,{" "}
              <span className="font-semibold text-[#0077B6]">collaboration</span>, and{" "}
              <span className="font-semibold text-[#0077B6]">impact</span>,
              focusing on <em>client success</em> over mere service delivery.
            </p>
          </div>
        </div>

        {/* Mission Row */}
        <div className="flex flex-col md:flex-row items-center gap-16 group">
          {/* Image comes first on mobile, first on desktop */}
          <div className="flex-1 relative order-1 md:order-1">
            <img
              src={missionBanner}
              alt="Mission Banner"
              className="w-full rounded-3xl shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[#00A6C3]/30"
            />
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#00A6C3]/30 transition duration-500"></div>
          </div>

          {/* Text card */}
          <div className="flex-1 text-center md:text-left bg-white/70 backdrop-blur-lg p-12 rounded-3xl shadow-lg border border-[#00A6C3]/30 transition duration-500 group-hover:shadow-2xl group-hover:shadow-[#00A6C3]/20 order-2 md:order-2">
            <h2 className="text-[#00A6C3] text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
              Our mission is to empower businesses to thrive by connecting them with
              the right talent and delivering technology solutions that simplify operations
              and drive growth.
            </p>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
              We aim to:
            </p>
            <ul className="space-y-5 text-left">
              {[
                "Build lasting partnerships rooted in trust and collaboration.",
                "Deliver innovative solutions in Cloud, Cybersecurity, AI, and IT Support.",
                "Enable sustainable growth by combining people, processes, and technology.",
              ].map((point, idx) => (
                <li
                  key={idx}
                  className="relative pl-10 text-gray-700 font-medium text-lg before:absolute before:left-0 before:top-0 before:text-[#00A6C3] before:content-['✔']"
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
