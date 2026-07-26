// 4.Write a function that tells if a given number is even or odd.

const prompt = require('prompt-sync')();
// const n = Number(prompt("Enter your number: "));

function check(n) {
  if (n % 2 ) {
    return `${n} is even number`;
  } else {
    return `${n} is odd number`;
  }
}
// console.log(check(n));

// Method 2

const a = Number(prompt("Enter your number: "));

function checkNumber(a) {
  return a % 2 === 0 ? "Even": "Odd";
}

console.log(checkNumber(a));
