import React from "react";
import { Star, Sparkles } from "lucide-react";

const points = [
  "Lumora Cloud makes your business agile, scalable, and secure",
  "Lumora AI enables intelligent automation and smarter insights",
  "Lumora Secure safeguards against evolving cyber threats",
  "We follow the Lumora journey: Ignite → Blueprint → Forge → Pulse"
];

const WhyChooseUs = () => {
  return (
    <section id="why" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Morphing Background Decorations */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-10 blur-3xl animate-floatSlow animate-morphing"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-teal-400 to-green-400 opacity-10 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-yellow-300 to-orange-300 opacity-5 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-300 to-pink-300 opacity-10 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '3s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-md px-4 sm:px-6 py-1 sm:py-1.5 rounded-full shadow-lg mb-3 sm:mb-4 mx-auto animate-zoomIn border-2 border-blue-200">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 animate-pulse" />
          <span className="text-xs sm:text-sm font-bold text-blue-700">Why Us</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0077b6] via-[#00a6c3] to-[#0077b6] animate-gradient bg-[length:200%_100%] text-center mt-2 sm:mt-3 lg:mt-4 tracking-tight animate-zoomIn px-2">
          Why Choose Design Tech?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 lg:mt-12">
          {points.map((point, i) => (
            <div
              key={i}
              className="w-full bg-white/70 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 text-[#0077b6] border-2 border-white/50 shadow-lg transition-all duration-300 sm:duration-500 hover:-translate-y-2 sm:hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/30 hover:border-[#00a6c3] hover:bg-white/90 hover:rotate-0 animate-zoomIn group relative overflow-hidden"
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-teal-500/0 group-hover:from-blue-500/10 group-hover:to-teal-500/10 transition-all duration-300 sm:duration-500 rounded-2xl"></div>
              
              {/* Rotating background accent */}
              <div className="absolute -top-8 -right-8 sm:-top-10 sm:-right-10 w-24 h-24 sm:w-32 sm:h-32 bg-blue-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 sm:duration-700"></div>
              
              <div className="relative z-10 w-full flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[#0077b6] to-[#00a6c3] flex items-center justify-center shadow-xl sm:shadow-2xl shadow-[#0077b6]/50 transition-all duration-300 sm:duration-500 group-hover:rotate-[360deg] group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#0077b6]/70 animate-glow border-4 border-white/50">
                  <Star size={20} className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-bounce-slow" />
                </div>
                <p className="text-sm sm:text-base font-medium leading-relaxed group-hover:font-semibold transition-all duration-300 flex-1 text-left">{point}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
