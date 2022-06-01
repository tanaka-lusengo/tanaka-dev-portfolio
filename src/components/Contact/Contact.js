import React from "react";
import "./Contact.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  // initialising AOS (animate On Scroll)
  AOS.init();

  return (
    <section className="contact" id="contact">
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out-back"
        className="contact__text-container"
      >
        <h1 className="contact__title">
          Feel free <br />
          <span className="contact__title-step-one">To contact me</span> <br />
          <span className="contact__title-step-two">
            With any enquiries you may have!
          </span>
        </h1>
      </div>

      <footer className="contact__footer">
        <ul className="contact__links-list">
          <li>
            <a
              className="contact__list-item"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </li>
          <li>
            <a
              className="contact__list-item"
              href="mailto:tc.lusengo@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </li>
          <li>
            <a
              className="contact__list-item"
              href="https://github.com/tanaka-lusengo"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="contact__list-item"
              href="https://www.linkedin.com/in/tanakalusengo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="contact__list-item"
              href="https://medium.com/@tanakalusengo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
};

export default Contact;
