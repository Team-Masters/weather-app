export async function getWeatherInfo(lat, long) {
  const REACT_APP_API_URL = "https://api.openweathermap.org/data/2.5/";
  const REACT_APP_API_KEY = "e2613f2c550b09bcd9409a7d5b09f25b";

  console.log("the location", lat, long);
  const req = await fetch(
    `${REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`
  );
  const res = await req.json();

  return res;
}
