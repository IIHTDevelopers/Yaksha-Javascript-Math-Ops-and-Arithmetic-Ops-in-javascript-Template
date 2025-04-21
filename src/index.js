// Math object in JavaScript
var num1 = 16;
var num2 = 4;

// Using Math methods
var sqrt = Math.sqrt(num1);  // Square root of num1
var power = Math.pow(num2, 2); // num2 raised to the power of 2
var randomNum = Math.random(); // Random number between 0 and 1
var rounded = Math.round(randomNum * 100); // Rounded random number between 0 and 100

// Arithmetic operations
var addition = num1 + num2;  // Adding num1 and num2
var subtraction = num1 - num2; // Subtracting num2 from num1
var multiplication = num1 * num2; // Multiplying num1 and num2
var division = num1 / num2; // Dividing num1 by num2
var modulus = num1 % num2; // Modulo of num1 and num2
var exponentiation = Math.pow(num2, 3); // num2 raised to the power of 3

console.log(`Square root of ${num1} is ${sqrt}`);
console.log(`${num2} squared is ${power}`);
console.log(`Random number between 0 and 1: ${randomNum}`);
console.log(`Random number rounded to 100: ${rounded}`);
console.log(`${num1} + ${num2} = ${addition}`);
console.log(`${num1} - ${num2} = ${subtraction}`);
console.log(`${num1} * ${num2} = ${multiplication}`);
console.log(`${num1} / ${num2} = ${division}`);
console.log(`${num1} % ${num2} = ${modulus}`);
console.log(`${num2} raised to the power of 3 is ${exponentiation}`);
