import React from "react";
import aboutImg from "../assets/about-us1.jpg"; // adjust path if needed

const About = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-[1400px] mx-auto mt-20 flex flex-col gap-10">
        {/* About Card */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2">
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={aboutImg}
              alt="About Us"
              className="max-w-full rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left text-blue-700 uppercase tracking-wide mt-6 md:mt-0">
              About Us
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-800 my-4">
              <strong>Design Tech IT Solution</strong> is a specialized provider
              of IT Staffing & IT Services. We partner with enterprises,
              startups, and global clients to deliver innovative technology and
              staffing solutions that simplify operations and drive growth.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-800">
              Our team ensures <b>quality, efficiency, and trust</b> at every
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
