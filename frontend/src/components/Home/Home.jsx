import React from "react";
import HeroImg from "../../assets/coffee2.png";

const Home = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center item-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="order-2 sm:order-1">
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            >
              we serve the richest{" "}
              <span
                data-aos="zoom-out"
                data-aos-delay="300"
                className="text-primary font-cursive"
              >
                Coffee
              </span>
              in the city
            </h1>
            <div data-aos="fade-up" data-aos-delay="400">
              <button className="bg-gradient-to-r from-primary to-secondaryborder-2 border-primary rounded-full px-4 py-2 text-white hover:scale-105 duration-200">
                Coffee And Code
              </button>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="min-h-[450px] flex justify-cemter items-center order-1 sm:order-2 relative"
          >
            <img
              data-aos-once="true"
              src={HeroImg}
              alt=""
              className="w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin"
            />
            <div
              data-aos="fade-left"
              className="bg-gradient-to-r from-primary to-secondary absolute top-10 left-10 p-3 rounded-xl"
            >
              <h1>Hey Coder</h1>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="0"
              className="bg-gradient-to-r from-primary to-secondary absolute bottom-10 right-10 p-3 rounded-xl"
            >
              <h1>Best Coffee</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
