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
const googleHours = parseInt(prompt("How many hours did you work for Google?"));
const amazonHours = parseInt(prompt("How many hours did you work for Amazon?"));
const facebookHours = parseInt(prompt("How many hours did you work for Facebook?"));



console.log(`Total payment: $${totalPayment}`);
var totalPayment = (googleHours * googleRate) + (amazonHours * amazonRate) + (facebookHours * facebookRate);
alert(`Your total payment for this week is $${totalPayment}.`);

//3rd exercise
const classIsFull = false;
const scheduleConflicts = false;

const canEnroll = !classIsFull && !scheduleConflicts;

if (canEnroll) {
    alert("You can enroll in the class!");
} else {
    alert("Sorry, you cannot enroll in the class.");
}
//4th exercise
const numberOfItems = prompt('How many items did you buy?');
const offerExpired = false;
const isPremiumMember = confirm('Are you a premium member?');

const canApplyOffer = (!offerExpired && numberOfItems > 2) || isPremiumMember;
alert(`Can apply offer: ${canApplyOffer}`);


