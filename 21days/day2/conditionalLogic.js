// 1.Find the Maximum of three Numbers

const prompt = require("prompt-sync")();
// const num1 = Number(prompt('Enter your First number: '));
// const num2 = Number(prompt('Enter your Second number: '));
// const num3 = Number(prompt('Enter your Third number: '));

function maximumOfThree(num1,num2,num3) {
  if ((num1 >= num2) && (num1 >= num3)) {
    return `${num1} is Maximum Of three Numbers`
  } else if ((num2 >= num3)) {
    return`${num2} is Maximum of three Numbers`
  } else {
    return`${num3} is Maximum of three Numbers`
  }
}

// console.log(maximumOfThree(num1,num2,num3))

// 2.Check if a Number is Positive,Negative or Zero

// const num4 = Number(prompt("Enter your First Number: "));

function checkNumber(num4) {
  if (num4 > 0) {
    return`${num4} is Positive`
  } else if (num4 === 0) {
    return`${num4} is Zero`
  } else {
    return`${num4} is Negative`
  }
}
// console.log(checkNumber(num4))

// 3.Calculate Electricity Bill.

// const units = Number(prompt("Enter your Units: "));

function calculateElectricityBill(units) {
  if (units <= 100) {
    return (units * 5);
    
  } else if (units <= 200) {
    return (100 * 5) + ((units - 100) * 7);
    
  } else if (units <= 300) {
    return (100 * 5) + (100 * 7) + ((units - 200) * 10);
    
  } else {
    return (100 * 5) + (100 * 7) + (100 * 10) + ((units - 300) * 12);
  }
}
// const checkBill = calculateElectricityBill(units)
// console.log(`Your total Bill = ${checkBill}`)

// 4.Check if a Character is a Vowel or consonant

// const str = prompt("Enter your alphabet: ");

function checkCharacter(str) {
  const ch = str.toLowerCase();

  if (!isNaN(str))
    throw new Error`Numbers are not allowed, please enter a string`;
  
  if (ch === 'a' || ch === 'e' || ch === 'i' ||ch === 'o' ||ch ==='u') {
    return 'Vowel';

  } else {
    return 'Consonant';
  }
}
// console.log(checkCharacter(str));

// 5.Check if a year is a Leap Year

function checkLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
     return 'Leap Year';
  
  } else {
    return'Not a Leap Year'
  }

}
console.log(checkLeapYear(2100))
console.log(checkLeapYear(2024))
console.log(checkLeapYear(2000))
console.log(checkLeapYear(1900))
console.log(checkLeapYear(2023))