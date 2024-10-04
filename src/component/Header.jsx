import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("avatar");
    window.location.reload();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#F5F5F5] p-5">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="logo font-bold text-2xl pl-4 md:pl-16">
          <Link to="/">TravelEase</Link>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden pr-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Links (visible on medium screens and above) */}
        <nav className="hidden md:flex flex-1 justify-end space-x-8">
          <Link to="/booking">MY TICKET</Link>
          <Link to="/rout">ROUTES</Link>
          <Link to="/about">About US</Link>
          <Link to="/contact">Contact US</Link>
        </nav>

        {/* Account section */}
        <div className="account pr-4 md:pr-10 hidden md:flex">
          {username ? (
            <div className="flex flex-col items-center ml-3">
              <span>{username}</span>
              <button
                onClick={handleLogout}
                className="ml-3"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/signin" className="ml-3">
              LOGIN
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu (visible when the hamburger icon is clicked) */}
      {isOpen && (
        <nav className="md:hidden mt-4 flex flex-col items-end pr-4 space-y-4">
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
                Logout
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
