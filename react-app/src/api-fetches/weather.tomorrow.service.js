export async function getWeatherInfo(lat, long, startTimeIso, endTimeIso) {
  const REACT_APP_API_URL = "https://api.tomorrow.io/v4/timelines?";
  const REACT_APP_API_KEY = "Mm0XJsU6iRXx03vAyTJFCQ0ajnttZH1U";
  const REACT_APP_API_KEY_2 = "Ow4GH5JTTJpmEL3L9vuxyrmIAxhzheX8";
  const req = await fetch(
    `${REACT_APP_API_URL}location=${lat},${long}&fields=weatherCode&temperature&timesteps=1h&units=metric&startTime=${startTimeIso}&endTime=${endTimeIso}&apikey=${REACT_APP_API_KEY_2}`
  );
  const res = await req.json();
  return res;
}
