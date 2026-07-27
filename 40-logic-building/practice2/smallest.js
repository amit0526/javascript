// Q5.Write a function that finds and prints the smallest number among three given numbers.

const prompt = require("prompt-sync")();
// const a = Number(prompt("Enter your first number: "));
// const b = Number(prompt("Enter your second number: "));
// const c = Number(prompt("Enter your third number: "));

function checkSmallest(a, b, c) {
  if (a === b && b === c) {
    return "All three number equal";
  }

  if (a <= b && a <= c) {
    return a;
  } else if (b <= a && b <= c) {
    return b;
  } else {
    return c;
  }
}   
// const find = checkSmallest(a, b, c);
  
if (typeof find === "number") {
  // console.log(`${find} is smallest number.`);
} else {
  // console.log(find);
}
  

// Method 2

const n1 = Number(prompt("Enter your first number: "));
const n2 = Number(prompt("Enter your second number: "));
const n3 = Number(prompt("Enter your third number: "));

function findSmallest(n1, n2, n3) {
  return Math.min(n1, n2, n3);

}   
const smallest = findSmallest(n1, n2, n3);
console.log(`${smallest} is smallest`);