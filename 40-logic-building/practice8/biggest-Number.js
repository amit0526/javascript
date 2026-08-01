//Q9.Write a function that find and prints the maximum element in an array of numbers.

let arr = [10, 20, 45, 65, 34];

function maximum(arr) {

  const max = Math.max(...arr);
  return max;
}
// console.log(maximum(arr));

// Method 2

let arrayofNumbers = [40, 55, 10, 198, 99, 45];

function findBiggestNumber(arrayofNumbers) {
  if (!arrayofNumber || arrayofNumbers.length === 0) {
    throw new Error(`We need some numbers in the array!`);
  }
  let biggestNumber = arrayofNumbers[0];
  for (let i = 1; i < arrayofNumbers.length; i++) {
    if (arrayofNumbers[i] > biggestNumber) {
      biggestNumber = arrayofNumbers[i];
    }
  }
  return biggestNumber;
}
// console.log(findBiggestNumber(arrayofNumbers));i