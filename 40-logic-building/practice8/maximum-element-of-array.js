//Q9.Write a function that find and prints the maximum element in an array of numbers.

let arr = [10, 20, 45, 65, 34];

function maximum(arr) {

  const max = Math.max(...arr);
  return max;
}
console.log(maximum(arr));