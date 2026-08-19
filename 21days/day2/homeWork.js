// 1.Check if  character is Uppercase,Lowercse, Digit, or Special Chaaracter.

const prompt = require('prompt-sync')()
// const char = prompt("Enter your char: ");
 
function checkCharacter(char) {
  if (char >= 'A' && char <= 'Z') {
    return `${char} is Uppercase`

  } else if (char >= 'a' && char <= 'z') {
    return `${char} is Lowercase`
  
  } else if (char >= '0' && char <= '9') {
    return `${char} is Digit`

  } else {
    return `${char} is Special Character`
  }
}

// console.log(checkCharacter(char))

// Method2 ASCII

function checkCharAscii(char) {
  const ascii = char.charCodeAt(0);
  if (ascii >= 48 && ascii <= 57) {
    return `${char} digit`;

  } else if (ascii >= 65 && ascii <= 90) {
    return `${char} UpperCase`
  
  } else if (ascii >= 97 && ascii <= 122) {
    return` ${char} LowerCase`
    
  } else if ((ascii >= 58 && ascii <= 64) ||
    (ascii >= 91 && ascii <= 96) ||
    (ascii >= 123 && ascii <= 126) ||
    (ascii >= 33 && ascii <= 47)) {
    return `${char} Special Character`
    
  } else if (ascii === 32) {
    return`${char} Space`
  }
}
// const char = prompt("Enter a character: ");
// console.log(checkCharAscii(char));


// 2.Check Triangle Type Using Sides and Angles.
 
// const a = Number(prompt("Enter side a:"));
// const b = Number(prompt("Enter side b:"));
// const c = Number(prompt("Enter side c:"));
  
function checkTriangle(a, b, c) {

  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Not a valid triangle";
}

  const sides = [a, b, c].sort((x, y) => x - y);
  const x = sides[0];
  const y = sides[1];
  const z = sides[2];
  
  if ((x * x) + (y * y) === (z * z)) {
    return "Right-angled triangle";
  } else if (a  === b && b === c) {
    return "Equilateral triangle";
  } else if (a === b || a === c || b === c) {
    return "Isosceles triangle";
  } else {
    return "Scalene triangle";
  }
}

// console.log(checkTriangle(a, b, c));


// 3.Calculate Income Tax Based on Slabs

const income = Number(prompt("Enter your income: "));

function calculateincomeTax(income) {
  
  if (income <= 250000) {
       return 'No tax';

  } else if(income <=500000 ) {
    return (income - 250000) * 0.05;
  
  } else if (income <=1000000) {
    return (250000 * 0.05) + ((income - 500000) * 0.20);
  
  } else {
    return (250000 * 0.05) + (500000 * 0.20) + ((income - 1000000) * 0.30);
  }
}

console.log(calculateincomeTax(income));

