import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../utilities/AuthContext";
import { removeToken } from "../utilities/tokens";
import { Button } from "antd";
import { FcGoogle } from "react-icons/fc";

const AppHeader = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("LogIn", { replace: true });
    removeToken();
    window.location.reload();
  };

  return (
    <div className="signup-login-buttons">
      {user ? (
        <>
          <Button className="log-in-button" href="/Profile" type="primary">
            <FcGoogle /> Calendar
          </Button>
          <Button
            className="auth_button_logout"
            type="primary"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          <Link to="/LogIn">
            <Button className="log-in-button">Log in</Button>
          </Link>
          <Link to="/SignUp">
            <Button type="primary">Sign up</Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default AppHeader;
