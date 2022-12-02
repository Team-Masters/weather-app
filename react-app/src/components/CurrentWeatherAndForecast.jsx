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
            "url('https://res.cloudinary.com/dembmmjyq/image/upload/v1669983673/Weather%20backgrounds/snow-day_tdgtzy.gif')";
        } else {
          document.body.style.backgroundImage =
            "url('https://res.cloudinary.com/dembmmjyq/image/upload/v1669975411/Weather%20backgrounds/snow-night_f7fd4h.gif')";
        }
      }

      break;

    case "Clouds":
      if (document.body) {
        if (currentTime >= 6 && currentTime < 18) {
          document.body.style.backgroundImage =
            "url('https://res.cloudinary.com/dembmmjyq/image/upload/v1669981796/Weather%20backgrounds/cloudy-day_v3d9ys.gif')";
        } else {
          document.body.style.backgroundImage =
            "url('https://res.cloudinary.com/dembmmjyq/image/upload/v1669971850/Weather%20backgrounds/cloudy-night_e8mpfp.gif')";
        }
      }

      break;

    case "Fog":
      if (document.body) {
        if (currentTime >= 6 && currentTime < 18) {
          document.body.style.backgroundImage =
            "url('https://res.cloudinary.com/dembmmjyq/image/upload/v1669977010/Weather%20backgrounds/day-fog_xloyg2.gif')";
        } else {
          document.body.style.backgroundImage =
            "url('https://res.cloudinary.com/dembmmjyq/image/upload/v1669977001/Weather%20backgrounds/night-fog_zrj32a.gif')";
        }
      }
      break;
    case "Mist":
      if (document.body) {
        if (currentTime >= 6 && currentTime < 18) {
          document.body.style.backgroundImage =
            "url('https://res.cloudinary.com/dembmmjyq/image/upload/v1669984688/Weather%20backgrounds/mist-day_jqbcoz.gif')";
        } else {
          document.body.style.backgroundImage =
            "url('https://res.cloudinary.com/dembmmjyq/image/upload/v1669977006/Weather%20backgrounds/mist-night_u2jvc5.gif')";
        }
      }
      break;
    case "Rain":
      if (document.body) {
        if (currentTime >= 6 && currentTime < 18) {
          document.body.style.backgroundImage =
            "url('https://res.cloudinary.com/dembmmjyq/image/upload/v1669982424/Weather%20backgrounds/rain-day_f86qzj.gif')";
        } else {
          document.body.style.backgroundImage =
            "url('https://res.cloudinary.com/dembmmjyq/image/upload/v1669982421/Weather%20backgrounds/rain-night_ui7pzj.gif')";
        }
      }
      break;
    case "Clear":
      if (document.body) {
        if (currentTime >= 6 && currentTime < 18) {
          document.body.style.backgroundImage =
            "url('https://res.cloudinary.com/dembmmjyq/image/upload/v1669973535/Weather%20backgrounds/clear-day_ycddzf.gif')";
        } else {
          document.body.style.backgroundImage =
            "url('https://res.cloudinary.com/dembmmjyq/image/upload/v1669974891/Weather%20backgrounds/clear-night_ikomqq.gif')";
        }
      }
      break;
    case "Thunderstorm":
      if (document.body) {
        if (currentTime >= 6 && currentTime < 18) {
          document.body.style.backgroundImage =
            "url('https://res.cloudinary.com/dembmmjyq/image/upload/v1669977008/Weather%20backgrounds/thunderstorm-day_sfnxen.gif')";
        } else {
          document.body.style.backgroundImage =
            "url('https://res.cloudinary.com/dembmmjyq/image/upload/v1669977000/Weather%20backgrounds/thunderstorm-night_mbdg9t.gif')";
        }
      }
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
