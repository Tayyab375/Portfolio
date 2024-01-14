import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Mobile = ({ companyName, dataRange, jobDescription, detail }) => {
  useEffect(() => {
    AOS.init();
    // AOS.init({ once: true }); // Only animate elements once
    // AOS.init({ duration: 800 }); // Set animation duration to 800ms
  }, []);

  return (
    <div className="flex pl-[17px] gap-6 md:hidden relative">
      <div className="h-9 w-9 rounded-full border-2 bg-primary border-darkBlue flexCenter mt-4">
        <div className="h-[10px] w-[10px] bg-darkBlue rounded-full" />
      </div>

      <div className="w-full z-10 space-y-4">
        <div data-aos="fade-left" className="space-y-1">
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

        <div data-aos="fade-left" className="text-dimWhite">
          {detail}
        </div>
      </div>
    </div>
  );
};

export default Mobile;
