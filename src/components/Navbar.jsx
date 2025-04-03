import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md  z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-black">Finzo</span>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <ul className="hidden md:flex space-x-6 text-[#1A1D1F] font-medium">
          {["Products", "Company", "Features", "Pricing", "Support"].map(
            (item, index) => (
              <li
                key={index}
                className="relative flex items-center space-x-1 cursor-pointer px-4 py-2 rounded-full transition-all duration-300 
              hover:bg-[#FFDD33] hover:text-black"
              >
                <span>{item}</span>
                {["Products", "Company", "Support"].includes(item) && (
                  <FaChevronDown size={12} className="mt-1 text-gray-500" />
                )}
              </li>
            )
          )}
        </ul>

        {/* Buttons - Desktop */}
        <div className="hidden md:flex space-x-4">
          <button className="px-5 py-2 rounded-full text-black hover:bg-[#FFDD33] transition-all duration-300">
            Login
          </button>
          <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-[#FFDD33] hover:text-black transition-all duration-300">
            Open Account
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu - Now Fixed & Visible */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center transition-all duration-300 ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-6 text-black"
        >
          <FaTimes size={30} />
        </button>

        <ul className="flex flex-col items-center space-y-6 text-lg font-medium text-black">
          {["Products", "Company", "Features", "Pricing", "Support"].map(
            (item, index) => (
              <li
                key={index}
                className="cursor-pointer px-6 py-2 rounded-full transition-all duration-300 hover:bg-[#FFDD33] hover:text-black w-full text-center"
              >
                {item}
              </li>
            )
          )}
        </ul>

        <div className="mt-6 flex flex-col items-center gap-4 w-3/4">
          <button className="px-6 py-2 border border-black rounded-full text-black hover:bg-[#FFDD33] transition-all duration-300 w-full">
            Login
          </button>
          <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-[#FFDD33] hover:text-black transition-all duration-300 w-full">
            Open Account
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
