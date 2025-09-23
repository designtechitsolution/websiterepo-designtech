import React from "react";
import background from "../assets/background.jpg";

const Hero = () => {
  return (
    <section
      className="w-full bg-cover bg-no-repeat text-gray-900 min-h-[60vh] flex items-center justify-center px-6 md:px-12 py-16 md:py-24"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="max-w-[800px] mx-auto text-center">
        <h1 className="text-blue-900 text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug">
          Empowering Businesses with Talent and Technology
        </h1>
        <p className="text-gray-800 text-base sm:text-lg md:text-xl mb-10 leading-relaxed">
          Flexible workforce solutions & next-generation IT services that reduce
          costs, enhance productivity, and accelerate digital transformation.
        </p>
        <a
          href="#contact"
          className="inline-block bg-yellow-400 hover:bg-[#d4a300] text-gray-900 px-10 sm:px-12 py-3 sm:py-5 rounded-md text-base sm:text-lg font-semibold cursor-pointer transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
