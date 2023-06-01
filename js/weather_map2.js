mapboxgl.accessToken = myMapboxKey;
var map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    zoom: 12, // starting zoom
    center: [-157.8581,21.3099 ], // [lng, lat]

});

let places = [
    {
        name: "",
        location: [],
        description:
            "",
        menuLink: "",
    },
    {
        name: "",
        location: [],
        description: "",
        menuLink: "",
    },
    {
        name: "",
        location: [],
        description:
            "",
        menuLink: "",
    },
];


let currentMarkers = []

function makeMarkers() {
    places.forEach(function (items) {
        let popup = new mapboxgl.Popup().setHTML(
            `<h3>${items.name}</h3><p>${items.description}</p><a href=${items.menuLink} target='_blank'>Menu</a>`
        );
        var marker = new mapboxgl.Marker()
            .setLngLat(items.location)
            .addTo(map)
            .setPopup(popup);

        currentMarkers.push(marker)
    });

}

function removeMarkers() {
    if (currentMarkers !== null) {
        for (let i = currentMarkers.length - 1; i >= 0; i--)
            currentMarkers[i].remove()
    }
}

let userName = document.querySelector("#name");
let zip = document.querySelector('#zip')

function addUserMarker() {
    let popup = new mapboxgl.Popup().setHTML(
        `<h3>${userName.value}'s Location</h3>`
    );
    let userLocation = geocode(`${zip.value}`, myMapboxKey)
    userLocation.then(function (data) {
        var marker = new mapboxgl.Marker()
            .setLngLat(data)
            .addTo(map)
            .setPopup(popup);
        map.flyTo({
            center: data,
            essential:true,
        })

        currentMarkers.push(marker)
    })
}


document.querySelector('#zip-button').addEventListener('click', addUserMarker)

document.querySelector("#add-markers").addEventListener("click", makeMarkers);

document.querySelector("#remove-markers").addEventListener("click", removeMarkers)
