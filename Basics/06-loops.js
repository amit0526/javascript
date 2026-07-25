//================ Loops (51–60) ====================

// 51.Print numbers 1–10.
for (let i = 1; i <= 10; i++) {
  // console.log(i);
}

// 52.Print numbers 10–1.
for (let i = 10; i >= 1; i--) {
  // console.log(i);
}

// 53.Print even numbers from 1–100.
for (let i = 2; i <= 100; i += 2) {
  // console.log(i);
}

// 54.Print odd numbers from 1–100.
for (let i = 1; i <= 100; i += 2) {
  // console.log(i);
}

// 55.Find the sum of 1–100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
// console.log(sum);

// 56.Print the multiplication table of any number.
let tableNum = 5;
for (let i = 1; i <= 10; i++) {
  // console.log(`${tableNum} X ${i} = ${tableNum * i}`);
}

// 57.Find the factorial of a number.
let targetNum = 5;
let fact = 1;
for (let i = 1; i <= targetNum; i++) {
  fact *= i;
}
// console.log(fact);

// 58.Count digits in a number.
let num = 12345;
let count = 0;

for (let temp = Math.abs(num); temp > 0; temp = Math.floor(temp / 10)) {
  count++;
}
count = count || 1;
// console.log(count);

// 59.Reverse a number.
let originalNum = 12345;
let reversed = 0;

for (let temp = Math.abs(originalNum); temp > 0; temp = Math.floor(temp / 10)) {
  let lastDigit = temp % 10;
  reversed = reversed * 10 + lastDigit;
}
if (originalNum < 0) reversed *= -1;
// console.log(reversed);

// 60.Print the Fibonacci series. Prints the first 10 terms of the sequence.
let n1 = 0,
  n2 = 1,
  nextTerm;
let totalTerms = 10;

for (let i = 1; i <= totalTerms; i++) {
  // console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}
