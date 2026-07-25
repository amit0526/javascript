//================ Loops (51–60) ====================

// 51.Print numbers 1–10.

// for (let i = 1; i <=10; i++) {
//   // console.log(i);  
// }

// 52.Print numbers 10–1.
for (let i = 10; i >= 1; i--){
  // console.log(i);
}

// 53.Print even numbers from 1–100.
for (let i = 2; i <= 100; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}
 
// 54.Print odd numbers from 1–100.
for (let i = 1; i <= 100; i+=2) {
  // console.log(i);
}

// 55.Find the sum of 1–100.
let sum = 0;
for (let i = 1; i <= 100; i++){
  sum +=i;
}
// console.log(sum);

// 56.Print the multiplication table of any number.
for (let i = 1; i <= 10; i++){
    //  console.log(`5 X ${i} = ${5*i}`);
}

// 57.Find the factorial of a number.
let fact = 1;
for (let i = 1; i <= 10; i++){
  fact = fact * i;
  // console.log(fact);
}

// 58.Count digits in a number.
let num = 12345;
let count = 0;

if (num === 0) {
  count = 1;
} else {
  num = Math.abs(num);
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
}
console.log(count);