import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import harar from "../assets/harar.jpg";
import { motion } from "motion/react";
import AOS from "aos";

const CardR = ({ bus }) => {
  const navigate = useNavigate();

  const handleBook = (e) => {
    e.preventDefault();
    navigate("/book", {
      state: {
        departure: bus.departure,
        destination: bus.destination,
        date: bus.date,
      },
    });
  };

  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 50, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
    });
  });

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      data-aos = "fade-bottom"
      className="card flex flex-col w-full sm:auto rounded-xl shadow-xl bg-white"
    >
      <img
        src={harar}
        alt=""
        className="w-full h-48 sm:h-1/2 rounded-t-xl object-cover hover:object-left"
      />
      <div className="flex-grow flex flex-col font-bold text-sm p-2">
        <h1>Departure: {bus.departure}</h1>
        <h1>Destination: {bus.destination}</h1>
        <h1>Date: {bus.date}</h1>
        <h1>Time: {bus.time}</h1>
        <h1>Price: {bus.price}</h1>
      </div>
      <div>
        <button
          onClick={handleBook}
          className="bg-darkGray hover:bg-black p-2 text-white rounded-b-xl w-full"
        >
          Book
        </button>
      </div>
    </motion.div>
  );
};

export default CardR;
