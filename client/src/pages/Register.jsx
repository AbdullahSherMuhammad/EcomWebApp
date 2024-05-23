import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import Axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const newUser = {
    fName: "",
    lName: "",
    email: "",
    phone: "",
    password: "",
    password0: "",
    address: "",
    securityQuestion: "",
    answer: "",
  };

  const [addUser, setaddUser] = useState(newUser);
  const ServerAPI = "http://localhost:8080/api/v1/auth";
  async function HandleClick(e) {
    e.preventDefault();

    try {
      if (addUser.password !== addUser.password0) {
        toast.error("Password Doesn't Match");
        return;
      }
      if (addUser.securityQuestion === "" || undefined) {
        toast.error("Please Select a security question");
        return;
      }
      const res = await Axios.post(`${ServerAPI}/register`, { addUser });

      if (res.data.success) {
        toast.success("User Created Sucessfuly");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data.message || "Internal Server Error");
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
                value={addUser.fName}
                placeholder="First Name"
                id="fName"
                className="col-md-5"
                required
                onChange={(e) =>
                  setaddUser({ ...addUser, fName: e.target.value })
                }
              />
              <input
                type="text"
                value={addUser.lName}
                placeholder="Last Name"
                id="lName"
                className="col-md-5 ml-custom"
                required
                onChange={(e) =>
                  setaddUser({ ...addUser, lName: e.target.value })
                }
              />
            </div>

            <input
              type="email"
              value={addUser.email}
              placeholder="Email Address"
              id="email"
              className="col-md-11"
              style={{ marginLeft: "3vh" }}
              required
              onChange={(e) =>
                setaddUser({ ...addUser, email: e.target.value })
              }
            />

            <input
              type="number"
              value={addUser.phone}
              placeholder="Phone Number"
              id="phone"
              className="col-md-11"
              style={{ marginLeft: "3vh" }}
              required
              onChange={(e) =>
                setaddUser({ ...addUser, phone: e.target.value })
              }
            />
            <div className="d-flex justify-content-center">
              <input
                type="password"
                value={addUser.password}
                placeholder="Enter Password"
                id="password1"
                className="col-md-5"
                required
                onChange={(e) =>
                  setaddUser({ ...addUser, password: e.target.value })
                }
              />
              <input
                type="password"
                value={addUser.password0}
                placeholder="Re-enter Password"
                id="password2"
                className="col-md-5 ml-custom"
                required
                onChange={(e) =>
                  setaddUser({ ...addUser, password0: e.target.value })
                }
              />
            </div>
            <label
              className="col-md-11"
              for="secuirtyQuestion"
              style={{
                fontSize: "3.5vh",
                color: "wheat",
                fontWeight: "bolder",
                letterSpacing: "0.5vh",
                lineHeight: "2vh",
                textShadow: "#a39306",
                marginLeft: "14vh",
                marginBottom: "4vh",
              }}
            >
              Select your question
            </label>

            <select
              className="col-md-11"
              style={{ marginLeft: "3vh" }}
              required
              id="secuirtyQuestion"
              name="secuirtyQuestion"
              onChange={(e) =>
                setaddUser({
                  ...addUser,
                  securityQuestion: e.target.value,
                })
              }
            >
              <option required value="undefined">
                Select a secuirty Question
              </option>
              <option value="birthPlace">What is your birth place?</option>
              <option value="petName">What is your first pet name?</option>
              <option value="childhoodFriendsName">
                What was your childhood bestfriend's name?
              </option>
              <option value="parentsMeetlocation">
                Where did your parents meet?
              </option>
            </select>
            <input
              type="text"
              value={addUser.answer}
              placeholder="Enter your Answer"
              id="answer"
              className="col-md-11"
              style={{ marginLeft: "3vh" }}
              required
              onChange={(e) =>
                setaddUser({ ...addUser, answer: e.target.value })
              }
            />
            <input
              type="Address"
              value={addUser.address}
              placeholder="Address"
              id="address"
              className="col-md-11"
              style={{ marginLeft: "3vh" }}
              required
              onChange={(e) =>
                setaddUser({ ...addUser, address: e.target.value })
              }
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
