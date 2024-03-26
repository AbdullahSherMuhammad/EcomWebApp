import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Map from "../Images/Map.jpg";

const Contact = () => {
  return (
    <Layout
      title="Contact - TheStore"
      description="Contact Information about TheStore website"
      keywords="Information, Thestore, Contact, email, phone, address"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-4">
            <div className="error-template">
              <img src={Map} alt="Lorem Ipsum Image" width="100%" />
            </div>
          </div>
          <div className="col-md-6 mt-4 pt-2">
            <div className="error-template">
              <h1 className="mb-3 pb-2 pt-3">Contact Us!</h1>
              <p className="Descpriton text-center">
                <span
                  style={{
                    fontFamily: "popping",
                    textDecoration: "underline",
                    fontSize: "4vh",
                  }}
                >
                  Address
                </span>{" "}
                <br />
                Keas 69 Str. 15234, Chalandri Athens,
                <br />
                Greece
                <br /> <br />
                <span
                  style={{
                    fontFamily: "popping",
                    textDecoration: "underline",
                    fontSize: "4vh",
                  }}
                >
                  Contact Numbers{" "}
                </span>{" "}
                <br /> +30-2106019311 (landline) <br />
                +30-6977664062 (mobile phone)
                <br />
                +30-2106398905 (fax)
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-lg-center pb-4">
          <div className="col-12 col-lg-9">
            <div className="bg-white border rounded shadow-sm overflow-hidden">
              <h2 className="mt-5 mb-3 display-5 text-center">
                Send us Your Queries!
              </h2>
              <p className="text-secondary text-center ml-4 mr-4">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </p>
              <form action="#!">
                <div className="row gy-4 gy-xl-5 p-xl-5">
                  <div className="col-12">
                    <label htmlFor="fullname" className="form-label">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullname"
                      name="fullname"
                      defaultValue
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-envelope"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        defaultValue
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-telephone"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg>
                      </span>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        defaultValue
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows={3}
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12">
                    <div className="d-grid mt-3">
                      <button className="btn btn-primary btn-lg" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
