// $(function () {
//     let miami = [-80.19719610443641, 25.76504860987099];
//
//     function updateWeather() {
//         $.get("https://api.openweathermap.org/data/2.5/forecast", {
//             APPID: OWM_KEY,
//             lat: miami[1],
//             lon: miami[0],
//             units: "imperial",
//         }).done(function (data) {
//             const forecasts = data.list.slice(0, 7); // Get the first 7 forecasts
//
//             let html = '';
//             const today = new Date();
//             forecasts.forEach(function (forecast, index) {
//                 const date = new Date(today.getTime() + (index * 24 * 60 * 60 * 1000)); // Add index days to today's date
//                 const weatherInfo = forecast.weather[0].description;
//                 const temperature = forecast.main.temp;
//
//
//                 const forecastHTML = `
//             <div class="weather-box">
//               <h2>${date.toLocaleDateString('en-US', { weekday: 'long' })}</h2>
//               <p>${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
//               <p>${weatherInfo}</p>
//               <p>${temperature}°F</p>
//             </div>
//           `;
//
//                 html += forecastHTML;
//             });
//
//             $("#weather-forecast").html(html);
//         });
//     }
//     updateWeather();
//
//     // creates map
//     mapboxgl.accessToken = myMapboxKey;
//     const coordinates = document.getElementById("coordinates");
//     const map = new mapboxgl.Map({
//         container: "map",
//         // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
//         style: "mapbox://styles/mapbox/streets-v12",
//         center: miami,
//         zoom: 9,
//     });
//     //creates marker
//     const marker = new mapboxgl.Marker({
//         draggable: true,
//     })
//         .setLngLat(miami)
//         .addTo(map);
//     // gets coordinates and displays it
//     function onDragEnd() {
//         const lngLat = marker.getLngLat();
//         miami = [];
//         miami.push(lngLat.lng, lngLat.lat);
//         coordinates.style.display = "block";
//         // let newCoordinates = [lngLat.lat, lngLat.lng];
//         coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
//         updateWeather();
//     }
//     marker.on("dragend", onDragEnd);
// });
// // $(`#forecast`).html(html);
// // $("#weather").html();























// $(function () {
//     let miami = [-80.19719610443641, 25.76504860987099];
//     function updateWeather() {
//         $.get("https://api.openweathermap.org/data/2.5/forecast", {
//             APPID: OWM_KEY,
//             lat: miami[1],
//             lon: miami[0],
//             units: "imperial",
//         }).done(function (data) {
//             const forecasts = data.list.slice(0, 7); // Get the first 7 forecasts
//
//             let html = '';
//             const today = new Date();
//             forecasts.forEach(function (forecast, index) {
//                 const date = new Date(today.getTime() + index * 24 * 60 * 60 * 1000); // Add index days to today's date
//                 const weatherInfo = forecast.weather[0].description;
//                 const temperature = forecast.main.temp;
//
//                 const forecastHTML = `
//           <div class="weather-box">
//             <h2>${date.toLocaleDateString("en-US", { weekday: "long" })}</h2>
//             <p>${date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</p>
//             <p>${weatherInfo}</p>
//             <p>${temperature}°F</p>
//           </div>
//         `;
//                 html += forecastHTML;
//             });
//
//             $("#weather-forecast").html(html);
//         });
//     }
//     updateWeather();
//     // creates map
//     mapboxgl.accessToken = myMapboxKey;
//     const coordinates = document.getElementById("coordinates");
//     const map = new mapboxgl.Map({
//         container: "map",
//         style: "mapbox://styles/mapbox/streets-v12",
//         center: miami,
//         zoom: 9,
//     });
//     //creates marker
//     const marker = new mapboxgl.Marker({
//         draggable: true,
//     })
//         .setLngLat(miami)
//         .addTo(map);
//     // gets coordinates and displays it
//     function onDragEnd() {
//         const lngLat = marker.getLngLat();
//         miami = [];
//         miami.push(lngLat.lng, lngLat.lat);
//         coordinates.style.display = "block";
//         coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
//         updateWeather();
//     }
//     marker.on("dragend", onDragEnd);
//
//     // Search by city
//     $("#search-city-form").submit(function (event) {
//         event.preventDefault();
//         const cityName = $("#city-input").val();
//         searchByCity(cityName);
//     });
//     function searchByCity(cityName) {
//         $.get("https://api.openweathermap.org/data/2.5/weather", {
//             APPID: OWM_KEY,
//             q: cityName,
//             units: "imperial",
//         }).done(function (data) {
//             const { lat, lon } = data.coord;
//             miami = [lon, lat];
//             map.setCenter(miami);
//             marker.setLngLat(miami);
//             updateWeather();
//         });
//     }
//     // Search by latitude and longitude
//     $("#search-latlon-form").submit(function (event) {
//         event.preventDefault();
//         const latitude = parseFloat($("#latitude-input").val());
//         const longitude = parseFloat($("#longitude-input").val());
//         searchByLatLon(latitude, longitude);
//     });
//     function searchByLatLon(latitude, longitude) {
//         miami = [longitude, latitude];
//         map.setCenter(miami);
//         marker.setLngLat(miami);
//         updateWeather();
//     }
// });




















$(function () {
    let miami = [-80.19719610443641, 25.76504860987099];
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

                const forecastHTML = `
          <div class="weather-box">
            <h2>${date.toLocaleDateString("en-US", { weekday: "long" })}</h2>
            <p>${date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</p>
            <p>${weatherInfo}</p>
            <p>${temperature}°F</p>
          </div>
        `;
                html += forecastHTML;
            });

            $("#weather-forecast").html(html);
        });
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
