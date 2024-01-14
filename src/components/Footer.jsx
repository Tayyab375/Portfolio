import React from "react";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full flex justify-between items-center md:flex-row flex-col py-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center sm:text-lg text-xs  leading-[27px] text-[#ffffffb2]">
        Copyright Ⓒ 2022 HooBank. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <div
            key={index}
            className={`cursor-pointer flex items-center justify-center ${
              index !== 0 && "ml-6"
            }`}
            onClick={() => window.open(social.link)}
          >
            {social.icon}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
