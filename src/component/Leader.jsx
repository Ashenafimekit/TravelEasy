import React from "react";
import man from "../assets/person5.webp";
import man3 from "../assets/person3.webp";

const Leader = () => {
  return (
    <div className="flex items-center justify-center mt-5 mb-20">
      <div className="flex flex-col items-center justify-center bg-[#F5F5F5] w-4/5 p-5 shadow-xl">
        <h1 className="font-bold text-2xl mb-5">Our Leaders</h1>
        {/* Use flex-col for small screens and flex-row for medium and larger screens */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-4">
            <img src={man} alt="" className="rounded-t-lg mb-2" />
            <h1 className="text-center font-bold">Full Name</h1>
            <h3 className="text-center text-sm">Position</h3>
          </div>
          <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-4">
            <img src={man3} alt="" className="rounded-t-lg mb-2" />
            <h1 className="text-center font-bold">Full Name</h1>
            <h3 className="text-center text-sm">Position</h3>
          </div>
          <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-4">
            <img src={man} alt="" className="rounded-t-lg mb-2" />
            <h1 className="text-center font-bold">Full Name</h1>
            <h3 className="text-center text-sm">Position</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leader;
