// Q8.Write a function that tells if provided year is a leap year or not.

const prompt = require("prompt-sync")();
let year = Number(prompt("Enter a year to check leap year or not: "));

function isLeapYear(year) {

  if (year < 0) {
    throw new Error('Please enter a year in positive format!')
  }

  if (isNaN(year)) {
  throw new Error('Please enter a year in vaild format!')
  }
  
  if ((year%4===0 && year%100!==0) ||(year%400===0)) {
    return ('leap year');
  } else {
    return('not a leap year')
  }
}
console.log(isLeapYear(year));