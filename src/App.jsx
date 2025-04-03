import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TrustedCompanies from "./components/TrustedCompanies";
import Testimonial from "./components/Testimonial";
import FinzoApp from "./components/FinzoApp";
import CommunityNews from "./components/CommunityNews";
import Footer from "./components/Fotter";

const App = () => {
  return (
    <div className="bg-white text-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />
      {/* Trusted Companies Section */}
      <TrustedCompanies />
      {/* Testimonial Section */}
      <Testimonial />

      {/* Finzo App Section */} 
      <FinzoApp />

      {/* Community News Section */}
      <CommunityNews />

      {/* Footer Section */}
      <Footer />

      {/* Responsive Design */}
      <style>
        {`
          @media (max-width: 768px) {
            .bg-white {
              background-color: #f8f8f8;
            }
            .text-black {
              color: #333;
            }
          }
        `}
      </style>
      {/* Responsive Design */}
      <style>
        {`
          @media (max-width: 768px) {
            .bg-white {
              background-color: #f8f8f8;
            }
            .text-black {
              color: #333;
            }
          }
        `}
      </style>
      {/* Responsive Design */}
      <style>
        {`
          @media (max-width: 768px) {
            .bg-white {
              background-color: #f8f8f8;
            }
            .text-black {
              color: #333;
            }
          }
        `}
      </style>
      
    </div>
  );
};

export default App;
