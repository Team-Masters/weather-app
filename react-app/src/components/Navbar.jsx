import React from "react";
import { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import Appheader from "../utilities/Appheader";
import NavigationRoutes from "./NavigationRoutes";
import { Layout } from "antd";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { Header } = Layout;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const returnHomePage = () => {
    if (navbarOpen) {
      navigate("/", { replace: true });
    } else {
    }
  };

  return (
    <nav className="navBar">
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        <div>
          <button
            onClick={() => {
              handleToggle();
              returnHomePage();
            }}
            className="hamburger-icon"
          >
            {navbarOpen ? (
              <BiLeftArrowAlt
                style={{ color: "black", width: "20px", height: "20px" }}
              />
            ) : (
              <FiMenu
                style={{ color: "black", width: "20px", height: "20px" }}
              />
            )}
          </button>
        </div>
        <div className="login-signup-container">
          <div className="avatar-container">
            <img
              src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
              alt="avatar"
              className="avatar"
            />
          </div>
          <div className="forms-container">
            <Layout style={{ backgroundColor: "transparent" }}>
              <Header className="form-buttons">
                <Appheader />
              </Header>
              <NavigationRoutes />
            </Layout>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
