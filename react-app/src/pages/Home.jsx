import React from "react";
import Navbar from "../components/Navbar";
import CurrentAndForecast from "../components/CurrentAndForecast";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <CurrentAndForecast />
        <Navbar />
      </div>
    </>
  );
};

export default Home;
