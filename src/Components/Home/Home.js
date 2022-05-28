import React from "react";
import About from "../About/About";
import Service from "../Service/Service";
import Banner from "./Banner";
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
    </div>
  );
};

export default Home;
