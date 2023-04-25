(function() {
    "use strict";

    const planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    // TODO: Convert planetsString to an array, and save it in a variable named planetsArray.
    const planetsArray = planetsString.split("|");

    // TODO: console.log planetsArray to check your work
    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    const planetsStringWithBr = planetsArray.join("<br>");
    console.log(planetsStringWithBr);

    // Add the planetsStringWithBr string to the HTML document
    document.getElementById("put-here").innerHTML = planetsStringWithBr;

    // BONUS: Create a string that would display your planets in an unordered list.
    // You will need opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    const planetsUL = `<ul>${planetsArray.map(planet => `<li>${planet}</li>`).join('')}</ul>`;

    // Add the planetsUL string to the HTML document
    document.getElementById("put-here").innerHTML += planetsUL;
})();

