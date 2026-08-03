/*============= Data Types(21–30) ==============*/

// 21. Find the type of "".
const str = "";
// console.log(typeof str);

// 22. Find the type of 100.
const num = 100; 
// console.log(typeof num); 

// 23. Find the type of true.
const isloggedIn = true;
// console.log(typeof isloggedIn);

// 24. Find the type of undefined.
let user;
// console.log(typeof user);

// 25. Find the type of null.
const n = null;
// console.log(typeof n);

// 26. Create variables of all primitive data types.
const text = "Hello";
const count = 42;
const price = 19.99;
const isActive = true;
let x;
const usernull = null;
const hugeNumber = 90000000000888888n;
const uniquekey = Symbol("id");

// console.log(text);
// console.log(count);
// console.log(price);
// console.log(isActive);
// console.log(x);
// console.log(usernull);
// console.log(hugeNumber);
// console.log(uniquekey);

// 27. Convert a string "100" to a number.
const strConvert = "100";
const numConvert = Number(strConvert);
// console.log(numConvert);
// console.log(typeof numConvert);

// 28. Convert a number to a string.
const num1 = 100;
const str1 = String(num1);
// console.log(str1);
// console.log(typeof str1);

// 29. Check whether "5" and 5 have the same type.
const text1 = "5";
const text2 = 5

if (typeof text1 === typeof text2) {
  // console.log("same type");
} else {
  // console.log("not same type"); 
}

// 30. Print the type of an array.
const myArray =[10,20,30];
// console.log(typeof myArray); 
// console.log(Array.isArray(myArray));
