// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[10vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient [clip-path:polygon(0_0,100%_0,100%_98%,75%_95%,0_100%)]"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
      A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>    {/* Skill Categories */}
    <div className="flex flex-wrap gap-4 lg:gap-5 py-10 justify-center lg:justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-3 sm:px-6 lg:px-10 py-6 sm:py-8 mb-6 sm:mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-lg sm:text-2xl lg:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items - Responsive grid */}

            <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
          <div className="grid grid-cols-3 xs:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 w-full">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-center space-x-1 sm:space-x-2 bg-transparent border-2 border-gray-700 rounded-2xl sm:rounded-3xl py-1.5 sm:py-2 px-1.5 sm:px-2 text-center min-w-0"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 flex-shrink-0"
                />
                <span className="text-xs sm:text-sm text-gray-300 truncate">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;