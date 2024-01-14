import { useEffect, useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrollBg, setScrollBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollBg(true);
      } else {
        setScrollBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="fixed top-0 z-50 w-full"
      style={{
        backgroundColor: scrollBg ? "rgba(0, 4, 15, 0.8)" : "transparent",
        backdropFilter: scrollBg ? "blur(8px)" : "none",
        transition: "background-color 0.3s ease",
      }}
    >
      <div className="paddingX flexCenter">
        <div className="boxWidth">
          <nav className="w-full flex py-6 justify-between items-center">
            <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-normal cursor-pointer text-[16px] text-dimWhite
         ${
           index === navLinks.length - 1 ? "mr-0" : "mr-10"
         } hover:text-white transition-all duration-300`}
                >
                  <a href={`/#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px]"
                onClick={() => setToggle(!toggle)}
              />

              <div
                className={`${
                  !toggle ? "hidden" : "flex"
                } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col">
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-medium cursor-pointer text-base text-dimWhite
             ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
