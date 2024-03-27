import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <Layout
      title="Login - TheStore"
      description="Login User Page of TheStore ecommerece Webapp"
      keywords="Login, existing user, getin, signin, alreadyregistered, Thestore, inside, loggedin"
    >
      <div className="bgimg">
        <div className="container d-flex align-items-center justify-content-center ">
          <form className="formdiv row mt-5 pt-3 pb-3 pl-2 pr-2 mb-5 d-flex justify-content-center glass">
            <h1 className="col-md-12 d-flex justify-content-center mb-3 formheading">
              Login
            </h1>

            <input
              type="email"
              placeholder="Email Address"
              id="email"
              className="col-md-10"
            />

            <input
              type="password"
              placeholder="Enter Password"
              id="password1"
              className="col-md-10"
            />
            <button className="btn btn-primary btn-lg">
              <span className="" />
              Sign Up
            </button>
            <div className=" d-flex flex-column align-items-center col-md-12 mt-4">
              <p style={{ color: "antiquewhite" }}>
                Forgot Password?{" "}
                <span
                  className="
              alterButtons"
                >
                  Click here to recover!
                </span>
              </p>
              <p style={{ color: "antiquewhite" }}>
                Dont have an account? <br />
                <Link to="/register">
                  <span className="alterButtons btn btn-primary btn-lg">
                    Register Now
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default login;
