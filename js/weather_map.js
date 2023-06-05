$(function () {
    let miami = [-95.3698, 29.7604];
    let marker;

    function updateWeather() {
        $.get("https://api.openweathermap.org/data/2.5/forecast", {
            APPID: OWM_KEY,
            lat: miami[1],
            lon: miami[0],
            units: "imperial",
        }).done(function (data) {
            const forecasts = data.list.slice(0, 7); // Get the first 7 forecasts

            let html = '';
            const today = new Date();
            forecasts.forEach(function (forecast, index) {
                const date = new Date(today.getTime() + index * 24 * 60 * 60 * 1000); // Add index days to today's date
                const weatherInfo = forecast.weather[0].description;
                const temperature = forecast.main.temp;
                const humidity = forecast.main.humidity;
                const precipitation = forecast.pop; // Probability of precipitation (chance of rain)

                const weatherIconClass = getWeatherIconClass(weatherInfo); // Get the corresponding Font Awesome icon class

                const forecastHTML = `
        <div class="weather-box">
          <h2>${date.toLocaleDateString("en-US", { weekday: "long" })}</h2>
          <p>${date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</p>
          <p><i class="${weatherIconClass}"></i></p>
          <p>Temperature: ${temperature}°F</p>
          <p>Humidity: ${humidity}%</p>
          <p>Chance of Precipitation: ${precipitation}%</p>
        </div>
      `;
                html += forecastHTML;
            });

            $("#weather-forecast").html(html);
        });
    }

    function getWeatherIconClass(weatherInfo) {
        let weatherIconClass = "";
        // Add conditions to map weather info to the corresponding Font Awesome icon class
        if (weatherInfo.includes("clear sky")) {
            weatherIconClass = "fas fa-sun";
        } else if (weatherInfo.includes("light rain")) {
            weatherIconClass = "fas fa-cloud-rain";
        } else if (weatherInfo.includes("heavy intensity rain")) {
            weatherIconClass = "fas fa-bolt";
        } else if (weatherInfo.includes("moderate rain")) {
            weatherIconClass = "fas fa-cloud-showers-heavy";
        } else if (weatherInfo.includes("overcast clouds")) {
            weatherIconClass = "fas fa-cloud";
        } else if (weatherInfo.includes("broken clouds")) {
            weatherIconClass = "fas fa-cloud-sun";
        } else if (weatherInfo.includes("scattered clouds")) {
            weatherIconClass = "fas fa-cloud-meatball";
        } else if (weatherInfo.includes("few clouds")) {
            weatherIconClass = "fas fa-cloud";
        } else {
            weatherIconClass = "fas fa-question-circle";
        }
        return weatherIconClass;
    }

    updateWeather();
    // creates map
    mapboxgl.accessToken = myMapboxKey;
    const coordinates = document.getElementById("coordinates");
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v12",
        center: miami,
        zoom: 9,
    });

    // function to add or update marker
    function addOrUpdateMarker(lngLat) {
        if (marker) {
            marker.setLngLat(lngLat);
        } else {
            marker = new mapboxgl.Marker({
                draggable: true,
            })
                .setLngLat(lngLat)
                .addTo(map);
        }
    }

    // add initial marker
    addOrUpdateMarker(miami);

    // function to handle marker dragend event
    function onDragEnd() {
        const lngLat = marker.getLngLat();
        miami = [];
        miami.push(lngLat.lng, lngLat.lat);
        coordinates.style.display = "block";
        coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
        updateWeather();
    }

    // event listener for marker dragend
    marker.on("dragend", onDragEnd);

    // event listener for map click
    map.on("click", function (e) {
        const lngLat = [e.lngLat.lng, e.lngLat.lat];
        addOrUpdateMarker(lngLat);
        onDragEnd();
    });

    // Search by city
    $("#search-city-form").submit(function (event) {
        event.preventDefault();
        const cityName = $("#city-input").val();
        searchByCity(cityName);
    });
    function searchByCity(cityName) {
        $.get("https://api.openweathermap.org/data/2.5/weather", {
            APPID: OWM_KEY,
            q: cityName,
            units: "imperial",
        }).done(function (data) {
            const { lat, lon } = data.coord;
            miami = [lon, lat];
            map.setCenter(miami);
            addOrUpdateMarker(miami);
            updateWeather();
        });
    }

    // Search by latitude and longitude
    $("#search-latlon-form").submit(function (event) {
        event.preventDefault();
        const latitude = parseFloat($("#latitude-input").val());
        const longitude = parseFloat($("#longitude-input").val());
        searchByLatLon(latitude, longitude);
    });
    function searchByLatLon(latitude, longitude) {
        miami = [longitude, latitude];
        map.setCenter(miami);
        addOrUpdateMarker(miami);
        updateWeather();
    }
});