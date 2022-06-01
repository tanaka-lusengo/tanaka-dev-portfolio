import React from "react";
import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import TechStack from "../../components/TechStack/TechStack";
import Portfolio from "../../components/Portfolio/Portfolio";
import Contact from "../../components/Contact/Contact";
import "./Home.scss";

const Home = () => {
  return (
    <section>
      <Hero />
      <About />
      <TechStack />
      <Portfolio />
      <Contact />
    </section>
  );
};

export default Home;
