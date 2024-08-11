import React from "react";
import { benefits } from "../assets/index";
import AnimatedItem from "./AnimatedItem";

function Benefits() {
  return (
    <div className="my-4 px-2 md:px-4 lg:px-6 mx-[5%]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-semibold mx-auto text-center py-8 md:py-10 lg:py-12">
        PayPlan Benefits
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {benefits.map((item, id) => (
          <AnimatedItem
            key={id}
            index={id}
            className="flex flex-col justify-center items-center gap-4 md:gap-6 border shadow-lg p-2 md:p-2 lg:p-4"
          >
            <img
              src={item.imgURL}
              alt=""
              className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20"
            />
            <h2 className="text-xl md:text-2xl lg:text-3xl text-center font-semibold">
              {item.label}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-slate-500 leading-4 md:leading-6">
              {item.subtext}
            </p>
            <p className="text-sm md:text-lg lg:text-xl text-sky-600 cursor-pointer underline">
              {item.learn}
            </p>
          </AnimatedItem>
        ))}
      </div>
    </div>
  );
}

export default Benefits;
