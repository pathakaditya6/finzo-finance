import React from "react";
import InstagramIcon from "../assets/icons/instagram.svg";
import FacebookIcon from "../assets/icons/facebook.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white text-black py-6 px-10 md:px-20 w-full max-w-[1440px] mx-auto border-t border-gray-300">
      {/* Copyright Text */}
      <p className="text-sm font-semibold">© 2025 Finzo. All Rights Reserved @℗.</p>

      {/* Social Media Icons */}
      <div className="flex gap-3 mt-4 md:mt-0"> {/* Reduced gap from 4 to 3 */}
        <a href="#" className="bg-yellow-400 rounded-full p-2.5 flex items-center justify-center">
          <img src={InstagramIcon} alt="Instagram" className="w-5 h-5" />
        </a>
        <a href="#" className="bg-yellow-400 rounded-full p-2.5 flex items-center justify-center">
          <img src={FacebookIcon} alt="Facebook" className="w-5 h-5" />
        </a>
        <a href="#" className="bg-yellow-400 rounded-full p-2.5 flex items-center justify-center">
          <img src={TwitterIcon} alt="Twitter" className="w-5 h-5" />
        </a>
        <a href="#" className="bg-yellow-400 rounded-full p-2.5 flex items-center justify-center">
          <img src={LinkedInIcon} alt="LinkedIn" className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
