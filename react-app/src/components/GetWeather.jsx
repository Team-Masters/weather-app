import React from "react";
import { useEffect, useState } from "react";
import WeatherCard from "../view-models/WeatherCard";
import { Dimmer, Loader } from "semantic-ui-react";
import moment from "moment";

export const GetWeather = ({ searchedData }) => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const demoLongitude = 4.3517103;
    const demoLatitude = 50.8503396;

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
      const REACT_APP_API_KEY = "e2613f2c550b09bcd9409a7d5b09f25b";
      await fetch(
        `${REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log("RESULT", result);

          // BACKGROUND CHANGE DEPENDING ON WEATHER
          let currentTime = new Date().getHours();
          let bgCurrent = result.weather[0].main;

          switch (bgCurrent) {
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
                    "https://res.cloudinary.com/dembmmjyq/image/upload/v1669977001/Weather%20backgrounds/night-fog_zrj32a.gif')";
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
