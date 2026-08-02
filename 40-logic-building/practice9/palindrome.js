// // Q10.Write a function that checks if a string is palindrome or not.

// const prompt = require('prompt-sync')();
// const str = prompt("Enter your string: ");

// function isPalindrome(str) {
//   str = str.toLowerCase();
//   return str === str.split('').reverse().join('');
// }
// const check = isPalindrome(str);
// console.log(check)

// // Method 2 (arrow function)

// const str1 = prompt('Enter your str: ')

// const isPalindrome1 = str1 => str1 === str1.split('').reverse().join('');
// console.log(isPalindrome1(str1.toLowerCase()));

// Method 3 (Two Pointers)

function isPalindrome2(str2) {
  let left = 0;
  let right = str2.length - 1;
  str2 = str2.toLowerCase();

  while (left < right) {

    if (str2[left] !== str2[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

console.log(isPalindrome2("Madam")); // true
console.log(isPalindrome2("hello")); // false