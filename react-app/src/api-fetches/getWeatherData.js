import { useState, useEffect } from 'react';
import { fetchWeather } from "./fetchweather.service";

export async function useWeatherData(searchData) {
  const [coordinates, setCoordinates] = useState([]);
  const [data, setData] = useState([]);

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const bxlLongitude = 4.351721;
    const bxlLatitude = 50.850346;

    navigator.geolocation.getCurrentPosition(
      function (position) {
        setCoordinates([position.coords.latitude, position.coords.longitude]);
      },
      function () {
        setCoordinates([bxlLatitude, bxlLongitude]);
      }
    );

    fetchWeather(coordinates[0], coordinates[1]);

    //   Promise.all([currentWeatherFetch, forecastFetch])
    //     .then(async (response) => {
    //       const weatherResponse = await response[0].json();
    //       const forecastResponse = await response[1].json();

    //       setCurrentWeather({ city: searchData.label, weatherResponse });
    //       setForecast({ city: searchData.label, ...forecastResponse });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });

    // }, [lat, long]);

  }, [coordinates]);
};