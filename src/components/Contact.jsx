import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0077b6] text-center uppercase tracking-wider mb-12">
          Contact Us
        </h2>

        <div className="flex flex-wrap gap-8 justify-center items-stretch">
          {/* Contact Info Box */}
          <div className="flex flex-col md:flex-1 bg-gradient-to-br from-[#0077b6] to-[#00b4d8] text-white p-10 rounded-3xl shadow-2xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-3xl w-full md:max-w-md">
            <h3 className="text-2xl md:text-3xl font-semibold border-b border-white/30 pb-3 mb-8">
              Get In Touch
            </h3>

            <p className="flex items-center gap-3 mb-5 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition">
              <span className="font-semibold text-yellow-300">Director:</span> Ramkumar Thangavel
            </p>

            <p className="flex items-center gap-3 mb-5 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition">
              <Phone size={22} className="text-yellow-300" /> +91 8870484604 | +91 7795203926
            </p>

            <p className="flex items-center gap-3 mb-5 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition">
              <Mail size={22} className="text-yellow-300" /> designtechitsolution9@gmail.com
            </p>

            <p className="flex items-center gap-3 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition">
              <MapPin size={22} className="text-yellow-300" /> No. 299, Shree Complex, Gandhipuram, Coimbatore
            </p>
          </div>

          {/* Map */}
          <div className="flex-1 w-full md:max-w-2xl rounded-3xl border border-[#00b4d8] overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105 flex">
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
