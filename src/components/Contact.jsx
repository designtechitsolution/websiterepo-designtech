import React from "react";
import { Phone, Mail, MapPin, Sparkles, Send, User } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-10 sm:py-14 lg:py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-white overflow-hidden">
      {/* Morphing Background Elements - Adjusted for mobile */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 md:w-80 lg:w-96 h-48 sm:h-72 md:h-80 lg:h-96 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-10 blur-2xl sm:blur-3xl animate-floatSlow animate-morphing"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-40 sm:w-64 md:w-72 lg:w-80 h-40 sm:h-64 md:h-72 lg:h-80 bg-gradient-to-br from-teal-400 to-green-400 opacity-10 blur-2xl sm:blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-br from-yellow-300 to-orange-300 opacity-5 blur-2xl sm:blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-40 sm:w-56 md:w-64 lg:w-72 h-40 sm:h-56 md:h-64 lg:h-72 bg-gradient-to-br from-purple-300 to-pink-300 opacity-10 blur-2xl sm:blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '3s' }}></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Enhanced Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-md px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 rounded-full shadow-lg mb-3 sm:mb-4 animate-zoomIn border-2 border-blue-200">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 animate-pulse" />
            <span className="text-xs sm:text-sm md:text-base font-bold text-blue-700">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0077b6] via-[#00a6c3] to-[#0077b6] animate-gradient bg-[length:200%_100%] tracking-tight animate-zoomIn px-2">
            Contact Us
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4 max-w-2xl mx-auto font-medium animate-fadeInUp px-2" style={{ animationDelay: '0.2s' }}>
            Ready to transform your business? Let's start the conversation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10 justify-center items-stretch">
          {/* Contact Info Box */}
          <div className="flex flex-col w-full lg:flex-1 bg-gradient-to-br from-[#0077b6] via-[#0099cc] to-[#00b4d8] text-white p-5 sm:p-6 md:p-7 lg:p-8 xl:p-9 rounded-xl sm:rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/30 group relative overflow-hidden animate-fadeInLeft">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-transparent transition-all duration-300 sm:duration-500"></div>
            
            {/* Decorative circles */}
            <div className="absolute -top-8 -right-8 sm:-top-10 sm:-right-10 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-yellow-400/20 rounded-full blur-2xl group-hover:scale-125 sm:group-hover:scale-150 transition-transform duration-500 sm:duration-700"></div>
            <div className="absolute -bottom-8 -left-8 sm:-bottom-10 sm:-left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-teal-400/20 rounded-full blur-2xl group-hover:scale-125 sm:group-hover:scale-150 transition-transform duration-500 sm:duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6 lg:mb-8 pb-3 sm:pb-4 border-b-2 border-white/30 group-hover:border-yellow-300/50 transition-colors duration-300">
                <Send className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-yellow-300 animate-glow" />
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold">
                  Contact Information
                </h3>
              </div>

              <div className="space-y-3 sm:space-y-3.5 md:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-lg hover:bg-white/20 transition-all duration-200 hover:translate-x-1 hover:shadow-md group/item border border-white/20">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-300 flex-shrink-0 mt-0.5 sm:mt-1 group-hover/item:scale-110 transition-transform duration-200 sm:duration-300" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-yellow-200 text-xs sm:text-sm mb-1">Director</p>
                    <p className="text-sm sm:text-base md:text-lg font-semibold truncate">Ramkumar Thangavel</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-lg hover:bg-white/20 transition-all duration-200 hover:translate-x-1 hover:shadow-md group/item border border-white/20">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-300 flex-shrink-0 mt-0.5 sm:mt-1 group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-200 sm:duration-300" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-yellow-200 text-xs sm:text-sm mb-1">Phone</p>
                    <div className="space-y-1">
                      <p className="text-sm sm:text-base md:text-lg font-semibold">+91 8870484604</p>
                      <p className="text-sm sm:text-base md:text-lg font-semibold">+91 7795203926</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-lg hover:bg-white/20 transition-all duration-200 hover:translate-x-1 hover:shadow-md group/item border border-white/20">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-300 flex-shrink-0 mt-0.5 sm:mt-1 group-hover/item:scale-110 transition-transform duration-200 sm:duration-300" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-yellow-200 text-xs sm:text-sm mb-1">Email</p>
                    <p className="text-xs xs:text-sm sm:text-base md:text-lg font-semibold break-words overflow-hidden">designtechitsolution9@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-lg hover:bg-white/20 transition-all duration-200 hover:translate-x-1 hover:shadow-md group/item border border-white/20">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-300 flex-shrink-0 mt-0.5 sm:mt-1 group-hover/item:scale-110 group-hover/item:animate-bounce-slow transition-all duration-200 sm:duration-300" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-yellow-200 text-xs sm:text-sm mb-1">Address</p>
                    <p className="text-xs xs:text-sm sm:text-base md:text-lg font-semibold">No. 299, Shree Complex,<br className="hidden xs:block" />Gandhipuram, Coimbatore,<br className="hidden xs:block" />Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full lg:flex-1 h-[300px] sm:h-[380px] md:h-[420px] lg:h-[480px] xl:h-[520px] rounded-xl sm:rounded-2xl border-2 border-[#00b4d8] overflow-hidden shadow-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-500/30 flex relative group animate-fadeInRight">
            <div className="absolute inset-0 border-2 sm:border-3 border-transparent group-hover:border-yellow-400/30 rounded-xl sm:rounded-2xl transition-all duration-300 pointer-events-none z-10"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.6042!2d76.9622!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857f0c3f6a!2sGandhipuram%2C%20Coimbatore!5e0!3m2!1sen!2sin!4v1694852149470!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full"
              title="Design Tech IT Solutions Location"
              aria-label="Map showing Design Tech IT Solutions location in Gandhipuram, Coimbatore"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
