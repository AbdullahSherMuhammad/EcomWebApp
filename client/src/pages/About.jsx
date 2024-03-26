import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import AboutLorem from "../Images/AboutLorem.jpg";

const About = () => {
  return (
    <Layout
      title="About us - TheStore"
      description="Brief Information about TheStore business"
      keywords="Information, Thestore, about, knowthebuiness"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-4">
            <div className="error-template">
              <img src={AboutLorem} alt="Lorem Ipsum Image" />
            </div>
          </div>
          <div className="col-md-4 mt-none pt-none">
            <div className="error-template">
              <h1>About Us!</h1>
              <p className="Descpriton">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </p>
              <div className="error-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  <span className="glyphicon glyphicon-home" />
                  Book an Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
