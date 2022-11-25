import { getCalendarEvents } from "../api-fetches/events.service";
import { getWeatherInfo } from "../api-fetches/weather.service";
import { getWeatherInfo2 } from "../api-fetches/weather.tomorrow.service";
import { dateConvertor } from "../api-fetches/date-convertor.service";
import { ConvertAddress } from "../api-fetches/location-converter.service";
import { ConvertAddress2 } from "../api-fetches/location-converter-2.service";
import React, { useState } from "react";
export async function getEventListViewModel() {
  const events = await getCalendarEvents();
  console.log("the events", events);

  return Promise.all(
    events.map(async (event, temprature, weatherCondition, weatherIcon) => {
      //const { lat, lon } = await ConvertAddress(event.location);
      const convertedAddress = await ConvertAddress2(
        event.location ? event.location : "brussels"
      );
      console.log("converted address: ", convertedAddress);
      console.log("event location: ", event.location);
      const lat = convertedAddress.locations[0].referencePosition.latitude;
      const lon = convertedAddress.locations[0].referencePosition.longitude;
      const startTime = event.start.dateTime.slice(0, -6);
      const endTime = event.end.dateTime.slice(0, -6);

      let convertedStartTime = JSON.stringify(await dateConvertor(startTime));
      let convertedEndTime = JSON.stringify(await dateConvertor(endTime));
      console.log("CONVERTED ENDDATE", convertedEndTime.slice(12, -7));
      console.log("CONVERTED STARTDATE", convertedStartTime.slice(12, -7));
      convertedStartTime = convertedStartTime.slice(12, -9);
      convertedEndTime = convertedEndTime.slice(12, -9);
      // console.log("start time and end time", startTime, endTime);
      console.log("converted address lat & lon: ", lat, lon);
      console.log("the location ", lat, lon);
      const weather = await getWeatherInfo(lat, lon);
      // const weather2 = await getWeatherInfo2(lat, lon, startTime, endTime);
      console.log("weather :", weather);
      //console.log(JSON.stringify(weather, null, 2));
      //console.log(JSON.stringify(weather2, null, 2));
      //console.log("the weather", weather);

      temprature = JSON.stringify(
        weather.main.temp
        // ? weather.main.temp
        // : weather2.data.timelines[0].intervals[0]
      );
      console.log("the siplified weather: ", temprature);

      weatherCondition = weather.weather[0].main;

      weatherIcon = weather.weather[0].icon;

      let newData = {
        event: event,
        temprature: temprature,
        weatherCondition: weatherCondition,
        weatherIcon: weatherIcon,
      };
      console.log("the new data: ", newData);

      return {
        event,
        newData,
        temprature,
        weatherCondition,
        weatherIcon,
        convertedStartTime,
        convertedEndTime,
      };
    })
  );
}
