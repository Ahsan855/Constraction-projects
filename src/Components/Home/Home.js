import React from "react";
import About from "../About/About";
import Service from "../Service/Service";
import Banner from "./Banner";
import Blog from "./Blog";
import MeetSection from "./MeetSection";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <About />
      <Projects />
      <MeetSection />
      <Blog />
    </div>
  );
};

export default Home;
