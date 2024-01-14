import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import {
  SiStyledcomponents,
  SiTailwindcss,
  SiMui,
  SiExpress,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { AiFillHtml5, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiNodejs, DiMongodb } from "react-icons/di";
import { FaFacebook } from "react-icons/fa";

// images
import { project1img } from "../assets";

export const navLinks = [
  {
    id: "section1",
    title: "Home",
  },
  {
    id: "section2",
    title: "Skills",
  },
  {
    id: "section3",
    title: "Experience",
  },
  {
    id: "section4",
    title: "Projects",
  },
  {
    id: "section5",
    title: "Contact",
  },
];

export const bannerContent = {
  myName: "Muhammad Tayyab Nawaz",
  professionName: "Front-End Developer",
  aboutMe:
    "Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.",
};

export const skillsContent = [
  {
    icon: <FaReact color="#5CCFEE" />,
    title: "React",
    aos: "fade-up",
  },
  {
    icon: <TbBrandJavascript color="#F2D400" />,
    title: "Javascript",
    aos: "fade-down",
  },
  {
    icon: <DiNodejs color="#ffffff" size={100} />,
    title: "Node.js",
    aos: "fade-up",
    offset: 140,
  },
  {
    icon: <SiExpress color="#ffffff" size={50} />,
    title: "Express.js",
    aos: "fade-down",
  },
  {
    icon: <DiMongodb color="#ffffff" size={50} />,
    title: "Mongodb",
    aos: "fade-up",
  },
  {
    icon: <SiStyledcomponents color="white" />,
    title: "Styled Components",
    aos: "fade-down",
  },
  {
    icon: <SiTailwindcss color="#5CCFEE" />,
    title: "Tailwindcss",
    aos: "fade-up",
  },
  {
    icon: <SiMui color="#006AB1" />,
    title: "Material UI",
    aos: "fade-down",
  },
  {
    icon: <IoLogoCss3 color="#006AB1" />,
    title: "CSS",
    aos: "fade-up",
  },
  {
    icon: <AiFillHtml5 color="#D84924" />,
    title: "HTML",
    aos: "fade-down",
  },
  {
    icon: <AiFillGithub color="white" />,
    title: "Github",
    aos: "fade-up",
  },
];

export const experienceContent = [
  {
    companyName: "BlocTAK Software Solutions",
    dataRange: "OCT 2022 - Present",
    jobDescription: "Front-End Developer",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, repellendus eveniet voluptate quaerat dignissimos vero sunt doloremque, soluta iusto hic praesentium corporis ut, quia eos eligendi perferendis magni sit asperiores! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, repellendus eveniet voluptate quaerat dignissimos vero sunt doloremque, soluta iusto hic praesentium corporis ut, quia eos eligendi perferendis magni sit asperiores!",
  },
];

export const projectContent = [
  {
    imgSrc: project1img,
    projectName: "Project Name",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, expedita. Laborum veritatis quasi dignissimos earum hic repellendus rem soluta assumenda unde quidem, accusantium amet minus ad, ducimus est sit ipsa?",
    liveLink: "",
    githubLink: "",
    technologyUsed: [
      { skill: "#react", color: "#006AB1" },
      { skill: "#express", color: "#D84924" },
      { skill: "#node", color: "#41C3D4" },
    ],
    aos: "fade-right",
  },
  {
    imgSrc: project1img,
    projectName: "Project Name",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, expedita. Laborum veritatis quasi dignissimos earum hic repellendus rem soluta assumenda unde quidem.",
    liveLink: "",
    githubLink: "",
    technologyUsed: [
      { skill: "#react", color: "#006AB1" },
      { skill: "#express", color: "#D84924" },
      { skill: "#node", color: "#41C3D4" },
    ],
    aos: "fade-up",
  },
  {
    imgSrc: project1img,
    projectName: "Project Name",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, expedita. Laborum veritatis quasi dignissimos earum hic repellendus rem soluta assumenda unde quidem, accusantium amet minus ad, ducimus est sit ipsa?",
    liveLink: "",
    githubLink: "",
    technologyUsed: [
      { skill: "#react", color: "#006AB1" },
      { skill: "#express", color: "#D84924" },
      { skill: "#node", color: "#41C3D4" },
    ],
    aos: "fade-left",
  },
  {
    imgSrc: project1img,
    projectName: "Project Name",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, expedita. Laborum veritatis quasi dignissimos earum hic repellendus rem soluta assumenda unde quidem.",
    liveLink: "",
    githubLink: "",
    technologyUsed: [
      { skill: "#react", color: "#006AB1" },
      { skill: "#express", color: "#D84924" },
      { skill: "#node", color: "#41C3D4" },
    ],
    aos: "fade-right",
  },
];

// footer content
export const socialMedia = [
  {
    icon: <FaFacebook color="#ffffff" size={22} />,
    link: "https://www.facebook.com/",
  },
  {
    icon: <AiFillLinkedin color="#ffffff" size={25} />,
    link: "https://www.linkedin.com/",
  },
  {
    icon: <AiFillGithub color="#ffffff" size={27} />,
    link: "https://www.linkedin.com/",
  },
];
