import axios from "axios";
import React, { useEffect, useState } from "react";

const BookTable = () => {
  const [userData, setUserData] = useState([]);
  const [response, setResponse] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book/getbook", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(res.data);
      } catch (error) {
        console.log("error ", error);
      }
    };
    fetchData();
  }, [token]);

  const handleCancel = async (user) => {
    try {
      const res = await axios.delete("http://localhost:3000/book/cancel", {
        data: {
          departure: user.departure,
          destination: user.destination,
          seatNumber: user.seatNumber,
          date: user.date,
        },
      });
      setResponse(res.data.message);
      window.location.reload();
    } catch (error) {
      console.log("error : ", error);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {response && (
        <div className={`text-sm font-bold mb-4`}>
          <p>{response}</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {userData.map((user, index) => (
          <div key={index} className=" border border-gray-300 rounded-lg shadow-md p-4 bg-white">
            <h2 className="text-lg font-semibold mb-2">{user.name}</h2>
            <p><strong>Phone Number:</strong> {user.phone}</p>
            <p><strong>Seat Number:</strong> {user.seatNumber}</p>
            <p><strong>Departure:</strong> {user.departure}</p>
            <p><strong>Destination:</strong> {user.destination}</p>
            <p><strong>Date:</strong> {user.date}</p>
            <p><strong>Payment Option:</strong> {user.payment}</p>
            <button
              onClick={() => handleCancel(user)}
              className="bg-black p-2 rounded-lg text-white mt-2"
            >
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookTable;
