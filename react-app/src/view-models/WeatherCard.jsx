const WeatherCard = ({ weatherData }) => (
  <div>
    <div className="home-header">
      <div className="city">{weatherData.name}</div>
      <br></br>
      <div className="temperature">
        <p>{Math.trunc(weatherData.main.temp)} &deg;C</p>
      </div>
      <div className="weather-condition">
        <p>{weatherData.weather[0].main}</p>
      </div>
      <div className="max-min-temperature">
        <div>
          <p>H:{Math.trunc(weatherData.main.temp_max)} &deg;</p>
        </div>
        <div>
          <p>L:{Math.trunc(weatherData.main.temp_min)} &deg;</p>
        </div>
      </div>
      <div className="weather-icon-container">
        <img
          src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
          alt="weatherIcon"
          className="weather-icon"
        />
      </div>
    </div>
  </div>
);

export default WeatherCard;
