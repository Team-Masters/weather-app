import { useEffect, useState } from "react";
import WeatherCard from "../view-models/WeatherCard";
import { Dimmer, Loader } from "semantic-ui-react";

export const GetWeather = () => {
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
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div>
      {typeof data.main != "undefined" ? (
        <WeatherCard weatherData={data} />
      ) : (
        <div>
          <Dimmer active>
            <Loader>Loading..</Loader>
          </Dimmer>
        </div>
      )}
    </div>
  );
};
