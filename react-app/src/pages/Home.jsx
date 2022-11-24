import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { GetWeather } from "../api-fetches/GetWeather";
import Search from "../components/search";
import {
  WEATHER_API_URL,
  WEATHER_API_KEY,
} from "../api-fetches/auto-cpmplete.service";
import "../css-styles.css";
import Forecast from "../components/Forecast";
import { EventList } from "../components/EventList";

const Home = () => {
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
  const [check, setCheck] = useState("");

  const eventListHandle = () => {
    const checker = "Event";
    console.log("checker: ", checker);
    setCheck(checker);
    return checker;
  };

  return (
    <>
      <div className="home-container">
        <div></div>
        <div className="search-container">
          <Search onSearchChange={handleOnSearchChange} />
        </div>
        <button
          type="button"
          className="event-button"
          onClick={eventListHandle}
        >
          Events
        </button>
        <div className="the-event-container">
          {check === "Event" ? <EventList /> : ""}
        </div>
        {check === "Event" ? "" : <GetWeather searchedData={currentWeather} />}
        <div className="forecast">
          {check === "Event" ? "" : forecast && <Forecast data={forecast} />}
        </div>
      </div>
      <div className="navigation-bar">
        <Navbar />
      </div>
    </>
  );
};

export default Home;
