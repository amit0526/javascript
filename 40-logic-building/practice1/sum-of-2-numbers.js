// 2.Write a function that takes two numbers as input and print there sum.

const prompt = require("prompt-sync")();

let a = Number(prompt("Enter your first number: "));
let b = Number(prompt("Enter your second number: "));

function sum(a, b) {
  return a + b;
}
console.log(sum(a, b));
