import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Desktop = ({ companyName, dataRange, jobDescription, detail }) => {
  useEffect(() => {
    AOS.init();
    // AOS.init({ once: true }); // Only animate elements once
    // AOS.init({ duration: 800 }); // Set animation duration to 800ms
  }, []);

  return (
    <div className="w-full z-10 gap-8 justify-between hidden md:flex relative">
      <div
        data-aos="fade-right"
        className="w-[45%] space-y-1 flex flex-col items-end"
      >
        <div>
          <h1 className="font-bold md:text-4xl text-3xl text-gradient">
            {companyName}
          </h1>
        </div>
        <div>
          <h4 className="text-white text-lg">
            {dataRange} |{" "}
            <span className="font-semibold">{jobDescription}</span>
          </h4>
        </div>
      </div>

      <div className="h-9 w-9 rounded-full border-2 bg-primary border-darkBlue flexCenter mt-4">
        <div className="h-[10px] w-[10px] bg-darkBlue rounded-full" />
      </div>

      <div data-aos="fade-left" className="text-dimWhite w-[45%]">
        {detail}
      </div>
    </div>
  );
};

export default Desktop;
