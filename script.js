const apiKey = "241d767b278ea45018ba42868ef2b2b2"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        alert("City not found 😢");
        return;
    }

    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // Change icon based on weather condition
    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "clouds.png";
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "clear.png";
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "rain.png";
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "drizzle.png";
    } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "mist.png";
    } else {
        weatherIcon.src = "clouds.png"; // fallback
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        alert("City not found 😢");
        return;
    }

    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // Change icon based on weather condition
    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "clouds.png";
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "clear.png";
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "rain.png";
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "drizzle.png";
    } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "mist.png";
    } else {
        weatherIcon.src = "clouds.png"; // default
    }

    // 👉 Trigger fade-in animation
    const card = document.querySelector(".card");
    card.classList.remove("fade-in"); // reset
    void card.offsetWidth; // trick to restart animation
    card.classList.add("fade-in");
}
