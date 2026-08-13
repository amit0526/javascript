// 1.Print all numbers divisible by 3 and 5 up to N.

const n = 30;

for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // console.log(i)
  }
}

// 2.Find the sum of all odd numbers up to N.

const oddNum = 10;
let sum = 0;

for (let i = 1; i <= oddNum; i++){
  if (i % 2 !== 0) { 
    sum = sum + i;
  }
}
  //  console.log(sum);
   
// 3.Print the cubes of numbers from 1 to N.

const cubes = 5;
for (let i = 1; i <= cubes; i++){
  // console.log(i ** 3)
  // console.log(i * i * i)
  // console.log(Math.pow(i, 3))
}

// 4.Print only the numbers that are both even and perfect squares.

const num = 20;
for (let i = 1; i <= num; i++) {

  if (i % 2 === 0 && Math.sqrt(i) % 1 === 0) {
    console.log(i)
  }
}


