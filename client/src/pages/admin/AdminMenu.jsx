import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../styles/AdminPanel.css";
import { TfiShoppingCart } from "react-icons/tfi";
import { useAuth } from "../../components/context/AuthContext";

const AdminMenu = ({ children }) => {
  const [auth] = useAuth();
  const user = auth?.user?.name || "admin";

  return (
    <div id="sidebar" className="adminmenu">
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
          <NavLink to={`/adminpanel/${user}/dashboard`}>
            <i className="zmdi zmdi-view-dashboard" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/dd">
            <i className="zmdi zmdi-link" />
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink to={`/adminpanel/${user}/products`}>
            <i className="zmdi zmdi-widgets" /> Products
          </NavLink>
        </li>
        <li>
          <NavLink to={`/adminpanel/${user}/orders`}>
            <i className="zmdi zmdi-calendar" /> Orders
          </NavLink>
        </li>
        <li>
          <NavLink to={`/adminpanel/${user}/users`}>
            <i className="zmdi zmdi-info-outline" /> Users
          </NavLink>
        </li>
        <li>
          <NavLink to={`/adminpanel/${user}/reviews`}>
            <i className="zmdi zmdi-settings" /> Reviews
          </NavLink>
        </li>
        <li>
          <NavLink to={`/adminpanel/${user}/transactions`}>
            <i className="zmdi zmdi-comment-more" /> Transactions
          </NavLink>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default AdminMenu;
