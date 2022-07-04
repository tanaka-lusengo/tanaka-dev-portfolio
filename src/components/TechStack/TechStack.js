import React from "react";
import "./TechStack.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import html from "../../assets/images/icons/html.svg";
import css from "../../assets/images/icons/css.svg";
import express from "../../assets/images/icons/express.svg";
import javascript from "../../assets/images/icons/javascript.svg";
import mongodb from "../../assets/images/icons/mongodb.svg";
import mysql from "../../assets/images/icons/mysql.svg";
import nodejs from "../../assets/images/icons/nodejs.svg";
import python from "../../assets/images/icons/python.svg";
import react from "../../assets/images/icons/react.svg";
import sass from "../../assets/images/icons/sass.svg";
import socketio from "../../assets/images/icons/socketio.svg";
import typescript from "../../assets/images/icons/typescript.svg";

const TechStack = () => {
  // initialising AOS (animate On Scroll)
  AOS.init();

  return (
    <section id="tech-stack" className="tech-stack">
      <div className="tech-stack__layer">
        <div className="tech-stack__title-container">
          <h2 className="tech-stack__title--typeriter">Tech - Stack:</h2>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out-back"
          className="tech-stack__text-container"
        >
          <p className="tech-stack__text">
            London based, Front-End/ Full-Stack Web Developer & Photographer.
            With experience in: UI/UX Design & Data Science.
          </p>
        </div>

        <div className="tech-stack__icons">
          <ul className="tech-stack__list">
            <li>
              <img
                className="tech-stack__list-item"
                src={html}
                alt="html icon"
              />
            </li>
            <li>
              <img className="tech-stack__list-item" src={css} alt="css icon" />
            </li>
            <li>
              <img
                className="tech-stack__list-item"
                src={sass}
                alt="sass icon"
              />
            </li>
            <li>
              <img
                className="tech-stack__list-item"
                src={react}
                alt="react icon"
              />
            </li>
            <li>
              <img
                className="tech-stack__list-item"
                src={javascript}
                alt="javascript icon"
              />
            </li>
            <li>
              <img
                className="tech-stack__list-item"
                src={typescript}
                alt="typescript icon"
              />
            </li>
          </ul>

          <ul className="tech-stack__list">
            <li>
              <img
                className="tech-stack__list-item"
                src={python}
                alt="python icon"
              />
            </li>
            <li>
              <img
                className="tech-stack__list-item"
                src={nodejs}
                alt="nodejs icon"
              />
            </li>
            <li>
              <img
                className="tech-stack__list-item"
                src={express}
                alt="express icon"
              />
            </li>
            <li>
              <img
                className="tech-stack__list-item"
                src={socketio}
                alt="socketio icon"
              />
            </li>
            <li>
              <img
                className="tech-stack__list-item"
                src={mongodb}
                alt="mongodb icon"
              />
            </li>
            <li>
              <img
                className="tech-stack__list-item"
                src={mysql}
                alt="mysql icon"
              />
            </li>
          </ul>
        </div>
      </div>
      <p className="about__divide">~</p>
    </section>
  );
};

export default TechStack;
