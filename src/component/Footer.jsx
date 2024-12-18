import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5 bg-[#F5F5F5]">
      <div className="flex flex-col items-center justify-center gap-5 p-5 text-center">
        <h1 className="font-bold text-2xl">TravelEasy Company. We’re here</h1>
        <p>
          We strive to make your travel experience seamless and enjoyable by
          connecting you with the best bus services.
        </p>
        <Link to="/contact">
          <button className="bg-black rounded-xl text-white w-32 h-10 hover:bg-amber-500">
            Contact us
          </button>
        </Link>
      </div>
      <div className="flex flex-col w-full md:w-3/4">
        <hr className="border-t-1 border-black my-4" />
        <div className="flex flex-col md:flex-row items-center justify-between text-sm md:text-base mb-5">
          <Link to="/" className="bg-white border border-black border-dotted p-2">
            TravelEasy
          </Link>
          <p>© 2024 ABC. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <FacebookIcon fontSize="small" />
            <InstagramIcon fontSize="small" />
            <XIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
