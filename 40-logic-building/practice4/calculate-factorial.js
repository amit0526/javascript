// Q7.Write a function that calculate factorial of a given number.


const prompt = require('prompt-sync')();
let targetNum = Number(prompt("Enter your number: "));


function calculate(targetNum) {
  let fact = 1;
  for (let i = 1; i <= targetNum; i++) {
    fact = fact * i;
}
  return fact;
}
const check = calculate(targetNum);
console.log(check);

