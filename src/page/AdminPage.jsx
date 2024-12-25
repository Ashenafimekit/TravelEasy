import React from "react";
import AdminDashboard from "../component/AdminDashboard";
import { Outlet } from "react-router-dom";
import Dashboard from "../component/Dashboard";
import PieChart from "../component/PieChartComp";
import BarChart from "../component/BarChartComp";
import StatsTab from "../component/StatsTab";

const AdminPage = () => {
  
  return (
    <div className="flex flex-row justify-start ">
      {/* <AdminDashboard/>
      <Outlet /> */}
      <div className="w-40">
        <Dashboard />
      </div>
      <div className=" w-full ">
        <Outlet />
        <div className="flex flex-col ">
          <div className="bg-lightGray p-6">
            <h1 className="text-center">
              Welcome to the TravelEase Admin Dashboard! Manage your system
              effectively and ensure seamless travel experiences for your
              customers
            </h1>
          </div>
          <div className="">
            <StatsTab/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
