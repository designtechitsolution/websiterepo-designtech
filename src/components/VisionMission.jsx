import React, { useState, useEffect } from "react";
import { Eye, Target } from "lucide-react";

// Lazy load images
const VisionMission = () => {
  const [visionBanner, setVisionBanner] = useState('');
  const [missionBanner, setMissionBanner] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Lazy load images
    const loadImages = async () => {
      try {
        const [vision, mission] = await Promise.all([
          import("../assets/vision.png"),
          import("../assets/mission.png")
        ]);
        setVisionBanner(vision.default);
        setMissionBanner(mission.default);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadImages();

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('vision-mission');
    if (section) observer.observe(section);

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (section) observer.unobserve(section);
    };
  }, []);

  // Mission points data
  const missionPoints = [
    "Build lasting partnerships rooted in trust and collaboration.",
    "Deliver innovative solutions in Cloud, Cybersecurity, AI, and IT Support.",
    "Enable sustainable growth by combining people and technology.",
  ];

  return (
    <section
      id="vision-mission"
      className={`relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F8FDFF] via-[#F0FAFF] to-[#E6F7FB] text-gray-800 overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      aria-label="Our Vision and Mission"
    >
      {/* Reduced decorative elements for better performance */}
      <div className="absolute -top-40 -right-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-gradient-to-br from-blue-400 to-cyan-400 opacity-20 blur-2xl sm:blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-gradient-to-br from-teal-400 to-green-400 opacity-20 blur-2xl sm:blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center mb-10 sm:mb-12 lg:mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-5">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077B6] via-[#00A6C3] to-[#0077B6] bg-[length:200%_100%]">
            Our Vision & Mission
          </span>
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
          Guiding principles that drive our commitment to excellence and innovation
        </p>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-10 sm:space-y-12 lg:space-y-14">
        {/* Vision Section */}
        <article className="flex flex-col lg:flex-row items-center gap-5 sm:gap-6 lg:gap-8">
          <div className="w-full lg:flex-1 lg:order-2 relative ">
            {visionBanner && (
              <div className="relative group">
                <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl sm:rounded-3xl opacity-10 sm:opacity-15 blur-xl transition-opacity duration-300 group-hover:opacity-20 "></div>
                <img
                  src={visionBanner}
                  alt="Illustration representing our vision"
                  width={600}
                  height={400}
                  loading="lazy"
                  className="relative w-full h-[220px] sm:h-[280px] lg:h-[350px] object-cover rounded-xl sm:rounded-2xl shadow-md transition-all duration-300 group-hover:scale-[1.02] "
                />
              </div>
            )}
          </div>

          <div className="w-full lg:flex-1 lg:order-1 text-center lg:text-left bg-white/90 backdrop-blur-md p-5 sm:p-6 lg:p-8 rounded-xl shadow-lg border-2 border-[#00A6C3]/50 transition-all duration-300 hover:shadow-md hover:shadow-[#0077B6]/15 hover:bg-white/95">
            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-[#0077B6]" aria-hidden="true" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0077B6]">
                Our Vision
              </h2>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              "To be a trusted partner for businesses worldwide, empowering them
              to achieve growth, innovation, and excellence through skilled people
              and cutting-edge technology."
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our vision emphasizes{" "}
              <span className="font-semibold text-[#0077B6]">trust</span>,{" "}
              <span className="font-semibold text-[#0077B6]">collaboration</span>, and{" "}
              <span className="font-semibold text-[#0077B6]">impact</span>,
              focusing on <em className="font-semibold not-italic">client success</em> over mere service delivery.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-3 sm:mt-4">
              Our vision is to lead with integrity, inspire confidence, and become the partner organizations 
              rely on to navigate change, embrace digital evolution, and unlock their fullest potential.
            </p>
          </div>
        </article>

        {/* Mission Section */}
        <article className="flex flex-col lg:flex-row items-center gap-5 sm:gap-6 lg:gap-8">
          <div className="w-full lg:flex-1 relative">
            {missionBanner && (
              <div className="relative group">
                <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-2xl sm:rounded-3xl opacity-10 sm:opacity-15 blur-xl transition-opacity duration-300 group-hover:opacity-20"></div>
                <img
                  src={missionBanner}
                  alt="Illustration representing our mission"
                  width={600}
                  height={500}
                  loading="lazy"
                  className="relative w-full h-[250px] sm:h-[300px] lg:h-[380px] object-cover rounded-xl sm:rounded-2xl shadow-md transition-all duration-300 group-hover:scale-[1.02]"
                />
              </div>
            )}
          </div>

          <div className="w-full lg:flex-1 text-center lg:text-left bg-white/80 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg border-2 border-[#00A6C3]/50 transition-all duration-300 hover:shadow-md hover:shadow-[#00A6C3]/15 hover:bg-white/90">
            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-[#00A6C3]" aria-hidden="true" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#00A6C3]">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              Our mission is to empower businesses to thrive by connecting them with
              the right talent and delivering technology solutions that simplify operations
              and drive growth.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 font-medium">
              We aim to:
            </p>
            <ul className="space-y-2 text-left">
              {missionPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="relative pl-6 text-gray-700 text-sm sm:text-base before:absolute before:left-0 before:top-0 before:text-[#00A6C3] before:content-['✓']"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default React.memo(VisionMission);
