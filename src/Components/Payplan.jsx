import React from "react";
import { asset44, pay2, payhead } from "../assets/asset";
import { payPlan2 } from "../assets/index";

function Payplan() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-12 py-6 lg:py-8">
      <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
        <img
          src={pay2}
          alt="Pay2 Logo"
          className="w-[75%] md:w-[70%] lg:w-full mb-28"
        />
      </div>
      <div className="flex flex-col gap-4 lg:gap-6 sm:w-full px-10 lg:w-1/2 text-center lg:text-left lg:px-8">
        <img
          src={payhead}
          alt="PayPlan Overview"
          className="w-[250px] h-[125px] md:w-[300px] md:h-[150px] lg:w-[400px] lg:h-[200px] mx-auto lg:mx-0"
        />
        <p className="text-[16px] md:text-[18px] lg:text-[20px] justify-start">
          PayPlan is our flagship lending platform built for one purpose - to
          make lenders more profitable. It’s a completely transformative
          solution designed to simplify and optimize the entire loan lifecycle,
          from acquisition to application to decisioning to loan management.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-3 ">
          {payPlan2.map((data, id) => (
            <div key={id} className="flex gap-2  items-center">
              <img
                src={data.icon}
                alt={data.description}
                className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
              />
              <p className="text-[16px] md:text-[18px] lg:text-[20px] justify-start">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Optional background image
      <div className="absolute background-pop lg:-bottom-[600px] right-0">
        <img src={asset44} alt="" className="block w-[100px] lg:w-[100%]" />
      </div>
      */}
    </div>
  );
}

export default Payplan;
