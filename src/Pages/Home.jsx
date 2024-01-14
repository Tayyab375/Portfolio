import React from "react";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Skills from "../components/Skills";
import Experience from "../components/Experience/Experience";
import Project from "../components/Projects/Project";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div id="section1" className="bg-primary w-full overflow-hidden relative">
      <Navbar />

      <div className="flexStart mt-20">
        <div className="boxWidth">
          <Banner />
        </div>
      </div>

      <div className="paddingX flexCenter">
        <div className="boxWidth flex flex-col md:mt-28 mt-24 md:gap-48 gap-40">
          <Skills />
          <Experience />
          <Project />
          <ContactForm />
        </div>
      </div>

      <section className="paddingX flexCenter">
        <div className="boxWidth md:mt-28 mt-24">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Home;
