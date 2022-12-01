import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import { getEventListViewModel } from "../view-models/eventsListViewModel";

function EventList({ events }) {
  const [vm, setVm] = useState([]);

  useEffect(() => {
    getEventListViewModel().then((vm) => setVm(vm, true));
  }, []);

  return (
    <>
      {vm.map((event, temprature, newData, weatherCondition, weatherIcon) => (
        <div key={v4} className="event-container">
          <p key={v4()} className="event-location">
            {event.event.location.substring(0, 20)}
          </p>
          <p key={v4()} className="event-summary">
            {event.event.summary.substring(0, 20)}
          </p>
          <p key={v4()} className="event-icon">
            {event.newData.weatherCondition === 0 ? (
              "Unknown"
            ) : event.newData.weatherCondition === 1000 ? (
              "Enjoy the sun"
            ) : event.newData.weatherCondition === 1100 ? (
              "The sky looks pretty"
            ) : event.newData.weatherCondition === 1101 ? (
              "Get a sweater"
            ) : event.newData.weatherCondition === 1102 ? (
              "Thicken your cloths"
            ) : event.newData.weatherCondition === 1001 ? (
              <img src="/" alt="WeatherIcon" />
            ) : event.newData.weatherCondition === 2000 ? (
              "Drive carefully"
            ) : event.newData.weatherCondition === 2100 ? (
              "Drive carefully "
            ) : event.event.newData.weatherCondition === 4000 ? (
              "Grab an umbrella"
            ) : event.newData.weatherCondition === 4001 ? (
              "Grab an umbrella "
            ) : event.newData.weatherCondition === 4200 ? (
              "Grab an umbrella"
            ) : event.newData.weatherCondition === 4201 ? (
              "Grab umbrella"
            ) : event.newData.weatherCondition === 5000 ? (
              "Wear a jacket"
            ) : event.newData.weatherCondition === 5101 ? (
              "Wear a jacket"
            ) : event.newData.weatherCondition === 5100 ? (
              "Wear a thick jacket"
            ) : event.newData.weatherCondition === 5101 ? (
              "Wear a super thick jacket"
            ) : event.newData.weatherCondition === 6000 ? (
              "Get a rain coat"
            ) : event.newData.weatherCondition === 6001 ? (
              "Grab an umbrella"
            ) : event.newData.weatherCondition === 6200 ? (
              "Grab an umbrella"
            ) : event.newData.weatherCondition === 6201 ? (
              "Grab an umbrella"
            ) : event.newData.weatherCondition === 7000 ? (
              "Wear a jacket"
            ) : event.newData.weatherCondition === 7101 ? (
              "Wear a jacket"
            ) : event.newData.weatherCondition === 7102 ? (
              "Wear a jacket"
            ) : (
              "Stay indoors"
            )}
          </p>

          <p key={v4()} className="event-time">
            {event.newData.startTime} {event.newData.endTime}
          </p>
          <p key={v4()} className="event-condition">
            {/* {event.weatherCondition} */}
            {event.newData.weatherCondition === 0
              ? "Unknown"
              : event.newData.weatherCondition === 1000
              ? "Clear, Sunny"
              : event.newData.weatherCondition === 1100
              ? "Mostly Clear"
              : event.newData.weatherCondition === 1101
              ? "Partly Cloudy"
              : event.newData.weatherCondition === 1102
              ? "Mostly Cloudy"
              : event.newData.weatherCondition === 1001
              ? "Cloudy"
              : event.newData.weatherCondition === 2000
              ? "Fog"
              : event.newData.weatherCondition === 2100
              ? "Light Fog"
              : event.event.newData.weatherCondition === 4000
              ? "Drizzle"
              : event.newData.weatherCondition === 4001
              ? "Rain"
              : event.newData.weatherCondition === 4200
              ? "Light Rain"
              : event.newData.weatherCondition === 4201
              ? "Heavy Rain"
              : event.newData.weatherCondition === 5000
              ? "Snow"
              : event.newData.weatherCondition === 5101
              ? "Flurries"
              : event.newData.weatherCondition === 5100
              ? "Light Snow"
              : event.newData.weatherCondition === 5101
              ? "Heavy Snow"
              : event.newData.weatherCondition === 6000
              ? "Freezing Drizzle"
              : event.newData.weatherCondition === 6001
              ? "Frezzing Rain"
              : event.newData.weatherCondition === 6200
              ? "Light Freezing Rain"
              : event.newData.weatherCondition === 6201
              ? "Heavy Freezing Rain"
              : event.newData.weatherCondition === 7000
              ? "Ice Pellets"
              : event.newData.weatherCondition === 7101
              ? "Heavy Ice Pellets"
              : event.newData.weatherCondition === 7102
              ? "Light Ice Pellets"
              : "Thunderstorm"}
          </p>
          {/* <img
            src={`http://openweathermap.org/img/w/${event.weatherIcon}.png`}
            alt="weatherIcon"
            className="event-icon"
          /> */}

          <p key={v4()} className="event-temprature">
            {/* {event.temprature} */}
            {/* {Math.trunc(event.temprature)}&deg; */}
            {event.newData.weathertemprature}
          </p>

          {/* {console.log("returned weather: ", newData[0].temprature)}*/}
          {console.log(
            "returned event weather: ",
            event.newData.weathertemprature
          )}
          {console.log(
            "returned event weatherCode: ",
            event.newData.weatherCondition
          )}
        </div>
      ))}
    </>
  );
}

export default EventList;
