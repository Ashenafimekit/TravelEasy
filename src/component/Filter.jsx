import { ClearAll } from "@mui/icons-material";
import React, { useState } from "react";

const Filter = () => {
  const [departure, setDeparture] = useState();
  const [destination, setDestination] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");

  const clearAll = () => {
    setDeparture("");
    setDestination("");
    setDate("");
    setTime("");
    setPrice("");
  };
  return (
    <div className=" flex justify-center items-center mt-5 w-full">
      <div className="flex flex-row gap-10 p-5">
        <input
          type="text"
          value={departure}
          placeholder="Departure"
          className="border border-black rounded-md text-center"
          onChange={(e) => setDeparture(e.target.value)}
        />
        <input
          type="text"
          value={destination}
          placeholder="Destination"
          className="border border-black rounded-md text-center"
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="Date"
          value={date}
          className="border border-black rounded-md"
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="Time"
          value={time}
          className="border border-black rounded-md"
          onChange={(e) => setTime(e.target.value)}
        />
        <select
          className="border border-black rounded-md"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        >
          <option value="">Select Price</option>
          <option value="option 1">1k</option>
          <option value="option 2">2k</option>
          <option value="option 3">3k</option>
        </select>
        <button
          className="bg-black text-white p-2 rounded-lg"
          onClick={clearAll}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Filter;
