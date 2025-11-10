import { add, subtract, multiply, divide } from "./mathOperations";

let num1: number = 10;
let num2: number = 5;

console.log(`Numbers: ${num1}, ${num2}`);
console.log(`Addition: ${add(num1, num2)}`);
console.log(`Subtraction: ${subtract(num1, num2)}`);
console.log(`Multiplication: ${multiply(num1, num2)}`);
console.log(`Division: ${divide(num1, num2)}`);
