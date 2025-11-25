import React, { useState, useEffect } from "react";
import { ExternalLink, Github, Award, Search, X, Filter } from "lucide-react";

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  
  // Check if mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full Stack",
      description: "Modern e-commerce solution with real-time inventory management, secure payments, and analytics.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "http://65.1.210.41/",
      githubUrl: "#",
      color: "from-blue-600 to-cyan-500",
      tags: ["Web", "E-commerce", "Full Stack"]
    },
    {
      id: 2,
      title: "Healthcare System",
      category: "Enterprise",
      description: "Comprehensive healthcare platform with patient records and telemedicine integration.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      technologies: ["React", "TypeScript", "PostgreSQL", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-green-600 to-emerald-500",
      tags: ["Enterprise", "Healthcare", "Web"]
    },
    {
      id: 3,
      title: "Real Estate Portal",
      category: "Web App",
      description: "Interactive property listings with virtual tours and advanced search features.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      technologies: ["Next.js", "Tailwind", "Node.js", "Maps API"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-purple-600 to-pink-500",
      tags: ["Web", "Real Estate", "Full Stack"]
    },
    {
      id: 4,
      title: "Finance Dashboard",
      category: "Data Viz",
      description: "Real-time financial data visualization with interactive charts and analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "D3.js", "Python", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-orange-600 to-red-500",
      tags: ["Dashboard", "Data Visualization", "Web"]
    },
    {
      id: 5,
      title: "LMS Platform",
      category: "EdTech",
      description: "Learning management system with courses, quizzes, and progress tracking.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-teal-600 to-blue-500",
      tags: ["EdTech", "Web", "E-learning"]
    },
    {
      id: 6,
      title: "Restaurant App",
      category: "Mobile & Web",
      description: "All-in-one solution for online ordering, reservations, and kitchen management.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      technologies: ["React Native", "Express", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-yellow-500 to-orange-500",
      tags: ["Mobile", "Web", "Restaurant"]
    }
  ];

  const categories = ["All", "Web", "Mobile", "Enterprise", "E-commerce", "EdTech"];

  // Filter projects based on search and active filter
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        project.technologies.some(tech => 
                          tech.toLowerCase().includes(searchTerm.toLowerCase())
                        );
    
    const matchesFilter = activeFilter === "All" || 
                         project.tags.includes(activeFilter);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 sm:px-6 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-green-400/10 to-teal-400/10 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Header Section */}
      <div className="relative z-10 max-w-7xl mx-auto mb-12 sm:mb-16 text-center animate-fadeInUp px-2 sm:px-4">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-lg mb-4 sm:mb-6">
          <Award className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-bold text-xs sm:text-sm">Our Work</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
          Portfolio Showcase
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore our collection of successful projects that demonstrate our expertise in creating innovative digital solutions.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="relative z-10 max-w-4xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 sm:py-4 border border-gray-300 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500 transition-all duration-300"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>
        
        <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                  : 'bg-white/80 text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20 animate-fadeInUp border border-gray-100"
              style={{ 
                animationDelay: `${0.1 + idx * 0.1}s`,
                opacity: 0,
                transform: 'translateY(20px)'
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center gap-3 sm:gap-4`}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 bg-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                    title="View Live"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 bg-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:scale-110"
                    title="View Code"
                    aria-label={`View ${project.title} source code`}
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
                  </a>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/95 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm">
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">{project.category}</span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs sm:text-sm font-medium rounded-full border border-blue-100 hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-2xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 sm:py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Search className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              {searchTerm 
                ? `No projects match your search for "${searchTerm}". Try a different term.`
                : `No projects match the selected filter. Try a different category.`}
            </p>
            {(searchTerm || activeFilter !== "All") && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveFilter("All");
                }}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                <X className="w-4 h-4 mr-1.5" />
                Clear filters
              </button>
            )}
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className={`relative z-10 max-w-4xl mx-auto mt-12 sm:mt-16 md:mt-20 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl animate-fadeInUp ${filteredProjects.length === 0 ? 'mt-8' : ''}`} style={{ animationDelay: '0.8s' }}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 sm:mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Let's collaborate to bring your vision to life with cutting-edge web solutions.
        </p>
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-2.5 sm:py-3.5 bg-white text-blue-600 font-bold text-base sm:text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-blue-600"
          aria-label="Get in touch to start your project"
        >
          <span>Get In Touch</span>
          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
      </div>
      
      {/* Back to top button - Mobile only */}
      {isMobile && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-gray-100 transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </section>
  );
};

export default Portfolio;
