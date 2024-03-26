import React from "react";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  const currentyear = new Date().getFullYear();
  return (
    <div className="footer">
      {" "}
      <h1 className="Copyright">
        <br />
        All Rights reserved{" "}
        <sup>
          <span style={{ fontSize: "80%" }}>&copy; </span>
        </sup>
        {currentyear}
      </h1>
      <ul className="FooterUL">
        <li className="nav-item">
          <NavLink to="/About" className="footerMenu-item nav-link">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Contact" className="footerMenu-item nav-link">
            Contact Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Policy" className="footerMenu-item nav-link">
            Policy
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
