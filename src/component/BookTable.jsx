import { useLocale } from "antd/es/locale";
import React from "react";
import { useLocation } from "react-router-dom";
import Destination from "./Destination";

const BookTable = () => {
  const location = useLocation();
  const {fullName,phone,payment,departure,destination,date} = location.state || {};
  console.log(fullName)
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
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
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 text-gray-800">{fullName}</td>
            <td className="px-6 py-4 text-gray-800">{phone}</td>
            <td className="px-6 py-4 text-gray-800">{departure}</td>
            <td className="px-6 py-4 text-gray-800">{destination}</td>
            <td className="px-6 py-4 text-gray-800">{date}</td>
            <td className="px-6 py-4 text-gray-800">{payment}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
