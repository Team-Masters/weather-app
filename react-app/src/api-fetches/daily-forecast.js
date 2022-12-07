import React, { useState, useEffect } from "react";
import moment from "moment";

const DailyForecast = () => {
  const [dataForecast, setDataForecast] = useState([]);
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [urlToFetch, setUrlToFetch] = useState([]);
  const queryUrl = "https://api.openweathermap.org/data/2.5/";
  const apiKey = "e2613f2c550b09bcd9409a7d5b09f25b";
  const defaultLatitude = 50.850346;
  const defaultLongitude = 4.351721;

  useEffect(() => {
    const fetchForecast = () => {
      navigator.geolocation.getCurrentPosition(
        async function (position) {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          const URL =
            queryUrl +
            `forecast?lat=` +
            latitude +
            `&lon=` +
            longitude +
            `&units=metric&APPID=` +
            apiKey;
          setUrlToFetch(URL);
        },
        function () {
          setLatitude(defaultLatitude);
          setLongitude(defaultLongitude);
          const URL =
            queryUrl +
            `forecast?lat=` +
            latitude +
            `&lon=` +
            longitude +
            `&units=metric&APPID=` +
            apiKey;
          setUrlToFetch(URL);
        }
      );
      fetch(urlToFetch)
        .then((response) => response.json())
        .then((data) => {
          let resp = data.list;
          let slicedArray = resp.slice(0, 4);
          setDataForecast(slicedArray);
          console.log("Forecast onload", slicedArray);
        });
    };
    fetchForecast();
  }, [latitude, longitude, urlToFetch]);

  return (
    <div className="windows-load-forecast" id="windows-load-forecast">
      {dataForecast.map((forecast) => {
        return (
          <div key={forecast.main.humidity}>
            <div className="forecast-cards">
              <div className="hourly-forecast">
                <p className="hourly-forecast">
                  {moment(forecast.dt_txt).format("HH:mm")}
                </p>
              </div>
              <div className="weather-icon-container">
                <img
                  src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                  alt="weatherIcon"
                  className="weather-icon-onload"
                />
              </div>
              <p className="temperature-on-windows-load">
                {Math.trunc(forecast.main.temp)}&deg;C
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default DailyForecast;
