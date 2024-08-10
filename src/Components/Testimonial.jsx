import React from "react";
import { testimonials } from "../assets/index";
import Company from "./Company";

function Testimonial() {
  return (
    <div className="my-8 py-8 bg-slate-100 mx-[8%]">
      <h1 className="text-3xl md:text-4xl lg:text-6xl text-black font-semibold mx-auto text-center py-6 lg:py-8">
        Testimonials
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 mx-auto bg-slate-50  rounded-lg">
        {testimonials.map((item, id) => {
          return (
            <div
              className="flex flex-col gap-3 lg:gap-4 items-center justify-center border shadow-lg p-3 lg:p-4 rounded-xl"
              key={id}
            >
              <div className="flex flex-col items-center justify-center">
                <img
                  src={item.imgURL}
                  alt=""
                  className="w-16 h-16 lg:w-20 lg:h-20 rounded-full"
                />
                <h3 className="text-lg lg:text-xl font-semibold mt-4">
                  {item.customerName}
                </h3>
                <p className="text-sm lg:text-base text-sky-400">{item.desc}</p>
              </div>
              <p className="text-sm lg:text-base text-center leading-6 lg:leading-8">
                {item.feedback}
              </p>
            </div>
          );
        })}
      </div>
      <Company />
    </div>
  );
}

export default Testimonial;
