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
    <section className="relative py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-teal-50 text-gray-800 overflow-hidden">
      {/* Morphing Floating Glows */}
      <div className="absolute -top-32 -left-32 w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] bg-gradient-to-br from-blue-400 to-cyan-400 opacity-15 blur-3xl animate-floatSlow animate-morphing"></div>
      <div className="absolute -bottom-32 -right-32 w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] bg-gradient-to-br from-teal-400 to-green-400 opacity-15 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] bg-gradient-to-br from-yellow-300 to-orange-300 opacity-10 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/4 right-1/4 w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] bg-gradient-to-br from-purple-400 to-pink-400 opacity-10 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '3s' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Enhanced Header */}
        <div className="mb-6 sm:mb-8 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-md px-3 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-lg mx-auto animate-zoomIn border-2 border-blue-200">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-blue-700">Lumora Philosophy</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight animate-slideInLeft px-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077B6] via-[#00a6c3] to-[#0077B6] animate-gradient bg-[length:200%_100%]">
              IT Services
            </span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed animate-slideInRight font-medium px-2">
            Lumora represents <span className="text-blue-700 font-bold">clarity</span>, <span className="text-purple-700 font-bold">innovation</span>, and a new dawn in technology.
            Every service illuminates complex challenges and makes technology more <span className="text-teal-700 font-bold">human</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col p-5 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-gradient-to-br from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 animate-fadeInUp group relative overflow-hidden"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Shimmer Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:duration-500">
                <div className="absolute inset-0 animate-shimmer"></div>
              </div>
              
              <div className="relative z-10">
                <div className="bg-white p-3 sm:p-4 rounded-xl w-fit mb-3 sm:mb-4 mx-auto shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-6 animate-glow border-2 border-white/50">
                  {React.cloneElement(service.icon, { size: 32, className: 'w-8 h-8 sm:w-9 sm:h-9' })}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold mb-1 text-center text-white group-hover:scale-105 transition-transform duration-300">{service.title}</h3>
                <p className="text-center text-yellow-200 mb-3 sm:mb-4 italic text-sm sm:text-base font-medium">{service.subtitle}</p>
                <ul className="space-y-1.5 sm:space-y-2 text-white text-left mb-4 sm:mb-5">
                  {service.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-1.5 sm:gap-2 transform transition-all duration-200 hover:translate-x-1 hover:text-yellow-200 text-xs sm:text-sm">
                      <span className="text-yellow-400 mt-1 flex-shrink-0">✦</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.path}
                  className="group/btn mt-auto w-full px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-[length:200%_100%] hover:bg-right text-blue-900 font-bold text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center gap-1.5 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></span>
                  <span className="relative">Learn More</span>
                  <ArrowRight className="w-4 h-4 relative group-hover/btn:translate-x-1 transition-transform duration-300" />
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
