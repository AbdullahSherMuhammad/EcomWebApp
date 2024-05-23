import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../components/context/AuthContext";

const HomePage = () => {
  const [auth] = useAuth();
  return (
    <Layout
      title="TheStore"
      description="Highlights and newfeeds of THESTORE"
      keywords="Newsfeeds, Highlights, TheStore, Products, New Products, Homepage, store"
    >
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default HomePage;
