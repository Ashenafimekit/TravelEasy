import React from "react";
import mission from "../assets/mission.svg";

const Mission = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col md:flex-row m-10 bg-white shadow-xl rounded-lg overflow-hidden w-4/5">
        <div className="w-full md:w-1/2 flex flex-col gap-6 p-8">
          <div>
            <h1 className="font-bold text-3xl">Our Mission</h1>
            <p className="text-base mt-4 leading-relaxed">
              We strive to provide a platform that connects travelers with
              reliable bus services, making the journey from booking to
              destination as smooth as possible.
            </p>
          </div>
          <div>
            <ul className="list-disc font-semibold pl-5 space-y-2">
              <li>Customer Satisfaction</li>
              <li>Reliability</li>
              <li>Innovation</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={mission}
            alt="Our Mission"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
