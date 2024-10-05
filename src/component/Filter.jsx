import axios from "axios";
import React, { useState } from "react";
import RoutCards from "./RoutCards";

const Filter = () => {
  const [bus, setBus] = useState([]);
  const [filterData, setFilterData] = useState({
    departure: "",
    destination: "",
    date: "",
  });
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFilterData({
      ...filterData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${apiUrl}/bus/filter`,
        filterData
      );
      setBus(res.data);
    } catch (error) {
      console.log("error : ", error);
    }
  };

  const clearAll = () => {
    setFilterData({
      departure: "",
      destination: "",
      date: "",
    });
    setBus([]);
  };

  return (
    <div className="p-4">
      <div className="flex justify-center items-center mt-5 w-full">
        <form
          onSubmit={handleFilter}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 w-full max-w-3xl"
        >
          <input
            type="text"
            value={filterData.departure}
            placeholder="Departure"
            className="border border-black rounded-md text-center p-2 w-full sm:w-1/3"
            onChange={handleChange}
            name="departure"
          />
          <input
            type="text"
            value={filterData.destination}
            placeholder="Destination"
            className="border border-black rounded-md text-center p-2 w-full sm:w-1/3"
            onChange={handleChange}
            name="destination"
          />
          <input
            type="date"
            value={filterData.date}
            className="border border-black rounded-md p-2 text-center w-full sm:w-1/3"
            onChange={handleChange}
            name="date"
          />
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
            <button
              className="bg-black text-white p-2 rounded-lg sm:w-full lg:w-20 md:w-20"
              type="submit"
            >
              Filter
            </button>
            <button
              className="bg-black text-white p-2 rounded-lg sm:w-full lg:w-20 md:w-20"
              type="button"
              onClick={clearAll}
            >
              Clear All
            </button>
          </div>
        </form>
      </div>
      <div className="mt-6">
        <RoutCards bus={bus} />
      </div>
    </div>
  );
};

export default Filter;
