import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <Layout
      title="401 - TheStore"
      description="401 Error - Unathorized Access"
      keywords="401, Error, accessnotgranted, usernotfound, notadmin, unauthorizedaccess"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5 pt-5">
            <div className="error-template">
              <h1>401</h1>
              <h2>Unathorized</h2>
              <div className="error-details">Sorry, You are not an Admin!</div>
              <div className="error-actions">
                <Link to="/" className="btn btn-primary btn-lg">
                  <span className="glyphicon glyphicon-home" />
                  Take Me Home
                </Link>
                <Link to="/contact" className="btn btn-default btn-lg">
                  <span className="glyphicon glyphicon-envelope" /> Contact
                  Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Unauthorized;
