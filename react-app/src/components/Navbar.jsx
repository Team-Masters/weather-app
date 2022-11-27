import React from "react";
import { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import Appheader from "../utilities/Appheader";
import NavigationRoutes from "./NavigationRoutes";
import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import ProfilePicture from "../components/ProfilePicture";

const Navbar = ({ setReveal }) => {
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
        <button
          onClick={() => {
            handleToggle();
            returnHomePage();
          }}
          className="hamburger-icon"
        >
          {navbarOpen ? (
            <BiLeftArrowAlt style={{ width: "20px", height: "20px" }} />
          ) : (
            <FiMenu style={{ width: "20px", height: "20px" }} />
          )}
        </button>
        <div className="login-signup-container">
          <div className="avatar-container">
            <ProfilePicture />
          </div>
          <div className="forms-container">
            <Layout style={{ backgroundColor: "transparent" }}>
              <Header className="form-buttons">
                <Appheader setReveal={setReveal} />
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
