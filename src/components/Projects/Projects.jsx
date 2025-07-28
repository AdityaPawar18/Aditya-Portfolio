import React, { useRef, useEffect, useContext } from "react";
import AnimaionContext from "../../context/animation-context";
import "../Portfolio/style.scss";
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
import projectData from "./AllProjectsData.json";
import SinglePortfolio from "../Portfolio/SinglePortfolio";
import "../Portfolio/card.scss";

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

const Aboutme = () => {
  let divRef = useRef(null);
  let colorRef = useRef(null);
  let linkRef = useRef(null);

  let paraRef = useRef(null);

  let animationContext = useContext(AnimaionContext);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: divRef.current,
        start: "+=200 80%",
        end: "+=200 60%",
        scrub: true,
        pinSpacing: false,
        onEnter: () => {
          animationContext.setCurrentBg("#1d1d1d");
          gsap.to(colorRef.current, {
            color: "#fff",
            duration: 0.5,
          });
          gsap.to(linkRef.current, {
            color: "#fff",
            duration: 0.5,
          });
          gsap.to(paraRef.current, {
            color: "#b2b2b2",
            duration: 0.5,
          });
        },
        onLeaveBack: () => {
          animationContext.setCurrentBg("#fff");
          gsap.to(colorRef.current, {
            color: "#111",
            duration: 0.5,
          });
          gsap.to(linkRef.current, {
            color: "#111",
            duration: 0.5,
          });
        },
      },
    });
  });

  const ProjectList = () =>
    projectData.map((project) => (
      <SinglePortfolio
        key={project.id}
        id={project.id}
        title={project.title}
        info={project.info}
        technologies={project.technologies}
        image={project.image}
        github={project.github}
        deployed={project.deployed}
        description={
          <ul>
            {project.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        }
        show={project.show}
      />
    ));

  return (
    <>
      <div ref={divRef} className="me-wrapper">
        <div className="me-division">
          <h2 ref={colorRef} className="me-title">
          My Projects
          </h2>
          <div className="me-grid">
            <ProjectList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
