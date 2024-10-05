import axios from "axios";
import React, { useEffect, useState } from "react";

const BookHistory = () => {
  const [userData, setUserData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${apiUrl}/book/getbookhistory`);
        setUserData(res.data);
      } catch (error) {
        console.log("error ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {userData.map((user, index) => (
          <div key={index} className="border border-gray-300 rounded-lg shadow-md p-4 bg-white">
            <h2 className="text-lg font-semibold mb-2">{user.name}</h2>
            <p><strong>Phone Number:</strong> {user.phone}</p>
            <p><strong>Seat Number:</strong> {user.seatNumber}</p>
            <p><strong>Departure:</strong> {user.departure}</p>
            <p><strong>Destination:</strong> {user.destination}</p>
            <p><strong>Date:</strong> {user.date}</p>
            <p><strong>Payment Option:</strong> {user.payment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookHistory;
