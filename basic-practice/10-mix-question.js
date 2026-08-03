// Write a function that takes a number and returns "Even" or "Odd".

const prompt = require("prompt-sync")();
// const n = Number(prompt("Enter your number: "));

function check(n) {
  if (n%2===0) {
    return `Even`;
  } else {
    return `Odd`;
  }
}
// console.log(check(n));

// 2. Largest of Three Numbers. Take three numbers and print the largest one.

// const one = Number(prompt("Enter your first number: "));
// const two = Number(prompt("Enter your second number: "));
// const three = Number(prompt("Enter your third number: "));

function largest() {
  if (one > two && one > three) {
    return `${one} is largest`;

  } else if (two > one && two > three) {
    return `${two} is largest`;

  } else {
    return `${three} is largest`
  }
}
// console.log(largest());
  
// 3. Reverse an Array [1,2,3,4]

const arr = [1, 2, 3, 4];

// for (let i = arr.length-1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// 4. Count Even Numbers .Find how many even numbers are in an array. [2,5,8,9,10]

let arr1 = [2, 5, 8, 9, 10];
let count = 0

// for (let i = 0; i <= arr1.length; i++) {
//   if (arr1[i] % 2 === 0) {
//     count++;
//   }
// }
// console.log(count);

// 5. Sum of Array [10,20,30].

// let numbers = [10, 20, 30];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++){
//   sum = sum + numbers[i];
// }
//  console.log(sum)
