import React from "react";
import { Outlet } from "react-router";
import AdminMenu from "./AdminMenu";

const AdminDashboard = ({ children }) => {
  return (
    <div>
      <AdminMenu />
      <div style={{ paddingLeft: "40vh" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
