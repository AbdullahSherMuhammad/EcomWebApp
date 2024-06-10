import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Outlet } from "react-router";
import axios from "axios";
import Unauthorized from "../../pages/Unauthorized";

export default function AdminRoute() {
  const ServerAPI = "http://localhost:8080/api/v1/auth";
  const [ok, setOk] = useState(false);

  // eslint-disable-next-line
  const [auth] = useAuth();

  try {
    useEffect(() => {
      const authcheck = async () => {
        const res = await axios.get(`${ServerAPI}/admin-auth`, {
          headers: {
            Authorization: auth?.token,
          },
        });
        res.data.ok ? setOk(true) : setOk(false);
      };
      auth?.token && authcheck();
    }, [auth?.token]);
  } catch (error) {
    console.log(error);
  }

  return ok ? <Outlet /> : <Unauthorized />;
}
