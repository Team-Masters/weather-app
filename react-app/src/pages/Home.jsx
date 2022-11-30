import React from "react";
import Navbar from "../components/Navbar";
import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";
import Search from "../components/Search";
import { useWeatherData } from "../api-fetches/getWeatherData";

const Home = () => {
  return (
    <>
      <div className="navigation-bar">
        <Navbar />
      </div>
      <div className="search-container">
        <Search onSearchChange={useWeatherData} />
      </div>
      <CurrentWeather />
      <div className="forecast">{false && <Forecast data={""} />}</div>
    </>
  );
};

export default Home;
