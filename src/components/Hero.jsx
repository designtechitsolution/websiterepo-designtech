import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, Sparkles, TrendingUp, Zap, Cloud, Shield, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
    title: 'Transform Your Digital Future',
    subtitle: 'Enterprise IT Solutions & Cloud Infrastructure',
    cta: 'Explore Cloud',
    link: '/cloud',
    icon: Cloud,
    badge: 'Cloud Excellence'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
    title: 'Secure Your Business',
    subtitle: 'Advanced Cybersecurity & Data Protection',
    cta: 'Learn More',
    link: '/secure',
    icon: Shield,
    badge: 'Enterprise Security'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80',
    title: 'AI-Powered Innovation',
    subtitle: 'Intelligent Automation & Machine Learning Solutions',
    cta: 'Discover AI',
    link: '/ai',
    icon: Cpu,
    badge: 'AI & Automation'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Implement search functionality here
    }
  };

  const CurrentIcon = heroSlides[currentSlide].icon;

  return (
    <div className="relative h-[85vh] md:h-[90vh] overflow-hidden">
      <div className="relative h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-purple-900/70" />
            </div>

            {/* Animated Floating Elements */}
            <div className="absolute top-20 right-10 md:right-20 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-32 left-10 md:left-32 w-32 md:w-40 h-32 md:h-40 bg-gradient-to-br from-teal-400/30 to-cyan-400/30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-8 w-full">
                <div className={`max-w-3xl transition-all duration-700 ${
                  index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  {/* Animated Badge */}
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full shadow-xl mb-4 md:mb-6 border border-white/20 animate-fadeInUp">
                    <CurrentIcon className="w-4 md:w-5 h-4 md:h-5 text-blue-300 animate-pulse" />
                    <span className="text-xs md:text-sm font-bold text-white">
                      {slide.badge}
                    </span>
                    <Sparkles className="w-3 md:w-4 h-3 md:h-4 text-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>

                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight animate-slideInLeft">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 md:mb-8 animate-slideInRight">
                    {slide.subtitle}
                  </p>

                  {/* Search Bar */}
                  <form onSubmit={handleSearch} className="bg-white rounded-full shadow-2xl p-1.5 md:p-2 flex items-center mb-6 md:mb-8 max-w-2xl animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                    <Search className="w-4 md:w-5 h-4 md:h-5 text-gray-400 ml-3 md:ml-4" />
                    <input
                      type="text"
                      placeholder="Search for services, solutions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 px-3 md:px-4 py-2 md:py-3 outline-none text-gray-800 text-sm md:text-base"
                    />
                    <button 
                      type="submit"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 mr-1"
                    >
                      Search
                    </button>
                  </form>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3 md:gap-4 animate-zoomIn" style={{ animationDelay: '0.5s' }}>
                    <Link to={slide.link}>
                      <button className="group relative inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] hover:bg-right text-white px-6 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-bold cursor-pointer transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-xl overflow-hidden">
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></span>
                        <TrendingUp className="w-4 md:w-5 h-4 md:h-5 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="relative">{slide.cta}</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full hover:bg-white/30 transition-all z-10 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 md:w-6 h-5 md:h-6 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full hover:bg-white/30 transition-all z-10 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 md:w-6 h-5 md:h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 md:space-x-3 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? 'w-10 md:w-12 bg-blue-500'
                : 'w-2.5 md:w-3 bg-white/50 hover:bg-white/70'
            } h-2.5 md:h-3 rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
