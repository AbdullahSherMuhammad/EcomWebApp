import React from "react";
import Layout from "../components/Layout/Layout";

const Register = () => {
  return (
    <Layout
      title="Register - TheStore"
      description="Register New User to THESTORE Website"
      keywords="Register, New, newuser, website, Thestore, ecommerce, store, estore"
    >
      <div className="container d-flex align-items-center justify-content-center">
        <form className="formdiv row mt-5 pt-3 pb-3 pl-5 pr-5 mb-5">
          <h1 className="col-md-12 d-flex justify-content-center mb-3 formheading">
            Register
          </h1>
          <div className="d-flex justify-content-center">
            <input
              type="text"
              placeholder="First Name"
              id="fName"
              className="col-md-5"
            />
            <input
              type="text"
              placeholder="Last Name"
              id="lName"
              className="col-md-5 ml-custom"
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            id="email"
            className="col-md-11"
            style={{ marginLeft: "3vh" }}
          />

          <input
            type="number"
            placeholder="Phone Number"
            id="phone"
            className="col-md-11"
            style={{ marginLeft: "3vh" }}
          />
          <div className="d-flex justify-content-center">
            <input
              type="password"
              placeholder="Enter Password"
              id="password1"
              className="col-md-5"
            />
            <input
              type="password"
              placeholder="Re-enter Password"
              id="password2"
              className="col-md-5 ml-custom"
            />
          </div>
          <input
            type="Address"
            placeholder="Address"
            id="address"
            className="col-md-11"
            style={{ marginLeft: "3vh" }}
          />
          <button className="btn btn-primary btn-lg signupcenter">
            <span className="" />
            Sign Up
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
