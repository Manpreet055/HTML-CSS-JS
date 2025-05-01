let time = 1746063831;
function getSunTime(timestamp) {
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let date = new Date(timestamp * 1000);
  let dubai = date.toLocaleString("en-US", {
    timeZone: timeZone,
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}
