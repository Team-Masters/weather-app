import React, { useState } from "react";
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

  let currentTime = new Date().getHours();

  let bgSearch = currentWeather?.weatherResponse.weather[0].main;
  console.log("RICK SEARCH", bgSearch);

  // bgCurrent = "Clear";
  // currentTime = 14;

  switch (bgSearch) {
    case "Snow":
      if (document.body) {
        if (currentTime >= 6 && currentTime < 18) {
          document.body.style.backgroundImage =
            "url('https://i.gifer.com/67Z.gif')";
        } else {
          document.body.style.backgroundImage =
            "url('https://i.gifer.com/YY5R.gif')";
        }
      }

      break;

    case "Clouds":
      if (document.body) {
        if (currentTime >= 6 && currentTime < 18) {
          document.body.style.backgroundImage =
            "url('https://i.gifer.com/srG.gif')";
        } else {
          document.body.style.backgroundImage =
            "url('https://i.gifer.com/5plk.gif')";
        }
      }

      break;

    case "Fog":
      if (document.body) {
        if (currentTime >= 6 && currentTime < 18) {
          document.body.style.backgroundImage =
            "url('https://i.gifer.com/BQRD.gif')";
        } else {
          document.body.style.backgroundImage =
            "url('https://i.gifer.com/yMJ.gif')";
        }
      }
      break;
    case "Mist":
      if (document.body) {
        if (currentTime >= 6 && currentTime < 18) {
          document.body.style.backgroundImage =
            "url('https://i.gifer.com/BQRD.gif')";
        } else {
          document.body.style.backgroundImage =
            "url('https://i.gifer.com/yMJ.gif')";
        }
      }
      break;
    case "Rain":
      if (document.body) {
        if (currentTime >= 6 && currentTime < 18) {
          document.body.style.backgroundImage =
            "url('https://i.gifer.com/V9O.gif')";
        } else {
          document.body.style.backgroundImage =
            "url('https://i.gifer.com/FRRX.gif')";
        }
      }
      break;
    case "Clear":
      if (document.body) {
        if (currentTime >= 6 && currentTime < 18) {
          document.body.style.backgroundImage =
            "url('https://i.gifer.com/XFbw.gif')";
        } else {
          document.body.style.backgroundImage =
            "url('https://i.gifer.com/3lFW.gif')";
        }
      }
      break;
    case "Thunderstorm":
      if (document.body) {
        if (currentTime >= 6 && currentTime < 18) {
          document.body.style.backgroundImage =
            "url('https://i.gifer.com/E1gC.gif')";
        } else {
          document.body.style.backgroundImage =
            "url('https://i.gifer.com/Pld.gif')";
        }
      }
      break;
    case "test":
      document.getElementById("rickBody").style.backgroundImage =
        "url('https://i.gifer.com/Lx0q.gif')";
      break;
    default:
      if (document.body) {
        if (currentTime >= 6 && currentTime < 18) {
          document.body.style.backgroundImage =
            "url('https://i.gifer.com/XFbw.gif')";
        } else {
          document.body.style.backgroundImage =
            "url('https://i.gifer.com/3lFW.gif')";
        }
      }
      break;
  }

  // END OF THE BACKGROUND

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
