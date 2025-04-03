import React from "react";
import AppStore from "../assets/app-store.svg"; // Add this icon in your assets
import PlayStore from "../assets/play-store.svg"; // Add this icon in your assets

const FinzoApp = () => {
  return (
    <section className="flex flex-col justify-center items-center py-[150px] gap-2 isolate bg-gray-100 w-[1280px] h-[800.28px] rounded-[32px] mx-auto">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-black text-center">
        Get the Finzo Mobile app.
      </h2>

      {/* Paragraph */}
      <p className="text-gray-500 mt-4 text-lg md:text-xl text-center">
        With this platform, you can access your account anywhere, <br />
        anytime for balance and so much more.
      </p>

      {/* App Store & Play Store SVG Buttons */}
      <div className="mt-6 flex flex-col md:flex-row justify-center gap-4 w-full max-w-lg">
        <a href="finzo-app\src\components\Hero.jsx" className="w-full">
          <img
            src={AppStore}
            alt="Download on the App Store"
            className="w-full h-20 object-contain hover:scale-105 transition"
          />
        </a>

        <a href="finzo-app\src\components\Hero.jsx" className="w-full">
          <img
            src={PlayStore}
            alt="Get it on Google Play"
            className="w-full h-20 object-contain hover:scale-105 transition"
          />
        </a>
      </div>
    </section>
  );
};

export default FinzoApp;
