import React from "react";
import Navbar from "../components/Navbar";
import CurrentWeatherAndForecast from "../components/CurrentWeatherAndForecast";
const Home = () => {
  return (
    <>
      <CurrentWeatherAndForecast />
      <Navbar />
    </>
  );
};

export default Home;
