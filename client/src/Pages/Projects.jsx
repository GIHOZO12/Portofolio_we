import React, { useState } from 'react';
import Section from '../Components/Section';
import { Projects_list } from '../Resources/Projects';

const Projects = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div>
      <Section title="Projects" />
      <div className="flex flex-col gap-5 sm:flex-row sm:gap-[20%]">
        {/* Experience Dates */}
        <div className="flex flex-row gap-2 w-full overflow-y-auto sm:flex-col sm:w-1/3 sm:overflow-auto">
          {Projects_list.map((exp, index) => (
            <div
              key={index}
              className="p-5 cursor-pointer"
              onClick={() => setSelected(index)}
            >
              <h1
                className={`text-lg px-3 border-l-2 py-2 ${
                  selected === index
                    ? 'text-tertiary border-tertiary bg-[#22736c]'
                    : 'text-white'
                }`}
              >
                {exp.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:w-full sm:items-center sm:gap-5">
          {selected !== false && (
            <>
              {/* Image on top */}
              <img
                src={Projects_list[selected].image}
                alt="image not found"
                className="w-[300px] h-[200px] object-cover mb-5 sm:mb-5"
              />

              {/* Title and Description below image */}
              <div className="text-center sm:text-left">
                <h1 className="text-xl text-secondary mb-2">
                  {Projects_list[selected].title}
                </h1>
                <p className="text-white sm:w-[500px]">
                  {Projects_list[selected].description}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
