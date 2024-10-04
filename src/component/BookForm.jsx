import { DesignServices } from "@mui/icons-material";
import axios from "axios";
import React, { useDebugValue, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const BookForm = () => {
  const location = useLocation();
  const { departure, destination, date } = location.state || {};
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    seatNumber: "",
    payment: "",
    departure: departure,
    destination: destination,
    date: date,
  });

  const [takenSeats, setTakenSeats] = useState([]);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setMessage("");
  };

  const handleBook = async (e) => {
    e.preventDefault();
    console.log("melos check");
    const token = localStorage.getItem("token");
    console.log(token);
    try {
      const response = await axios.post(
        "http://localhost:3000/book/createbook",
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in the request header
          },
        }
      );
      console.log("check melos");
      if (response.status === 201) {
        setMessage(response.data.message);
        setMessageType("success");
      }

      setUserData({
        name: "",
        phone: "",
        seatNumber: "",
        payment: "",
        departure: departure,
        destination: destination,
        date: date,
      });
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setMessage(error.response.data.message);
          setMessageType("error");
        } else if (error.response.status === 401) {
          setMessage(error.response.data.message);
          setMessageType("error");
        } else if (error.response.status === 500) {
          setMessage("Server Error: Please try again later.");
          setMessageType("error");
        }
      }
    }
  };

  useEffect(() => {
    try {
      axios
        .post("http://localhost:3000/book/takenseat", {
          departure,
          destination,
          date,
        })
        .then((res) => {
          const formattedSeats = res.data.map((seat) =>
            seat.toString().padStart(2, "0")
          );
          setTakenSeats(formattedSeats);
          console.log("seats", takenSeats);
        });
    } catch (error) {
      console.log(error);
    }
  }, [departure, destination, date]);

  const allSeats = Array.from({ length: 52 }, (_, index) => {
    const seatNumber = (index + 1).toString().padStart(2, "0");
    return seatNumber;
  });

  return (
    <div className="flex flex-col lg:flex-row md:flex-row gap-10 items-center justify-center m-5 w-full">
      <div
        className={`bg-[#F5F5F5] rounded-lg w-full lg:w-2/6 ${
          messageType === "error"
            ? "border border-red-500"
            : messageType === "success"
              ? "border border-green-500"
              : ""
        }`}
      >
        <h1 className="font-bold text-2xl text-center">Booking Form</h1>
        {message && (
          <div
            className={`font-bold text-sm text-center ${
              messageType === "error" ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </div>
        )}
        <form onSubmit={handleBook} className="flex flex-col gap-5 px-10 py-4">
          <input
            type="text"
            value={departure}
            className="border border-black rounded-lg text-center"
          />
          <label className="text-center -my-5">to</label>
          <input
            type="text"
            value={destination}
            className="border border-black rounded-lg text-center"
          />
          <input
            type="text"
            value={date}
            className="border border-black rounded-lg text-center"
          />
          <input
            type="text"
            className="border border-black rounded-lg text-center"
            placeholder="Full Name"
            value={userData.name}
            name="name"
            onChange={handleChange}
          />
          <input
            type="number"
            className="border border-black rounded-lg text-center"
            placeholder="Phone Number"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
          />
          <input
            type="number"
            className="border border-black rounded-lg text-center"
            placeholder="Seat Number"
            name="seatNumber"
            value={userData.seatNumber}
            onChange={handleChange}
          />
          <select
            name="payment"
            className="border border-black rounded-lg text-center"
            onChange={handleChange}
            value={userData.payment}
          >
            <option value="">Payment Option</option>
            <option value="cbe">CBE</option>
            <option value="awash">Awash</option>
            <option value="tele">Tele Birr</option>
          </select>
          <button type="submit" className="bg-black text-white rounded-lg p-2">
            Confirm Booking
          </button>
        </form>
        <div className="flex items-center justify-center mb-1 ">
          <Link to="/rout">
            <button className="bg-black text-white rounded-lg p-2">Back</button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-3 border border-black rounded-lg shadow-lg w-full lg:w-2/6">
        <div className="flex flex-row ">
          <h1 className="font-bold text-2xl text-center mb-2 text-green-500">Available</h1>
          <h1 className="font-bold text-2xl text-center mb-2 ml-5 text-red-500">Taken</h1>

        </div>
        <div className="grid grid-cols-6 lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-8 gap-3">
          {allSeats.map((seatNumber) => (
            <span
              key={seatNumber}
              className={`p-1 text-white rounded-md ${
                takenSeats.includes(seatNumber) ? "bg-red-500" : "bg-green-500"
              }`}
            >
              {seatNumber}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookForm;
