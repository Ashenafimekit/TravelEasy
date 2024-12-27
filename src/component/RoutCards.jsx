import React, { useEffect, useState } from "react";
import CardR from "./CardR";
import axios from "axios";

const RoutCards = ({ bus }) => {
  const [busInfo, setBusInfo] = useState(bus || []);
  const apiUrl = import.meta.env.VITE_API_URL;


  useEffect(() => {
    if (bus.length > 0) {
      setBusInfo(bus);
    } else {
      try {
        axios.get(`${apiUrl}/bus/getbus`).then((response) => {
          setBusInfo(response.data);
        });
      } catch (error) {
        console.log("fetching error : ", error);
      }
    }
  }, [bus]);

  return (
    <div className="flex flex-wrap justify-center items-center bg-[#F5F5F5] p-5 rounded-md mx-2 md:mx-10">
      {busInfo.length > 0 ? (
        busInfo.slice(0, 12).map((bus, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <CardR bus={bus} />
          </div>
        ))
      ) : (
        <p>No bus information available.</p>
      )}
    </div>
  );
};

export default RoutCards;
