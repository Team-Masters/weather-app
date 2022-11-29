import React from "react";
import { useEffect, useState } from "react";
import WeatherCard from "../view-models/WeatherCard";
import { Dimmer, Loader } from "semantic-ui-react";

export const GetWeather = ({ searchedData }) => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      const REACT_APP_API_URL = "https://api.openweathermap.org/data/2.5/";
      const REACT_APP_API_KEY = "2361f15010a09f0db3c45282db7d2e16";
      await fetch(
        `${REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log("RESULT", result);

          // RICK
          let rickMain = result.weather[0].main;
          console.log("RICK MAIN 2", rickMain);

          

          switch (rickMain) {
            case 'Snow':
              document.getElementById('rickBody').style.backgroundImage =
                "url('https://i.gifer.com/55Cz.gif')";
              break;
            case 'Clouds':
              document.getElementById('rickBody').style.backgroundImage =
                "url('https://i.gifer.com/srG.gif')";
              break;
            case 'Fog':
              document.getElementById('rickBody').style.backgroundImage =
                "url('https://i.gifer.com/BQRD.gif')";
              break;
            case 'Rain':
              document.getElementById('rickBody').style.backgroundImage =
                "url('https://i.gifer.com/4lsB.gif')";
              break;
            case 'Clear':
              document.getElementById('rickBody').style.backgroundImage =
                "url('https://i.gifer.com/XFbw.gif')";
              break;
            case 'Thunderstorm':
              document.getElementById('rickBody').style.backgroundImage =
                "url('https://i.gifer.com/7TDQ.gif')";
              break;
            default:
              document.getElementById('rickBody').style.backgroundImage =
                "url('https://i.gifer.com/XFbw.gif')";
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
