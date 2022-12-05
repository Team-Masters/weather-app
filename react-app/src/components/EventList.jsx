import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import { getEventListViewModel } from "../view-models/eventsListViewModel";
import clear10000 from "../assets/V2_icons/small/png/clear10000.png";
import mostlyClear11000 from "../assets/V2_icons/small/png/mostlyClear11000.png";
import partlyCloudy11010 from "../assets/V2_icons/small/png/partlyCloudy11010.png";
import mostlyCloudy11020 from "../assets/V2_icons/small/png/mostlyCloudy11020.png";
import fog20000 from "../assets/V2_icons/small/png/fog20000.png";
import fogLight21000 from "../assets/V2_icons/small/png/fogLight21000.png";
import drizzle40000 from "../assets/V2_icons/small/png/drizzle40000.png";
import rain40010 from "../assets/V2_icons/small/png/rain40010.png";
import rainLight42000 from "../assets/V2_icons/small/png/rainLight42000.png";
import rainHeavy42010 from "../assets/V2_icons/small/png/rainHeavy42010.png";
import snow50000 from "../assets/V2_icons/small/png/snow50000.png";
import flurries50010 from "../assets/V2_icons/small/png/flurries50010.png";
import snowLight51000 from "../assets/V2_icons/small/png/snowLight51000.png";
import snowHeavy51010 from "../assets/V2_icons/small/png/snowHeavy51010.png";
import freezingRainDrizzle60000 from "../assets/V2_icons/small/png/freezingRainDrizzle60000.png";
import freezingRain60010 from "../assets/V2_icons/small/png/freezingRain60010.png";
import freezingRainLight62000 from "../assets/V2_icons/small/png/freezingRainLight62000.png";
import freezingRainHeavy62010 from "../assets/V2_icons/small/png/freezingRainHeavy62010.png";
import icePellets70000 from "../assets/V2_icons/small/png/icePellets70000.png";
import icePelletsHeavy71010 from "../assets/V2_icons/small/png/icePelletsHeavy71010.png";
import icePelletsLight71020 from "../assets/V2_icons/small/png/icePelletsLight71020.png";
function EventList({ events }) {
  const [vm, setVm] = useState([]);

  useEffect(() => {
    getEventListViewModel().then((vm) => setVm(vm, true));
  }, []);

  return (
    <>
      <div className="events-container">
        {vm.map((event, temprature, newData, weatherCondition, weatherIcon) => (
          <div key={v4} className="event-card">
            <p className="event-location">
              {event.event.location
                ? event.event.location.substring(0, 20)
                : "Brussels"}
            </p>
            <p className="event-summary">
              {event.event.summary.substring(0, 20)}
            </p>
            <p className="event-time">
              {event.newData.startTime} {event.newData.endTime}
            </p>
            <p className="event-icon">
              {event.newData.weatherCondition === 0 ? (
                "Unknown"
              ) : event.newData.weatherCondition === 1000 ? (
                <img src={clear10000} alt="Sunny" />
              ) : event.newData.weatherCondition === 1100 ? (
                <img src={mostlyClear11000} alt="Mostly Clear" />
              ) : event.newData.weatherCondition === 1101 ? (
                <img src={partlyCloudy11010} alt="Partly Cloudy" />
              ) : event.newData.weatherCondition === 1102 ? (
                <img src={mostlyCloudy11020} alt="Mostly Cloudy" />
              ) : event.newData.weatherCondition === 1001 ? (
                <img src={partlyCloudy11010} alt="Partly Cloudy" />
              ) : event.newData.weatherCondition === 2000 ? (
                <img src={fog20000} alt="Fog" />
              ) : event.newData.weatherCondition === 2100 ? (
                <img src={fogLight21000} alt="Light Fog" />
              ) : event.event.newData.weatherCondition === 4000 ? (
                <img src={drizzle40000} alt="Drizzle" />
              ) : event.newData.weatherCondition === 4001 ? (
                <img src={rain40010} alt="Rain" />
              ) : event.newData.weatherCondition === 4200 ? (
                <img src={rainLight42000} alt="Light Rain" />
              ) : event.newData.weatherCondition === 4201 ? (
                <img src={rainHeavy42010} alt="Heavy Rain" />
              ) : event.newData.weatherCondition === 5000 ? (
                <img src={snow50000} alt="Snow" />
              ) : event.newData.weatherCondition === 5101 ? (
                <img src={flurries50010} alt="Flurries" />
              ) : event.newData.weatherCondition === 5100 ? (
                <img src={snowLight51000} alt="Light Snow" />
              ) : event.newData.weatherCondition === 5101 ? (
                <img src={snowHeavy51010} alt="Heavy Snow" />
              ) : event.newData.weatherCondition === 6000 ? (
                <img
                  src={freezingRainDrizzle60000}
                  alt="Freezing Rain Drizzle"
                />
              ) : event.newData.weatherCondition === 6001 ? (
                <img src={freezingRain60010} alt="Freezing Rain" />
              ) : event.newData.weatherCondition === 6200 ? (
                <img src={freezingRainLight62000} alt="Light Freezing Rain" />
              ) : event.newData.weatherCondition === 6201 ? (
                <img src={freezingRainHeavy62010} alt="Heavy Freezing Rain" />
              ) : event.newData.weatherCondition === 7000 ? (
                <img src={icePellets70000} alt="Ice Pellets" />
              ) : event.newData.weatherCondition === 7101 ? (
                <img src={icePelletsHeavy71010} alt="Ice Pellets Heavy" />
              ) : event.newData.weatherCondition === 7102 ? (
                <img src={icePelletsLight71020} alt="Ice Pellets Light" />
              ) : (
                "Unknown"
              )}
            </p>

            <p className="event-condition">
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

            <p className="event-temprature">
              {/* {event.temprature} */}
              {/* {Math.trunc(event.temprature)}&deg; */}
              {Math.trunc(event.newData.weathertemprature)}&deg;
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
      </div>
    </>
  );
}

export default EventList;
