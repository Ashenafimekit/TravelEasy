import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const AdminDashboard = () => {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    if (userRole !== "admin") {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/")
  };

  return (
    <div>
      <div className="header flex flex-row bg-[#F5F5F5] p-5 justify-between items-center">
        <div className="logo pl-16 font-bold text-2xl">
          <Link to="/admin">TravelEase</Link>
        </div>

        <div className="link flex-1 flex items-center justify-end space-x-8 ">
          <Link to="addbus">Add Bus</Link>
          <Link to="deletebus">Delete Bus</Link>
          <Link to="allbooking">Booking</Link>
          <Link to="alluser">User</Link>
        </div>

        <div className="account pr-10 ml-10">
          {username ? (
            <div className="flex flex-col items-center justify-start">
              <span>{username}</span>
              <button onClick={handleLogout}>Logout</button>
              
            </div>
          ) : (
            <Link to="/signin">LOGIN</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
