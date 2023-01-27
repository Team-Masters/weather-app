# How to Plan

- [How to Plan](#how-to-plan)
  - [ScreenShots](#screenshots)
  - [Brainstorming](#brainstorming)
  - [User-Persona](#user-persona)
    - [User-1 Ted](#user-1-ted)
    - [User-2 Sarah](#user-2-sarah)
    - [User-3 James](#user-3-james)
    - [Pete](#pete)
  - [Prioritizing](#prioritizing)
  - [Backlog](#backlog)
    - [Must-Haves](#must-haves)
    - [Should-Haves](#should-haves)
    - [Could-Haves](#could-haves)
  - [Development-Strategy](#development-strategy)
    - [1. weather and forecast of current location](#1-weather-and-forecast-of-current-location)
      - [Task w.1](#task-w1)
      - [Task w.2](#task-w2)
    - [2. Display weather of brussels if location denied.](#2-display-weather-of-brussels-if-location-denied)
      - [Task d.1](#task-d1)
      - [Task d.2](#task-d2)
    - [3. Display weather and forcast by search.](#3-display-weather-and-forcast-by-search)
      - [Task s.1](#task-s1)
      - [Task s.2](#task-s2)
    - [3. Display weather for events.](#3-display-weather-for-events)
      - [Task e.1](#task-e1)
      - [Task e.2](#task-e2)
  - [Retrospective](#retrospective)
    - [What went well](#what-went-well)
    - [what went less well](#what-went-less-well)
    - [what we can improve](#what-we-can-improve)

---

## ScreenShots

[hack the weathers]()

## Brainstorming

> - Hack you weather is a tool tat helps you plan your events better by showing
>   you exactly what the weather will be on your events.

## User-Persona

### User-1 Ted

- Ted is a university students who is very busy with studies. Ted has few times
  in a year where he can do outdorsey activities. He pans his events on google
  calendar. sometimes when his activities get discarded due to unfavorable
  weather. He needs an app that can show him what weather it will be in his
  events.

### User-2 Sarah

- Sarah is a reale estate agent who works in brussels. Her job requires her to
  go to different locations in brussels. She prefers to use the bicycle for
  transportation, but she really doesnt like to get wet. She would like to know
  the weather of brussels displayed at all time with ten hour forcast.

### User-3 James

- James is a regular guy. He likes to talk about weather of different cities and
  compare them with each other. He is not very good at spelling so some weather
  apps fail to display the weather he wants becouse they dont have auto
  suggestion. He would like to have a weather app that shows weather of cities
  by search and auto suggestes the cities.

### Pete

- Pete is a truck driver. He drives around in his truck from city to city. He
  would like to know the weather of which ever city he is in.

> - What is the business?

---

## Prioritizing

## Backlog

A collection of user stories you can choose from. Stories inside each priority
level are not necessarily in order, it's up to your group to decide how they fit
into your strategy. These are also just suggestion, feel free to change them or
create your own!

### Must-Haves

> these are necessary for basic usability

- [ ] As a user I want to see the weather and frcast of my current location.

  - When a user opens the app a pop up appear to ask location permission, when
    allowed the weather and forcast should appear.

- [ ] As a user who I should be able to search for weather and forcast of any
      city.
  - There is a search input that allowes you to search for anycity and display
    the weather and forcast of any city.
- [ ] As a user I should be able to sign up to the app.
  - There is a sign up button that allows you to sign up.
- [ ] As a user I should be able to log in to the app.
  - There is a button that allows you to log in to the app.
- [ ] As a user I should be able to see the weather of the events from my google
      calendar.
  - There is a button that allows you to display the weather of the events from
    the google calendar.

### Should-Haves

> these will complete the user experience, but are not necessary

- [ ] As a user I should be able to see the weather of brussels if I deny
      location.
  - The weahter of brussels is displayed if location is denied.
- [ ] As a user I should be able to see the background change depending on the
      weather.
  - The background changes based on the weather.
- [ ] As a user I should be able to see the weather of brussels if my events
      have no location.
  - The weather of brussels is displayed on events that have no location.
- [ ] As a user I should be able to see custom 3d icons instead of boring ones.
  - There is custom 3D icons used in the app.
- [ ] As a user the background on the location I searched should change based on
      the time.
  - Background changes based on the time of the location.

### Could-Haves

> would be really cool ... if there's time

- [ ] As a user I should be able to add locations on events with no location.
  - There is a button to add location for events with no location.
- [ ] As a user I should be able to add events from the app.
- There is a button to add events from the app. -[ ] As a user I should be able
  to Chooses from which calendar i display events.
- There is a meachnism to chose which calendar to display.
- [ ] As a user I should be able to categorize events.
  - There is a mechaism to catagorize events.
- [ ] As a use i should be able to get notification for all or selected events.
  - There is a notification for certain events on chosen times of the day
- [ ] As a user I should be able to post or make public certain events.
  - There is a meachnism to let you make certain events public.
- [ ] As a user I should be able public events going on around me.
  - There is a butoon directing you to a page showing public events around you.
- [ ] As a user i should be able to contact the person who posted the event via
      messaging.
  - There is DM features available.

---

## Development-Strategy

### 1. weather and forecast of current location

**As a user I want to see the weather and forcast of my current location.**

- This user story is developed on branch `daily-forecast-on-windows-load`.
- This branch is merged to `production-branch` branch after completion.

#### Task w.1

- Get geo locations.
- Fetch weather from `openweathermap.com`

#### Task w.2

- Create components for the weather and forcastin react

### 2. Display weather of brussels if location denied.

**As a user I should be able to see the weather of brussels if no location.**

- This user story is developed on branch `demo-location-wather`.
- This branch is merged to `production-branch` branch after completion.

#### Task d.1

- Create var for longitude and latitude of brussels.
- Integrate in a function using terniary operator.

#### Task d.2

- Create components weather and ten hour forecast.

### 3. Display weather and forcast by search.

**As a user I should be able to see the weather city by search.**

- This user story is developed on branch `get-weahter-by-city-feature-alex`.
- This branch is merged to `production-branch` branch after completion.

#### Task s.1

- `fetch` cities api.
- `fetch` Convert cities api and turn to lon and lat.
- `fetch` weather api using lon and lat.

#### Task s.2

- Integrate components to the new weather with `state()` weather and ten hour
  forecast.

### 3. Display weather for events.

**As a user I should be able to see the weather of my calendar events.**

- This user story is developed on branch `feature-get-weather-by-event`.
- This branch is merged to `production-branch` branch after completion.

#### Task e.1

- `fetch` google calendar api.
- Convert event location turn to lon and lat.
- Convert event startTime and endTime to `ISOString()`.
- `fetch` weather api using `lon lat startTime endTime`.

#### Task e.2

- Create new react components for the displayed data

## Retrospective

### What went well

- View-Model approach for the events
- All the must have tasks were properly implemented

### what went less well

- Working with google
- Some phones don’t work specially icon for iphones.

### what we can improve

- Communication is key we could’ve done better
- The coders did their job, designers did their job
- Compromises were done and Sacrificing
