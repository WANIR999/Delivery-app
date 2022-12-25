import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Logout from "./logout";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [role, setRole] = useState("");
  const data = async () => {
    const user = await axios.post("http://localhost:8080/api/auth/decrypt", {
      token: localStorage.getItem("token"),
    });
    setRole(user.data.role);
  };
  useEffect(() => {
    data();
  }, []);

  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const homeurl = "/auth/" + role + "/home";
  const reseturl = "/auth/" + role + "/resetpassword";
  return (
    <div className="auth">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link to={homeurl} className="btn navbar-brand hover">
            marhaba
          </Link>
          <div className="w-25 d-flex justify-content-around align-items-center">
            <Link to={reseturl} className="btn text-white hover">
              Reset password
            </Link>
            <Link to="/auth/cart">
              <div className="nav-bag">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  className="bi bi-handbag-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                </svg>
                <span className="bag-quantity">
                  <span>{cartTotalQuantity}</span>
                </span>
              </div>
            </Link>
            <Logout />
          </div>
        </div>
      </nav>
      <div className="d-flex justify-content-start">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
