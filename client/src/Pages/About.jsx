// eslint-disable-next-line no-unused-vars
import React from 'react';
import Section from '../Components/Section';
import Image from '../assets/images.png';

const About = () => {
  const skills = ['Javascript', 'Node.js', 'MongoDB', 'Python'];

  return (
    <div className="bg-primary text-white">
   
      <Section title="About"  />

    
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-8 p-6">
       
        <div className="flex-shrink-0 w-full sm:w-1/2 h-[70vh] flex items-center justify-center px-4">
          <img src={Image} alt="About" className="w-full h-auto max-h-full object-contain" />
        </div>

      
        <div className="flex flex-col gap-6 sm:w-1/2">
          <p>
            My name is <span className="text-tertiary font-bold">GIHOZO Ismail</span>, based in Kigali, Rwanda. 
            I am a full-stack developer focusing on Django, JavaScript, React, and React Native.
          </p>
          <p>
            I am a passionate software developer dedicated to solving problems and making life better through technology.
          </p>

        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-10 px-6">
        <h1 className="text-tertiary text-center text-xl font-semibold mb-6">
          Technologies I am Interested In
        </h1>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-tertiary py-3 px-5 rounded-md text-center hover:bg-tertiary hover:text-white transition duration-300"
            >
              <h1>{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
