import React from "react";
import "./Portfolio.scss";
import buildersCollective from "../../assets/images/images/builders-collective-img.png";
import programmersLanguageQuiz from "../../assets/images/images/programmers-language-quiz-img.png";
import marvelHeroQuest from "../../assets/images/images/marvel-hero-quest-img.png";
import topBoy from "../../assets/images/images/top-boy.png";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__layer">
        <header className="portfolio__title-container">
          <h1 className="portfolio__title">Portfolio</h1>
        </header>
        <div className="portfolio__projects-container">
          <ul className="portfolio__projects__list">
            {/* 01  */}
            <li className="portfolio__list-item">
              <p className="portfolio__number">01.</p>
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
                  <a
                    href="https://builders-collective.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="portfolio__image--hover"
                      src={buildersCollective}
                      alt="Builders Collective preview"
                    />
                  </a>
                </div>
                <ul className="portfolio__external-link-list">
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
                  <li>
                    <a
                      className="portfolio__link-item portfolio__link-item--hover"
                      href="https://www.loom.com/share/80e185f86ff544c8b9eed7ac8d406de1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="portfolio__divide--mobile-tablet" />
            </li>

            {/* 02 */}
            <li className="portfolio__list-item">
              <p className="portfolio__number">02.</p>
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
                  <a
                    href="https://programmers-language-quiz.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="portfolio__image--hover"
                      src={programmersLanguageQuiz}
                      alt="Programmers Language Quiz preview"
                    />
                  </a>
                </div>
                <ul className="portfolio__external-link-list">
                  <li>
                    <a
                      className="portfolio__link-item portfolio__link-item--hover"
                      href="https://programmers-language-quiz.vercel.app/"
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
                  <li>
                    <a
                      className="portfolio__link-item portfolio__link-item--hover"
                      href="https://www.loom.com/share/28761309f0d9435c8ccfecc70b1bdf41"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="portfolio__divide--mobile-tablet" />
            </li>

            {/* 03 */}
            <li className="portfolio__list-item">
              <p className="portfolio__number">03.</p>
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
                  <a
                    href="https://marvel-hero-quest.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="portfolio__image--hover"
                      src={marvelHeroQuest}
                      alt="Marvel Hero Quest preview"
                    />
                  </a>
                </div>
                <ul className="portfolio__external-link-list">
                  <li>
                    <a
                      className="portfolio__link-item portfolio__link-item--hover"
                      href="https://marvel-hero-quest.vercel.app/"
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
                  <li>
                    <a
                      className="portfolio__link-item portfolio__link-item--hover"
                      href="https://www.loom.com/share/6b1e3d216e7345d593547af871638509"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="portfolio__divide--mobile-tablet" />
            </li>
            {/* 04 */}
            <li className="portfolio__list-item">
              <p className="portfolio__number">04.</p>
              <div className="portfolio__title-tech-stack-container">
                <h2 className="portfolio__project-name">
                  TopBoy - (Work In Progress)
                </h2>
                <p className="portfolio__description">
                  A fully responsive fashion eCommerce website.
                </p>
                <ul className="portfolio__tech-stack-list">
                  <li className="portfolio__tech-stack-item">- React</li>
                  <li className="portfolio__tech-stack-item">
                    Styled-Components
                  </li>
                  <li className="portfolio__tech-stack-item">JavaScript</li>
                  <li className="portfolio__tech-stack-item">Redux</li>
                  <li className="portfolio__tech-stack-item">Stripe</li>
                  <li className="portfolio__tech-stack-item">JWT</li>
                  <li className="portfolio__tech-stack-item">Node.js</li>
                  <li className="portfolio__tech-stack-item">MongoDB</li>
                </ul>
              </div>
              <div className="portfolio__project-link-container">
                <div className="portfolio__image-container">
                  <a
                    href="https://github.com/tanaka-lusengo/topboy-ecommerce-client"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="portfolio__image--hover"
                      src={topBoy}
                      alt="TopBoy ecommerce site preview"
                    />
                  </a>
                </div>
                <ul className="portfolio__external-link-list">
                  <li>
                    <a
                      className="portfolio__link-item portfolio__link-item--hover"
                      href="https://github.com/tanaka-lusengo/topboy-ecommerce-client"
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
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
