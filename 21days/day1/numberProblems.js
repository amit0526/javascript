// 1.Print Number from 1 to n.

let n = 10;
function printNumbers(n) {
  for (let i = 1; i <= n; i++){
    // console.log(i)
  }
}
// printNumbers(n);

// ===============================================================================================================

// 2.Print Numbers from N to 1 without changing the loop condition of above question.

for (let i = 1; i <= n; i++){
  // console.log(n - i + 1);
}

// ===================================================================================================================

// 3.Print All Even Number from 1 to N.
 
const num = 20;
for (let i = 1; i <= num; i ++){
  if (i % 2 === 0) {
    // console.log(i)
  }
}

// ===================================================================================================================

// 4.Sum of First N Natural Numbers

// Brute force solution 
// It takes 5 seconds


const num4a = 5;
let naturalNumbers = 0;


for (let i = 1; i <= num4a; i++){
  naturalNumbers = naturalNumbers + i;
}
// console.log(`The total of first N Natural Numbers is ${naturalNumbers}`)
    
//======================= Method 2 ==============================
// Optimized Solution
// It takes less 1 ms.



const num4b = 5;

let result = (num4b * (num4b + 1)) / 2;
// console.log(result);


// ===================================================================================================================

// 5.Product factorial of N.

const num5 = 5;
let fact = 1;

for (let i = 1; i <= num5; i++) {
  fact = fact * [i];
  }
// console.log(fact);

// ===================================================================================================================

// 6.Sum of All Even Numbers up to N.

const num6 = 400;
let sum = 0;

for (let i = 1; i <= num6; i++) {
  if (i % 2 === 0) {
    sum = sum + i;
  }
}
//  console.log(`The Sum of Even number is ${sum} `);

// ===================================================================================================================
 
// 7.Print Squares of Numbers from 1 to N.

const num7 = 5;

for (let i = 1; i <= num7; i++) {
  // console.log(i ** 2) /**Method 1 */
  // console.log(i * i);  /**Method 2 */
  // console.log(Math.pow(i,2)) /**Method 3 */
}
 



