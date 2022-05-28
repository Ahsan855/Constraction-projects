import React from "react";

const Banner = () => {
  return (
    <div>
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img
            src="https://thumbs.dreamstime.com/b/construction-safety-equipment-cranes-front-unfinished-building-d-rendering-143357300.jpg"
            class="w-full h-3/4"
            alt=""
          />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img
            src="https://thumbs.dreamstime.com/b/house-under-construction-blueprints-building-project-53360048.jpg"
            class="w-full h-3/4"
            alt=""
          />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img
            src="https://media-exp1.licdn.com/dms/image/C561BAQGT0Dl3_Ez-4Q/company-background_10000/0/1591385440991?e=2147483647&v=beta&t=__DwQTUHi92z25UBRZdDVF08zkq4ZUsasP3dFHO_v10"
            class="w-full h-3/4"
            alt=""
          />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img
            src="https://www.levelset.com/wp-content/uploads/2021/07/Types-of-construction-companies.png"
            class="w-full h-3/4"
            alt=""
          />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
