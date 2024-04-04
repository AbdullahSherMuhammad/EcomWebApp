import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../components/context/AuthContext";

const Login = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const newUser = {
    email: "",
    password: "",
  };

  const [loginUser, setloginUser] = useState(newUser);
  const ServerAPI = "http://localhost:8080/api/v1/auth";
  async function HandleClick(e) {
    e.preventDefault();

    try {
      const res = await Axios.post(`${ServerAPI}/login`, { loginUser });

      if (res.data.success) {
        toast.success("Login Successfully");
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        setTimeout(() => {
          navigate(location.state || "/home");
        }, 500);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
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
              value={loginUser.email}
              placeholder="Email Address"
              id="email"
              className="col-md-10"
              onChange={(e) =>
                setloginUser({ ...loginUser, email: e.target.value })
              }
            />

            <input
              type="password"
              value={loginUser.password}
              placeholder="Enter Password"
              id="password1"
              className="col-md-10"
              onChange={(e) =>
                setloginUser({ ...loginUser, password: e.target.value })
              }
            />
            <button className="btn btn-primary btn-lg" onClick={HandleClick}>
              <span className="" />
              Sign In
            </button>
            <div className=" d-flex flex-column align-items-center col-md-12 mt-4">
              <p style={{ color: "antiquewhite" }}>
                Forgot Password?{" "}
                <Link to="/forgot-password">
                  <span
                    className="
              alterButtons"
                  >
                    Click here to recover!
                  </span>
                </Link>
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

export default Login;
