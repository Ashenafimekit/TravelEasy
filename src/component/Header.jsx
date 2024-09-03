import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header flex flex-row bg-[#F5F5F5] p-5 justify-between items-center">
        <div className="logo pl-16 font-bold text-2xl">
          <Link to="/">TravelEase</Link>
        </div>

        <div className="link flex-1 flex items-center justify-end space-x-8 ">
          <Link to="/booking">BOOKING</Link>
          <Link to="/rout">ROUTES</Link>
          <Link to="/about">About US</Link>
          <Link to="/contact">Contact US</Link>
        </div>

        <div className="account pr-10 ml-16">
          <a href="#">LOGIN</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
