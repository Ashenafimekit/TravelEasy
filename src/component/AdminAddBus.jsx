import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminAddBus = () => {
  const [busInfo, setBusInfo] = useState({
    departure: "",
    destination: "",
    date: "",
    time: "",
    price: "",
  });
  const [response, setResponse] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    if (userRole !== "admin") {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setBusInfo({
      ...busInfo,
      [e.target.name]: e.target.value,
    });
    setResponse("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${apiUrl}/bus/addbus`, busInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Token sent:", token);
      if (res.status === 201) {
        setResponse(res.data.message);
      }

      setBusInfo({
        departure: "",
        destination: "",
        date: "",
        time: "",
        price: "",
      });
    } catch (error) {
      console.log("Error:", error);
      if (error.response) {
        if (error.response.status === 500) {
          setResponse(error.response.data.message);
        }
      }
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="bg-lightGray p-6">
        <h1 className="text-center">
          Welcome to the TravelEase Admin Dashboard! Manage your system
          effectively and ensure seamless travel experiences for your customers
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center w-full ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-5 p-5  rounded-lg shadow-lg w-2/4 bg-lightGray"
        >
          <div className="">
            <div>
              <h1 className="font-bold text-lg ">Bus Information</h1>
            </div>
            <div>
              {response && (
                <div>
                  <p className="font-bold text-sm text-center">{response}</p>
                </div>
              )}
            </div>
          </div>

          <input
            type="text"
            onChange={handleChange}
            className="outline-none border hover:border-black rounded-md text-center h-10 w-1/2"
            placeholder="Departure"
            value={busInfo.departure}
            name="departure"
          />
          <input
            type="text"
            onChange={handleChange}
            className="outline-none border hover:border-black rounded-md text-center h-10 w-1/2"
            placeholder="Destination"
            value={busInfo.destination}
            name="destination"
          />
          <input
            type="date"
            onChange={handleChange}
            className="outline-none border hover:border-black rounded-md text-center h-10 w-1/2"
            placeholder="Date"
            value={busInfo.date}
            name="date"
          />
          <input
            type="time"
            onChange={handleChange}
            className="outline-none border hover:border-black rounded-md text-center h-10 w-1/2"
            placeholder="Time"
            value={busInfo.time}
            name="time"
          />
          <input
            type="number"
            onChange={handleChange}
            className="outline-none border hover:border-black rounded-md text-center h-10 w-1/2"
            placeholder="Price"
            value={busInfo.price}
            name="price"
          />
          <button
            type="submit"
            className="bg-black text-white p-2 rounded-lg w-1/2 hover:bg-darkGray"
          >
            Add Bus
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAddBus;
