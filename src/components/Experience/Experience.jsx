import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 font-sans bg-skills-gradient [clip-path:polygon(0_0,100%_0,100%_98%,25%_95%,0_100%)]"
    >
      {/* Section Title */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          EXPERIENCE
        </h2>
        <div className="w-16 sm:w-24 lg:w-32 h-1 bg-purple-500 mx-auto mt-2 sm:mt-4"></div>
        <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base lg:text-lg font-semibold px-4">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line - Hidden on mobile, visible on larger screens */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6 lg:mb-8 ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Circle - Only visible on larger screens */}
            <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-[#8245ec] w-12 h-12 lg:w-16 lg:h-16 rounded-full justify-center items-center z-10 p-1">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            {/* Content Section */}{" "}
            <div
              className={`w-full sm:w-[calc(50%-2rem)] lg:w-[calc(50%-3rem)] p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_15px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
              }`}
            >
              {/* Flex container for image and text */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                {/* Company Logo/Image */}
                <div className="w-16 h-18 sm:w-20 sm:h-14 lg:w-18 lg:h-20 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex-1 min-w-0">
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white leading-tight">
                      {experience.role}
                    </h3>
                    <h4 className="text-sm sm:text-base text-gray-300 mt-1">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date */}
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    {experience.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
                {experience.desc}
              </p>
              {/* skills */}
              <div className="mt-4">
                <h5 className="font-medium text-white text-sm sm:text-base">
                  Skills:
                </h5>
                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-xs font-medium text-purple-300 rounded-full px-2 py-1 hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
