const WeatherCard = ({ weatherData, searchedData }) => {
  const icon = weatherData.weather[0].main;



  return (
    <div>
      <div className="home-header">
        <div className="city">
          {searchedData ? searchedData.city : weatherData.name}
        </div>
        <br></br>
        <div className="temperature">
          <p>
            {searchedData
              ? Math.trunc(searchedData.weatherResponse.main.temp - 273.15)
              : Math.trunc(weatherData.main.temp)}
            &deg;C
          </p>
        </div>
        <div className="weather-condition">
          <p>
            {searchedData
              ? searchedData.weatherResponse.weather[0].main
              : weatherData.weather[0].main}
          </p>
        </div>
        <div className="max-min-temperature">
          <div>
            <p>
              H:
              {searchedData
                ? Math.trunc(
                  searchedData.weatherResponse.main.temp_max - 273.15
                )
                : Math.trunc(weatherData.main.temp_max)}{" "}
              &deg;
            </p>
          </div>
          <div>
            <p>
              L:
              {searchedData
                ? Math.trunc(
                  searchedData.weatherResponse.main.temp_min - 273.15
                )
                : Math.trunc(weatherData.main.temp_min)}{" "}
              &deg;
            </p>
          </div>
        </div>
        <div className="weather-icon-container">
          

          <img
            src={
              // RAIN
              icon === "Rain" && searchedData === null
                ? "https://res.cloudinary.com/dembmmjyq/image/upload/v1670000351/weather-icons/rain_eximx0.png"
                : searchedData.weatherResponse.weather[0].main === "Rain"



                  ? "https://res.cloudinary.com/dembmmjyq/image/upload/v1670000351/weather-icons/rain_eximx0.png"

                  // FINISH RAIN
                  : icon === "Clouds" && searchedData === null
                    ? "https://res.cloudinary.com/dembmmjyq/image/upload/v1670000346/weather-icons/cloudy_wtetrn.png"
                    : searchedData.weatherResponse.weather[0].main === "Clouds"
                      ? "https://res.cloudinary.com/dembmmjyq/image/upload/v1670000346/weather-icons/cloudy_wtetrn.png"
                      : icon === "Snow" && searchedData === null
                        ? "https://res.cloudinary.com/dembmmjyq/image/upload/v1670000343/weather-icons/snow_dvcrh3.png"
                        : searchedData.weatherResponse.weather[0].main === "Snow"
                          ? "https://res.cloudinary.com/dembmmjyq/image/upload/v1670000343/weather-icons/snow_dvcrh3.png"


                          : icon === "Clear" && searchedData === null
                            ? "https://res.cloudinary.com/dembmmjyq/image/upload/v1670000348/weather-icons/clear_ytzg3n.png"
                            : searchedData.weatherResponse.weather[0].main === "Clear"
                              ? "https://res.cloudinary.com/dembmmjyq/image/upload/v1670000348/weather-icons/clear_ytzg3n.png"
                              : icon === "Thunderstorm" && searchedData === null
                                ? "https://res.cloudinary.com/dembmmjyq/image/upload/v1670000344/weather-icons/thunderstorm_susijo.png"
                                : searchedData.weatherResponse.weather[0].main ===
                                  "Thunderstorm"
                                  ? "https://res.cloudinary.com/dembmmjyq/image/upload/v1670000344/weather-icons/thunderstorm_susijo.png"
                                  : "https://res.cloudinary.com/dembmmjyq/image/upload/v1670012728/weather-icons/Sun_nou9kq.png"
            }
            alt="weatherIcon"
            className="weatherIcon"
          />
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
