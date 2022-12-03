import React, { useState, useEffect } from "react";
import moment from "moment";

const DailyForecast = () => {
  const [dataForecast, setDataForecast] = useState([]);
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [urlToFetch, setUrlToFetch] = useState([]);
  const queryUrl = "https://api.openweathermap.org/data/2.5/";
  const apiKey = "2361f15010a09f0db3c45282db7d2e16";

  useEffect(() => {
    const fetchForecast = () => {
      navigator.geolocation.getCurrentPosition(async function (position) {
        let xPosition = position.coords.latitude;
        let yPosition = position.coords.longitude;
        setLatitude(xPosition);
        setLongitude(yPosition);
        const URL =
          queryUrl +
          `forecast?lat=` +
          xPosition +
          `&lon=` +
          yPosition +
          `&units=metric&APPID=` +
          apiKey;
        setUrlToFetch(URL);
      });
      fetch(urlToFetch)
        .then((response) => response.json())
        .then((data) => {
          let resp = data.list;
          let slicedArray = resp.slice(0, 6);
          setDataForecast(slicedArray);
          console.log("Forecast onload", JSON.stringify(slicedArray, null, 2));
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
              {/* <p>{moment(forecast.dt_txt).format('ddd')}</p> */}
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
                {Math.trunc(forecast.main.temp)}&deg;
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default DailyForecast;
