import React from "react";
import Navbar from "../components/Navbar";
import CurrentWeatherAndForecast from "../components/CurrentWeatherAndForecast";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <CurrentWeatherAndForecast />
        <Navbar />
      </div>
    </>
  );
};

export default Home;
