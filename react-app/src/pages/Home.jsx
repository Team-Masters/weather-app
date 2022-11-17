import React from "react";
import Navbar from "../components/Navbar";
import { GetWeather } from "../api-fetches/GetWeather";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div>
          <Navbar />
        </div>
        <div>{GetWeather()}</div>
      </div>
    </>
  );
};

export default Home;
