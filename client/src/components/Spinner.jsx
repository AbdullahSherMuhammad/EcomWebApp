import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";

const Spinner = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate("/login", {
        state: location.pathname,
      });

    return () => clearInterval(interval);
  }, [count, navigate, location]);

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div>
        <h1>Redirecting to login page in {count} seconds</h1>
      </div>
    </div>
  );
};

export default Spinner;
