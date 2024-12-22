import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminDeletBus = () => {
  const [userData, setUserData] = useState([]);
  const [response, setResponse] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;


  useEffect(() => {
    try {
      console.log("check 1");

      axios.get(`${apiUrl}/bus/getbusadmin`).then((res) => {
        console.log("check 2");
        setUserData(res.data);
      });
    } catch (error) {
      console.log("check 3")

      if (error.response) {
        if (error.response.status == 404) {
          setResponse(error.response.data.message);
        }
      }
      console.log("error ", error);
    }
  }, []);

  const handleCancel = async (user) => {
    try {
      console.log("check melos");
      await axios
        .delete(`${apiUrl}/bus/deletebus`, {
          data: {
            departure: user.departure,
            destination: user.destination,
            date: user.date,
            time: user.time,
            price: user.price,
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
    <div className="flex items-center justify-center m-10">
      <table className="min-w-full bg-white border border-gray-300 rounded-xl shadow-md">
        <thead className="bg-gray-200 border-b border-gray-300">
          <tr>
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
              Time
            </th>
            <th className="px-6 py-3 text-left text-gray-600 font-semibold">
              Price
            </th>
            <th className="px-6 py-3 text-left text-gray-600 font-semibold">
              Delete Bus
            </th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-6 py-4 text-gray-800">{user.departure}</td>
              <td className="px-6 py-4 text-gray-800">{user.destination}</td>
              <td className="px-6 py-4 text-gray-800">{user.date}</td>
              <td className="px-6 py-4 text-gray-800">{user.time}</td>
              <td className="px-6 py-4 text-gray-800">{user.price}</td>

              <td className="px-6 py-4 text-gray-800">
                <button
                  onClick={() => handleCancel(user)}
                  className="bg-black p-2 rounded-lg text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDeletBus;
