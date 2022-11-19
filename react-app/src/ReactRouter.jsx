import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
