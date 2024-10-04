import React from "react";
import heroImage from "../assets/hero.jpg";
import { Link, useLocation } from "react-router-dom";

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
    <div className="relative h-96 md:h-[500px] overflow-hidden">
      <img
        src={heroImage}
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
      <div className="flex flex-col items-center justify-center absolute inset-0 bg-black bg-opacity-40">
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center px-4">
          {currentHeroText}
        </h1>
        <h3 className="mt-5 text-center text-sm md:text-lg px-4">
          Experience seamless travel planning with our intuitive booking system,
          ensuring you get the best routes and prices with ease.
        </h3>
        <Link to="/signup">
          <button className="bg-black border-black rounded-md w-20 h-10 md:w-24 md:h-12 text-white mt-10 hover:bg-amber-500 hover:text-black transition duration-200">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
