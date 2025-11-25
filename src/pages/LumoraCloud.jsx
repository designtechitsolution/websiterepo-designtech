import React, { useState, useEffect } from "react";
import { 
  Cloud, 
  Server, 
  Database, 
  Shield, 
  BarChart2, 
  Zap, 
  ArrowRight,
  CloudLightning,
  Cpu,
  Clock,
  DollarSign
} from "lucide-react";

const LumoraCloud = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features = [
    {
      title: "Cloud Migration",
      description: "Seamless migration to AWS, Azure, and Google Cloud platforms",
      icon: <CloudLightning className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "Business Continuity",
      description: "Backup, disaster recovery, and failover solutions",
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "Multi-Cloud Management",
      description: "Hybrid & multi-cloud orchestration and management",
      icon: <Server className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-teal-500 to-emerald-500"
    },
    {
      title: "Cost Optimization",
      description: "Pay only for the resources you actually use",
      icon: <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-emerald-500 to-green-500"
    },
    {
      title: "Elastic Scalability",
      description: "Scale resources up or down based on demand",
      icon: <BarChart2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-green-500 to-lime-500"
    },
    {
      title: "Managed Services",
      description: "24/7 monitoring and support for your cloud infrastructure",
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-lime-500 to-yellow-500"
    }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime" },
    { value: "50%+", label: "Cost Savings" },
    { value: "24/7", label: "Support" },
    { value: "100+", label: "Happy Clients" }
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-[#bae6fd] px-4 sm:px-6 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Animated Background Elements - Responsive */}
      <div className="absolute top-4 sm:top-10 right-4 sm:right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-400/10 sm:bg-blue-400/15 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-float"></div>
      <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-cyan-400/10 sm:bg-cyan-400/15 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 bg-sky-300/5 sm:bg-sky-300/10 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-pulse"></div>
      
      {/* Header - Responsive */}
      <div className="relative w-full max-w-6xl text-center mb-12 sm:mb-16 md:mb-20 z-10 animate-fadeInUp px-2 sm:px-4">
        <div className="bg-gradient-to-r from-[#0077B6] via-[#0096C7] to-[#00B4D8] text-white py-10 sm:py-12 md:py-16 px-4 sm:px-6 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl transform transition-all duration-500 group relative overflow-hidden">
          {/* Shimmer effect - Only on hover for non-mobile */}
          {!isMobile && (
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 animate-shimmer"></div>
            </div>
          )}
          
          <div className="relative z-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg">
              <Cloud className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white animate-float" />
            </div>
            <h1 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight sm:tracking-normal drop-shadow">
              Lumora Cloud
            </h1>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Your Business, Anywhere. Secure, scalable, and agile cloud solutions.
            </p>
          </div>
        </div>
        
        {/* Floating icon - Only show on larger screens */}
        {!isMobile && (
          <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-cyan-400 to-sky-500 shadow-lg flex items-center justify-center animate-pulse-glow">
            <Cloud className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white animate-bounce-slow" />
          </div>
        )}
      </div>

      {/* Stats Bar - Responsive */}
      <div className="relative z-10 w-full max-w-6xl mb-12 sm:mb-16 px-2 sm:px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="text-center p-3 sm:p-4 rounded-lg bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid - Responsive */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl px-2 sm:px-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 flex flex-col items-start gap-3 sm:gap-4 transition-all duration-300 hover:shadow-2xl hover:shadow-${feature.color.split(' ')[1]}/20 hover:-translate-y-1 group relative overflow-hidden border border-gray-100 hover:border-${feature.color.split(' ')[1]}/30`}
            style={{ 
              animation: `fadeInUp 0.5s ease-out ${0.1 * idx}s forwards`,
              opacity: 0,
              transform: 'translateY(20px)'
            }}
          >
            {/* Decorative gradient - Only on hover for non-mobile */}
            {!isMobile && (
              <div className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.color} opacity-5 rounded-bl-full group-hover:scale-150 transition-transform duration-500`}></div>
            )}
            
            {/* Icon with gradient background */}
            <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br ${feature.color} rounded-xl text-white shadow-md group-hover:rotate-[360deg] group-hover:scale-110 transition-all duration-500`}>
              {feature.icon}
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
            
            {/* Learn more link - Only show on larger screens */}
            {!isMobile && (
              <button 
                className="mt-2 text-xs font-medium text-blue-600 hover:text-blue-800 flex items-center transition-colors duration-200 group-hover:translate-x-1"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Learn more
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section - Only show on larger screens */}
      {!isMobile && (
        <div className="mt-12 sm:mt-16 md:mt-20 w-full max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-blue-100">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Ready to Elevate Your Cloud Experience?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Discover how our cloud solutions can transform your business operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Start Cloud Journey
                </a>
                <a
                  href="#solutions"
                  className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 shadow-sm hover:shadow-md hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Cloud className="w-4 h-4" />
                  Explore Cloud Solutions
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Mobile CTA Button - Only show on mobile */}
      {isMobile && (
        <div className="fixed bottom-6 right-6 z-20">
          <a
            href="#contact"
            className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-110"
            aria-label="Contact us about cloud solutions"
          >
            <Cloud className="w-6 h-6" />
          </a>
        </div>
      )}
    </section>
  );
};

export default LumoraCloud;
