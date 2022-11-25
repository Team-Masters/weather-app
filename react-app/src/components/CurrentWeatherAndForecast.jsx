import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { GetWeather } from "../api-fetches/GetWeather";
import Search from "../components/search";
import {
  WEATHER_API_URL,
  WEATHER_API_KEY,
} from "../api-fetches/auto-complete-service";
import Forecast from "../components/Forecast";

const CurrentWeatherAndForecast = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("current weather: ", currentWeather);
  console.log("forecast: ", forecast);
  return (
    <>
      <div className="home-container">
        <div className="search-container">
          <Search onSearchChange={handleOnSearchChange} />
        </div>
        <GetWeather searchedData={currentWeather} />
        <div className="forecast">
          {forecast && <Forecast data={forecast} />}
        </div>
      </div>
      <div className="navigation-bar">
        <Navbar />
      </div>
    </>
  );
};

export default CurrentWeatherAndForecast;
