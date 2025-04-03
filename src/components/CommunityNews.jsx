import React from "react";
import Logo from "../assets/logos/finzo-logo.svg"; // Update the path
import MailIcon from "../assets/icons/mail.svg"; // Update the path

const CommunityNews = () => {
  return (
    <section className="flex flex-col items-center px-8 md:px-20 pt-10 gap-16 w-full">
      {/* Heading Section */}
      <h2 className="text-6xl font-bold text-center text-black">
        Save smart. Achieve more.
      </h2>

      <footer className="bg-black text-white py-20 px-10 md:px-20 rounded-3xl w-full max-w-[1320px] mx-auto">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Side: Heading and Text */}
          <div className="max-w-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-full">
                <img src={MailIcon} alt="Mail" className="w-6 h-6" />
              </div>
            </div>
            <h2 className="text-5xl font-semibold mt-4 leading-tight">
              Keep up with the latest
            </h2>
            <p className="text-gray-400 mt-2">
              Join our newsletter to stay up to date on features and releases.
            </p>
          </div>

          {/* Right Side: Email Input */}
          <div className="flex flex-col items-start md:items-end w-full max-w-[400px]">
            <label className="text-gray-400 text-sm">Stay up to date</label>
            <div className="flex mt-2 bg-gray-800 rounded-full p-2 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-white px-4 py-2 w-full outline-none"
              />
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-2">
              By subscribing you agree to our{" "}
              <span className="underline cursor-pointer">Privacy Policy</span>
            </p>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="mt-16 border-t border-gray-700 pt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Finzo Branding */}
          <div>
            <img src={Logo} alt="Finzo" className="w-24" />
            <p className="text-gray-500 mt-3">
              Make your complicated finance more simple
            </p>
          </div>

          {/* Footer Links */}
          <div>
            <h4 className="font-semibold">Finzo</h4>
            <ul className="text-gray-400 mt-3 space-y-2">
              <li className="cursor-pointer hover:text-white">Payment</li>
              <li className="cursor-pointer hover:text-white">Card</li>
              <li className="cursor-pointer hover:text-white">Pricing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="text-gray-400 mt-3 space-y-2">
              <li className="cursor-pointer hover:text-white">About</li>
              <li className="cursor-pointer hover:text-white">Careers</li>
              <li className="cursor-pointer hover:text-white">Press Kit</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Legal</h4>
            <ul className="text-gray-400 mt-3 space-y-2">
              <li className="cursor-pointer hover:text-white">Privacy Policy</li>
              <li className="cursor-pointer hover:text-white">Terms of Service</li>
              <li className="cursor-pointer hover:text-white">Cookies</li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default CommunityNews;
