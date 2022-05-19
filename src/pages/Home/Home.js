import React from "react";
import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import Portfolio from "../../components/Portfolio/Portfolio";
import TechStack from "../../components/TechStack/TechStack";
import "./Home.scss";

const Home = () => {
  return (
    <section>
      <Hero />
      <About />
      <TechStack />
      <Portfolio />
    </section>
  );
};

export default Home;
