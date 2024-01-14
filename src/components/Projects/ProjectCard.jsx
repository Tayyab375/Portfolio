import React, { useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({
  imgSrc,
  projectName,
  liveLink,
  githubLink,
  description,
  technologyUsed,
  aos,
}) => {
  // btn content
  const btnContent = [
    {
      path: liveLink,
      icon: <AiFillEye size={22} />,
    },
    {
      path: githubLink,
      icon: <AiFillGithub size={22} />,
    },
  ];

  useEffect(() => {
    AOS.init();
    // AOS.init({ once: true }); // Only animate elements once
    // AOS.init({ duration: 800 }); // Set animation duration to 800ms
  }, []);

  return (
    <section
      data-aos={aos}
      data-aos-offset={200}
      className="rounded-xl w-80 flex flex-col gap-3 project_card_gradient p-4"
    >
      <div className="w-full relative">
        <LazyLoadImage
          src={imgSrc}
          alt={projectName}
          effect="blur"
          className="w-full min-h-[230px] object-cover rounded-2xl"
        />

        <div className="flex items-center gap-3 z-10 absolute top-3 right-3">
          {btnContent.map((item, index) => {
            return (
              <a
                href={item.path}
                target="_blank"
                key={index}
                rel="noreferrer"
                className="text-white project_card_gradient p-1.5 rounded-full"
              >
                <span>{item.icon}</span>
              </a>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2 h-full">
        <h2 className="text-white text-xl font-bold">{projectName}</h2>
        <p className="text-sm text-white flex-grow">{description}</p>

        <div className="flex gap-2.5 items-end  h-full">
          {technologyUsed.map((item, index) => (
            <p key={index} className="text-sm" style={{ color: item.color }}>
              {item.skill}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
