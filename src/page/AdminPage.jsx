import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../component/Dashboard";

const AdminPage = () => {
  
  return (
    <div className="flex flex-row justify-start ">
      <div className="w-40">
        <Dashboard />
      </div>
      <div className=" w-full ">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
