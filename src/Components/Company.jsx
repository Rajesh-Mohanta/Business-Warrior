import React from "react";
import { mirza, kigi, amicus, edvisio, patria } from "../assets/asset";

function Company() {
  return (
    <div className="mt-16 lg:mt-32 flex flex-wrap gap-6 md:gap-8 justify-center mx-auto">
      <img
        src={mirza}
        alt="Mirza"
        className="w-24 h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 object-contain"
      />
      <img
        src={kigi}
        alt="Kigi"
        className="w-24 h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 object-contain"
      />
      <img
        src={amicus}
        alt="Amicus"
        className="w-24 h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 object-contain"
      />
      <img
        src={edvisio}
        alt="Edvisio"
        className="w-24 h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 object-contain"
      />
      <img
        src={patria}
        alt="Patria"
        className="w-24 h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 object-contain"
      />
    </div>
  );
}

export default Company;
