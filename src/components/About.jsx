import React from "react";
import aboutImg from "../assets/about-us1.jpg"; // adjust path if needed

const About = () => {
  return (
    <section id="about" className="relative py-12 md:py-16 lg:py-16 px-4 md:px-8 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 right-10 w-60 md:w-80 h-60 md:h-80 bg-blue-300/15 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-72 md:w-96 h-72 md:h-96 bg-teal-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto mt-16 md:mt-20 flex flex-col gap-10">
        {/* About Card */}
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-8 bg-white/80 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden border border-blue-200/50 animate-fadeInUp">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-teal-500/0 group-hover:from-blue-500/5 group-hover:to-teal-500/5 transition-all duration-500"></div>
          
          {/* Animated corner accents */}
          <div className="absolute top-0 left-0 w-20 md:w-24 h-20 md:h-24 bg-blue-400/20 rounded-br-full transition-all duration-500 group-hover:scale-150"></div>
          <div className="absolute bottom-0 right-0 w-20 md:w-24 h-20 md:h-24 bg-teal-400/20 rounded-tl-full transition-all duration-500 group-hover:scale-150"></div>
          
          {/* Image */}
          <div className="w-full lg:flex-1 flex justify-center relative animate-fadeInLeft">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-teal-400 rounded-xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
            <img
              src={aboutImg}
              alt="About Us"
              className="relative max-w-full rounded-xl shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/30"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:flex-1 relative animate-fadeInRight">
            <h2 className="text-2xl md:text-4xl lg:text-3xl font-bold text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600 uppercase tracking-wide mt-4 lg:mt-0 mb-4 md:mb-6 animate-fadeInUp">
              About Us
            </h2>
            <p className="text-base md:text-xl lg:text-lg leading-relaxed text-gray-800 my-3 md:my-5 lg:my-4 transition-all duration-300 group-hover:text-gray-900">
              <strong className="text-blue-700 group-hover:text-blue-800 transition-colors duration-300">Design Tech IT Solution</strong> is a specialized provider
              of IT Staffing & IT Services. We partner with enterprises,
              startups, and global clients to deliver innovative technology and
              staffing solutions that simplify operations and drive growth.
            </p>
            <p className="text-base md:text-xl lg:text-lg leading-relaxed text-gray-800 transition-all duration-300 group-hover:text-gray-900">
              Our team ensures <b className="text-blue-700 group-hover:text-blue-800 transition-colors duration-300">quality, efficiency, and trust</b> at every
              step. With strong capabilities in Cloud, Cybersecurity, AI, and IT
              Support, we empower businesses to achieve excellence and
              innovation in the digital era.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
