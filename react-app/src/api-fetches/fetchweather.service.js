export async function fetchWeather(lat, lon) {
  const REACT_APP_API_URL = "https://api.openweathermap.org/data/2.5/";
  const REACT_APP_API_KEY = "2361f15010a09f0db3c45282db7d2e16";

  await fetch(
    `${REACT_APP_API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${REACT_APP_API_KEY}`
  )
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      return result;
    });
};