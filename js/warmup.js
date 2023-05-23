// function fizzBuzz () {
//     for(let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("fizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("fizz");
//     } else if (i % 5 === 0) {
//         console.log("buzz");
//     } else {
//         console.log(i)
//     }
//     }
// }
// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("fizz");
//         } else if (i % 5 === 0) {
//             console.log("buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz()

// let num = 2 ;
// do {
//     console.log(num);
//     num = num * num;
// } while (num < 1000000);


// Write a function that takes in an array of numbers and returns
// all of the numbers added together (We'll be assuming that only
// arrays are going to be used with this function).

// function addEmUp(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }
//
// console.log(addEmUp([2,6,19])); // returns 27
// console.log(addEmUp([-99, 180, -5])); // returns 76
// console.log(addEmUp([44,10,7])); // returns 61
// console.log(addEmUp([-100])); // returns -100
// console.log(addEmUp([1,2,3,4,5,6,7,8,9,10])); // returns 55
// console.log(addEmUp([-13, -92, -3500])) // returns -3605


// Write a function that takes in a string and returns an object
// describing the string. The object should have a string property
// that contains the original string, a numberOfEs property that
// contains a count of the number of e's in the string ' +
// '(case-insensitive), and a isEvenLength property that contains ' +
// 'a boolean for whether the string's length is even or not.

// function Explain(str) {
//     const numbersOfEs = (str.match(/e/gi) || []).length;
//     const isEvenLength = str.length % 2 === 0;
//     return {
//         string: str,
//         numbersOfEs: numberOfEs,
//         isEvenLength: isEvenLength
//     };
// }
//
// const result = Explain("cheese");
// console.log(result);
// console.log(Explain("cheese"))  // returns {string: "cheese", numberOfEs: 3, isEvenLength: true}
// console.log(Explain("dog"))  // returns {string: "dog", numberOfEs: 0, isEvenLength: false}


// Write a function that takes in an array of objects and returns the object with the largest heightInMM property
//
// const getTallest = function(){};
//
// console.log(getTallest(hamsters)); // returns {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"}
//
// const getTallest = function(arr) {
//     let tallest ={heightInMM: 0};
//     arr.forEach(function(obj) {
//         if (obj.heightInMM > tallest.heightInMM) {
//             tallest = obj;
//         }
//     });
//     return tallest ;
// }
// // function Tallest(object) {
// //     return object.reduce((tallestObject, currentObject) => {
// //         return currentObject.heightInMM > tallestObject.heightInMM ? currentObject : tallestObject;
// //     });
// // }
// //
// // const hamsters = [
// //     { name: "Fluffy", heightInMM: 100, fur: ['brown', 'white'], gender: "female", dateOfBirth: "June 15" },
// //     { name: "Snowball", heightInMM: 90, fur: ['white'], gender: "male", dateOfBirth: "April 10" },
// //     { name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21" },
// //     { name: "Nibbles", heightInMM: 110, fur: ['gray'], gender: "female", dateOfBirth: "November 3" }
// // ];
// //
// // console.log(Tallest(hamsters));
// console.log(getTallest(hamsters));

// const hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     } , {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     } , {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "September 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];
//
// function extractNames() {}

// Write a function that takes in an array of objects and returns the object
// with the most colors in the fur array.

// function mostColorful(hamsters) {
//     return hamsters.reduce((mostColorful, current) => {
//         if (current.fur.length > mostColorful.fur.length) {
//             return current;
//         } else {
//             return mostColorful;
//         }
//     });
// }
//
// console.log(mostColorful(hamsters)); // returns {name: "Snoozer", heightInMM: 85, fur: ['brown', 'white', "pink"], gender: "male", dateOfBirth: "January 14"};
//

// function describeNumber(number) {
//     var result = {
//         number: number,
//         evenOrOdd: number % 2 === 0 ? "even" : "odd",
//         factors: [],
//         numberOfDigits: number.toString().length
//     };
//
//     for (var i = 1; i <= number; i++) {
//         if (number % i === 0) {
//             result.factors.push(i);
//         }
//     }
//
//     return result;
// }
//
// console.log(describeNumber(19)); // returns {number: 19, evenOrOdd: "odd", factors: [1,19], numberOfDigits: 2};
// console.log(describeNumber(2)); // returns {number: 2, evenOrOdd: "even", factors: [1,2], numberOfDigits: 1};

function analyzeString(str) {
    var stringProperties = {
        string: str,
        numberOfWords: str.split(' ').length,
        instancesOfE: (str.match(/[eE]/g) || []).length
    };
    return stringProperties;
}


console.log(analyzeString("aererE"));

function getPricePerItem(item) {
    // Calculate the price per item by dividing the total price by the quantity
    const pricePerItem = item.totalPrice / item.quantity;
    // Format the price per item as a string with two decimal places
    const formattedPrice = pricePerItem.toFixed(2);
    // Prepend the currency symbol "$" to the formatted price
    const priceWithSymbol = "$" + formattedPrice;
    // Return the price per item string
    return priceWithSymbol;
}

let potatoes = {
    name: "potatoes",
    quantity: 20,
    totalPrice: 47
};

getPricePerItem(potatoes);









