import React, { useState, useEffect } from "react";
import { TrendingUp, Search, Share2, PenTool, Mail, BarChart2, Award } from "lucide-react";

const DigitalMarketing = () => {
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
      title: "SEO & SEM",
      description: "Boost your online visibility with our comprehensive search engine optimization and marketing strategies.",
      icon: <Search className="w-6 h-6 sm:w-7 sm:h-7" />
    },
    {
      title: "Social Media",
      description: "Engage your audience across all major platforms with targeted social media campaigns.",
      icon: <Share2 className="w-6 h-6 sm:w-7 sm:h-7" />
    },
    {
      title: "Content Strategy",
      description: "Create compelling content that resonates with your audience and drives engagement.",
      icon: <PenTool className="w-6 h-6 sm:w-7 sm:h-7" />
    },
    {
      title: "Email Marketing",
      description: "Convert leads into customers with personalized and automated email campaigns.",
      icon: <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
    },
    {
      title: "Analytics",
      description: "Make data-driven decisions with comprehensive analytics and performance reports.",
      icon: <BarChart2 className="w-6 h-6 sm:w-7 sm:h-7" />
    },
    {
      title: "Brand Strategy",
      description: "Establish a strong brand identity and position yourself as a market leader.",
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7" />
    }
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 sm:px-6 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Animated Background Elements - Responsive */}
      <div className="absolute top-4 sm:top-10 right-4 sm:right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-400/10 sm:bg-purple-400/15 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-float"></div>
      <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-pink-400/10 sm:bg-pink-400/15 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 bg-orange-300/5 sm:bg-orange-300/10 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-pulse"></div>
      
      {/* Header - Responsive */}
      <div className="relative w-full max-w-6xl text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 z-10 animate-fadeInUp px-2 sm:px-4">
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white py-10 sm:py-12 md:py-16 px-4 sm:px-6 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl transform transition-all duration-500 group relative overflow-hidden">
          {/* Shimmer effect - Only on hover for non-mobile */}
          {!isMobile && (
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 animate-shimmer"></div>
            </div>
          )}
          
          <div className="relative z-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-300 animate-float" />
            </div>
            <h1 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight sm:tracking-normal drop-shadow">
              Digital Marketing
            </h1>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Transform your digital presence and connect with your audience through strategic marketing solutions.
            </p>
          </div>
        </div>
        
        {/* Floating icon - Only show on larger screens */}
        {!isMobile && (
          <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg flex items-center justify-center animate-pulse-glow">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white animate-bounce-slow" />
          </div>
        )}
      </div>

      {/* Features Grid - Responsive */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl px-2 sm:px-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 flex flex-col items-start gap-3 sm:gap-4 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1 group relative overflow-hidden border border-gray-100 hover:border-purple-100"
            style={{ 
              animation: `fadeInUp 0.5s ease-out ${0.1 * idx}s forwards`,
              opacity: 0,
              transform: 'translateY(20px)'
            }}
          >
            {/* Decorative gradient - Only on hover for non-mobile */}
            {!isMobile && (
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-purple-400/5 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
            )}
            
            {/* Icon with gradient background */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl text-white shadow-md group-hover:rotate-[360deg] group-hover:scale-110 transition-all duration-500">
              {feature.icon}
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
            
            {/* Learn more link - Only show on larger screens */}
            {!isMobile && (
              <button 
                className="mt-2 text-xs font-medium text-purple-600 hover:text-purple-800 flex items-center transition-colors duration-200 group-hover:translate-x-1"
                onClick={() => {
                  // Smooth scroll to contact form or open a modal
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Learn more
                <svg className="w-3.5 h-3.5 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section - Only show on larger screens */}
      {!isMobile && (
        <div className="mt-12 sm:mt-16 md:mt-20 w-full max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-purple-100">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Ready to grow your business?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let's discuss how our digital marketing solutions can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Get Started
                </a>
                <a
                  href="tel:+1234567890"
                  className="px-6 py-3 bg-white text-purple-600 font-medium rounded-lg border border-purple-200 shadow-sm hover:shadow-md hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
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
            className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-110"
            aria-label="Contact us"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
      )}
    </section>
  );
};

export default DigitalMarketing;
