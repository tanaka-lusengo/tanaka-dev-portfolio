import React from "react";
import "./Technologies.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-hook-inview";

const Technologies = () => {
  // initialising AOS (animate On Scroll)
  AOS.init();

  // React Hook to activate code when div is in viewport
  const [ref, isVisible] = useInView({
    threshold: 1,
  });

  return (
    <section id="technologies" className="technologies">
      <div className="technologies__layer">
        <div className="technologies__title-container" ref={ref}>
          {isVisible ? (
            <h2 className="technologies__title--typeriter">
              T E C H N O L O G I E S :
            </h2>
          ) : (
            ""
          )}
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out-back"
          className="technologies__text-container"
        >
          <p className="technologies__text">
            London based, Front-End/ Full-Stack Web Developer & Photographer.
            With experience in: UI/UX Design & Data Science.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
