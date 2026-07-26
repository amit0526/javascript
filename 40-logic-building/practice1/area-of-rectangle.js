// Q3.Write a function that calculates and print the area of a rectangle given its length and width.

const prompt = require("prompt-sync")();

let l = Number(prompt("Enter your length: "));
let w = Number(prompt("Enter your width: "));

function calculateArea(l, w) {
  if (l<=0 || w<=0) {
      throw new RangeError("length and width should be a positive number");
      
  } else {
    return (l * w);
  }
}
const rect = calculateArea(l, w);
console.log(`The area of rectangle = ${rect}`);