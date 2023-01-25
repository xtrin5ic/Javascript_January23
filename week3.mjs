
// Task: Example (demonstrating how to complete a task)
// Define the variable "puppyName" and instanciate it with the name Fido
let puppyName = "Fido";

// Task 1
// Fix the following code
var puppyAge = 4;

// Task 2
// Define a variable "breed" of type String  
var breed = "";

// Task 3
// Set the value of breed to Labrador Retriever
breed = "Labrador Retriever";

// Task 4
// Fix the following code

const puppyInfo = concatinatePuppyInfo(puppyName, puppyAge, breed)
function concatinatePuppyInfo(puppyName, puppyAge, breed) {
  return `${puppyName}, ${puppyAge}, ${breed}`;  
}

//print task 4 test
console.log (puppyInfo)

// Task 5
// Write a function convertDogToHumanAge that returns the human equivalent of dog years when we use the ratio 1:8 (i.e one dog year is eight human). Dog years should be given as a parameter to the function.

var dogYears = 4;
var dogToHumanRatio = 8;

const humanYears = multiply(dogYears, dogToHumanRatio)

function multiply(dogYears, dogToHumanRatio){
  return dogYears*dogToHumanRatio;  
} 

//print human years
console.log (humanYears)

