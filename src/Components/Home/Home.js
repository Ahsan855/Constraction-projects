import React from "react";
import About from "../About/About";
import Features from "../Features/Features";
import Hero from "../Hero/Hero";
import Pricing from "../Pricing/Pricing";
import Service from "../Service/Service";
import Testimonial from "../Testimonial/Testimonial";
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
      <Pricing />
      <Projects />
      <MeetSection />
      <Testimonial />
      <Blog />
      <Features />
      <Hero />
    </div>
  );
};

export default Home;
