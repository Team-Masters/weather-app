import { Outlet, Link } from "react-router-dom";
import { FaHome, FaMapMarker } from "react-icons/fa";
import "../App.css";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="list">
          <li>
            <Link to="/">
              <FaHome /> Home{" "}
            </Link>
          </li>
          <li>
            <Link to="/Profile">
              <FaMapMarker /> My Profile{" "}
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
