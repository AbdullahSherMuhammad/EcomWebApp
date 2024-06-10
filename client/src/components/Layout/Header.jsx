import React from "react";
import { NavLink, Link } from "react-router-dom";
import { TfiShoppingCart } from "react-icons/tfi";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const role = auth.user?.role;

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    setTimeout(() => {
      toast.success("Logged Out Sucessfully");
    }, 500);
  };
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <Link
          to="/Home"
          className="navbar-brand"
          style={{ boxShadow: "8px 6px 7px -4px #a39306" }}
        >
          TheStore
          <TfiShoppingCart
            size="3vh"
            style={{
              color: "#a39306 ",
              marginBottom: "3px",
              marginLeft: "3px",
              marginRight: "3px",
            }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"> </span>
        </button>

        <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/categroies" className="nav-link">
                Catgories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>{" "}
                Cart(0)
              </NavLink>
            </li>
            <li className="nav-item">
              {!auth.user ? (
                <>
                  {" "}
                  <NavLink to="/login" className="nav-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    </svg>{" "}
                    login
                  </NavLink>
                </>
              ) : (
                <>
                  <div className="nav-link">
                    <span
                      className=" dropdown-toggle"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.name}
                    </span>
                    <ol
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <NavLink to="/profile" className="nav-link">
                          Profile
                        </NavLink>
                      </li>
                      {role === 1 && (
                        <li>
                          <NavLink to="/dashboard" className="nav-link">
                            Admin Panel
                          </NavLink>
                        </li>
                      )}
                      <li>
                        <NavLink
                          to="/login"
                          className="nav-link"
                          onClick={handleLogout}
                        >
                          logout{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-box-arrow-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                            />
                          </svg>
                        </NavLink>
                      </li>
                    </ol>
                  </div>
                </>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
