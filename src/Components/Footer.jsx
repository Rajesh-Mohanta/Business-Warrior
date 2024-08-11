import React from "react";
import { footerLinks } from "../assets/index";
import { footlogo } from "../assets/asset";
import { socialMedia } from "../assets/index";

function Footer() {
  return (
    <div className="py-2 bg-slate-600 md:p-4 p-2">
      <div className="flex flex-col md:flex-row justify-between mx-6 gap-6 md:gap-28 text-slate-200 py-3 mb-6">
        <div className="flex justify-center md:justify-start">
          <img src={footlogo} alt="" className=" h-[50px] md:h-[100px]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {footerLinks.map((item, id) => (
            <div className="flex flex-col gap-2" key={id}>
              <h2 className="text-[15px] font-semibold">{item.title}</h2>
              <ul>
                {item.links.map((link1, index) => (
                  <li key={index} className="text-[12px]">
                    <a href={link1.link}>{link1.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="mx-4 md:mx-6" />
      <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-6 pt-8">
        <div className="flex gap-3 justify-center md:justify-start mb-4 md:mb-0 ">
          {socialMedia.map((social, id) => (
            <img
              src={social.src}
              alt={social.alt}
              key={id}
              className="text-[20px] cursor-pointer"
            />
          ))}
        </div>
        <p className="text-[20px] text-center md:text-left">
          © 2024 Business Warrior. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
