// Write a function that finds all the factors of given number.
// input:number,positive integer
// Return: Factors of number in an array
// Factor: Is a number  that  divides the given number evenly or exactly ,leaving no remainder.

function factorsofNumber(num) {
  const factors = [];
  if (isNaN(num) || num <= 0 || !Number.isInteger(num)) {
    throw new Error("Please enter a positive integer.");
  }
  for (let i = 1; i <= num; i++){
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

// console.log(factorsofNumber(12.5));
// console.log(factorsofNumber(12));
// console.log(factorsofNumber("12"));
