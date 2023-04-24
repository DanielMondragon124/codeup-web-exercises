// ******* Arrays ******
// array = a special variable,
// that can hold more than one value.
//
//Each "space" is known as an element
//array = a special variable, that can hold more than one value.
//
//Each "space" is known as an element
//
//you access elements in an array by referring to the index number ex.[0]
//
let falsevalues = [0, "", false, undefined, null] // we can collect different sata types using arrays.
//However this can lead to some unintended results with a looping/iterative structure
var cars =["Mustang","BMW","Audi"];

console.log(cars[1]);

cars.push("Tesla"); // add an element
cars.pop();         // removes last element

var numberOfCars = cars.lenght; // returns length of array

cars = cars.sort(); // sorts an array alphabetically/numerically
cars = cars.reverse(); //reverse sort an array


console.log(cars);
console.log(numberOfCars);
// console.log(cars.indexOf("BMW"));
//console.log(cars[0].indexOf("lexus") will return -1 since it does not exist
// Lets create a loop to print all of our cars on to the console
//for (let i = 0; i < cheeses.length; i++) {
//console.log(cheeses[i]);
// }
// for Each Version
// cars.forEach(function (car) {
//console.log(cheese);
//});
//Array iterations 8 methods

//forEach = this code shows all the items in the array in order by showing their index number as well
[1,2,3].forEach(function (item, index){
    console.log(item, index);
});
//this code shows all the items in the array in order by showing their index number as well


//map = it takes the item in the array does something to do it and outs it back in the array
const three = [1,2,3];
const double = three.map(function (item) {
    return item * 2;
});
console.log(double);


//filter picking out an element from the array with whatever condition you assign it this one specifically checks for
const inst =[1,2,3];
const evens = inst.filter(function(item) {
    return item % 2 === 0;
});
console.log(evens);

//reduce this here goes through the elements and one by one adding them together and returning the sum at the end
const sum = [1, 2, 3].reduce(function (result, item) {
    return result + item;
}, 0);
console.log(sum)

// some checks the items in the array meets a condition
const hasNegativeNumbers = [1, 2, 3, -1, 4].some(function (item) {
    return item < 0;
});
console.log(hasNegativeNumbers);

// every check's if all the items in tha array meets the condition
const allPositiveNumbers = [1,2,3].every(function (item) {
    return item > 0;
});
console.log(allPositiveNumbers);

// find
const objects = [{ id: 'a'},{ id: 'b'}, { id: 'c'}];
const foundIndex = objects2.findIndex(function (item) {
    return item.id === 'b';
});
console.log(found);






























