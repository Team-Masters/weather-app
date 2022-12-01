import React from "react";
import { useEffect, useState } from "react";
import WeatherCard from "../view-models/WeatherCard";
import { Dimmer, Loader } from "semantic-ui-react";

export const GetWeather = ({ searchedData }) => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const demoLongitude = 4.351721;
    const demoLatitude = 50.850346;

    navigator.geolocation.getCurrentPosition(
      function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      },
      function () {
        setLat(demoLatitude);
        setLong(demoLongitude);
      }
    );

    const fetchData = async () => {
      const REACT_APP_API_URL = "https://api.openweathermap.org/data/2.5/";
      const REACT_APP_API_KEY = "2361f15010a09f0db3c45282db7d2e16";
      await fetch(
        `${REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log("RESULT", result);

          // BACKGROUND CHANGE DEPENDING ON WEATHER
          let currentTime = new Date().getHours();

          console.log("RICK TIME 1", currentTime);

          let bgCurrent = result.weather[0].main;

          console.log("CURRENT DESCRIPTION", bgCurrent);

          // bgCurrent = "Clear";
          // currentTime = 19;

          switch (bgCurrent) {
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
        });
    };
    fetchData();
  }, [lat, long]);
  console.log("long and lat: ", long, lat);
  return (
    <div>
      {typeof data.main != "undefined" ? (
        <WeatherCard weatherData={data} searchedData={searchedData} />
      ) : (
        <div className="dimmer">
          <Dimmer active>
            <Loader>Loading weather...</Loader>
          </Dimmer>
        </div>
      )}
    </div>
  );
};
