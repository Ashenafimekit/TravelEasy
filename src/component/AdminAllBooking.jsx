import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminAllBooking = () => {
  const [userData, setUserData] = useState([]);
  const [response, setResponse] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    try {
      axios
        .get("http://localhost:3000/book/getbook", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUserData(res.data);
        });
    } catch (error) {
      console.log("error ", error);
    }
  }, []);

  const handleCancel = async (user) => {
    try {
      await axios
        .delete("http://localhost:3000/book/cancel", {
          data: {
            departure: user.departure,
            destination: user.destination,
            seatNumber: user.seatNumber,
            date: user.date,
          },
        })
        .then((res) => {
          setResponse(res.data.message);
          window.location.reload();
        });
    } catch (error) {
      console.log("error : ", error);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {response && (
        <div className={`text-sm font-bold`}>
          <p>{response}</p>
        </div>
      )}
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-gray-200 border-b border-gray-300">
          <tr>
            <th className="px-6 py-3 text-left text-gray-600 font-semibold">
              Full Name
            </th>
            <th className="px-6 py-3 text-left text-gray-600 font-semibold">
              Phone Number
            </th>
            <th className="px-6 py-3 text-left text-gray-600 font-semibold">
              Seat Number
            </th>
            <th className="px-6 py-3 text-left text-gray-600 font-semibold">
              Departure
            </th>
            <th className="px-6 py-3 text-left text-gray-600 font-semibold">
              Destination
            </th>
            <th className="px-6 py-3 text-left text-gray-600 font-semibold">
              Date
            </th>
            <th className="px-6 py-3 text-left text-gray-600 font-semibold">
              Payment Option
            </th>
            <th className="px-6 py-3 text-left text-gray-600 font-semibold">
              Cancel Ticket
            </th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-6 py-4 text-gray-800">{user.name}</td>
              <td className="px-6 py-4 text-gray-800">{user.phone}</td>
              <td className="px-6 py-4 text-gray-800">{user.seatNumber}</td>
              <td className="px-6 py-4 text-gray-800">{user.departure}</td>
              <td className="px-6 py-4 text-gray-800">{user.destination}</td>
              <td className="px-6 py-4 text-gray-800">{user.date}</td>
              <td className="px-6 py-4 text-gray-800">{user.payment}</td>
              <td className="px-6 py-4 text-gray-800">
                <button
                  onClick={() => handleCancel(user)}
                  className="bg-black p-2 rounded-lg text-white"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAllBooking;
