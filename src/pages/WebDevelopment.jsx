import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Code, ExternalLink, ArrowUp, Loader2 } from 'lucide-react';

const WebDevelopment = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const featuresRef = useRef(null);
  const observerRef = useRef(null);

  const features = [
    {
      title: 'Custom Web Applications',
      description: 'Tailored solutions designed specifically for your business needs and goals.',
      icon: '💻'
    },
    {
      title: 'Responsive Design',
      description: 'Seamless experience across all devices, from mobile to desktop.',
      icon: '📱'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Secure payment integration and shopping experiences that convert.',
      icon: '🛒'
    },
    {
      title: 'Progressive Web Apps',
      description: 'Native-like experiences with offline capabilities and push notifications.',
      icon: '📲'
    },
    {
      title: 'API Development',
      description: 'Robust backend systems and third-party service integrations.',
      icon: '🔌'
    },
    {
      title: 'Performance Optimization',
      description: 'Lightning-fast load times and optimized user experiences.',
      icon: '⚡'
    }
  ];

  // Check if mobile on mount and on resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      clearTimeout(timer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Handle scroll for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for feature animations
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp-visible');
        }
      });
    }, options);

    observerRef.current = observer;

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => observer.observe(card));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isLoading]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Loading skeleton
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white p-4">
        <div className="flex flex-col items-center">
          <Loader2 className="w-12 h-12 text-green-600 animate-spin mb-4" />
          <p className="text-gray-600">Loading Web Development Services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Animated Background Elements - Reduced on mobile */}
      <div className="absolute top-10 right-10 w-48 h-48 md:w-96 md:h-96 bg-green-400/15 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 md:w-80 md:h-80 bg-emerald-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-36 h-36 md:w-72 md:h-72 bg-lime-300/10 rounded-full blur-3xl animate-pulse"></div>
      
      {/* Main Content */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <header className="text-center mb-12 md:mb-20 relative">
          <div className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 text-white py-8 md:py-12 px-4 sm:px-6 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02] group relative overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 animate-shimmer"></div>
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                <Code className="w-full h-full text-yellow-400 animate-float" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 md:mb-6 px-2">
                Web Development
                <span className="block text-yellow-300 text-2xl sm:text-3xl mt-2">Build Your Digital Future</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                Create powerful, scalable web solutions that drive business growth and user engagement across all devices.
              </p>
            </div>
          </div>
          
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-24 md:h-24 rounded-full bg-yellow-400 shadow-xl flex items-center justify-center animate-pulse-glow">
            <Code className="w-6 h-6 md:w-8 md:h-8 text-white animate-bounce-slow" />
          </div>
        </header>

        {/* Features Grid */}
        <section className="mb-16 md:mb-24" ref={featuresRef}>
          <h2 className="sr-only">Our Web Development Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, idx) => (
              <article
                key={idx}
                className="feature-card bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-green-500/20 p-6 flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  animationDelay: `${0.1 + idx * 0.1}s`
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-2xl bg-gradient-to-br from-green-100 to-emerald-100 text-green-700 rounded-xl mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 flex-grow">{feature.description}</p>
                {/* <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700 transition-colors group"
                    aria-label={`Learn more about ${feature.title}`}
                  >
                    Learn more
                    <svg 
                      className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div> */}
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-emerald-100 rounded-full opacity-30"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Build Something Amazing?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help bring your web project to life with our expert development services.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/portfolio"
                  className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10">View Our Portfolio</span>
                  <ExternalLink className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                {/* <Link
                  to="/contact"
                  className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-gray-200 text-gray-800 font-semibold rounded-full hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Get a Free Quote
                </Link> */}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg hover:bg-green-700 transition-colors duration-200 z-20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .feature-card.animate-fadeInUp-visible {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) rotate(45deg);
          }
        }
        
        .animate-shimmer {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.2) 20%,
            rgba(255, 255, 255, 0.5) 60%,
            rgba(255, 255, 255, 0)
          );
          transform: translateX(-100%) rotate(45deg);
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default WebDevelopment;
