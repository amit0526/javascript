// 9.Write a function that generates and print a multiplication table for a given number up to a specified range.

const prompt = require('prompt-sync')();
const table = Number(prompt('Enter your table number: '));
const range = Number(prompt('Enter your table range: '));

function generatesOfTable(table) {
   let result = "";
  for (let i = 1; i <= range; i++) {
    result += `${table} X ${i} = ${table * i}\n`; 
  }
  return result;
}

console.log(generatesOfTable(table));



