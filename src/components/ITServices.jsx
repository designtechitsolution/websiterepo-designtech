import React from "react";
import { Link } from "react-router-dom";
import { Cloud, Cpu, Shield, TrendingUp, Code, ArrowRight, Sparkles } from "lucide-react";

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
    {
      icon: <TrendingUp size={50} color="#0077B6" />,
      title: "Digital Marketing",
      subtitle: "Amplify Your Reach",
      description: [
        "SEO & SEM strategies for online visibility",
        "Social Media Marketing across all platforms",
        "Content Marketing with engaging content",
        "Email Marketing campaigns that convert",
        "Analytics & Reporting for data-driven decisions",
        "Brand Strategy & Positioning",
      ],
      path: "/digital-marketing",
    },
    {
      icon: <Code size={50} color="#0077B6" />,
      title: "Web Development",
      subtitle: "Build Your Digital Future",
      description: [
        "Custom Web Applications for your business",
        "Responsive Design for all devices",
        "E-commerce Solutions with secure payments",
        "Progressive Web Apps (PWA)",
        "API Development & Integration",
        "Performance Optimization",
      ],
      path: "/web-development",
    },
  ];


  return (
    <section className="relative py-24 px-6 md:px-12 bg-gradient-to-br from-white via-blue-50 to-teal-50 text-gray-800 overflow-hidden">
      {/* Morphing Floating Glows */}
      <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-gradient-to-br from-blue-400 to-cyan-400 opacity-20 blur-3xl animate-floatSlow animate-morphing"></div>
      <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] bg-gradient-to-br from-teal-400 to-green-400 opacity-20 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-to-br from-yellow-300 to-orange-300 opacity-10 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] bg-gradient-to-br from-purple-400 to-pink-400 opacity-15 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '3s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Enhanced Header */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-6 py-2 rounded-full shadow-lg mb-4 animate-zoomIn border-2 border-blue-200">
          <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
          <span className="text-sm font-bold text-blue-700">Lumora Philosophy</span>
        </div>
        
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight animate-slideInLeft">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077B6] via-[#00a6c3] to-[#0077B6] animate-gradient bg-[length:200%_100%]">
            IT Services
          </span>
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-16 text-xl sm:text-2xl leading-relaxed animate-slideInRight font-medium">
          Lumora represents <span className="text-blue-700 font-bold">clarity</span>, <span className="text-purple-700 font-bold">innovation</span>, and a new dawn in technology.
          Every service illuminates complex challenges and makes technology more <span className="text-teal-700 font-bold">human</span>.
        </p>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col p-8 rounded-3xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:rotate-1 bg-gradient-to-br from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 animate-fadeInUp group relative overflow-hidden"
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              {/* Shimmer Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 animate-shimmer"></div>
              </div>
              
              <div className="relative z-10">
                <div className="bg-white p-6 rounded-3xl w-fit mb-6 mx-auto shadow-2xl transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 animate-glow border-4 border-white/50">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-extrabold mb-2 text-center text-white group-hover:scale-105 transition-transform duration-300">{service.title}</h3>
                <p className="text-center text-yellow-200 mb-6 italic text-lg font-semibold">{service.subtitle}</p>
                <ul className="space-y-3 text-white text-left mb-8">
                  {service.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 transform transition-all duration-300 hover:translate-x-3 hover:text-yellow-200">
                      <span className="text-yellow-400 mt-1 flex-shrink-0">✦</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.path}
                  className="group/btn mt-auto w-full px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-[length:200%_100%] hover:bg-right text-blue-900 font-bold text-lg transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></span>
                  <span className="relative">Learn More</span>
                  <ArrowRight className="w-5 h-5 relative group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITServices;
