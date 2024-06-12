import React from "react";
import { useAuth } from "../../components/context/AuthContext";

const MyDashboard = () => {
  const [auth] = useAuth();

  return (
    <div>
      <h1>{auth?.user?.name}</h1>
      <h2>{auth?.user?.email}</h2>
      <h3>{auth?.user?.phone}</h3>
    </div>
  );
};

export default MyDashboard;
