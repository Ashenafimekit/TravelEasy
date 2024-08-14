import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Search = () => {
  return (
    <div className="flex flex-col items-center bg-[#F5F5F5] h-64 p-5 gap-4">
      <div className="flex justify-center">
        <h2 className="font-bold text-2xl">Search Bus</h2>
      </div>

      <div className="flex flex-row items-center justify-center bg-white w-full h-56 border rounded-3xl shadow-xl gap-16">
        <div className="flex flex-row justify-center items-center gap-5">
          <h3>Departure</h3>
          <TextField id="Departure_id" variant="outlined" />
        </div>
        <div className="flex flex-row justify-center items-center gap-5">
          <h3>Destination</h3>
          <TextField id="Destination_id" variant="outlined" />
        </div>
        <div className="">
          <button className="bg-black border rounded-lg w-28 h-10 text-white"><a href="#">Search</a></button>
        </div>
      </div>
    </div>
  );
};

export default Search;
