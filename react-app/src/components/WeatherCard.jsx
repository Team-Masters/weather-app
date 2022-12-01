const WeatherCard = ({ weatherData, searchedData }) => {
  console.log("searcheddata: ", searchedData);
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
                : Math.trunc(weatherData.main.temp_max - 273.15)}{" "}
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
                : Math.trunc(weatherData.main.temp_min - 273.15)}{" "}
              &deg;
            </p>
          </div>
        </div>
        <div className="weather-icon-container">
          <img
            src={`http://openweathermap.org/img/w/${
              searchedData
                ? searchedData.weatherResponse.weather[0].icon
                : weatherData.weather[0].icon
            }.png`}
            alt="weatherIcon"
            className="weather-icon"
          />
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
