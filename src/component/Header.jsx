import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const username = sessionStorage.getItem("username");

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("avatar");
    window.location.reload();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black p-5 text-white sm:h-20 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="logo font-bold text-2xl pl-4 md:pl-16 hover:text-lightGray">
          <Link to="/">TravelEase</Link>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden pr-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            {/* Hamburger Icon */}
            <MenuIcon />
          </button>
        </div>

        <nav className="hidden md:flex flex-1 justify-end space-x-8">
          <Link to="/booking" className="header hover:text-lightGray">
            MY TICKET
          </Link>
          <Link to="/rout" className="header hover:text-lightGray">
            ROUTES
          </Link>
          <Link to="/about" className="header hover:text-lightGray">
            About US
          </Link>
          <Link to="/contact" className="header hover:text-lightGray">
            Contact US
          </Link>
        </nav>

        <div className="account px-4 md:px-10 hidden md:flex ">
          {username ? (
            <div className="flex flex-col items-center ml-3 cursor-pointer hover:text-lightGray">
              <span>{username}</span>
              <button onClick={handleLogout} className="ml-3">
                <LogoutIcon/>
              </button>
            </div>
          ) : (
            <Link to="/signin" className="ml-3 cursor-pointer hover:text-lightGray">
              <AccountBoxIcon />
            </Link>
          )}
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden mt-4 flex flex-col items-end px-4 space-y-4">
          <Link to="/booking" onClick={toggleMenu}>
            MY TICKET
          </Link>
          <Link to="/rout" onClick={toggleMenu}>
            ROUTES
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About US
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            Contact US
          </Link>
          {username ? (
            <div className="flex flex-col items-center">
              <span>{username}</span>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:underline mt-2"
              >
                <LogoutIcon/>
              </button>
            </div>
          ) : (
            <Link to="/signin" onClick={toggleMenu} className="hover:underline">
              LOGIN
            </Link>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
