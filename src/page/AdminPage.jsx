import React from "react";
import AdminDashboard from "../component/AdminDashboard";
import { Outlet } from "react-router-dom";



const AdminPage = () => {
  return (
    <div>
      <AdminDashboard/>
      <Outlet />
    </div>
  );
};

export default AdminPage;
