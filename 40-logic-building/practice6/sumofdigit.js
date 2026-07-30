// Q8.Write a function that calculates and print the sum of the digits of given number.

const prompt = require('prompt-sync')();
// const sum = Number(prompt('Enter your number: '));
function calculate(sum) {
    if (sum<1) {
      throw new Error(`Number must be above 0`);
  }
  const sumAsString = sum.toString();
  const splitSumString = sumAsString.split('');
  let sumofDigit = 0;
  splitSumString.forEach(num => {
    sumofDigit = sumofDigit + parseInt(num);
  })
  return sumofDigit;
  
 }
// console.log(calculate(sum));

// Method 2

const num = Number(prompt("Enter your number: "));

function calculate2(num) {

  let sumofDigit = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    num = Math.floor(num / 10);
    console.log("last digit: ", lastDigit, 'New Number', num);
    sumofDigit = sumofDigit + lastDigit;
  }
  return sumofDigit;
}
console.log(calculate2(num))