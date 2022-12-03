import { getCalendarEvents } from "../api-fetches/events.service";
import {
  getWeatherInfo,
  getWeatherInfo2,
} from "../api-fetches/weather.tomorrow.service";
import { ConvertAddress } from "../api-fetches/location-converter";

export async function getEventListViewModel() {
  const events = await getCalendarEvents();
  console.log("the events", events);

  return Promise.all(
    events.map(async (event, temprature, weatherCondition, weatherIcon) => {
      //const { lat, lon } = await ConvertAddress(event.location);
      const convertedAddress = await ConvertAddress(
        event.location ? event.location : "brussels"
      );
      console.log("converted address: ", convertedAddress);
      console.log("event location: ", event.location);
      const lat = convertedAddress.locations[0].referencePosition.latitude;
      const lon = convertedAddress.locations[0].referencePosition.longitude;

      const fetchedStartTime = event.start.dateTime;
      const fetchedEndTime = event.end.dateTime;
      console.log(
        "fetched start and end time",
        fetchedStartTime,
        fetchedEndTime
      );
      const startTimeDate = new Date(fetchedStartTime);
      const endTimeDate = new Date(fetchedEndTime);
      console.log("The start time: ", startTimeDate);
      console.log("The start time: ", endTimeDate);

      const startTimeIso = startTimeDate.toISOString();
      const endTimeIso = endTimeDate.toISOString();

      let convertedStartTime = JSON.stringify(fetchedStartTime).slice(12, -7);
      let convertedEndTime = JSON.stringify(fetchedEndTime).slice(12, -7);
      //console.log("CONVERTED ENDDATE", convertedEndTime.slice(12, -7));
      //console.log("CONVERTED STARTDATE", convertedStartTime.slice(12, -7));
      // convertedStartTime = convertedStartTime.slice(12, -9);
      // convertedEndTime = convertedEndTime.slice(12, -9);

      // console.log("start time and end time", startTime, endTime);
      console.log("converted address lat & lon: ", lat, lon);
      console.log("the location ", lat, lon);
      const weather = await getWeatherInfo(lat, lon, startTimeIso, endTimeIso);
      const weather2 = await getWeatherInfo2(
        lat,
        lon,
        startTimeIso,
        endTimeIso
      );
      // const weather2 = await getWeatherInfo2(lat, lon, startTime, endTime);
      console.log("weather :", weather);
      console.log("weather2 :", weather2);
      //console.log(JSON.stringify(weather, null, 2));
      //console.log(JSON.stringify(weather2, null, 2));
      //console.log("the weather", weather);

      // temprature = JSON.stringify(
      //   weather.main.temp
      //   // ? weather.main.temp
      //   // : weather2.data.timelines[0].intervals[0]
      // );
      // console.log("the siplified weather: ", temprature);

      //weatherCondition = weather.weather[0].main;

      //weatherIcon = weather.weather[0].icon;

      let newData = {
        event: event,
        weathertemprature:
          weather.data.timelines[0].intervals[0].values.temperature,
        weatherCondition:
          weather2.data.timelines[0].intervals[0].values.weatherCode,
        startTime: convertedStartTime,
        endTime: convertedEndTime,
        // temprature: temprature,
        // weatherCondition: weatherCondition,
        // weatherIcon: weatherIcon,
      };
      console.log("the new data: ", newData);

      return {
        event,
        newData,
        // temprature,
        // weatherCondition,
        // weatherIcon,
        convertedStartTime,
        convertedEndTime,
      };
    })
  );
}
