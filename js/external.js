"use strict"
alert("Welcome to my Website!")
console.log("Hello from external JavaScript");

var userInput = prompt( 'What is your favorite color?');
alert(`Great,${userInput} is my favorite color too!`);
console.log('The user entered: ' + userInput);
// 1st exercise
var littleMermaidDays = parseInt(prompt("How many days are you renting The Little Mermaid for?"));
var brotherBearDays = parseInt(prompt("How many days are you renting Brother Bear for?"));
var herculesDays = parseInt(prompt("How many days are you renting Hercules for?"));

var totalDays = littleMermaidDays + brotherBearDays + herculesDays;
var totalPrice = totalDays * 3;

alert(`You will have to pay ${totalPrice} for renting the movies.`)

// 2nd exercise
var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;
var googleHours = parseInt(prompt("How many hours did you work for Google?"));
var amazonHours = parseInt(prompt("How many hours did you work for Amazon?"));
var facebookHours = parseInt(prompt("How many hours did you work for Facebook?"));



console.log(`Total payment: ${totalPayment}`);
var totalPayment = (googleHours * googleRate) + (amazonHours * amazonRate) + (facebookHours * facebookRate);
alert(`Your total payment for this week is $${totalPayment}.`);

//3rd exercise
let userInputClassFull = prompt('Is the class full? (type yes or no)');
let userInputClassSchedule = prompt('Does it conflict with the schedule? (type yes or no)');

if (userInputClassFull === "yes"){
    if (userInputClassSchedule === "yes"){
        console.log("You cannot be enrolled at this time")
    } else {
        alert("You are enrolled")
    }
    alert("You cannot be enrolled at this time")
} else {
    alert("You are enrolled")
}

//4th exercise
const numberOfItems = prompt('How many items did you buy?');
const offerExpired = false;
const isPremiumMember = confirm(prompt('Are you a premium member?'));

const canApplyOffer = (!offerExpired && numberOfItems > 2) || isPremiumMember;

alert(`Can apply offer: ${canApplyOffer}`);



