import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../styles/AdminPanel.css";
import { TfiShoppingCart } from "react-icons/tfi";

const AdminMenu = () => {
  return (
    <div className="adminBody">
      {/* Sidebar */}
      <div id="sidebar">
        <header>
          <Link
            to="/Home"
            className="navbar-brand"
            style={{ boxShadow: "8px 6px 7px -4px #a39306" }}
          >
            TheStore
            <TfiShoppingCart
              size="3vh"
              style={{
                color: "#a39306 ",
                marginBottom: "3px",
                marginLeft: "3px",
                marginRight: "3px",
              }}
            />
          </Link>
        </header>
        <ul className="nav">
          <li>
            <NavLink to="">
              <i className="zmdi zmdi-view-dashboard" /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <i className="zmdi zmdi-link" />
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <i className="zmdi zmdi-widgets" /> Products
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <i className="zmdi zmdi-calendar" /> Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <i className="zmdi zmdi-info-outline" /> Users
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <i className="zmdi zmdi-settings" /> Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <i className="zmdi zmdi-comment-more" /> Transactions
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminMenu;
