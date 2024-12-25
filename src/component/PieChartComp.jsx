import axios from "axios";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const PieChartComp = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [data, setData] = useState({
    destination: "",
    date: "",
  });
  const [seats, setSeats] = useState([]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("data", data);

    try {
      const res = await axios.post(`${apiUrl}/book/getbookStats2`, data );
      computeStats(res.data.bookStats);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const computeStats = (statsData) => {
    let seat = 0;

    statsData.forEach((stat) => {
      console.log("destinaion : ", stat.destination);
      seat = seat + 1;
    });
    setSeats(seat)
  };

  const totalSeats = 52;
  const takenSeats = seats;
  const untakenSeats = totalSeats - takenSeats;

  const seatData = [
    { name: "Taken Seats", value: takenSeats },
    { name: "Untaken Seats", value: untakenSeats },
  ];

  const COLORS = ["#FF8042", "#0088FE"];

  return (
    <div className="flex flex-col items-center ">
      <div className="w-1/2 ">
        <form onSubmit={handleSubmit} className="space-x-3 px-10 ">
          <input
            type="text"
            placeholder="Destination"
            name="destination"
            value={data.destination}
            className="outline-none border hover:border-black rounded-md text-center h-10 w-1/3 mb-4"
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            value={data.date}
            className="outline-none border hover:border-black rounded-md text-center h-10 w-1/3 mb-4"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-black hover:bg-darkGray text-white py-2 px-4 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
      <PieChart width={400} height={385}>
        <Pie
          data={seatData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          label
        >
          {seatData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartComp;
