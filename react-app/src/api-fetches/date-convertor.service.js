export async function dateConvertor(isoStr1) {
  const date = new Date(isoStr1);

  const timestampWithOffset = date.getTime();

  const offset = date.getTimezoneOffset() * 60 * 1000;
  console.log(offset); // 👉️ -10800000
  const timestampWithoutOffset = timestampWithOffset - offset;

  const dateWithOffset = new Date(timestampWithOffset);
  console.log(dateWithOffset); // 👉️ Thu Jul 21 2022 12:35:31 GMT+0300

  const dateWithoutOffset = new Date(timestampWithoutOffset);
  console.log(dateWithoutOffset); // 👉️ Thu Jul 21 2022 15:35:31 GMT+0300

  return dateWithoutOffset;
}
