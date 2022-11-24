//const address = 'Lange Molenstraat 3, 8200 Sint-Andries, Brugge';
const addresus =
  "Basic-Fit Kortrijk Meensestraat, Meensestraat 9, 8500 Kortrijk, België";
export function ConvertAddress2(address) {
  const API_KEY =
    "RVVfN2ZkYTc5ZTE4NDIzNDNkMTg0NzFlNzI1NjI5N2U5YWY6ZGEwMjlhYjEtOTUwYi00YWRmLWI3MDYtMTZlOGIzZTBjZDcy";
  return new Promise((resolve, reject) => {
    var url = `https://api.myptv.com/geocoding/v1/locations/by-text?searchText=${address}&apiKey=${API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}
