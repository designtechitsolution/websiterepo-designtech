import React from "react";
import { Star } from "lucide-react";

const points = [
  "Lumora Cloud makes your business agile, scalable, and secure",
  "Lumora AI enables intelligent automation and smarter insights",
  "Lumora Secure safeguards against evolving cyber threats",
  "We follow the Lumora journey: Ignite → Blueprint → Forge → Pulse"
];

const WhyChooseUs = () => {
  return (
    <section id="why" className="pt-20 pb-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0077b6] text-center mt-20 tracking-wide">
        Why Choose Design Tech IT Solution?
      </h2>

      <div className="flex flex-wrap justify-center gap-8 mt-12 max-w-7xl mx-auto px-6">
        {points.map((point, i) => (
          <div
            key={i}
            className="w-[260px] min-h-[160px] bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-[#0077b6] border border-white/20 text-center shadow-lg flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:border-[#00a6c3]"
          >
            <div className="w-[60px] h-[60px] rounded-full bg-[#0077b6] flex items-center justify-center mb-4 shadow-lg shadow-[#0077b6]/40 transition-transform duration-300">
              <Star size={26} color="#fff" />
            </div>
            <p className="text-base md:text-lg font-medium leading-relaxed">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
