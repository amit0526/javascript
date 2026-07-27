// Q6.Write a function that returns the reverse of a string.
const prompt = require("prompt-sync")();
let str = prompt("Enter your string: ");

function checkString(str) {
  return str.split('').reverse().join("");
}
const check = (checkString(str));
console.log(`Reverse string is ${check}`);

// ================= Method 2 =====================

// reverse string in arrow function.

const str1 = prompt("Enter your string: ");
const findstr = str1 => str1.split('').reverse().join('');
console.log(findstr(str1));

// =============== Method 3 =======================

// reverse string in for loop without reverse method

function reverseString(str2) {
  let reversed = "";
  for (let i = 0; i < str2.length; i++) {
    reversed = str2[i] + reversed;
  }
  return reversed;
}
console.log(reverseString("amit"));

// ================ Method 4 ======================


// reverse string in for of loop without reverse method.

function reversedStr(str4) {
  let reverse = "";
  for (let char of str4) {
    reverse = char + reverse;
  }
  return reverse;
}

console.log(reversedStr("King"));