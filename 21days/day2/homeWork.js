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
const char = prompt("Enter a character: ");
console.log(checkCharAscii(char));

  
















// 2.Check Triangle Type Using Sides and Angles.


// 3.Calculate Income Tax Based on Slabs

// 4.Calculate Electricity Bill.

// 5.