import React from "react";
import { footerback } from "../assets/asset";

function Contact() {
  return (
    <div
      className="mt-1 flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 p-8 lg:p-12 bg-blue-200 z-[99999]"
      style={{
        backgroundImage: `url(${footerback})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" flex flex-col gap-6 lg:gap-8 mt-4 lg:mt-10 w-[60%]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold tracking-wider">
          Get Industry Updates Straight to your Inbox
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-white tracking-wider">
          Sign up below to receive industry news, events, trends, best
          practices, and thought leadership in lending.
        </p>
        <div className="flex flex-col gap-4">
          <label
            htmlFor="email"
            className="font-semibold text-base lg:text-lg lg:text-[18px] text-white tracking-wider"
          >
            Email
          </label>
          <input
            type="email"
            className="w-full max-w-lg h-12 px-4 py-2 rounded-lg border border-gray-300 shadow-sm placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          />
          <button
            type="submit"
            className="text-base md:text-lg lg:text-lg px-4 py-2 lg:px-6 lg:py-3 rounded-lg bg-sky-500 text-white tracking-wider font-semibold shadow-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 transition duration-300 ease-in-out w-full lg:w-48"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="bg-slate-50 flex flex-col gap-2 w-[550px] h-[200px] p-3 lg:px-4 lg:py-6 rounded-lg lg:-mb-20">
        <h3 className="text-sm md:text-lg lg:text-xl font-semibold">
          Strategies to Increase Repeat Borrowing
        </h3>
        <p className="text-sm  lg:text-base">
          This time on the Business Warrior blog, we get into effective
          strategies lenders can employ to encourage repeat borrowing and see
          their business succeed.
        </p>
        <p className="text-sm lg:text-lg text-blue-300 underline text-right mt-2 cursor-pointer">
          See More
        </p>
      </div>
    </div>
  );
}

export default Contact;
