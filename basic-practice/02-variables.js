/*================= Variables(11–20) ============ */

// 11. Create a variable named name.
const name = "Amit";

// 12. Store your age in a variable.
const age = 25;

// 13. Store two numbers and print their sum.
const num1 = 10;
const num2 = 30;
// console.log(num1 + num2);

// 14. Swap two variables.
let a = 5;
let b = 3;
let temp = a;
a = b;
b = temp;

/** Destructuring Method */
let c = 3;
let d = 4;
[c, d] = [d, c];

// 15. Create variables for first and last name and print the full name.
const firstName = "Amit"; 
const lastName = "Anand"; 
// console.log(`${firstName} ${lastName}`);

// 16. Store a price and quantity and calculate the total.
const price = 400;
const quantity = 4;
const total = price * quantity;
// console.log(`The calculation of total is ${total}`);

// 17. Change a variable value after declaration.
let val1 = 2;
val1 = 5;

// 18. Use const for PI.
const PI = 3.14;

// 19. Create three variables and print them in one console.log().
const one = 2;
const two = 3;
const three = 4;
// console.log(one, two, three);

// 20. Store a boolean value in a variable.
const isloggedIn = true;
const hasPermission = false;
console.log(isloggedIn, hasPermission);
