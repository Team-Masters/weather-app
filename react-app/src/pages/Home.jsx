import React from "react";
import Navbar from "../components/Navbar";
import CurrentWeatherAndForecast from "../components/CurrentWeatherAndForecast";
const Home = () => {
  return (
    <>
      <Navbar />
      <CurrentWeatherAndForecast />
    </>
  );
};

export default Home;
