import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Import Testimonial Image
import TestimonialImage from "../assets/images/testimonial.png"; // Update path accordingly

const Testimonial = () => {
  return (
    <section className="bg-white py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold text-black md:text-5xl leading-tight">
          Join 15+ million people who <br /> already trust us with their <br /> money
        </h2>
      </div>

      {/* Testimonial Card */}
      <div className="w-[1280px] h-[386px] mx-auto bg-gray-100 rounded-[32px] p-8 flex flex-col md:flex-row items-center">
        {/* Customer Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={TestimonialImage}
            alt="Testimonial"
            className="w-[250px] h-[320px] md:w-[280px] md:h-[350px] object-cover" // Adjusted image size
          />
        </div>

        {/* Testimonial Text */}
        <div className="w-full md:w-2/3 px-6">
          <p className="text-gray-500 text-lg leading-relaxed">
            Overall, this app has been a life-changer for me. It has revolutionized the way
            I approach my finances, providing me with the tools, insights, and security I
            need to unlock my financial freedom.
          </p>
          <p className="text-black font-semibold text-lg mt-4">Samruddhi Bhosale</p>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4 mt-6">
            <button className="w-12 h-12 flex justify-center items-center border border-gray-300 rounded-full text-gray-500 hover:bg-gray-200 transition">
              <FaArrowLeft />
            </button>
            <button className="w-12 h-12 flex justify-center items-center bg-yellow-400 rounded-full text-black hover:bg-yellow-500 transition">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
