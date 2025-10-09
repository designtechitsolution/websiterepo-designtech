import React from "react";
import background from "../assets/background.png";
import { Sparkles, TrendingUp, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat text-gray-900 min-h-[70vh] flex items-center justify-center px-6 md:px-12 py-20 md:py-28 overflow-hidden"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Animated Gradient Overlay with morphing effect */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-500/20 to-teal-500/30 animate-gradient"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-yellow-400/10 via-transparent to-blue-500/10 animate-gradient" style={{ animationDelay: '2s' }}></div> */}
      
      {/* Morphing Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-yellow-400/40 to-orange-400/40 blur-3xl animate-floatSlow animate-morphing"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-500/40 to-purple-500/40 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-teal-400/40 to-cyan-400/40 blur-2xl animate-floatSlow animate-morphing" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-gradient-to-br from-pink-400/30 to-purple-400/30 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '3s' }}></div>
      
      <div className="relative z-10 max-w-[900px] mx-auto text-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl mb-6 animate-zoomIn border-2 border-blue-200">
          <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
          <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Transform Your Business Today
          </span>
          <Zap className="w-5 h-5 text-blue-600 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        <h1 className="text-blue-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-4 mb-8 leading-tight animate-slideInLeft">
          <span className="inline-block animate-glow">Empowering</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 animate-gradient">
            Businesses
          </span>
          <br />
          <span className="inline-block mt-2">with Talent & Technology</span>
        </h1>
        
        <p className="text-gray-800 text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto animate-slideInRight font-medium">
          Flexible workforce solutions & next-generation IT services that{" "}
          <span className="text-blue-700 font-bold">reduce costs</span>,{" "}
          <span className="text-purple-700 font-bold">enhance productivity</span>, and{" "}
          <span className="text-teal-700 font-bold">accelerate digital transformation</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-zoomIn" style={{ animationDelay: '0.6s' }}>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] hover:bg-right text-white px-10 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold cursor-pointer transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-xl overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></span>
            <TrendingUp className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative">Get Started Now</span>
            <Sparkles className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
          </a>
          
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-blue-700 px-8 py-4 rounded-full text-base sm:text-lg font-semibold cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-md border-2 border-blue-200 hover:border-blue-400"
          >
            Learn More
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
