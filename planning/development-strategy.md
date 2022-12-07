# Development-Strategy

## 1. weather and forecast of current location

**As a user I want to see the weather and forcast of my current location.**

- This user story is developed on branch `daily-forecast-on-windows-load`.
- This branch is merged to `production-branch` branch after completion.

### Task w.1

- Get geo locations.
- Fetch weather from `openweathermap.com`

### Task w.2

- Create components for the weather and forcastin react

## 2. Display weather of brussels if location denied.

**As a user I should be able to see the weather of brussels if no location.**

- This user story is developed on branch `demo-location-wather`.
- This branch is merged to `production-branch` branch after completion.

### Task d.1

- Create var for longitude and latitude of brussels.
- Integrate in a function using terniary operator.

### Task d.2

- Create components weather and ten hour forecast.

## 3. Display weather and forcast by search.

**As a user I should be able to see the weather city by search.**

- This user story is developed on branch `get-weahter-by-city-feature-alex`.
- This branch is merged to `production-branch` branch after completion.

### Task s.1

- `fetch` cities api.
- `fetch` Convert cities api and turn to lon and lat.
- `fetch` weather api using lon and lat.

### Task s.2

- Integrate components to the new weather with `state()` weather and ten hour
  forecast.

## 3. Display weather for events.

**As a user I should be able to see the weather of my calendar events.**

- This user story is developed on branch `feature-get-weather-by-event`.
- This branch is merged to `production-branch` branch after completion.

### Task e.1

- `fetch` google calendar api.
- Convert event location turn to lon and lat.
- Convert event startTime and endTime to `ISOString()`.
- `fetch` weather api using `lon lat startTime endTime`.

### Task e.2

- Create new react components for the displayed data
