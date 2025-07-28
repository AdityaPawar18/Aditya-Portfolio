import React from "react";
import "./skills.scss";
import { LineProgressBar } from "@frogress/line";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div data-scroll-section className="skills-wrapper">
      <div className="big-wrapper">
        <div className="left-wrap">
          <h2>Skills & Expertise</h2>
          <p>
            
          </p>

          <p>
            
          </p>
          <p>
            
          </p>

          <p>
            Visit my{" "}
            <span>
              <a
                href="https://www.linkedin.com/in/adityapawar18/"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                LinkedIn Profile
              </a>
            </span>{" "}
            or <Link to="/collab">Contact me</Link>.
          </p>
        </div>
        <div className="right-wrap">
          <div className="skills-progress">
            <div className="skills-item">
              <h3>Frontend</h3>
              <LineProgressBar percent={65} rounded={36} height={3} />
            </div>

            <div className="skills-item">
              <h3>Backend</h3>
              <LineProgressBar
                percent={70}
                rounded={36}
                height={3}
                progressColor="linear-gradient(to right, #ff655b 60%, #fd297b)"
                containerColor="#f0d4da"
              />
            </div>

            <div className="skills-item">
              <h3>Web Development</h3>
              <LineProgressBar
                percent={80}
                rounded={36}
                height={3}
                progressColor="linear-gradient(to right, #ff5beb 60%, #d300ff)"
                containerColor="#f0d4da"
              />
            </div>

            <div className="skills-item">
              <h3>Devops</h3>
              <LineProgressBar
                percent={60}
                rounded={36}
                height={3}
                progressColor="linear-gradient(to right, rgb(101 255 91) 60%, rgb(144 225 112))"
                containerColor="#ccf4c9"
              />
            </div>

                <div className="skills-item">
              <h3>Database Management</h3>
              <LineProgressBar
                percent={70}
                rounded={36}
                height={3}
                progressColor="linear-gradient(to right, rgb(101 255 91) 60%, rgb(144 225 112))"
                containerColor="#ccf4c9"
              />
            </div>

            <div className="skills-item">
              <h3>Google Cloud</h3>
              <LineProgressBar
                percent={70}
                rounded={36}
                height={3}
                progressColor="linear-gradient(to right, #ff8133 60%, rgb(255 146 70))"
                containerColor="#ffdcc7"
              />
            </div>
          </div>

          {/*<div className="card-experience">
            <div className="card">
              <h3>Frontend Developer</h3>
              <h5>TedxVit Pune</h5>
              <p>2022-Present</p>
              <p>
                Award-winning Content Marketing Agency specialises in creating
                and sharing engaging content.
              </p>
            </div>
  </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Skills;


