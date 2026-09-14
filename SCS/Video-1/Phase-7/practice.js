// Create an array with 3 fruits and print the second fruit.

let fruit = ["apple", "banana", "mango"];
fruit[1];

/* Add "Mango" at the end and "pineapple" at the beginning of this array:
["Apple","Banana"] */

let fruits_basket1 = ["Apple", "Banana"];
fruits_basket1.push("Mango");
fruits_basket1.unshift("Pineapple");

// Replace "Banana" wtih "Kiwi" in the array above.

let fruits_basket2 = ["Apple", "Banana"];
fruits_basket2.pop();
fruits_basket2.push("Kiwi");

// remove the last element form this array:

let numbers = [1, 2, 3, 4];
numbers.pop();

// Insert "Red" and "Blue" at index 1 in thsi array:

let colors = ["Green", "Yellow"];
colors.splice(1,0,"Red", "Blue");

// Extract only the middle 3 elements from this array

let items = [1, 2, 3, 4, 5, 6, 7];
let newitems = items.slice(2,5);

// Sort this array alphabetically and then reverse it:

let names = ["Zara", "Arjun", "Mira", "Bhavya"];
names.sort().reverse()

// Use .map() to square each number:

let number_1 = [1,2,3,4];
let squareNumber = number_1.map(function (val) {
  return val ** 2;
})

// Use.filter() to keep numbers greater than 10;

let number_2 = [5, 12, 8, 20, 3];
let xgreater10 = number_2.filter((val) => {
   return val>10;
})

// Use .reduce() to find sum of this array:

let arr1 = [10, 20, 30];
let newarr1 = arr1.reduce(function (acc, val) {
  return acc + val;
},0);

// Use .find() to get the first number less than 10;

let arr2 =  [12, 15, 3, 8, 20];
let newarr2 = arr2.find(function (val) {
  return val < 10;
})

// Use .some to check if any scored below 35:

let arr3 = [45, 60,28, ,90];
let newarr3 = arr3.some(function (val){
  return val < 35
})

// Use .every to check if all numbers are even

let arr4 = [2, 4, 6, 8, 10];
let newarr4= arr4.every(function (val) {
  return val % 2 === 0;
})

// destructure this array to get firstName and lastName

let fullNames = ["Rushaan", "Lgpal"];
let [firstName , LastName] = fullNames

// Merge two arrays using spread opreator

let a = [1,2];
let b = [3,4];

let c = [...a,...b];

// Add "Pakistan" to start of this array using spread:

let countries = ["USA", "UK"]
countries = ["Pakistan",...countries];

// clone this array properly (not by reference)

let arr5 = [1, 2, 3, 4];
let newarr5 = [...arr5];