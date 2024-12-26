import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/header.css";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from '@mui/icons-material/Add';
import TableViewIcon from '@mui/icons-material/TableView';
import BookIcon from '@mui/icons-material/Book';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';

const Dashboard = () => {
  const username = sessionStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = sessionStorage.getItem("role");
    if (userRole !== "admin") {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-between  bg-black h-screen w-40 text-white ">
      <div className="">
        <div className="flex items-center justify-center p-5 bg-darkGray">
          <h1 className="font-bold text-2xl">
            <Link to="/admin">TravelEase</Link>
          </h1>
        </div>
        <div className="flex flex-col p-4 gap-1 text-lg">
          <h1 className="hover:bg-darkGray p-2">
            <Link to="addbus"><AddIcon/> Add Bus</Link>
          </h1>
          <h1 className="hover:bg-darkGray p-2">
            <Link to="deletebus"><TableViewIcon/> View Bus</Link>
          </h1>
          <h1 className="hover:bg-darkGray p-2">
            <Link to="allbooking"><BookIcon/> Booking</Link>
          </h1>
          <h1 className="hover:bg-darkGray p-2">
            <Link to="alluser"><PersonIcon/> User</Link>
          </h1>
          <h1 className="hover:bg-darkGray p-2">
            <Link to="/"><HomeIcon/> Home</Link>
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center mb-5">
        {username ? (
          <div className="flex flex-col items-center justify-start">
            <span>{username}</span>
            <button onClick={handleLogout}>
              <LogoutIcon />
            </button>
          </div>
        ) : (
          <Link to="/signin">LOGIN</Link>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
