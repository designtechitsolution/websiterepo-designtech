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
    <section id="staffing" className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 overflow-hidden">
      {/* Morphing Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-20 blur-3xl animate-floatSlow animate-morphing"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-teal-400 to-green-400 opacity-20 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-yellow-300 to-orange-300 opacity-15 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-gradient-to-br from-purple-300 to-pink-300 opacity-15 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '3s' }}></div>
      
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-6 py-2 rounded-full shadow-lg mb-4 mx-auto animate-zoomIn border-2 border-blue-200">
          <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
          <span className="text-sm font-bold text-blue-700">Staffing Excellence</span>
        </div>
        <h2 className="text-center text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0077b6] via-[#00a6c3] to-[#0077b6] animate-gradient bg-[length:200%_100%] tracking-tight animate-zoomIn mb-4">
          Core Staffing Services
        </h2>

        <div className="flex flex-wrap justify-center gap-8 max-w-[1500px] mx-auto mt-12 px-4">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-[260px] max-w-[320px] bg-gradient-to-br from-[#0077b6] via-[#0099cc] to-[#00a6c3] hover:from-[#00a6c3] hover:via-[#0099cc] hover:to-[#0077b6] text-white rounded-3xl p-8 text-center transition-all duration-500 shadow-xl hover:-translate-y-4 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 hover:rotate-2 animate-zoomIn group relative overflow-hidden border-2 border-white/20"
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              {/* Shimmer overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 animate-shimmer"></div>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400/20 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <div className="w-[80px] h-[80px] mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-gray-900 text-2xl transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-125 shadow-2xl group-hover:shadow-yellow-400/70 animate-glow border-4 border-white/50">
                  {s.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors duration-300">{s.title}</h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-100 group-hover:text-white transition-colors duration-300">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffingServices;
