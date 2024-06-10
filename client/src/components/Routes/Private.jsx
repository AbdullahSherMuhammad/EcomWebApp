import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Outlet } from "react-router";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  const ServerAPI = "http://localhost:8080/api/v1/auth";
  const [ok, setOk] = useState(false);

  // eslint-disable-next-line
  const [auth] = useAuth();

  useEffect(() => {
    const authcheck = async () => {
      const res = await axios.get(`${ServerAPI}/user-auth`, {
        headers: {
          Authorization: auth?.token,
        },
      });
      res.data.ok ? setOk(true) : setOk(false);
    };
    auth?.token && authcheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
}
