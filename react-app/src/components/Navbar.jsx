import React from "react";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  return (
    <nav className="navBar">
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        <div className="log-sign-in-container">
          <div className="avatar-container">
            <img
              src="https://cdn-icons-png.flaticon.com/256/4825/4825112.png"
              alt="avatar"
              className="avatar"
            />
          </div>
          <div className="log-sign-in">
            <div>
              <h4>Log in</h4>
            </div>
            <div>
              {" "}
              <h4>Sign in</h4>
            </div>
          </div>
        </div>
      </ul>
      <button onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose style={{ color: "black", width: "20px", height: "20px" }} />
        ) : (
          <FiMenu style={{ color: "black", width: "20px", height: "20px" }} />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
