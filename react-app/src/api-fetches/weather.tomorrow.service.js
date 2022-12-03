export async function getWeatherInfo(lat, long, startTimeIso, endTimeIso) {
  const REACT_APP_API_URL = "https://api.tomorrow.io/v4/timelines?";
  const REACT_APP_API_KEY_2 = "Ow4GH5JTTJpmEL3L9vuxyrmIAxhzheX8";
  const req = await fetch(
    `${REACT_APP_API_URL}location=${lat},${long}&fields=temperature&timesteps=1h&units=metric&startTime=${startTimeIso}&endTime=${endTimeIso}&apikey=${REACT_APP_API_KEY_2}`
  );
  const res = await req.json();
  return res;
}
export async function getWeatherInfo2(lat, long, startTimeIso, endTimeIso) {
  const REACT_APP_API_URL = "https://api.tomorrow.io/v4/timelines?";
  const REACT_APP_API_KEY_3 = "jwEdY50lP2yHQiEpemGpngauIkvRMqyg";
  const req = await fetch(
    `${REACT_APP_API_URL}location=${lat},${long}&fields=weatherCode&temperature&timesteps=1h&units=metric&startTime=${startTimeIso}&endTime=${endTimeIso}&apikey=${REACT_APP_API_KEY_3}`
  );
  const res = await req.json();
  return res;
}
