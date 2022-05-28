import React from "react";
import About from "../About/About";
import Service from "../Service/Service";
import Banner from "./Banner";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <About />
      <Projects />
    </div>
  );
};

export default Home;
