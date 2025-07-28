import React from "react";
import "./style.scss";
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
import projectData from "./TopProjectsData.json";
import SinglePortfolio from "./SinglePortfolio";
import "./card.scss";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

const Portfolio = () => {
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
      <div className="me-wrapper">
        <div className="me-division">
          <h2 className="me-title">Projects</h2>
          <div className="me-grid">
            <ProjectList />
          </div>

          <Link to="/projects" className="view-more-link">
            <h4>Want to see more?</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
