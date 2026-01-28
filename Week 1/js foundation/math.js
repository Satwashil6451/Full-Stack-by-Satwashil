// mathMethods.js

// This file demonstrates commonly used Math operations in JavaScript

/**
 * Function to demonstrate various Math methods
 * @param {number} value - The input number on which math operations are performed
 */
function mathMethods(value) {

  // Display the original value passed to the function
  console.log("Original Value:", value);

  // Math.round(): Rounds the number to the nearest integer
  // Example: 4.56 → 5, 4.2 → 4
  let rounded = Math.round(value);
  console.log("After round():", rounded);

  // Math.ceil(): Rounds the number UP to the nearest integer
  // Example: 4.01 → 5
  let ceiling = Math.ceil(value);
  console.log("After ceil():", ceiling);

  // Math.floor(): Rounds the number DOWN to the nearest integer
  // Example: 4.99 → 4
  let flooring = Math.floor(value);
  console.log("After floor():", flooring);

  // Math.random(): Generates a random number between 0 (inclusive) and 1 (exclusive)
  let randomValue = Math.random();
  console.log("After random():", randomValue);

  // Math.max(): Returns the largest value from the given numbers
  let maxValue = Math.max(5, 10, 15);
  console.log("After max():", maxValue);

  // Math.min(): Returns the smallest value from the given numbers
  let minValue = Math.min(5, 10, 15);
  console.log("After min():", minValue);

  // Math.pow(): Returns the value of a number raised to a power
  // Here, value² (square of the number)
  let powerOfTwo = Math.pow(value, 2);
  console.log("After pow():", powerOfTwo);

  // Math.sqrt(): Returns the square root of the number
  let squareRoot = Math.sqrt(value);
  console.log("After sqrt():", squareRoot);

  // Separator for better readability in console
  console.log("----------------------------");
}

// Example usage of the mathMethods function
mathMethods(4.56);
mathMethods(9);
mathMethods(25);

