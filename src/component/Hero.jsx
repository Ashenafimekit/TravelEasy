import React from "react";
import heroImage from "../assets/travel.jpg";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";



function Hero() {
  const location = useLocation();

  const heroText = {
    "/": " Book Your Bus Tickets Effortlessly ",
    "/book": "Book ",
    "/booking": "My Ticket ",
    "/rout": " Route ",
    "/about": "About Us",
    "/contact": "Contact Us",
  };

  const currentHeroText =
    heroText[location.pathname] || "Book Your Bus Tickets Effortlessly";

  return (
    <div className="relative h-96 md:h-[550px] overflow-hidden">
      <img
        src={heroImage}
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
      <div className="flex flex-col items-center justify-center gap-32 absolute inset-0 bg-black bg-opacity-40">
        <div className="">
          <h1 className="text-white text-lg md:text-4xl lg:text-6xl font-bold text-center px-4">
            {currentHeroText}
          </h1>
          <h3 className="mt-5 text-center text-sm md:text-base lg:text-lg px-4 text-white">
            Experience seamless travel planning with our intuitive booking
            system, ensuring you get the best routes and prices with ease.
          </h3>
        </div>

        <div className="">
          <Link to="/rout">
            <motion.button whileHover={{scale: 1.05}} className="bg-black border-black hover:bg-darkGray rounded-md w-20 h-10 md:w-40 md:h-12 text-white text-xs sm:text-sm md:text-base lg:text-lg transition duration-200">
              BOOk NOW
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
