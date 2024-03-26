import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout
      title="404 - TheStore"
      description="404 Error - Requested Page is not found"
      keywords="404, Error, NotFound, PageNotFound, Wrong, Unable"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5 pt-5">
            <div className="error-template">
              <h1>404</h1>
              <h2>Oops! Page Not Found</h2>
              <div className="error-details">
                Sorry, an error has occured, Requested page not found!
              </div>
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

export default PageNotFound;
