import React from "react";
import Navbar from "../components/Navbar";
import CurrentWeatherAndForecast from "../components/CurrentWeatherAndForecast";
import DailyForecast from "../api-fetches/dailyForecast";
const Home = () => {
  return (
    <>
      <CurrentWeatherAndForecast />
      <DailyForecast />
      <Navbar />
    </>
  );
};

export default Home;
