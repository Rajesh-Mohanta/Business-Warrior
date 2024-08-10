import React from "react";
import { hero1, hero2 } from "../assets/asset";

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mt-4 lg:mt-8 px-2 sm:px-4 lg:px-6 xl:px-8 gap-6 lg:gap-8">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 mb-4 lg:mb-0 basis-1/2">
        <img
          src={hero1}
          alt="Hero 1"
          className="w-full sm:w-[280px] md:w-[290px] lg:w-[300px] xl:w-[350px] h-auto  hidden lg:block -ml-28"
        />
        <div className="text-center lg:text-left ">
          <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 leading-tight lg:leading-loose">
            We Build Superior <br />
            <span className="text-sky-400">Lending Software.</span>
          </h1>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end ">
        <img
          src={hero2}
          alt="Hero 2"
          className="w-full sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] h-auto"
        />
      </div>
    </div>
  );
}

export default Hero;
