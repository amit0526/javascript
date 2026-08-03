/*================= Operators(31–40) ========== */

// 31. Add two numbers.
const add1 = 4;
const add2 = 6;
// console.log(add1 + add2);

// 32. Subtract two numbers.
const sub1 = 6;
const sub2 = 4;
// console.log(sub1 - sub2);

// 33. Multiply two numbers.
const num1 = 7;
const num2 = 8;
// console.log(num1 * num2);

// 34. Divide two numbers.
const num3 = 12;
const num4 = 2;
// console.log(num3 / num4);

// 35. Find the remainder.
const one = 13;
const two = 2;
// console.log(one % two);

// 36. Increase a variable using ++.
let a = 3;
let b = a++;
// console.log(a);
// console.log(b);

// 37. Decrease a variable using --.
let c = 5;
let d = c--;
// console.log(c);
// console.log(d);

// 38. Check if two values are equal.
const val1 = 4;
const val2 = 4;
if (val1 === val2) {
  console.log("equal");
}

// 39. Check if two values are equal. (Correction: Check if greater or equal)
const num5 = 7;
const num6 = 6;
if (num5 >= num6) {
  // console.log("greater");
}
// 40. Use logical AND and OR.
const hasAccount = true;
const isLoggedIn = false;

// Logical OR (||) needs only one side to be true
if (hasAccount || isLoggedIn) {
  console.log("Welcome visitor!");
}

// Logical AND (&&) needs both sides to be true
if (hasAccount && !isLoggedIn) {
  console.log("Please log in to your account.");
}
