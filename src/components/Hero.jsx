import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import heroImage from "../assets/image.png"; // Your uploaded hero image

const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 lg:py-24 bg-white text-black">
      {/* Left Side - Floating 3D Animated Image */}
      <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
        <motion.div
          animate={{ y: [0, -10, 0] }} // Floating effect
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} // Smooth continuous movement
          className="group perspective"
        >
          <motion.img
            src={heroImage}
            alt="Finzo App Preview"
            className="w-full max-w-md lg:max-w-lg transition-transform duration-500 ease-out group-hover:rotate-6 group-hover:scale-105"
          />
        </motion.div>
      </div>

      {/* Right Side - Text and Buttons */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
        <h1 className="text-4xl lg:text-6xl font-bold text-[#1A1D1F] leading-tight">
          Control your <br /> financial <br /> future easily
        </h1>
        <p className="text-gray-500 mt-4 text-lg">
          From easy money management to financial goals and investments. Open
          your account in a Flash.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
          <motion.button
            whileHover={{ scale: 1.1, filter: "brightness(1.2)" }} // Button hover effect
            className="bg-[#FFDD33] text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:shadow-lg transition"
          >
            Open Account <FaArrowRight />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, filter: "brightness(1.2)" }} // Button hover effect
            className="bg-black text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition"
          >
            Generate your card <FaArrowRight />
          </motion.button>
        </div>

        {/* Trust Section - Responsive & Hover Effects */}
        <div className="mt-8 flex flex-col items-center lg:flex-row lg:justify-start gap-4">
          {/* User Images */}
          <div className="flex -space-x-3">
            <motion.img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User 1"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white"
              whileHover={{ scale: 1.2 }} // Hover effect
            />
            <motion.img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User 2"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white"
              whileHover={{ scale: 1.2 }} // Hover effect
            />
            <motion.img
              src="https://randomuser.me/api/portraits/men/55.jpg"
              alt="User 3"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white"
              whileHover={{ scale: 1.2 }} // Hover effect
            />
          </div>

          {/* "15 Million+" Text Hover Effect */}
          <motion.p
            className="text-lg md:text-xl font-bold text-gray-700"
            whileHover={{ scale: 1.1, color: "#000" }} // Smooth hover effect
          >
            15 Million+
          </motion.p>
        
        </div>
        <p className="text-gray-500 mt-3 text-md md:text-lg">
          From easy money management to financial goals and investments. Open
          your account in a Flash.
        </p>
      </div>
    </section>
  );
};

export default Hero;
