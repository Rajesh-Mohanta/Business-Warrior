import React from "react";
import { statistics } from "../assets/index";

function Statistics() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-8 lg:px-12 lg:py-20 bg-[#efefef]">
      {statistics.map((stat, id) => (
        <div
          key={id}
          className="flex flex-col items-center text-center lg:text-left"
        >
          <h4 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-sky-500">
            {stat.value}
          </h4>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-semibold">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Statistics;
