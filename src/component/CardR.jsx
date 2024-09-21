import React from "react";
import {  useNavigate } from "react-router-dom";
import harar from "../assets/harar.jpg";

const CardR = ({bus}) => {
  
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

  return (
    <div className="card flex flex-col w-64 rounded-xl shadow-xl bg-white">
      <img src={harar} alt="" className="h-1/2 rounded-t-xl" />
      <div className="h-1/2 flex flex-col font-bold text-sm p-2">
        <h1>Departure : {bus.departure}</h1>
        <h1>Destination : {bus.destination}</h1>
        <h1>Date : {bus.date}</h1>
        <h1>Time : {bus.time}</h1>
        <h1>Price : {bus.price}</h1>
      </div>
      <div>
       
          <button
            onClick={handleBook}
            className="bg-black p-2 text-white rounded-b-xl w-full"
          >
            Book
          </button>
      </div>
    </div>
  );
};

export default CardR;
