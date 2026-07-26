// 4.Write a function that tells if a given number is even or odd.

const prompt = require('prompt-sync')();
const n = Number(prompt("Enter your number: "));

function check(n) {
  if (n%2===0) {
    return `${n} is even number`;
  } else {
    return `${n} is odd number`;
  }
}
// console.log(check(n));