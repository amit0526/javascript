const prompt = require("prompt-sync")();
let leapYear = Number(prompt("Enter a year to check leap year or not: "));

function check(leapYear) {
  if ((leapYear%4===0 && leapYear%100!==0) ||(leapYear%400===0)) {
    return ('leapyear');
  } else {
    return('not a leap year')
  }
}
console.log(check(leapYear));