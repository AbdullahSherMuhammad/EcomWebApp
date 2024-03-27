import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import dotenv from "dotenv";

const Register = () => {
  // dotenv.config();
  const URI = process.env.REACT_APP_API;
  const newUser = {
    fName: "",
    lName: "",
    email: "",
    phone: "",
    password: "",
    password0: "",
    address: "",
  };

  const [user, setUser] = useState(newUser);

  async function HandleClick(e) {
    e.preventDefault();
    console.log("Clicked");
    try {
      if (user.password !== user.password0) {
        toast.error("Password Doesn't Match");
        return;
      }
      const res = await axios.post(`/register`, {
        user,
      });
    } catch (error) {
      toast.error("Something went Wrong");
    }
  }

  return (
    <Layout
      title="Register - TheStore"
      description="Register New User to THESTORE Website"
      keywords="Register, New, newuser, website, Thestore, ecommerce, store, estore"
    >
      <div className="bgimg">
        <div className="container d-flex align-items-center justify-content-center">
          <form className="formdiv row mt-5 pt-3 pb-3 pl-5 pr-5 mb-5 glass">
            <h1 className="col-md-12 d-flex justify-content-center mb-3 formheading">
              Register
            </h1>
            <div className="d-flex justify-content-center">
              <input
                type="text"
                value={user.fName}
                placeholder="First Name"
                id="fName"
                className="col-md-5"
                required
                onChange={(e) => setUser({ ...user, fName: e.target.value })}
              />
              <input
                type="text"
                value={user.lName}
                placeholder="Last Name"
                id="lName"
                className="col-md-5 ml-custom"
                required
                onChange={(e) => setUser({ ...user, lName: e.target.value })}
              />
            </div>

            <input
              type="email"
              value={user.email}
              placeholder="Email Address"
              id="email"
              className="col-md-11"
              style={{ marginLeft: "3vh" }}
              required
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />

            <input
              type="number"
              value={user.phone}
              placeholder="Phone Number"
              id="phone"
              className="col-md-11"
              style={{ marginLeft: "3vh" }}
              required
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
            <div className="d-flex justify-content-center">
              <input
                type="password"
                value={user.password}
                placeholder="Enter Password"
                id="password1"
                className="col-md-5"
                required
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <input
                type="password"
                value={user.password0}
                placeholder="Re-enter Password"
                id="password2"
                className="col-md-5 ml-custom"
                required
                onChange={(e) =>
                  setUser({ ...user, password0: e.target.value })
                }
              />
            </div>
            <input
              type="Address"
              value={user.address}
              placeholder="Address"
              id="address"
              className="col-md-11"
              style={{ marginLeft: "3vh" }}
              required
              onChange={(e) => setUser({ ...user, address: e.target.value })}
            />
            <button
              className="btn btn-primary btn-lg signupcenter"
              onClick={HandleClick}
            >
              <span className="" />
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
