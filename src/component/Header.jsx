import React from "react";

const Header = () => {
  return (
    <div>
      <div className="header flex flex-row bg-[#F5F5F5] p-5 justify-between items-center">
        <div className="logo pl-16 font-bold text-2xl">
          <h1>TravelEase</h1>
        </div>

        <div className="link flex-1 flex items-center justify-end space-x-8">
          <a href="#">BOOKING</a>
          <a href="#">ROUTES</a>
          <a href="#">ABOUT US</a>
          <a href="#">CONTACT US</a>
        </div>

        <div className="account pr-10 ml-16">
          <a href="#">LOGIN</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
