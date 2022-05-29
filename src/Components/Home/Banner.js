import React from "react";
import banner1 from "../../img/banner1.jpg";
import banner2 from "../../img/banner2.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <section className=" w-full bg-white ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero py-24 lg:py-52"
            style={{
              backgroundImage: `url(${banner1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <div className="hero-content flex-col lg:flex-row gap-20">
              <div className="text-left w-50 shrink-0 bg-primary-100">
                <p className="py-6 text-white text-4xl">
                  {" "}
                  Sliding Compound Miter Saw
                </p>
                <h1 className="text-5xl text-white font-bold py-2">
                  Mad Sell Goods at a{" "}
                </h1>
                <h1 className="text-5xl font-bold text-white py-4">
                  Save Up To $29
                </h1>
                <p className="text-5xl text-white pb-5 font-bold">Instantly</p>
                <button className="border-none font-semibold px-8 py-3 bg-primary text-white">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero py-24 lg:py-48"
            style={{
              backgroundImage: `url(${banner2})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <div className="hero-content flex-col lg:flex-row gap-20">
              <div className="text-left w-50 shrink-0">
                <p className="py-6 text-white text-4xl"> Mad Sell Goods at a</p>
                <h1 className="text-5xl text-white font-bold ">
                  Discount 20% Off
                </h1>
                <h1 className="text-5xl text-white font-bold py-2">
                  Until of January!
                </h1>
                <p className="text-5xl text-white pb-5 font-bold">Instantly</p>
                <button className="border-none font-semibold px-8 py-3 bg-primary text-white">
                  Get Started
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
