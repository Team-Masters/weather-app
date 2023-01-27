import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getToken } from "../utilities/tokens";
import SignUp from "../pages/auth/SignUp";
import LogIn from "../pages/auth/LogIn";
import Reset from "../pages/auth/Reset";
import Profile from "../pages/Profile";
import Success from "../pages/auth/Success";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Reset" element={<Reset />} />
      <Route path="/Success" element={<Success />} />

      <Route
        path="/Profile"
        element={getToken() ? <Profile /> : <Navigate to="/LogIn" />}
      />
    </Routes>
  );
};

export default NavigationRoutes;
