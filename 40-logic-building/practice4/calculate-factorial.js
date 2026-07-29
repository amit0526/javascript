// Q7.Write a function that calculate factorial of a given number.

const prompt = require('prompt-sync')();
let targetNum = Number(prompt("Enter your number: "));

function calculate (targetNum) {

  if (isNaN(targetNum)) {
    throw new Error('Enter a vaild number!');
  }

 if (targetNum < 0) {
   throw new Error("Enter a non-negative number!");
   
  }
  
  let fact = 1;

  for (let i = 1; i <= targetNum; i++) {
    fact *= i;
    
  }
  return fact;
}

try {
  const result = calculate(targetNum);
  console.log(`Factorial of ${targetNum} is ${result}`);

 } catch (error) {
  console.log(error.message);
 }

  