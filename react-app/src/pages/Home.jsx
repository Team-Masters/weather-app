import React from "react";
import Navbar from "../components/Navbar";
import WeatherCard from "../components/WeatherCard";
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
      <WeatherCard data={""} searchData={""} />
      <div>
        <Forecast data={""} />
      </div>
    </>
  );
};

export default Home;
