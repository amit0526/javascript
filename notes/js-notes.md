These are some of the most common JavaScript interview topics. Here's a practical guide with what it is, example, and where it's used.

1. Two Pointers

What is it?
A technique that uses two indexes to solve problems efficiently.

Example (Palindrome)
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
console.log(isPalindrome("madam"));

Uses:Palindrome,Reverse array,Pair sum,Remove duplicates
==================================================================================================

2. Async

What is it?
async makes a function return a Promise.

async function greet() {
  return "Hello";
}
greet().then(console.log);

Output:Hello
Uses:When fetching API data.
===================================================================================================

3. Fetch:Used to call APIs.

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  console.log(data);
}
getUsers();

Uses:Login,Weather apps,E-commerce,Dashboard
===================================================================================================
4. Promise : Represents a future value.

States
Pending
Fulfilled
Rejected
const promise = new Promise((resolve, reject) => {
  resolve("Success");
});
promise.then(console.log);

Uses:API,Database,File upload
===================================================================================================
5. bind() : Creates a new function with fixed this.

const person = {
  name: "John"
};

function greet() {
  console.log(this.name);
}
const fn = greet.bind(person);

fn();

Output:John;
Uses:React class components,Passing callbacks
===================================================================================================
6. Event Loop : JavaScript is single-threaded.

It executes

Call Stack
↓

Web APIs
↓

Callback Queue

↓

Event Loop

Example

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

Output
A
C
B

Uses:All asynchronous operations.
===================================================================================================
7. OOP

Four principles

Encapsulation
Inheritance
Polymorphism
Abstraction

Example

class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const dog = new Dog();
dog.speak();
===================================================================================================
8. Prototype (JavaScript's "Magic") : Every object has a prototype.

const person = {
  name: "John"
};

console.log(person.toString());

toString() isn't defined on person. It's found through the prototype chain.

Add your own method:

Array.prototype.sayHi = function () {
  console.log("Hi");
};
[1,2,3].sayHi();

Uses:Method sharing,Inheritance,Memory optimization
===================================================================================================
9. call() : Calls a function immediately with a specific this.

const person = {
  name: "John"
};

function greet(age) {
  console.log(this.name, age);
}
greet.call(person, 25);

Output
John 25
===================================================================================================
10. this : Refers to the object calling the function.

const person = {
  name: "John",

  greet() {
    console.log(this.name);
  }
};

person.greet();

Output

John

Arrow function

const obj = {
  name: "John",

  greet: () => {
    console.log(this);
  }
};
Arrow functions don't have their own this; they inherit it from the surrounding scope.
====================================================================================================================
11. Class
class Car {
  drive() {
    console.log("Driving");
  }
}

const c = new Car();

c.drive();
====================================================================================================================
12. Constructor : Runs automatically.

class User {

  constructor(name) {
    this.name = name;
  }

}
const u = new User("John");
console.log(u.name);

13. Static : Belongs to class, not object.

class MathUtil {

  static add(a, b) {
    return a + b;
  }
}
console.log(MathUtil.add(2,3));

Uses : Utility methods
====================================================================================================================

14. Getter & Setter

class Person {

  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

}

const p = new Person("John");

console.log(p.name);

p.name = "David";

console.log(p.name);

Uses: Validation,Computed values
====================================================================================================================

15. Stack Overflow : Occurs when recursion never stops.

function hello() {
  hello();
}

hello();

Output : RangeError: Maximum call stack size exceeded
====================================================================================================================

16. Lexical Scope : A function can access variables from where it's defined, not where it's called.

let name = "John";

function outer() {

  function inner() {
    console.log(name);
  }

  inner();
}
outer();
====================================================================================================================

17. Closure : A function remembers variables from its outer scope even after the outer function has finished.

function counter() {

  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}
const c = counter();

c();
c();
c();

Output
1
2
3

Uses : Private variables,Memoization,Event handlers,Timers
====================================================================================================================

18.           Packed                                vs                                Holey Arrays (V8)
           Packed Array (Fast)                                                      Holey Array (Slower)
          const arr = [1,2,3,4];                                                     const arr = [1,,3];
                                                                                  
      or

    const arr = [];

      arr[5] = 10;

V8 optimizes packed arrays much better than holey arrays.

Prefer:

const arr = [1,2,3];

instead of creating sparse arrays.
===================================================================================================================

19. V8 Engine : Google's JavaScript engine.

Used by :Chrome,Node.js,Deno (historically uses V8 under the hood)

What it does:

JavaScript
      ↓
Parser
      ↓
AST
      ↓
Ignition (Interpreter)
      ↓
TurboFan (JIT Compiler)
      ↓
Machine Code

This compilation pipeline is why JavaScript can run very fast after warm-up.
====================================================================================================================

20. V8 Debug : Tools to inspect how V8 optimizes your code.

Common approaches:

Chrome DevTools (Sources, Performance, Memory)
Node.js Inspector (node --inspect)
V8 diagnostic flags (advanced)

Example:

node --inspect app.js

Then open Chrome DevTools to debug.

Uses
Find memory leaks
Inspect call stacks
Set breakpoints
Profile performance
====================================================================================================================

21. JSVU

JSVU (JavaScript Version Updater) is a command-line tool for installing the latest JavaScript engines (such as V8, SpiderMonkey, and JavaScriptCore) locally.

Example:

npm install -g jsvu
jsvu

You can then run the latest V8 shell:

v8
Uses
Test the newest JavaScript features
Compare behavior across engines
Experiment without installing a full browser
Quick Interview Cheat Sheet
Topic	What it solves	Common use
Two Pointers	Efficient array/string traversal	Palindrome, pair sum
Promise	Async result handling	APIs, database calls
async/await	Cleaner async code	fetch(), network requests
fetch	HTTP requests	REST APIs
Event Loop	Manages async execution	Timers, I/O, UI events
bind	Fixes this	Event handlers, callbacks
call	Invokes function with a custom this	Function borrowing
Prototype	Shared methods & inheritance	Memory-efficient objects
OOP	Structure code	Large applications
Class	Blueprint for objects	Domain models
Constructor	Initializes objects	Setting initial state
Static	Class-level methods	Utility functions
Getter/Setter	Controlled property access	Validation, computed properties
Lexical Scope	Variable visibility	Nested functions
Closure	Persistent access to outer variables	Private state, memoization
Stack Overflow	Too much recursion	Recursive algorithms
Packed vs Holey	Array performance	Optimize hot code paths
V8	Executes JavaScript	Chrome, Node.js
V8 Debug	Debug & profile	Performance tuning
JSVU	Latest JS engines	Testing new language 
====================================================================================================================

