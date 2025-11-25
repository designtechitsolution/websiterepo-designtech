import React from "react";
import {
  Briefcase,
  Users,
  Globe,
  Building2,
  ClipboardCheck,
  UserCheck,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Contract Staffing",
    desc: "Skilled IT professionals for short-term or project-specific needs.",
    icon: <Briefcase size={32} />,
  },
  {
    title: "Permanent Staffing",
    desc: "Hire full-time professionals aligned with your culture and goals.",
    icon: <Users size={32} />,
  },
  {
    title: "Remote / Virtual IT Staffing",
    desc: "Access global IT talent cost-effectively with remote models.",
    icon: <Globe size={32} />,
  },
  {
    title: "Offshore Staffing",
    desc: "Dedicated offshore teams ensuring faster delivery & reduced costs.",
    icon: <Building2 size={32} />,
  },
  {
    title: "Recruitment Outsourcing (RPO)",
    desc: "Complete hiring lifecycle management from sourcing to onboarding.",
    icon: <ClipboardCheck size={32} />,
  },
  {
    title: "Onsite Recruitment",
    desc: "Specialized recruiters placed at client premises for faster hiring.",
    icon: <UserCheck size={32} />,
  },
];

const StaffingServices = () => {
  return (
    <section id="staffing" className="relative py-10 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 overflow-hidden">
      {/* Morphing Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-20 blur-3xl animate-floatSlow animate-morphing"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-teal-400 to-green-400 opacity-20 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-yellow-300 to-orange-300 opacity-15 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-gradient-to-br from-purple-300 to-pink-300 opacity-15 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '3s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-md px-4 sm:px-6 py-1 sm:py-1.5 rounded-full shadow-lg mb-3 sm:mb-4 mx-auto animate-zoomIn border-2 border-blue-200">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 animate-pulse" />
          <span className="text-xs sm:text-sm font-bold text-blue-700">Lumora Talent</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight animate-slideInLeft px-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077B6] via-[#00a6c3] to-[#0077B6] animate-gradient bg-[length:200%_100%]">
            Staffing Services
          </span>
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed animate-slideInRight font-medium px-2 mt-2 sm:mt-3">
          We connect <span className="text-blue-700 font-bold">top tech talent</span> with <span className="text-purple-700 font-bold">innovative companies</span>.
          Our staffing solutions are designed to <span className="text-teal-700 font-bold">elevate your team</span> and drive success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 max-w-[1500px] mx-auto mt-8 sm:mt-10 lg:mt-12 px-3 sm:px-4">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="w-full sm:max-w-[calc(50%-8px)] lg:flex-1 lg:min-w-[240px] lg:max-w-[300px] bg-gradient-to-br from-[#0077b6] via-[#0099cc] to-[#00a6c3] hover:from-[#00a6c3] hover:via-[#0099cc] hover:to-[#0077b6] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center transition-all duration-300 sm:duration-500 shadow-lg hover:-translate-y-2 sm:hover:-translate-y-3 hover:scale-[1.02] sm:hover:scale-[1.03] lg:hover:scale-105 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-blue-500/50 hover:rotate-0 sm:hover:rotate-1 lg:hover:rotate-2 animate-zoomIn group relative overflow-hidden border-2 border-white/20"
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              {/* Shimmer overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 animate-shimmer"></div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400/20 rounded-bl-full"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-gray-900 text-xl sm:text-2xl transition-all duration-300 sm:duration-500 group-hover:rotate-[360deg] group-hover:scale-110 sm:group-hover:scale-125 shadow-lg sm:shadow-2xl group-hover:shadow-yellow-400/70 animate-glow border-4 border-white/50">
                  {s.icon}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 group-hover:text-yellow-300 transition-colors duration-300">{s.title}</h3>
                <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-gray-100 group-hover:text-white transition-colors duration-300">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffingServices;
