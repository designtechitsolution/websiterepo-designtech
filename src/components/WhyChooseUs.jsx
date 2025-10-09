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
    <section id="why" className="relative pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Morphing Background Decorations */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-10 blur-3xl animate-floatSlow animate-morphing"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-teal-400 to-green-400 opacity-10 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-yellow-300 to-orange-300 opacity-5 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-300 to-pink-300 opacity-10 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '3s' }}></div>
      
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-6 py-2 rounded-full shadow-lg mb-4 mx-auto animate-zoomIn border-2 border-blue-200">
          <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
          <span className="text-sm font-bold text-blue-700">Why Us</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0077b6] via-[#00a6c3] to-[#0077b6] animate-gradient bg-[length:200%_100%] text-center mt-4 tracking-tight animate-zoomIn">
          Why Choose Design Tech?
        </h2>

        <div className="flex flex-wrap justify-center gap-8 mt-12 max-w-7xl mx-auto px-6">
          {points.map((point, i) => (
            <div
              key={i}
              className="w-[280px] min-h-[180px] bg-white/70 backdrop-blur-lg rounded-3xl p-8 text-[#0077b6] border-2 border-white/50 text-center shadow-xl flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-4 hover:scale-115 hover:shadow-2xl hover:shadow-blue-500/40 hover:border-[#00a6c3] hover:bg-white/90 hover:rotate-2 animate-zoomIn group relative overflow-hidden"
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-teal-500/0 group-hover:from-blue-500/10 group-hover:to-teal-500/10 transition-all duration-500 rounded-2xl"></div>
              
              {/* Rotating background accent */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-[70px] h-[70px] rounded-full bg-gradient-to-br from-[#0077b6] to-[#00a6c3] flex items-center justify-center mb-4 shadow-2xl shadow-[#0077b6]/50 transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-125 group-hover:shadow-2xl group-hover:shadow-[#0077b6]/70 animate-glow border-4 border-white/50">
                  <Star size={26} color="#fff" className="animate-bounce-slow" />
                </div>
                <p className="text-base md:text-lg font-medium leading-relaxed group-hover:font-semibold transition-all duration-300">{point}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
