import React from "react";

const Destination = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-[#F5F5F5] rounded shadow-lg gap-10 p-4">
      <h1 className="font-bold text-2xl -mb-3">Our Destinations</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-34 gap-6">
        {[
          "Harar",
          "DireDawa",
          "Gonder",
          "Jigjiga",
          "Asosa",
          "Bahirdar",
          "Mekelle",
          "D/Markos",
          "Dese",
          "ArbaMinch",
          "Hawassa",
          "Dila",
          "Hosaena",
          "Sodo",
          "Gambela",
          "Semera",
        ].map((destination, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-gradient-to-r from-white to-gray-400 rounded-lg shadow-lg h-10 w-32 font-bold text-lg"
          >
            <h2>{destination}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
