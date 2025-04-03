import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import images & icons from your assets folder
import creditCardImage from "../assets/credit-cards.png";
import financeChartImage from "../assets/finance-chart.png";
import worldMapImage from "../assets/world-map.png";
import currenciesImage from "../assets/currencies.png";
import subscriptionsImage from "../assets/subscriptions.png";
import otherFeaturesImage from "../assets/other-features.png";

// Import new icons from your Figma PNG exports
import MobileIcon from "../assets/icons/mobile.png";
import FinanceIcon from "../assets/icons/finance.png";
import WorldIcon from "../assets/icons/world.png";
// import MoneyIcon from "../assets/icons/money.png";
// import SubscriptionIcon from "../assets/icons/subscription.png";

// Register GSAP
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);

  useEffect(() => {
    const el1 = cardRef1.current;
    const el2 = cardRef2.current;
    const el3 = cardRef3.current;
  
    if (!el1 || !el2 || !el3) return;
  
    const tl = gsap.timeline({ defaults: { duration: 0.3, ease: "power1.out" } });
  
    const handleMouseEnter1 = () => tl.to(el1, { y: -15, scale: 1.05 });
    const handleMouseLeave1 = () => tl.to(el1, { y: 0, scale: 1 });
  
    const handleMouseEnter2 = () => tl.to(el2, { y: -10, scale: 1.03 });
    const handleMouseLeave2 = () => tl.to(el2, { y: 0, scale: 1 });
  
    const handleMouseEnter3 = () => tl.to(el3, { scale: 1.05 });
    const handleMouseLeave3 = () => tl.to(el3, { scale: 1 });
  
    el1.addEventListener("mouseenter", handleMouseEnter1);
    el1.addEventListener("mouseleave", handleMouseLeave1);
  
    el2.addEventListener("mouseenter", handleMouseEnter2);
    el2.addEventListener("mouseleave", handleMouseLeave2);
  
    el3.addEventListener("mouseenter", handleMouseEnter3);
    el3.addEventListener("mouseleave", handleMouseLeave3);
  
    return () => {
      el1.removeEventListener("mouseenter", handleMouseEnter1);
      el1.removeEventListener("mouseleave", handleMouseLeave1);
  
      el2.removeEventListener("mouseenter", handleMouseEnter2);
      el2.removeEventListener("mouseleave", handleMouseLeave2);
  
      el3.removeEventListener("mouseenter", handleMouseEnter3);
      el3.removeEventListener("mouseleave", handleMouseLeave3);
    };
  }, []);
  

  return (
    <section className="bg-white text-black py-20 px-6 md:px-12 lg:px-32">
      {/* Heading */}
      <h2 className="text-center text-5xl md:text-6xl font-bold text-gray-900">
        Feel the best experience <br /> with our features
      </h2>

      {/* Features Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Feature Card 1 */}
        <div
          ref={cardRef1}
          className="p-6 bg-white shadow-lg rounded-2xl flex flex-col gap-4 transform transition duration-300"
        >
          <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 rounded-full">
            <img src={MobileIcon} alt="Mobile Feature" className="w-10 h-10" />
          </div>
          <h3 className="text-3xl font-semibold">
            Custom and design your card, make it look unique
          </h3>
          <p className="text-lg text-gray-600">
            Create a custom card that reflects your unique style and personality. Choose from a range of colors, patterns, and designs.
          </p>
          <img src={creditCardImage} alt="Credit Cards" className="w-full rounded-lg shadow-md" />
        </div>

        {/* Feature Card 2 */}
        <div
          ref={cardRef2}
          className="p-6 bg-white shadow-lg rounded-2xl flex flex-col gap-4 transform transition duration-300"
        >
          <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 rounded-full">
            <img src={FinanceIcon} alt="Finance Feature" className="w-10 h-10" />
          </div>
          <h3 className="text-3xl font-semibold">
            Personalized your Financial insights and goals
          </h3>
          <p className="text-lg text-gray-600">
            Track your spending patterns, analyze income and expenses easily, and receive personalized recommendations.
          </p>
          <img src={financeChartImage} alt="Finance Chart" className="w-full rounded-lg shadow-md" />
        </div>

        {/* Feature Card 3 (Full Width, Larger Map) */}
        <div
          ref={cardRef3}
          className="md:col-span-2 p-6 bg-white shadow-lg rounded-2xl flex flex-col md:flex-row gap-6 items-center transform transition duration-300"
        >
          <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 rounded-full">
            <img src={WorldIcon} alt="World Feature" className="w-10 h-10" />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-semibold">
              Free Transfer anywhere around the world
            </h3>
            <p className="text-lg text-gray-600">
              Send and receive money across the globe with zero hassle. Enjoy fast and secure transactions.
            </p>
          </div>
          <img src={worldMapImage} alt="World Map" className="w-full md:w-[650px] rounded-lg shadow-md" />
        </div>
      </div>

      {/* Lower Features Section (Three New Cards) */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature Card 4 */}
        <div className="p-6 bg-white shadow-lg rounded-2xl flex flex-col gap-4 transform transition duration-300">
          {/* <h3 className="text-3xl font-semibold">Hold money in 30+ currencies</h3> */}
          <img src={currenciesImage} alt="Currencies" className="w-full rounded-lg shadow-md" />
        </div>

        {/* Feature Card 5 */}
        <div className="p-6 bg-white shadow-lg rounded-2xl flex flex-col gap-4 transform transition duration-300">
          <h3 className="text-3xl font-semibold">
            {/* Subscriptions you control in one place */}
            </h3>
          <img src={subscriptionsImage} alt="Subscriptions" className="w-full rounded-lg shadow-md" />
        </div>

        {/* Feature Card 6 (Dark Background) */}
        <div className="p-6 bg-black text-white shadow-lg rounded-2xl flex flex-col gap-4 transform transition duration-300">
          <h3 className="text-3xl font-semibold">
            {/* Check our other product features */}
            </h3>
          <img src={otherFeaturesImage} alt="Other Features" className="w-full rounded-lg opacity-70" />
          <button className="mt-4 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
            {/* View More → */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
