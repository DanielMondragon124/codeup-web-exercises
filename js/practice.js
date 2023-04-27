'use strict';
// let person = {
//     name: "Daniel",
//     eyeColor: "Black",
//     age: 22,
//     updateAge: function() {
//         return ++person.age;
//     }
// }
//easier way
// Object Constructors
// function Person(name, eyeColor, age) {
//     this.name = name;
//     this.eyeColor = eyeColor;
//     this.age = age;
//     this.updateAge = function() {
//         return ++this.age;
//     };
// }
// let person01 =new Person("Daniel", "Brown", 22);
// let person02 =new Person("Jessica", "Blue", 26);
// let person03 =new Person("Bob", "Black", 45);
// let person04 =new Person("Maurice", "Grey", 24);
//
// console.log(person01.name, person01.eyeColor, person01.updateAge());
// console.log(person02.name, person02.eyeColor, person02.updateAge());
// console.log(person03.name, person03.eyeColor, person03.updateAge());
// console.log(person04.name, person04.eyeColor, person04.updateAge());
//
// // Line executes the code at a certain interval that it measures in Milliseconds
// var count = 0
// var max = 5
// var interval = 500; // In Milliseconds
//
// var intervalId = setInterval(function () {
//     if (count >= max) {
//         clearInterval(intervalId);
//         console.log('All done');
//     } else {
//         count++;
//         console.log('Repeating this line ' + count);
//     }
// }, interval);

function remainder(num1, num2) {
    // Check if both arguments are numbers
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return false;
    }

    // Return the remainder of the division
    return num1 % num2;
}
function containsAce(str) {
    // Check if the argument is a string
    if (typeof str !== 'string') {
        return false;
    }

    // Convert both the argument and the search string to lowercase for case-insensitive matching
    str = str.toLowerCase();
    var searchStr = 'ace';
    searchStr = searchStr.toLowerCase();

    // Check if the search string is found within the argument string
    if (str.indexOf(searchStr) !== -1) {
        return true;
    } else {
        return false;
    }
}
function stringsAreSameLength(str1, str2) {
    // Check if both arguments are strings and have the same length
    if (typeof str1 === 'string' && typeof str2 === 'string' && str1.length === str2.length) {
        return true;
    } else {
        return false;
    }
}
