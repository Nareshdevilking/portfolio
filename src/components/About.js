import React from "react";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <section className="about">

      <h2 className="section-title">About Me</h2>

      <div className="about-cards">

        <Tilt>
          <div className="about-card">
            <h3>Education</h3>
            <p>Bachelor's in Artificial Intelligence & Data Science</p>
          </div>
        </Tilt>

        <Tilt>
          <div className="about-card">
            <h3>Focus</h3>
            <p>Machine Learning, Data Analysis & Web Development</p>
          </div>
        </Tilt>

        <Tilt>
          <div className="about-card">
            <h3>Goal</h3>
            <p>Building intelligent systems and scalable applications</p>
          </div>
        </Tilt>

      </div>

    </section>
  );
}

export default About;