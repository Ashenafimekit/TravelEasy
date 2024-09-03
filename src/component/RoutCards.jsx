import React from "react";
import CardR from "./CardR";

const RoutCards = () => {
  return (
    <div className="w-full mb-10">
      <div className="flex flex-col justify-between items-center gap-12 bg-[#F5F5F5] p-5 rounded-md">
        <div className="flex flex-row gap-16 ">
          <CardR/>
          <CardR/>
          <CardR/>
          <CardR/>
        </div>
        <div className="flex flex-row gap-16 ">
          <CardR/>
          <CardR/>
          <CardR/>
          <CardR/>
        </div>
        <div className="flex flex-row gap-16 ">
          <CardR/>
          <CardR/>
          <CardR/>
          <CardR/>
        </div>
      </div>
    </div>
  );
};

export default RoutCards;
