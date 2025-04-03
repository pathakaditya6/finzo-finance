import React from "react";

// Import Company Logos
import Pinterest from "../assets/logos/pinterest.svg";
import Zoom from "../assets/logos/zoom.svg";
import Discord from "../assets/logos/discord.svg";
import Dropbox from "../assets/logos/dropbox.svg";
import Monday from "../assets/logos/monday.svg";
import Slack from "../assets/logos/slack.svg";
import Stripe from "../assets/logos/stripe.svg";
import Airtable from "../assets/logos/airtable.svg";

const TrustedCompanies = () => {
  // Company Data
  const companies = [
    { name: "Pinterest", logo: Pinterest },
    { name: "Zoom", logo: Zoom },
    { name: "Discord", logo: Discord },
    { name: "Dropbox", logo: Dropbox },
    { name: "Monday", logo: Monday },
    { name: "Slack", logo: Slack },
    { name: "Stripe", logo: Stripe },
    { name: "Airtable", logo: Airtable },
  ];

  return (
    <section className="bg-white py-16 px-6">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-black md:text-5xl">
          200+ The fastest growing <br /> company use Finzo
        </h2>
        <p className="text-gray-500 mt-5 text-lg md:text-xl">
          Many companies have tried using Finzo and they trust <br />
          the safety of their money
        </p>
      </div>

      {/* Company Logos */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-gray-100 p-8 rounded-xl shadow-md transition-transform hover:scale-105"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="w-32 h-16 md:w-40 md:h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedCompanies;
