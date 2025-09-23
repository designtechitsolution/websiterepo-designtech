import React, { useEffect } from "react";
import { Cpu, CheckCircle } from "lucide-react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const LumoraAI = () => {
  const features = [
    "Predict trends and outcomes through predictive analytics",
    "Automate routine tasks with AI-powered automation",
    "Engage customers with conversational AI (chatbots & voice assistants)",
    "Analyze visual data using computer vision",
    "Generate content automatically with Generative AI",
    "Deploy AI agents as digital teammates supporting sales, HR, IT, and analytics"
  ];

  return (
    <>
      <ScrollToTop />
      <section className="w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-gray-100 to-white px-6 py-16">

        {/* Header */}
        <div className="relative w-full max-w-6xl text-center mb-20">
          <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-white py-16 px-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <Cpu className="w-24 h-24 mx-auto text-yellow-400 animate-bounce" />
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg">
              Lumora AI – “Smarter Decisions, Faster Growth”
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-100">
              Harness the power of Artificial Intelligence and Generative AI to transform your business.
            </p>
          </div>
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-yellow-400 shadow-xl flex items-center justify-center animate-pulse">
            <Cpu className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-start gap-4 hover:scale-105 transition-transform duration-300"
            >
              <CheckCircle className="text-yellow-400 w-8 h-8" />
              <p className="text-gray-700 font-medium text-lg">{feature}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="mt-16 px-10 py-4 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all text-lg"
        >
          Contact Us
        </a>

      </section>
    </>
  );
};

export default LumoraAI;
