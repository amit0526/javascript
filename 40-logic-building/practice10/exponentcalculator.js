// 11.Write a function that returns a given number to a specified power.

const prompt = require("prompt-sync")();
let base = Number(prompt("Enter the base nunmber: "));
let exponent = Number(prompt("Enter the exponent nunmber: "));

function power (base, exponent) {

  if (isNan(base)) {

    throw new Error("Please enter vaild numbers for base and exponent.");
  } 

  if (exponent < 0 || base < 0) {
    throw new Error("please enter a non-negative number for base and exponent.");
   }
  
  let result = 1;
    
  for (let i = 0; i < exponent; i++){
    result = result * base;
  }

  return result;
}

const result = power(base, exponent);
console.log(`The result of ${base} raised to the power of ${exponent} is: ${result}`);