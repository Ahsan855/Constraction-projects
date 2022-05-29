import React from "react";

const About = () => {
  return (
    <div className="pb-20 mt-24 text-left grid grid-cols-1 md:grid-cols-2 w-3/4 mx-auto">
      <div className="h-3/4 my-auto">
        <span className="text-primary">ABOUT US</span>
        <h1 className="text-4xl font-bold mt-3">
          We are Best construction in the world
        </h1>
        <p className="my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquam
          dolorum eligendi sed laudantium reiciendis libero sint, totam fugiat
          voluptatum. Provident consequatur nemo quibusdam. Inventore aliquid
          laudantium quas quaerat deserunt!
        </p>
        <button className="btn btn-primary uppercase"> contact us</button>
      </div>

      <div className="border-r-4 border-primary ml-[80px] border-b-4">
        <img
          className="mb-4"
          src="https://castro.jamstacktemplates.dev/assets/img/backgrounds/video-cta.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
