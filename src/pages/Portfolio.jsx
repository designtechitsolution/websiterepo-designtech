import React from "react";
import { ExternalLink, Github, Award } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full Stack Development",
      description: "Modern e-commerce solution with real-time inventory management, secure payment gateway integration, and advanced analytics dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "http://65.1.210.41/",
      githubUrl: "#",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "Enterprise Solution",
      description: "Comprehensive healthcare platform with patient records, appointment scheduling, telemedicine integration, and HIPAA compliance.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      technologies: ["React", "TypeScript", "PostgreSQL", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Real Estate Portal",
      category: "Web Application",
      description: "Interactive property listing platform with virtual tours, advanced search filters, mortgage calculator, and agent dashboard.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      technologies: ["Next.js", "Tailwind CSS", "Firebase", "Google Maps API"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Financial Analytics Dashboard",
      category: "Data Visualization",
      description: "Real-time financial data visualization platform with interactive charts, portfolio tracking, and predictive analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "D3.js", "Python", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Learning Management System",
      category: "EdTech Platform",
      description: "Comprehensive LMS with course management, video streaming, quizzes, progress tracking, and certification system.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-teal-500 to-blue-500"
    },
    {
      id: 6,
      title: "Restaurant Management App",
      category: "Mobile & Web",
      description: "All-in-one restaurant solution with online ordering, table reservations, kitchen management, and delivery tracking.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      technologies: ["React Native", "Express.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-green-400/10 to-teal-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Header Section */}
      <div className="relative z-10 max-w-7xl mx-auto mb-16 text-center animate-fadeInUp">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg mb-6">
          <Award className="w-5 h-5" />
          <span className="font-bold text-sm">Our Work</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
          Portfolio Showcase
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore our collection of successful projects that demonstrate our expertise in creating innovative digital solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="group bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fadeInUp"
            style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
          >
            {/* Project Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center gap-4`}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                  title="View Live"
                >
                  <ExternalLink className="w-5 h-5 text-gray-800" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:scale-110"
                  title="View Code"
                >
                  <Github className="w-5 h-5 text-gray-800" />
                </a>
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-bold text-gray-800">{project.category}</span>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm font-semibold rounded-full border border-blue-200 hover:scale-105 transition-transform duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-2xl transition-all duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="relative z-10 max-w-4xl mx-auto mt-20 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-3xl p-12 shadow-2xl animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Let's collaborate to bring your vision to life with cutting-edge web solutions.
        </p>
        <a
          href="/#contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
        >
          <span>Get In Touch</span>
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
