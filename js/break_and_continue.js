"use strict"
let userInput;

while (true) {
    userInput = prompt('Please enter an odd number between 1 and 50:');
    if (userInput >= 1 && userInput <= 50 && userInput % 2 !== 0) {
        break;
    }
}

console.log(`Number to skip is: ${userInput}`);

for (let i = 1; i <= 50; i += 2) {
    if (i === parseInt(userInput)) {
        console.log(`Yikes! Skipping number: ${userInput}`);
        continue;
    }
    console.log(`Here is an odd number: ${i}`);
}
