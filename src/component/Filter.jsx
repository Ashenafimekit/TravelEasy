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

  const handleChange = (e) => {
    setFilterData({
      ...filterData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = async (e) => {
    e.preventDefault();
    console.log(filterData);
    try {
      await axios
        .post("http://localhost:3000/bus/filter", filterData)
        .then((res) => {
          setBus(res.data);
          console.log(bus);
        });
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
    <div>
      <div className=" flex justify-center items-center mt-5 w-full">
        <form onSubmit={handleFilter} className="flex flex-row gap-10 p-5">
          <input
            type="text"
            value={filterData.departure}
            placeholder="Departure"
            className="border border-black rounded-md text-center"
            onChange={handleChange}
            name="departure"
          />
          <input
            type="text"
            value={filterData.destination}
            placeholder="Destination"
            className="border border-black rounded-md text-center"
            onChange={handleChange}
            name="destination"
          />
          <input
            type="Date"
            value={filterData.date}
            className="border border-black rounded-md"
            onChange={handleChange}
            name="date"
          />
          <button className="bg-black text-white p-2 rounded-lg" type="submit">
            Filter
          </button>
          <button
            className="bg-black text-white p-2 rounded-lg"
            onClick={clearAll}
          >
            Clear All
          </button>
        </form>
      </div>
      <div>
        <RoutCards bus={bus} />
      </div>
    </div>
  );
};

export default Filter;
