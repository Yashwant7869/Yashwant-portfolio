import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <section
      id="work"
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 font-sans relative bg-gradient-to-b from-transparent to-gray-900/20"
    >
      {/* Section Title */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          MY PROJECTS
        </h2>
        <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
        <p className="text-gray-400 text-sm sm:text-base lg:text-lg font-medium max-w-3xl mx-auto leading-relaxed px-4">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies and frameworks
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group border border-gray-700 hover:border-purple-500/50 bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-all duration-500 ease-out"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Image Container */}
            <div className="relative p-4 pb-0">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 lg:h-52 object-contain transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-purple-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold transform translate-y-4 group-hover:translate-y-0">
                    View Details
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 4).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-xs font-medium text-purple-300 rounded-full px-2 py-1 hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="text-xs text-gray-500 font-medium px-2 py-1">
                    +{project.tags.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] relative animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white text-2xl font-bold w-10 h-10 rounded-full hover:bg-gray-800 flex items-center justify-center transition-all duration-300"
              >
                ×
              </button>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 pb-6 lg:pb-8">
              {/* Project Image */}
              <div className="mb-4 lg:mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-32 sm:h-48 lg:h-64 object-contain rounded-xl shadow-lg"
                />
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed line-clamp-3">
                    {selectedProject.description}
                  </p>
                </div>

                {/* All Tags */}
                <div>
                  <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-xs font-medium text-purple-300 rounded-full px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-gray-300 hover:text-white px-4 py-2.5 rounded-xl text-sm font-semibold text-center transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                      </svg>
                      View Code
                    </span>
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                      View Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;