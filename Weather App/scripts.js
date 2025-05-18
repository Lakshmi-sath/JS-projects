const accessKey = "9e594be0a820e31ca96ac569a69df377";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;

const weatherForm = document.getElementById("weather-form");
const inputCity = document.getElementById("input-city");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
	const response = await fetch(apiURL + city + `&appid=${accessKey}`);

	if (response.status === 404) {
		document.querySelector(".error").style.display = "block";
		document.querySelector(".weather").style.display = "none";
	} else {
		const data = await response.json();

		console.log(data);

		document.querySelector(".city").innerHTML = data.name;
		document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
		document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
		document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

		if (data.weather[0].main === "Clouds") {
			weatherIcon.src = "images/clouds.png";
		} else if (data.weather[0].main === "Clear") {
			weatherIcon.src = "images/clear.png";
		} else if (data.weather[0].main === "Drizzle") {
			weatherIcon.src = "images/drizzle.png";
		} else if (data.weather[0].main === "Mist") {
			weatherIcon.src = "images/mist.png";
		} else if (data.weather[0].main === "Rain") {
			weatherIcon.src = "images/rain.png";
		} else if (data.weather[0].main === "Rain") {
			weatherIcon.src = "images/rain.png";
		}

		document.querySelector(".weather").style.display = "block";
		document.querySelector(".error").style.display = "none";
	}
}

weatherForm.addEventListener("submit", (e) => {
	e.preventDefault();
	checkWeather(inputCity.value);
});
