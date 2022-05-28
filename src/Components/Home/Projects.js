import React from "react";

const Projects = () => {
  return (
    <div className="my-10 w-3/4 mx-auto">
      <h1 className="text-4xl text-primary text-center my-5">
        Latest Projects
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        <div>
          <img
            src="https://castro.jamstacktemplates.dev/assets/img/projects/1.jpg"
            class="rounded-lg shadow-2xl"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-secondary text-6xl">01</h1>
          <h1 class="text-5xl font-bold">Power and Energy</h1>
          <p class="py-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            excepturi veritatis natus modi consectetur deserunt nobis hic
            provident voluptate ipsa pariatur dolor neque vitae aliquam
            aspernatur, sapiente nihil quam molestiae!
          </p>
          <button class="text-primary underline uppercase">view more</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
