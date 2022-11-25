export async function getWeatherInfo2(lat, long, startTime, endTime) {
  const REACT_APP_API_URL = "https://api.tomorrow.io/v4/timelines?";
  const REACT_APP_API_KEY = "Mm0XJsU6iRXx03vAyTJFCQ0ajnttZH1U";
  const req = await fetch(
    `${REACT_APP_API_URL}location=${lat},${long}&fields=temperature&timesteps=1h&units=metric&startTime${startTime}&endTime${endTime}&apikey=${REACT_APP_API_KEY}`
  );
  const res = await req.json();
  return res;
}
