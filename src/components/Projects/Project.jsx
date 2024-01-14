import React from "react";

// content of this section
import { projectContent } from "../../constants";

// components
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="w-full flex flex-col ss:gap-20 gap-16 relative">
      <div className="absolute -top-20" id="section4" />
      <div>
        <h1 className="mainHeading">MY PROJECT</h1>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {projectContent.map(
          (
            {
              imgSrc,
              projectName,
              detailPath,
              liveLink,
              githubLink,
              description,
              technologyUsed,
              aos,
            },
            index
          ) => {
            return (
              <React.Fragment key={index}>
                <ProjectCard
                  imgSrc={imgSrc}
                  projectName={projectName}
                  liveLink={liveLink}
                  githubLink={githubLink}
                  detailPath={detailPath}
                  description={description}
                  technologyUsed={technologyUsed}
                  aos={aos}
                />
              </React.Fragment>
            );
          }
        )}

        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient -bottom-40" />
      </div>
    </div>
  );
};

export default Project;
