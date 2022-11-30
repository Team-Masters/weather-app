import React, { useState } from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import WeatherCard from "./WeatherCard";

const CurrentWeather = (data, searchData) => {
  return (
    <>
      <div>
        {typeof data.main != "undefined" ? (
          <WeatherCard weatherData={data} searchedData={searchData} />
        ) : (
          <div className="dimmer">
            <Dimmer active>
              <Loader>Loading weather...</Loader>
            </Dimmer>
          </div>
        )}
      </div>
    </>
  );
};

export default CurrentWeather;
