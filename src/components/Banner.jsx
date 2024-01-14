import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { bannerContent } from "../constants";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  const { professionName, aboutMe, myName } = bannerContent;

  useEffect(() => {
    AOS.init();
    // AOS.init({ once: true }); // Only animate elements once
    // AOS.init({ duration: 800 }); // Set animation duration to 800ms
  }, []);

  return (
    <section className="flex md:flex-row flex-col paddingY">
      <div
        data-aos="fade-up"
        className="flex-1 flexStart flex-col xl:px-0 sm:px-16 px-6"
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-6xl text-5xl text-white ss:leading-[80px] leading-[75px]">
            Hello! <br className="sm:block hidden" />
            <span className="text-gradient ss:leading-[65px]">
              I'm {myName}
            </span>
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-4xl text-3xl text-white ss:leading-[85px] leading-[75px] w-full">
          {professionName}
        </h1>
        <p className="paragraph max-w-[470px] mt-5">{aboutMe}</p>
      </div>

      <div className="flex-1 flex flexCenter md:my-0 my-10 relative">
        <LazyLoadImage
          src={require("../assets/robot.png")}
          alt="billing"
          effect="blur"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Banner;
