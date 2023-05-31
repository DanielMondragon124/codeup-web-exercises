"use strict";

$(function() {

    // $.ajax('https://pokeapi.co/api/v2/pokemon/charmande').done(function (data, status, jqXhr) {
    //     console.log("AJAX call completed successfully!");
    //     console.log("Request status: " + status);
    //     console.log("Data returned from server:");
    //     console.log(data);
    //     console.log(data.name)
    // }).fail(function (jqXhr, status, error) {
    //     console.log("There was an error! Check the console for details");
    //     console.log("Response status: " + status);
    //     console.log("Error object: " + error);

    // fetch('https://pokeapi.co/api/v2/pokemon/charmander').then(response =>
    //     response.json()).then(response => console.log(response))

    // })


    $("#submitButton").on('click', searchSWApi);



    function searchSWApi(e){
        e.preventDefault()


        let userInput = $("#swInput").val();

        $.get('https://swapi.dev/api/people/?search=' + userInput).done(function(data) {
            console.log(data);

            $('#starwars').html(
                '<div class="row">' +
                '<div class="col-6">Name</div>' +
                '<div class="col-6">Date of Birth</div>' +
                '<div class="col-6">' + data.results[0].name + '</div>' +
                '<div class="col-6">' + data.results[0].birth_year + '</div>' +
                '</div>'
            );
        });
    }



})