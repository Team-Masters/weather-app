//const address = 'Lange Molenstraat 3, 8200 Sint-Andries, Brugge';
const addresus =
  "Basic-Fit Kortrijk Meensestraat, Meensestraat 9, 8500 Kortrijk, België";
export function ConvertAddress(address) {
  return new Promise((resolve, reject) => {
    var url = `https://nominatim.openstreetmap.org/search?format=json&limit=3&q=${addresus}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}
