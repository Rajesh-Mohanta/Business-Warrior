import React, { useState } from "react";
import { logo } from "../assets/asset";
import { navLinks } from "../assets/index";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Navbar() {
  const [active, setActive] = useState("Payplan");
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [mobileDropdownVisible, setMobileDropdownVisible] = useState(null);

  const handleMouseEnter = (navLabel) => {
    setDropdownVisible(navLabel);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const handleMobileDropdownToggle = (navLabel) => {
    setMobileDropdownVisible(
      mobileDropdownVisible === navLabel ? null : navLabel
    );
  };

  return (
    <nav className="relative flex items-center justify-between py-4 px-4 md:px-6 lg:px-8 bg-white max-w-[1200px] mx-auto">
      <div>
        <img
          src={logo}
          alt="Logo"
          className="w-32 h-8 md:w-36 md:h-9 lg:w-48 lg:h-12"
        />
      </div>
      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMobileMenu}>
          {mobileMenuVisible ? (
            <IoMdClose className="w-8 h-8 text-gray-800" />
          ) : (
            <IoMdMenu className="w-8 h-8 text-gray-800" />
          )}
        </button>
      </div>
      {/* Desktop Menu */}
      <div className="hidden lg:flex flex-1 justify-end">
        <ul className="flex list-none gap-6 lg:gap-8 items-center">
          {navLinks.map((nav, index) => (
            <li
              key={index}
              className="relative font-semibold"
              onMouseEnter={() => handleMouseEnter(nav.label)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={`#${nav.href}`}
                className={`flex items-center transition-colors duration-300 ${
                  active === nav.label
                    ? "text-sky-300"
                    : "text-black hover:text-sky-500"
                } text-sm md:text-base lg:text-lg cursor-pointer`}
                onClick={() => setActive(nav.label)}
              >
                {nav.label}
                {(nav.label === "Payplan" || nav.label === "Services") && (
                  <RiArrowDropDownLine className="ml-2 w-5 h-5 lg:w-6 lg:h-6" />
                )}
              </a>
              {(nav.label === "Payplan" || nav.label === "Services") &&
                dropdownVisible === nav.label && (
                  <ul className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-48 lg:w-60 py-2">
                    {nav.label === "Payplan" && (
                      <>
                        <li className="px-4 py-2 hover:text-sky-500 text-sm cursor-pointer">
                          Loan origination
                        </li>
                        <li className="px-4 py-2 hover:text-sky-500 text-sm cursor-pointer">
                          Decision Engine
                        </li>
                        <li className="px-4 py-2 hover:text-sky-500 text-sm cursor-pointer">
                          Loan Management
                        </li>
                      </>
                    )}
                    {nav.label === "Services" && (
                      <>
                        <li className="px-4 py-2 hover:text-sky-500 text-sm cursor-pointer">
                          Lender Marketing Services
                        </li>
                      </>
                    )}
                  </ul>
                )}
            </li>
          ))}
          <li>
            <a
              href="#get-started"
              className="bg-sky-400 text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-sky-500 text-sm md:text-base lg:text-lg"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      {mobileMenuVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
          <ul className="absolute top-16 right-4 bg-white border border-gray-200 rounded-lg shadow-lg w-56 py-2 md:hidden z-20">
            {navLinks.map((nav, index) => (
              <li key={index} className="relative">
                <a
                  href={`#${nav.href}`}
                  className={`flex items-center py-2 px-4 transition-colors duration-300 ${
                    active === nav.label
                      ? "text-sky-300"
                      : "text-black hover:text-sky-500"
                  } text-base`}
                  onClick={() => {
                    setActive(nav.label);
                    setMobileMenuVisible(false);
                  }}
                >
                  {nav.label}
                  {(nav.label === "Payplan" || nav.label === "Services") && (
                    <RiArrowDropDownLine className="ml-2 w-6 h-6" />
                  )}
                </a>
                {(nav.label === "Payplan" || nav.label === "Services") &&
                  mobileDropdownVisible === nav.label && (
                    <ul className="bg-white border border-gray-200 rounded-lg shadow-lg mt-1 w-full">
                      {nav.label === "Payplan" && (
                        <>
                          <li className="px-4 py-2 hover:text-sky-500 text-sm cursor-pointer">
                            Loan origination
                          </li>
                          <li className="px-4 py-2 hover:text-sky-500 text-sm cursor-pointer">
                            Decision Engine
                          </li>
                          <li className="px-4 py-2 hover:text-sky-500 text-sm cursor-pointer">
                            Loan Management
                          </li>
                        </>
                      )}
                      {nav.label === "Services" && (
                        <>
                          <li className="px-4 py-2 hover:text-sky-500 text-sm cursor-pointer">
                            Lender Marketing Services
                          </li>
                        </>
                      )}
                    </ul>
                  )}
              </li>
            ))}
            <li className="py-2">
              <a
                href="#get-started"
                className="bg-sky-400 text-white px-4 py-2 rounded-lg block text-center transition-colors duration-300 hover:bg-sky-500"
                onClick={() => setMobileMenuVisible(false)}
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
