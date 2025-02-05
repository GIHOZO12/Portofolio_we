// eslint-disable-next-line no-unused-vars
import React from 'react';
import image from '../assets/ngewe-removebg-preview.png';

const Intro = () => {
  return (
    <div className="h-[80vh] bg-primary flex flex-col sm:flex-row items-center p-4 justify-between">
      {/* Text Section */}
      <div className="gap-10">
        <h1 className="text-white">Hi! I am</h1>
        <h2 className="text-secondary text-7xl sm:text-3xl font-semibold">GIHOZO Ismail</h2>
        <h3 className="text-white font-semibold">
          I am a passionate software developer. I solve problems related to web and mobile apps.
        </h3>
        <p className="text-white p-3">
          I am a full-stack developer focusing on Django, JavaScript, React, and Node.js.
        </p>
        <p className='text-white font-bold'>I am ready to help you enjoying the life of internrt</p>
        <button className="border-2 border-tertiary rounded-md px-10 py-3 text-white hover:bg-tertiary">
          View more
        </button>
      </div>

      {/* Image Section */}
      <div>
        <img src={image} alt="image here" width={400} height={200} />
      </div>
    </div>
  );
};

export default Intro;
