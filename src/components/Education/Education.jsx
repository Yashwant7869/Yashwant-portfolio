import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-16 sm:w-24 lg:w-32 h-1 bg-purple-500 mx-auto mt-2 sm:mt-4"></div>
        <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base lg:text-lg font-semibold px-4">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line - Hidden on mobile, visible on larger screens */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-start sm:items-center mb-8 sm:mb-12 lg:mb-16 ${
              index % 2 === 1 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Circle - Only visible on larger screens */}
            <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 lg:w-16 lg:h-16 rounded-full justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-contain rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:w-[calc(50%-2rem)] lg:w-[calc(50%-3rem)] p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_15px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105 ${
                index % 2 === 1 ? "sm:mr-auto" : "sm:ml-auto"
              }`}
            >
              {/* Flex container for image and text */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                {/* School Logo/Image */}
                <div className="w-16 h-18 sm:w-20 sm:h-14 lg:w-18 lg:h-20 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex-1 min-w-0">
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white leading-tight">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm sm:text-base text-gray-300 mt-1">
                      {edu.school}
                    </h4>
                  </div>
                  {/* Date */}
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-sm sm:text-base text-gray-400 font-semibold">
                  <span className="text-purple-400">Grade:</span> {edu.grade}
                </p>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{edu.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;