import React, { useState } from "react";
import Layout from "../components/Layout/Layout.jsx";
import { Link } from "react-router-dom";
import Axios from "axios";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const ServerAPI = "http://localhost:8080/api/v1/auth";

  const [CheckSQ, setCheckSQ] = useState({
    email: "",
    securityQuestion: "",
    answer: "",
  });

  const [userRecover, setUserRecover] = useState({
    password: "",
    password0: "",
    conditionRender: false,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (!CheckSQ.email || !CheckSQ.securityQuestion || !CheckSQ.answer) {
      return toast.error("Enter Email, Security Question and Answer");
    }

    const res = await Axios.get(`${ServerAPI}/forgot-password`, {
      CheckSQ,
    });

    // const data = res.data;
    // toast.success(data);

    setUserRecover({ ...userRecover, conditionRender: true });
  }
  return (
    <Layout
      title="Forgot Password - TheStore"
      description="If the user has forgotten the password of his/her account then they can recover it from here"
      keywords="forget password, password lost, forget, forgot, forgotten password, password recover, recover, recover account, get back account"
    >
      <div className="bgimg">
        <div className="container d-flex align-items-center justify-content-center ">
          <form className="formdiv row mt-5 pt-3 pb-3 pl-2 pr-2 mb-5 d-flex justify-content-center glass">
            {!userRecover.conditionRender ? (
              <>
                <h1 className="col-md-12 d-flex justify-content-center mb-3 formheading">
                  Forgot Password?
                </h1>

                <input
                  type="email"
                  value={userRecover.email}
                  placeholder="Email Address"
                  id="email"
                  className="col-md-10"
                  onChange={(e) =>
                    setCheckSQ({ ...CheckSQ, email: e.target.value })
                  }
                />
                <label
                  className=""
                  for="secuirtyQuestion"
                  style={{
                    fontSize: "3.5vh",
                    color: "wheat",
                    fontWeight: "bolder",
                    letterSpacing: "0.5vh",
                    lineHeight: "2vh",
                    textShadow: "#a39306",
                  }}
                >
                  Select your question
                </label>

                <select
                  className="col-md-10"
                  value={userRecover.securityQuestion}
                  id="secuirtyQuestion"
                  name="secuirtyQuestion"
                  onChange={(e) =>
                    setCheckSQ({
                      ...CheckSQ,
                      securityQuestion: e.target.value,
                    })
                  }
                >
                  <option value=" " style={{ color: "Red" }}>
                    Choose a Security Quesion
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
                  value={userRecover.answer}
                  placeholder="Enter your Answer"
                  id="answer"
                  className="col-md-10"
                  onChange={(e) =>
                    setCheckSQ({ ...CheckSQ, answer: e.target.value })
                  }
                />
                <button
                  className="btn btn-primary btn-lg"
                  onClick={handleSubmit}
                >
                  <span className="" />
                  Submit
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
                </div>
              </>
            ) : (
              <>
                <h1 className="col-md-12 d-flex justify-content-center mb-3 formheading">
                  Setup New Password
                </h1>{" "}
                <input
                  type="password"
                  value={userRecover.password}
                  placeholder="Enter New Password"
                  id="password"
                  className="col-md-10"
                  onChange={(e) =>
                    setUserRecover({ ...userRecover, password: e.target.value })
                  }
                />
                <input
                  type="password0"
                  value={userRecover.password0}
                  placeholder="Re-enter New Password"
                  id="password0"
                  className="col-md-10"
                  onChange={(e) =>
                    setUserRecover({
                      ...userRecover,
                      password0: e.target.value,
                    })
                  }
                />
                <button
                  className="btn btn-primary btn-lg"
                  onClick={(e) =>
                    setUserRecover({ ...userRecover, conditionRender: true })
                  }
                >
                  <span className="" />
                  Save Changes
                </button>
                <div className=" d-flex flex-column align-items-center col-md-12 mt-4">
                  <p style={{ color: "antiquewhite" }}>
                    Don't want to change?{" "}
                    <Link to="/login">
                      <span
                        className="
              alterButtons"
                      >
                        Login here!
                      </span>
                    </Link>
                  </p>
                  <p style={{ color: "antiquewhite" }}>
                    Don't have an account?{" "}
                    <Link to="/register">
                      <span
                        className="
              alterButtons"
                      >
                        Register Now
                      </span>
                    </Link>
                  </p>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
