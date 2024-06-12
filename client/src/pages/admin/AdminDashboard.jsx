import React from "react";
import AdminMenu from "./AdminMenu.jsx";
import { Toaster } from "react-hot-toast";

const AdminDashboard = ({ children }) => {
  return (
    <div className="col-12">
      <div className="col-1">
        <AdminMenu />
      </div>
      <div
        className="col-11"
        style={{ border: "2px solid black", height: "100vh" }}
      >
        <h1>Children Here...</h1>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AdminDashboard;
