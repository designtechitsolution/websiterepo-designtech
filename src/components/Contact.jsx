import React from "react";
import { Phone, Mail, MapPin, Sparkles, Send, User } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-white overflow-hidden">
      {/* Morphing Background Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-10 blur-3xl animate-floatSlow animate-morphing"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-teal-400 to-green-400 opacity-10 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-yellow-300 to-orange-300 opacity-5 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-purple-300 to-pink-300 opacity-10 blur-3xl animate-floatSlow animate-morphing" style={{ animationDelay: '3s' }}></div>
      
      <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-6 max-w-7xl">
        {/* Enhanced Header */}
        <div className="text-center mb-12 md:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 md:px-6 py-2 rounded-full shadow-lg mb-4 animate-zoomIn border-2 border-blue-200">
            <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
            <span className="text-sm md:text-base font-bold text-blue-700">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0077b6] via-[#00a6c3] to-[#0077b6] animate-gradient bg-[length:200%_100%] tracking-tight animate-zoomIn">
            Contact Us
          </h2>
          <p className="text-gray-700 text-base md:text-lg lg:text-xl mt-4 max-w-2xl mx-auto font-medium animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Ready to transform your business? Let's start the conversation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 justify-center items-stretch">
          {/* Contact Info Box */}
          <div className="flex flex-col w-full lg:flex-1 bg-gradient-to-br from-[#0077b6] via-[#0099cc] to-[#00b4d8] text-white p-8 md:p-10 lg:p-10 rounded-2xl md:rounded-3xl shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-3xl hover:shadow-blue-500/50 lg:max-w-md group relative overflow-hidden animate-fadeInLeft">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-transparent transition-all duration-500"></div>
            
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 md:mb-8 pb-4 border-b-2 border-white/30 group-hover:border-yellow-300/50 transition-colors duration-300">
                <Send className="w-6 md:w-8 h-6 md:h-8 text-yellow-300 animate-glow" />
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
                  Contact Information
                </h3>
              </div>

              <div className="space-y-4 md:space-y-5">
                <div className="flex items-start gap-3 md:gap-4 bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-xl hover:bg-white/20 transition-all duration-300 hover:translate-x-2 hover:shadow-xl group/item border border-white/20">
                  <User className="w-5 md:w-6 h-5 md:h-6 text-yellow-300 flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="font-bold text-yellow-200 text-xs md:text-sm mb-1">Director</p>
                    <p className="text-base md:text-lg font-semibold">Ramkumar Thangavel</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4 bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-xl hover:bg-white/20 transition-all duration-300 hover:translate-x-2 hover:shadow-xl group/item border border-white/20">
                  <Phone className="w-5 md:w-6 h-5 md:h-6 text-yellow-300 flex-shrink-0 mt-1 group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300" />
                  <div>
                    <p className="font-bold text-yellow-200 text-xs md:text-sm mb-1">Phone</p>
                    <p className="text-base md:text-lg font-semibold">+91 8870484604</p>
                    <p className="text-base md:text-lg font-semibold">+91 7795203926</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4 bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-xl hover:bg-white/20 transition-all duration-300 hover:translate-x-2 hover:shadow-xl group/item border border-white/20">
                  <Mail className="w-5 md:w-6 h-5 md:h-6 text-yellow-300 flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="font-bold text-yellow-200 text-xs md:text-sm mb-1">Email</p>
                    <p className="text-base md:text-lg font-semibold break-all">designtechitsolution9@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4 bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-xl hover:bg-white/20 transition-all duration-300 hover:translate-x-2 hover:shadow-xl group/item border border-white/20">
                  <MapPin className="w-5 md:w-6 h-5 md:h-6 text-yellow-300 flex-shrink-0 mt-1 group-hover/item:scale-110 group-hover/item:animate-bounce-slow transition-transform duration-300" />
                  <div>
                    <p className="font-bold text-yellow-200 text-xs md:text-sm mb-1">Address</p>
                    <p className="text-base md:text-lg font-semibold">No. 299, Shree Complex,<br />Gandhipuram, Coimbatore</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full lg:flex-1 h-[400px] md:h-[500px] lg:h-auto lg:max-w-2xl rounded-2xl md:rounded-3xl border-2 border-[#00b4d8] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:shadow-blue-500/50 flex relative group animate-fadeInRight">
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-yellow-400/30 rounded-2xl md:rounded-3xl transition-all duration-500 pointer-events-none z-10"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.6042!2d76.9622!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857f0c3f6a!2sGandhipuram%2C%20Coimbatore!5e0!3m2!1sen!2sin!4v1694852149470!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
