import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "react-tooltip/dist/react-tooltip.css";

import { skillsContent } from "../constants";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Skills = () => {
  useEffect(() => {
    AOS.init();
    // AOS.init({ once: true }); // Only animate elements once
    // AOS.init({ duration: 800 }); // Set animation duration to 800ms
  }, []);

  return (
    <div className="w-full flex flex-col ss:gap-20 gap-16 relative">
      <div className="absolute -top-20" id="section2" />
      <h1 className="mainHeading">PROFESSIONAL SKILLS</h1>

      <div className="flex gap-8 flex-wrap justify-center items-center">
        {skillsContent.map((item, index) => {
          return (
            <div data-aos-offset={item.offset} data-aos={item.aos} key={index}>
              <div
                className="text-7xl"
                data-tooltip-id={item.title}
                data-tooltip-content={item.title}
              >
                {item.icon}
              </div>
              <ReactTooltip id={item.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
