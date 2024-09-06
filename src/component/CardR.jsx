import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import harar from "../assets/harar.jpg";

const CardR = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://38ae2645-2cf1-403c-afd1-1c5af8256f27.mock.pstmn.io/bus"
        );
        if (!response.ok) {
          throw new Error("network response not ok");
        }
        const busInfo = await response.json();
        setData(busInfo);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleBook = (e) => {
    e.preventDefault();
    navigate("/book", {
      state: {
        departure : data.departure,
        destination : data.destination,
        date : data.date,
      }
    })
  };

  return (
    <div className="card flex flex-col w-64 rounded-xl shadow-xl bg-white">
      <img src={harar} alt="" className="h-1/2 rounded-t-xl" />
      <div className="h-1/2 flex flex-col font-bold text-sm ">
        <h1>Departure : {data.departure}</h1>
        <h1>Destination : {data.destination}</h1>
        <h1>Date : {data.date}</h1>
        <h1>Time : {data.time}</h1>
        <h1>Price : {data.price}</h1>
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
