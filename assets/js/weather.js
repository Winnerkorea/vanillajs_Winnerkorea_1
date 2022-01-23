const API_KEY = "74da085cb3744958b19d76ef35982bad";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather-temp");
      const city = document.querySelector("#weather-city");
      const sky = document.querySelector("#weather-sky");
      city.innerHTML = data.name;
      weather.innerHTML = data.weather[0].main;
      sky.innerHTML = `${data.main.temp}&#176 C`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
