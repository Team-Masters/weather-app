import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import "./event-list.css";
import axios from "axios";
import { getEventListViewModel } from "../view-models/event-list.vm";
export function EventList({ events }) {
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
          <img
            src={`http://openweathermap.org/img/w/${event.weatherIcon}.png`}
            alt="weatherIcon"
            className="event-icon"
          />
          <p key={v4()} className="event-time">
            {event.convertedStartTime}-{event.convertedEndTime}
          </p>
          <p key={v4()} className="event-condition">
            {event.weatherCondition}
          </p>
          <p key={v4()} className="event-temprature">
            {/* {event.temprature} */}
            {Math.trunc(event.temprature)}&deg;
          </p>
          {console.log("returned weather: ", newData[0].temprature)}
          {console.log("returned newData: ", newData)}
        </div>
      ))}
    </>
  );
}
