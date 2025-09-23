import React from "react";
import visionBanner from "../assets/vision.jpg";
import missionBanner from "../assets/mission.jpg";

const VisionMission = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-[#F0FAFF] text-gray-800 overflow-hidden">
      {/* Floating Pastel Glows */}
      {/* <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-[#B2F7EF] opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#A3D8F4] opacity-20 rounded-full blur-3xl animate-pulse delay-700"></div> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Vision Row */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
          <div className="flex-1 text-center md:text-left bg-white/60 backdrop-blur-md p-10 rounded-3xl shadow-lg hover:shadow-[#A3D8F4]/50 transition-shadow duration-500">
            <h2 className="text-[#0077B6] uppercase tracking-widest text-3xl md:text-4xl font-extrabold mb-6">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
              "To be a trusted partner for businesses worldwide, empowering them
              to achieve growth, innovation, and excellence through skilled people
              and cutting-edge technology."
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Our vision emphasizes <strong>trust</strong>, <strong>collaboration</strong>,
              and <strong>impact</strong>, focusing on <em>client success</em> over mere service delivery.
            </p>
          </div>
          <div className="flex-1 mb-8 md:mb-0">
            <img
              src={visionBanner}
              alt="Vision Banner"
              className="w-full rounded-3xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-[#0077B6]/40"
            />
          </div>
        </div>

        {/* Mission Row */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 mb-8 md:mb-0">
            <img
              src={missionBanner}
              alt="Mission Banner"
              className="w-full rounded-3xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-[#00A6C3]/40"
            />
          </div>
          <div className="flex-1 text-center md:text-left bg-white/60 backdrop-blur-md p-10 rounded-3xl shadow-lg hover:shadow-[#00A6C3]/50 transition-shadow duration-500">
            <h2 className="text-[#00A6C3] uppercase tracking-widest text-3xl md:text-4xl font-extrabold mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
              Our mission is to empower businesses to thrive by connecting them with
              the right talent and delivering technology solutions that simplify operations
              and drive growth.
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
              We aim to:
            </p>
            <ul className="list-none p-0 space-y-4 text-gray-700">
              <li className="relative pl-10 before:absolute before:left-0 before:top-1 before:text-[#00A6C3] before:content-['✔'] font-medium">
                <strong>Build lasting partnerships</strong> rooted in trust and collaboration.
              </li>
              <li className="relative pl-10 before:absolute before:left-0 before:top-1 before:text-[#00A6C3] before:content-['✔'] font-medium">
                <strong>Deliver innovative solutions</strong> in Cloud, Cybersecurity, AI, and IT Support.
              </li>
              <li className="relative pl-10 before:absolute before:left-0 before:top-1 before:text-[#00A6C3] before:content-['✔'] font-medium">
                <strong>Enable sustainable growth</strong> by combining people, processes, and technology.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
