import React from "react";
import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import TechStack from "../../components/TechStack/TechStack";
import "./Home.scss";

const Home = () => {
  return (
    <section>
      <Hero />
      <About />
      <TechStack />
    </section>
  );
};

export default Home;
