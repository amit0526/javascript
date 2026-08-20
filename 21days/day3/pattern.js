// 1.Print Right-angled star Triangle.
  
let n = 5;

for (let i = 1; i <=n; i++) {
  let row = "";
  for (let j = 1; j <=i; j++) {
    row += "*";
    }
  // console.log(row);
}

// 2. Print invert Right-Angled triangle.

let n1 = 6;

for (let i = n1; i >= 1; i--){
  let row = "";
  for (let j = 1; j <= i; j++){
    row += "*";
  }
  console.log(row);
}