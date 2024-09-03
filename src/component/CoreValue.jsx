import React from "react";
import reliablity from "../assets/reliability.jpg";

const CoreValue = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-[#F5F5F5] w-4/5">
        <div className="m-3">
          <h1 className="font-bold text-2xl">Core Values</h1>
        </div>
        <div className="flex flex-row gap-36 mb-10 w-full px-4">
          <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg w-3/4 ">
            <h1 className="font-bold text-lg mb-1">Customer First</h1>
            <p className="text-sm">
              We put our customers at the heart of everything we do.
            </p>
            <div className=" my-3">
              <img src={reliablity} alt="" className="h-20 w-30" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg w-3/4 ">
            <h1 className="font-bold text-lg mb-1">Reliability</h1>
            <p className="text-sm">
              Trust and dependability are the cornerstones of our service.{" "}
            </p>
            <div className=" my-3">
              <img src={reliablity} alt="" className="h-20 w-30" />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-36 mb-10 w-full px-4">
          <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg w-3/4 ">
            <h1 className="font-bold text-lg mb-1">Accessibility</h1>
            <p className="text-sm">
              We believe that travel should be easy and available to everyone.{" "}
            </p>
            <div className=" my-3">
              <img src={reliablity} alt="" className="h-20 w-30" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg w-3/4 ">
            <h1 className="font-bold text-lg mb-1">Excellence</h1>
            <p className="text-sm">
              We strive for the highest standards in everything we do.{" "}
            </p>
            <div className=" my-3">
              <img src={reliablity} alt="" className="h-20 w-30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValue;
