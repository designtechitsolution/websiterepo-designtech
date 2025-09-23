import React from "react";
import { Link } from "react-router-dom";
import { Cloud, Cpu, Shield } from "lucide-react";

const ITServices = () => {
  const services = [
    {
      icon: <Cloud size={50} color="#0077B6" />,
      title: "Lumora Cloud",
      subtitle: "Your Business, Anywhere",
      description: [
        "Seamless migration to AWS, Azure, Google Cloud",
        "Business continuity with backup & disaster recovery",
        "Hybrid & multi-cloud management",
        "Cost optimization – pay only for what you use",
        "Scalability on demand for growth",
      ],
      path: "/cloud",
    },
    {
      icon: <Cpu size={50} color="#0077B6" />,
      title: "Lumora AI",
      subtitle: "Smarter Decisions, Faster Growth",
      description: [
        "Predictive analytics for trends & outcomes",
        "AI-powered automation of routine tasks",
        "Conversational AI (chatbots & assistants)",
        "Computer vision for visual data insights",
        "Generative AI for content creation",
        "AI agents supporting Sales, HR, IT & Analytics",
      ],
      path: "/ai",
    },
    {
      icon: <Shield size={50} color="#0077B6" />,
      title: "Lumora Secure",
      subtitle: "Your Digital Shield",
      description: [
        "24/7 threat monitoring & intrusion prevention",
        "Proactive penetration testing",
        "Data protection & compliance (GDPR, HIPAA, ISO)",
        "Cloud security for hybrid/multi-cloud workloads",
        "Identity & access management",
      ],
      path: "/secure",
    },
  ];


  return (
    <section className="relative py-24 px-6 md:px-12 bg-white text-gray-800 overflow-hidden">
      {/* Floating Pastel Glows */}
      {/* <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-[#A3D8F4] opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] bg-[#A3D8F4] opacity-20 rounded-full blur-3xl animate-pulse delay-700"></div> */}

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-wide text-[#0077B6]">
          IT Services – Lumora Philosophy
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-lg sm:text-xl leading-relaxed">
          Lumora represents clarity, innovation, and a new dawn in technology.
          Every service illuminates complex challenges and makes technology more human.
        </p>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col p-8 rounded-3xl shadow-lg transform transition-transform duration-500 hover:scale-105 bg-blue-400`}
            >
              <div className="bg-white p-5 rounded-2xl w-fit mb-6 mx-auto shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-1 text-center">{service.title}</h3>
              <p className="text-center text-gray-700 mb-4 italic">{service.subtitle}</p>
              <ul className="list-disc list-inside space-y-2 text-white text-left mb-6">
                {service.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <Link
                to={service.path}
                className="mt-auto w-fit mx-auto px-6 py-3 rounded-xl bg-yellow-400 text-blue-900 font-semibold hover:bg-blue-600 hover:text-yellow-400 transition"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITServices;
