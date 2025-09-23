import React from "react";
import {
  Briefcase,
  Users,
  Globe,
  Building2,
  ClipboardCheck,
  UserCheck,
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
    <section id="staffing" className="py-20 bg-gray-50">
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#0077b6] uppercase tracking-wide">
        Our Core Staffing Services
      </h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-[1500px] mx-auto mt-12">
        {services.map((s, idx) => (
          <div
            key={idx}
            className="flex-1 min-w-[260px] max-w-[320px] bg-gradient-to-br from-[#0077b6] to-[#00a6c3] text-white rounded-2xl p-8 text-center transition-transform duration-300 shadow-md hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
          >
            <div className="w-[70px] h-[70px] mx-auto mb-4 rounded-full bg-yellow-400 flex items-center justify-center text-gray-900 text-2xl transition-transform duration-300 hover:rotate-6 hover:scale-110">
              {s.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-100">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StaffingServices;
