import React, { useEffect, useState, useRef } from "react";
import Projects from "../../components/Projects/Projects";
import ContactButton from "../../components/ContactButton";
import Footer from "../../components/Footer/Footer";
import "./projects.scss";
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
import AnimaionContext from "../../context/animation-context";

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

const About = () => {
  const [currentBg, setCurrentBg] = useState("#fff");

  let appRef = useRef(null);

  useEffect(() => {
    gsap.to(appRef.current, {
      duration: 1,
      background: currentBg,
    });
  }, [currentBg]);
  return (
    <AnimaionContext.Provider value={{ setCurrentBg }}>
      <div ref={appRef}>
        <div
          className="about-container"
          id="about-container"
          data-scroll-container
        >
          <h1>
            The
            <br />
            Things That 
            <br />
            I Develop
          </h1>
          <ContactButton />
        </div>
        <Projects />

        <Footer />
      </div>
    </AnimaionContext.Provider>
  );
};

export default About;
