/*========= Console (1–10) ======= */

// 1. Print "Hello World" using console.log()
console.log("Hello World");

// 2. Print your name.
console.log("Amit");

// 3. Print your age.
console.log(25);

// 4. Print your city and country on separate lines.
console.log("Muzaffarpur");
console.log("India");

// 5. Print the result of 10 + 20.
console.log(10 + 20);

// 6. Print "JavaScript is fun!" five times.
for (let i = 0; i < 5; i++) {
  console.log("JavaScript is fun!");
}

// 7. Print today's date using new Date().
const now = new Date();
console.log(now.toLocaleDateString());

// 8. Print true and false.
const valueTrue = true;
const valueFalse = false;
console.log(valueTrue);
console.log(valueFalse);

// 9. Print null, nan and undefined.
let nullValue = null;
let undefinedValue;
let nanValue = NaN;
console.log(nullValue);
console.log(undefinedValue);
console.log(nanValue);

// 10. Print your favorite quote.
console.log(
  "Programming isn't about what you know; it's about what you can figure out",
);
