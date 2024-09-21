import axios from "axios";
import React, { useState } from "react";

const Admin = () => {
  const [busInfo, setBusInfo] = useState({
    departure: "",
    destination: "",
    date: "",
    time: "",
    price: "",
  });
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setBusInfo({
      ...busInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/bus/addbus", busInfo).then((res) => {
      setResponse(res.data.message);
      alert(response)
      setBusInfo({
        departure: "",
        destination: "",
        date: "",
        time: "",
        price: "",
      });
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full m-10">
      <div>
        <h1 className="font-bold text-lg ">Bus Information</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-5 p-5 border border-black rounded-lg shadow-lg w-2/4"
      >
        <input
          type="text"
          onChange={handleChange}
          className="border border-black rounded-lg text-center w-1/3"
          placeholder="Departure"
          value={busInfo.departure}
          name="departure"
        />
        <input
          type="text"
          onChange={handleChange}
          className="border border-black rounded-lg text-center w-1/3"
          placeholder="Destination"
          value={busInfo.destination}
          name="destination"
        />
        <input
          type="date"
          onChange={handleChange}
          className="border border-black rounded-lg text-center w-1/3"
          placeholder="Date"
          value={busInfo.date}
          name="date"
        />
        <input
          type="time"
          onChange={handleChange}
          className="border border-black rounded-lg text-center w-1/3"
          placeholder="Time"
          value={busInfo.time}
          name="time"
        />
        <input
          type="number"
          onChange={handleChange}
          className="border border-black rounded-lg text-center w-1/3"
          placeholder="Price"
          value={busInfo.price}
          name="price"
        />
        <button type="submit" className="bg-black text-white p-2 rounded-lg ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Admin;
