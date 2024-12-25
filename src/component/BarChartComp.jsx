import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Box } from "@mui/material";
import axios from "axios";

const BarChartComp = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [date, setDate] = useState("");
  const [stats, setStats] = useState([]);
  const [destinations, setDestinations] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("date", date);

    try {
      const res = await axios.post(`${apiUrl}/book/getbookStats`, { date });
      setStats(res.data.bookStats);
      computeStats(res.data.bookStats);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    // console.log("stats:", stats);
    // console.log("destinations:", destinations);
  }, [stats, destinations]);

  const computeStats = (statsData) => {
    const updatedDest = [];

    statsData.forEach((stat) => {
      const existing = updatedDest.find((d) => d.name === stat.destination);
      if (existing) {
        existing.bookings += 1;
      } else {
        updatedDest.push({ name: stat.destination, bookings: 1 });
      }
    });

    setDestinations(updatedDest);
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="p-2 w-1/2">
        <form onSubmit={handleSubmit} className="space-x-3">
          <input
            type="date"
            className="outline-none border hover:border-black rounded-md text-center h-10 w-1/2 mb-4"
            onChange={(e) => setDate(e.target.value)}
          />
          <button
            type="submit"
            className="bg-black hover:bg-darkGray text-white py-2 px-4 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
      <div style={{ width: '100%', minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          sx={{
            backgroundColor: "white",
            p: 2,
            borderRadius: 2,
            boxShadow: 3,
            width: "80%",
            height: 300,
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={destinations}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="bookings" fill="#0088FE" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </div>
    </div>
  );
};

export default BarChartComp;
