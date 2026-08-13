// Write a function that counts and print the number of vowels and consonants in a given string.

const prompt = require("prompt-sync")();
const str = prompt("enter your string: ");

function countVowelsAndConsonants(str) {
  let vowelsCount = 0;
  let consonantsCount = 0;
  for (let char of str.toLowerCase()) {
    if (/[aeiou]/.test(char)) {
      vowelsCount++;
    } else if (/[a-z]/.test(char)) {
      consonantsCount++;
    }
  }
  return { vowelsCount, consonantsCount };    
}

console.log(countVowelsAndConsonants(str))