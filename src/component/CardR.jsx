import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import harar from "../assets/harar.jpg";
import axios from "axios";

const CardR = () => {
  const [busInfo, setBusInfo] = useState({
    departure: "",
    destination: "",
    date: "",
    time: "",
    price: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios
        .get("https://38ae2645-2cf1-403c-afd1-1c5af8256f27.mock.pstmn.io/bus")
        .then((response) => {
          setBusInfo({
            departure: response.data.departure,
            destination: response.data.destination,
            date: response.data.date,
            time: response.data.time,
            price: response.data.price,
          });
          console.log(busInfo)
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleBook = (e) => {
    e.preventDefault();
    navigate("/book", {
      state: {
        departure: busInfo.departure,
        destination: busInfo.destination,
        date: busInfo.date,
      },
    });
  };

  return (
    <div className="card flex flex-col w-64 rounded-xl shadow-xl bg-white">
      <img src={harar} alt="" className="h-1/2 rounded-t-xl" />
      <div className="h-1/2 flex flex-col font-bold text-sm ">
        <h1>Departure : {busInfo.departure}</h1>
        <h1>Destination : {busInfo.destination}</h1>
        <h1>Date : {busInfo.date}</h1>
        <h1>Time : {busInfo.time}</h1>
        <h1>Price : {busInfo.price}</h1>
      </div>
      <div>
        <Link to="/book">
          <button
            onClick={handleBook}
            className="bg-black p-2 text-white rounded-b-xl w-full"
          >
            Book
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardR;
