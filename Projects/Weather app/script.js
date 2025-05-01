let longitude;
let latitude;
let cityName = document.querySelector(".cityName");
let weatherCondition = document.querySelector(".condition");
let humidity = document.querySelector(".humidity-unit");
let sunRise = document.querySelector(".sunRise");
let sunSet = document.querySelector(".sunSet");
let windSpeed = document.querySelector("#windSpeed");
let temperature = document.querySelector(".temperature");
let pressure = document.querySelector("#pressure__unit");
let groundLevel = document.querySelector("#groundLevel__unit");
let feelsLike = document.querySelector("#feelslike__unit");
let seaLevel = document.querySelector("#seaLevel__unit");
let visibility = document.querySelector("#visibility__unit");
let averageTemprature = document.querySelector("#avgTemp__unit");

cityName.textContent = "Locating..";
navigator.geolocation.getCurrentPosition(
  (position) => {
    // Success callback
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;
    console.log("Latitude:", position.coords.latitude);
    console.log("Longitude:", position.coords.longitude);
    getWeatherData();
  },
  (error) => {
    // Error callback
    console.error("Error Code:", error.code, "-", error.message);
  }
);
let weatherData = [];
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
async function getWeatherData() {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${"c1482848b4593d224d394f35ca73bdab"}`
    );
    if (!response.ok) {
      throw new Error("Something went Wrong..");
    }
    weatherData = await response.json();

    cityName.textContent = weatherData.name;

    weatherCondition.textContent = capitalize(
      weatherData.weather[0].description
    );

    humidity.textContent = weatherData.main.humidity + "%";

    let sunRiseTiming = getSunTime(weatherData.sys.sunrise);
    let sunSetTiming = getSunTime(weatherData.sys.sunset);
    sunRise.textContent = sunRiseTiming;
    sunSet.textContent = sunSetTiming;

    let speed = weatherData.wind.speed * 3.6;
    windSpeed.textContent =
      windSpeed.textContent + "   " + speed.toFixed(1) + " " + "km/h";

    let temp = weatherData.main.temp - 273.15;
    temperature.textContent = parseInt(temp) + "\u00B0";

    let data = weatherData.main;
    let hpa = " " + "hPa";
    pressure.textContent = data.pressure + hpa;
      feelsLike.textContent = (data.feels_like-273.15).toFixed(0) + "\u00B0";
      groundLevel.textContent = data.grnd_level + hpa;
      seaLevel.textContent = data.sea_level + hpa;
      visibility.textContent = (weatherData.visibility / 1000).toFixed(1) + " km/h";

      let mintemp = weatherData.main.temp_min;  
      let maxtemp = weatherData.main.temp_max;  
      let avgtemp = ((mintemp - 273.15) + (maxtemp - 273.15)) / 2;
      averageTemprature.textContent = Math.floor(avgtemp) + "\u00B0";
      
    console.log(weatherData);
  } catch (error) {
    console.error(error.message);
  }
}

function getSunTime(timestamp) {
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let date = new Date(timestamp * 1000);
  let dubai = date.toLocaleString("en-US", {
    timeZone: timeZone,
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return dubai;
}

async function getForecastData() {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Dubai&appid=${"c1482848b4593d224d394f35ca73bdab"}`);
        if (!response.ok) {
            throw ("Something Went Wrong...");
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
}
getForecastData();