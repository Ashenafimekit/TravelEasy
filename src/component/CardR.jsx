import React from "react";
import { Link } from "react-router-dom";
import harar from "../assets/harar.jpg";

const CardR = () => {
  return (
    <div className="card flex flex-col w-64 rounded-xl shadow-xl bg-white">
      <img src={harar} alt="" className="h-1/2 rounded-t-xl" />
      <div className="h-1/2 flex flex-col font-bold text-sm ">
        <h1>Departure : </h1>
        <h1>Destination : </h1>
        <h1>Date : </h1>
        <h1>Time : </h1>
        <h1>Price : </h1>
      </div>
      <div>
        <Link to="/book">
          <button className="bg-black p-2 text-white rounded-b-xl w-full">Book</button>
        </Link>
      </div>
    </div>
  );
};

export default CardR;
