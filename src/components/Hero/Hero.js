import React, { useEffect } from "react";
import "./Hero.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Hero = () => {
  // initialising AOS (animate On Scroll)
  useEffect(() => {
    AOS.init();
  });

  return (
    <section className="hero">
      <div className="hero__banner-container">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out-back"
          className="hero__banner-title"
        >
          <h1 className="hero__title hero__title-full">FULL</h1>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out-back"
          className="hero__banner-title"
        >
          <h1 className="hero__title hero__title-stack">-STACK</h1>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out-back"
          className="hero__banner-title"
        >
          <h1 className="hero__title hero__title-developer">DEVELOPER</h1>
        </div>
        <div className="hero__scroll-container">
          <ExpandMoreIcon fontSize="large" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
