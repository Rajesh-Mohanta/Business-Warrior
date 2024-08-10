import React from "react";
import { footerback } from "../assets/asset";
import { aboutCEO } from "../assets/index";

function About() {
  return (
    <div
      className="rounded mt-8 z-50 flex flex-col items-center justify-center gap-6 lg:gap-8 p-8 lg:p-11 mb-5 max-w-max mx-[6%]"
      style={{
        backgroundImage: `url(${footerback})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {aboutCEO.map((detail, id) => (
        <div
          key={id}
          className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-1 w-full px-[2%]"
        >
          <div className="flex justify-center lg:justify-end lg:w-auto mb-4 lg:mb-0">
            <img
              src={detail.img}
              alt={detail.name}
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-full"
            />
          </div>

          <div className="flex flex-col gap-4 lg:gap-6 text-white leading-6 text-center lg:text-left lg:w-[60%]">
            <h3 className="text-3xl md:text-2xl lg:text-4xl font-bold leading-tight">
              “We’re Fighting for <br /> Lenders Everyday”
            </h3>
            <p className="text-sm md:text-base lg:text-lg">{detail.desc}</p>
            <p className="text-xs md:text-sm lg:text-base">{detail.position}</p>
            <p className="text-lg md:text-xl lg:text-2xl text-white">
              {detail.sign1}
            </p>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
              {detail.name}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;
