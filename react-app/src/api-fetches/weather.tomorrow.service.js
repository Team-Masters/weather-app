export async function getWeatherInfo(lat, long, startTimeIso, endTimeIso) {
  const REACT_APP_API_URL = "https://api.tomorrow.io/v4/timelines?";
  const REACT_APP_API_KEY_2 = "Ow4GH5JTTJpmEL3L9vuxyrmIAxhzheX8";
  const REACT_APP_API_KEY_5 = "B0l53NsjBM4PRE5zRwALScnbBeR5hcA"


  const req = await fetch(
    `${REACT_APP_API_URL}location=${lat},${long}&fields=temperature&timesteps=1h&units=metric&startTime=${startTimeIso}&endTime=${endTimeIso}&apikey=${REACT_APP_API_KEY_5}`
  );
  const res = await req.json();
  return res;
}
export async function getWeatherInfo2(lat, long, startTimeIso, endTimeIso) {
  const REACT_APP_API_URL = "https://api.tomorrow.io/v4/timelines?";
  const REACT_APP_API_KEY_3 = "jwEdY50lP2yHQiEpemGpngauIkvRMqyg";
  const REACT_APP_API_KEY_4 = "JYSXXmJsfEEKombU7k0U4Ll1V1ODyinD"
  const req = await fetch(
    `${REACT_APP_API_URL}location=${lat},${long}&fields=weatherCode&temperature&timesteps=1h&units=metric&startTime=${startTimeIso}&endTime=${endTimeIso}&apikey=${REACT_APP_API_KEY_4}`
  );
  const res = await req.json();
  return res;
}
