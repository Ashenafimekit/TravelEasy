import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { motion } from "motion/react";


const Search = () => {
  const [data, setData] = useState({
    departure: "",
    destination: "",
  });
  const [bus, setBus] = useState("");
  const [response, setResponse] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setResponse("");
  };

  const searchBus = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${apiUrl}/bus/searchbus`, data).then((res) => {
        if (res.status === 200) {
          setResponse(res.data.message);
          //console.log("available number of bus : ", bus);
          //console.log("check 0", response);
        }
      });
    } catch (error) {
      console.log("error : ", error);
      if (error.response) {
        if (error.response.status === 404) {
          setResponse(error.response.data.message);
          //console.log("check 1", response);
        } else if (error.response.status === 500) {
          setResponse(error.response.data.message);
          //console.log("check 2", response);
        }
      }
    }
  };

  useEffect(() => {
    console.log("Updated bus state:", bus); // Logs the updated bus state when it changes
  }, [bus]);

  return (
    <div className="flex flex-col items-center bg-[#F5F5F5] h-auto p-5 gap-4">
      <div className="flex justify-center">
        <h2 className="font-bold text-2xl md:text-3xl">Search Bus</h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center bg-white w-full h-auto md:h-56 border rounded-3xl shadow-xl gap-8 md:gap-8 p-5">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <h3 className="text-sm md:text-base">Departure</h3>
          <TextField
            id="Departure_id"
            variant="outlined"
            size="small"
            className="w-40 md:w-52"
            name="departure"
            value={data.departure}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <h3 className="text-sm md:text-base">Destination</h3>
          <TextField
            id="Destination_id"
            variant="outlined"
            size="small"
            className="w-40 md:w-52"
            name="destination"
            value={data.destination}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <motion.button
            whileHover={{scale : 1.05}}
            className="bg-black hover:bg-darkGray text-white rounded-lg w-28 h-10 md:h-12"
            onClick={searchBus}
          >
            Search
          </motion.button>
        </div>
      </div>
      {response && <div>{response}</div>}
    </div>
  );
};

export default Search;
