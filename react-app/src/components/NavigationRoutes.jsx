import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getToken } from "../utilities/tokens";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import Profile from "../pages/Profile";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route
        path="/Profile"
        element={getToken() ? <Profile /> : <Navigate to="/LogIn" />}
      />
    </Routes>
  );
};

export default NavigationRoutes;
