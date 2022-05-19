import React from "react";
import "./Portfolio.scss";
import buildersCollective from "../../assets/images/images/builders-collective-img.png";
import programmersLanguageQuiz from "../../assets/images/images/programmers-language-quiz-img.png";
import marvelHeroQuest from "../../assets/images/images/marvel-hero-quest-img.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  // initialising AOS (animate On Scroll)
  AOS.init();
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__layer">
        <header className="portfolio__title-container">
          <h1 className="portfolio__title">Portfolio</h1>
        </header>
        <div className="portfolio__projects-container">
          <ul className="portfolio__projects__list">
            {/* 01  */}
            <li
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out-back"
              className="portfolio__list-item"
            >
              <p className="portfolio__number">
                01.<sub>/5</sub>
              </p>
              <div className="portfolio__title-tech-stack-container">
                <h2 className="portfolio__project-name">
                  Builders' Collective
                </h2>
                <p className="portfolio__description">
                  Brainstation Capstone Project - Builders' Collective. A
                  dedicated social media/job site for Construction
                  Professionals. Features: Live chat application, live jobs
                  board, password bcrypt hashing, user follow functionality,
                  CRUD operations.
                </p>
                <ul className="portfolio__tech-stack-list">
                  <li className="portfolio__tech-stack-item">- React</li>
                  <li className="portfolio__tech-stack-item">Sass</li>
                  <li className="portfolio__tech-stack-item">Context API</li>
                  <li className="portfolio__tech-stack-item">JavaScript</li>
                  <li className="portfolio__tech-stack-item">Node.js</li>
                  <li className="portfolio__tech-stack-item">Express</li>
                  <li className="portfolio__tech-stack-item">MongoDB</li>
                  <li className="portfolio__tech-stack-item">Socket.io</li>
                </ul>
              </div>
              <div className="portfolio__project-link-container">
                <div className="portfolio__image-container">
                  <img
                    className="portfolio__image"
                    src={buildersCollective}
                    alt="Builders Collective preview"
                  />
                </div>
                <ul className="portfolio__external-link-list">
                  <li className="portfolio__link-item">Go to --&gt;</li>
                  <li>
                    <a
                      className="portfolio__link-item portfolio__link-item--hover"
                      href="https://builders-collective.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Site
                    </a>
                  </li>
                  <li>
                    <a
                      className="portfolio__link-item portfolio__link-item--hover"
                      href="https://github.com/tanaka-lusengo/builders-collective-client"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="portfolio__divide--mobile-tablet" />
            </li>
            <hr className="portfolio__divide--desktop" />

            {/* 02 */}
            <li
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out-back"
              className="portfolio__list-item"
            >
              <p className="portfolio__number">
                02.<sub>/5</sub>
              </p>
              <div className="portfolio__title-tech-stack-container">
                <h2 className="portfolio__project-name">
                  Programmers Language Quiz
                </h2>
                <p className="portfolio__description">
                  Pair Programming - 24hr Hackathon Project. A fun quiz for
                  programmers to test their JavaScript knowledge with a twist!
                </p>
                <ul className="portfolio__tech-stack-list">
                  <li className="portfolio__tech-stack-item">- React</li>
                  <li className="portfolio__tech-stack-item">Sass</li>
                  <li className="portfolio__tech-stack-item">JavaScript</li>
                </ul>
              </div>
              <div className="portfolio__project-link-container">
                <div className="portfolio__image-container">
                  <img
                    className="portfolio__image"
                    src={programmersLanguageQuiz}
                    alt="Programmers Language Quiz preview"
                  />
                </div>
                <ul className="portfolio__external-link-list">
                  <li className="portfolio__link-item">Go to --&gt;</li>
                  <li>
                    <a
                      className="portfolio__link-item portfolio__link-item--hover"
                      href="https://programmers-language-quiz.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Site
                    </a>
                  </li>
                  <li>
                    <a
                      className="portfolio__link-item portfolio__link-item--hover"
                      href="https://github.com/tanaka-lusengo/programmers-language-quiz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="portfolio__divide--mobile-tablet" />
            </li>
            <hr className="portfolio__divide--desktop" />

            {/* 03 */}
            <li
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out-back"
              className="portfolio__list-item"
            >
              <p className="portfolio__number">
                03.<sub>/5</sub>
              </p>
              <div className="portfolio__title-tech-stack-container">
                <h2 className="portfolio__project-name">Marvel Hero Quest</h2>
                <p className="portfolio__description">
                  First 24hr Hackathon Project - A Vanilla JS Application
                  Questionnaire to discover which Marvel Hero you relate to.
                </p>
                <ul className="portfolio__tech-stack-list">
                  <li className="portfolio__tech-stack-item">- HTML</li>
                  <li className="portfolio__tech-stack-item">Sass</li>
                  <li className="portfolio__tech-stack-item">JavaScript</li>
                </ul>
              </div>
              <div className="portfolio__project-link-container">
                <div className="portfolio__image-container">
                  <img
                    className="portfolio__image"
                    src={marvelHeroQuest}
                    alt="Marvel Hero Quest preview"
                  />
                </div>
                <ul className="portfolio__external-link-list">
                  <li className="portfolio__link-item">Go to --&gt;</li>
                  <li>
                    <a
                      className="portfolio__link-item portfolio__link-item--hover"
                      href="https://marvel-hero-quest.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Site
                    </a>
                  </li>
                  <li>
                    <a
                      className="portfolio__link-item portfolio__link-item--hover"
                      href="https://github.com/tanaka-lusengo/marvel-hero-quest"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="portfolio__divide--mobile-tablet" />
            </li>
            <hr className="portfolio__divide--desktop" />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
