// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Section from '../Components/Section';
import { experience } from '../Resources/Experience';

const Experiances = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div>
      <Section title="Experiances" />
      <div className="flex flex-col gap-5 sm:flex-row sm:gap-[20%]">
        {/* Experience Dates */}
        <div className="flex flex-row gap-2 w-full overflow-y-auto sm:flex-col sm:w-1/3 sm:overflow-y-auto">
          {experience.map((exp, index) => (
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
                {exp.date}
              </h1>
            </div>
          ))}
        </div>

        
        <div>
          {selected !== false && (
            <div className="p-5">
              <h1 className="text-xl text-secondary">{experience[selected].title}</h1>
              <h2 className="text-white">{experience[selected].company}</h2>
              <p className="text-white w-full sm:w-[500px]">
                {experience[selected].description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experiances;
