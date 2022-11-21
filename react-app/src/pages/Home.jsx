import React from "react";
import Navbar from "../components/Navbar";
import { GetWeather } from "../api-fetches/GetWeather";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Navbar />
        <div>{GetWeather()}</div>
      </div>
    </>
  );
};

export default Home;
