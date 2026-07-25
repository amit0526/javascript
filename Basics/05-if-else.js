/*================= if-else(41–50) ========== */

const prompt = require("prompt-sync")();

// 41. Check even or odd.
let num = Number(prompt("Enter your number: "));

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 42. Check positive or negative
let check = Number(prompt("Enter your number: "));

if (check > 0) {
  console.log("Positive");
} else if (check === 0) {
  console.log("Zero");
} else {
  console.log("Negative");
}

// 43. Find the larger of two numbers.
let num1 = Number(prompt("Enter your first number: "));
let num2 = Number(prompt("Enter your second number: "));

if (num1 > num2) {
  console.log(`${num1} is larger than ${num2}`);
} else if (num2 > num1) {
  console.log(`${num2} is larger than ${num1}`);
} else {
  console.log("Both numbers are equal");
}

// 44. Find the largest of three numbers.
let one = Number(prompt("Enter your first number: "));
let two = Number(prompt("Enter your second number: "));
let three = Number(prompt("Enter your third number: "));

if (one >= two && one >= three) {
  console.log(`${one} is the largest`);
} else if (two >= one && two >= three) {
  console.log(`${two} is the largest`);
} else {
  console.log(`${three} is the largest`);
}

// 45. Check if a person can vote.
let age = Number(prompt("Enter your age: "));

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can't vote!");
}

// 46. Check if a number is divisible by 5.
let n = Number(prompt("Enter your number: "));

if (n % 5 === 0) {
  console.log(`${n} is divisible by 5`);
} else {
  console.log(`${n} is not divisible by 5`);
}

// 47. Check if a year is a leap year.
let year = Number(prompt("Enter your year: "));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}

// 48. Grade calculator (A, B, C, D, F).
let marks = Number(prompt("Enter your marks: "));

if (marks >= 85) {
  console.log("A");
} else if (marks >= 70) {
  console.log("B");
} else if (marks >= 55) {
  console.log("C");
} else if (marks >= 35) {
  console.log("D");
} else {
  console.log("F");
}

// 49. Check whether a character is a vowel.
let char = prompt("Enter your character: ");

let lowerChar = char ? char.toLowerCase() : "";

if (
  lowerChar === "a" ||
  lowerChar === "e" ||
  lowerChar === "i" ||
  lowerChar === "o" ||
  lowerChar === "u"
) {
  console.log("Vowel");
} else {
  console.log("Consonant");
}

// 50. Build a simple calculator using if-else.
let val = Number(prompt("Enter first number: "));
let op = prompt("Enter an operator (+, -, *, /): ");
let val2 = Number(prompt("Enter second number: "));

if (op === "+") {
  console.log(`${val} + ${val2} = ${val + val2}`);
} else if (op === "-") {
  console.log(`${val} - ${val2} = ${val - val2}`);
} else if (op === "*") {
  console.log(`${val} * ${val2} = ${val * val2}`);
} else if (op === "/") {
  if (val2 !== 0) {
    console.log(`${val} / ${val2} = ${val / val2}`);
  } else {
    console.log("Error: Division by zero is not allowed");
  }
} else {
  console.log("Invalid operator entered");
}
