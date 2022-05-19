import React from "react";
import "./About.scss";
import tanaka from "../../assets/images/images/tanaka-portfolio.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  // initialising AOS (animate On Scroll)
  AOS.init();

  return (
    <section id="about" className="about">
      <div className="about__layer">
        <div className="about__title-image-container">
          <div
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="3000"
            className="about__title-conatiner"
          >
            <h1 className="about__title">About</h1>
            <h1 className="about__title">About</h1>
            <h1 className="about__title">About</h1>
          </div>
          <div className="about__image-container">
            <img className="about__image" src={tanaka} alt="tanaka profile" />
          </div>
        </div>
        <div className="about__text-container">
          <p data-aos="fade-right" className="about__text">
            <span className="about__text-highlight">Born in London</span>,
            attended school in South Africa before coming back to the UK to
            further pursue higher education and new experiences. After exploring
            my curiosity Coding in my spare time, taking courses in UX/UI Design
            and Data Science, this eventually lead to a career change from
            Property Development into Web Development!
          </p>
          <p data-aos="fade-right" className="about__text">
            <span className="about__text-highlight">Post Graduation</span> from
            a 12-week immersive Web Development Bootcamp, I now find myself
            currently working as a Web Development Teaching Assistant.
          </p>
          <p data-aos="fade-right" className="about__text">
            {" "}
            <span className="about__text-highlight">Always Curious</span> and
            eager to learn, meet new people as well as take on new and exciting
            challenges however large or small!
          </p>
          <p data-aos="fade-right" className="about__text">
            {" "}
            <span className="about__text-highlight">Fun Fact:</span> I also have
            a Photography business I run on the side and in my spare time. So if
            you're in need of a Lifestyle/Wedding Photographer, dont be shy, hit
            me up! - You can find my work here:{" "}
            <a
              className="about__lusengo-photography"
              href="https://www.lusengophotography.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lusengo Photography
            </a>
          </p>
        </div>
      </div>
      <p className="about__divide">~</p>
    </section>
  );
};

export default About;
