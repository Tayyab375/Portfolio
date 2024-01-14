import React from "react";
import { build } from "../../assets";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { experienceContent } from "../../constants";

const Experience = () => {
  return (
    <div className="w-full relative">
      <div className="absolute -top-20" id="section3" />
      <h1 className="mainHeading  ss:mb-20 mb-16">WORK EXPERIENCE</h1>

      <div className="relative flex justify-center md:items-center flex-col pt-52 pb-28 md:gap-32 gap-20">
        {/* center Line */}
        <div className="md:w-full w-fit absolute top-0 h-full flex-col flexCenter">
          <div>
            <img src={build} alt="icon" />
          </div>
          <hr className="w-1 bg-darkBlue flex-1" />
          <div className="w-5 h-5 bg-darkBlue rounded-full" />
        </div>
        {/* end of center line */}

        {experienceContent.map(
          ({ companyName, dataRange, jobDescription, detail }, index) => {
            return (
              <React.Fragment key={index}>
                <Desktop
                  companyName={companyName}
                  dataRange={dataRange}
                  jobDescription={jobDescription}
                  detail={detail}
                />
                <Mobile
                  companyName={companyName}
                  dataRange={dataRange}
                  jobDescription={jobDescription}
                  detail={detail}
                />
              </React.Fragment>
            );
          }
        )}
      </div>

      {/* gradient start */}
      <div className="relative">
        <div className="absolute z-[3] -left-1/2 top-0 w-[400px] h-[400px] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[400px] h-[400px] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </div>
      {/* gradient end */}
    </div>
  );
};

export default Experience;
