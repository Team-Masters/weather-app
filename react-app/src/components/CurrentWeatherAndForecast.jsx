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

  // BACKGROUND SEARCH

  let bgSearch = currentWeather?.weatherResponse.weather[0].main;
  console.log("RICK SEARCH", bgSearch);

  switch (bgSearch) {
    case "Snow":
      document.getElementById("rickBody").style.backgroundImage =
        "url('https://i.gifer.com/55Cz.gif')";
      break;
    case "Clouds":
      document.getElementById("rickBody").style.backgroundImage =
        "url('https://i.gifer.com/srG.gif')";
      break;
    case "Fog":
      document.getElementById("rickBody").style.backgroundImage =
        "url('https://i.gifer.com/BQRD.gif')";
      break;
    case "Mist":
      document.getElementById("rickBody").style.backgroundImage =
        "url('https://i.gifer.com/BQRD.gif')";
      break;
    case "Rain":
      document.getElementById("rickBody").style.backgroundImage =
        "url('https://i.gifer.com/4lsB.gif')";
      break;
    case "Clear":
      document.getElementById("rickBody").style.backgroundImage =
        "url('https://i.gifer.com/XFbw.gif')";
      break;
    case "Thunderstorm":
      document.getElementById("rickBody").style.backgroundImage =
        "url('https://i.gifer.com/7TDQ.gif')";
      break;
    default:
      document.getElementById("rickBody").style.backgroundImage =
        "url('https://i.gifer.com/XFbw.gif')";
      break;
  }

  // END OF BACKGROUND

  console.log("forecast: ", forecast);
  return (
    <>
      <div className="search-container">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <GetWeather searchedData={currentWeather} />
      <div className="forecast">{forecast && <Forecast data={forecast} />}</div>
    </>
  );
};

export default CurrentWeatherAndForecast;
