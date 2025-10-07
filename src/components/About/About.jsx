 import React from 'react';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';
import ElectricButton from '../ElectricButton';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Yashwant Singh
          </h2>
          
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <span className="inline-block">
              <Typewriter
                options={{
                  strings: [
                    'Fullstack Developer',
                    'App Developer',
                    'UI/UX Designer',
                    'Coder',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h3>
          
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a full-stack developer with over 2 years of experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>
          
          {/* Electric Resume Button */}
          <div className="mt-8 w-full max-w-sm">
            <ElectricButton
              text="Resume"
              onClick={() => {
                 const link = document.createElement('a');
    link.href = "https://docs.google.com/document/d/1MsLFM-jOhffEed8xqCVYicszDF5fS3bO/export?format=pdf";
    link.download = "Yashwant_Singh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
              className="cv-button"
              containerHeight="120px"
              glowColor="#8245ec"
            />
          </div>
        </div>
        
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 aspect-square border-4 border-purple-700 rounded-full overflow-hidden drop-shadow-[0_10px_10px_rgba(130,69,236,0.6)]"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
            glareEnable={false}
            glareMaxOpacity={0}
          >
            <img
              src={profileImage}
              alt="Yashwant Singh"
              className="w-full h-full object-cover transition-none"
            />
          </Tilt>

        </div>
      </div>
    </section>
  );
};

export default About;