// Q1
// const num = 5;
// console.log(num+5);
// let a = 6
// a+=num;
// console.log(num-a)

const { disconnect } = require("process")

// Q2
// let a = 2; 
// { let a = 3; 
//     { let a = 4; 
//         { let a = 5; 
//             console.log(a); 
//         } console.log(a); 
//     } console.log(a); 
// } 
// console.log(a);

// Q3
// arr = [ 
// { name: "Delhi", rainfall: [2.3, 4, 3.1, 5.5, 1.1, 1.2, 7] }, 
// { name: "Noida", rainfall: [6.3, 0, 0.1, 3.5, 1, 2.6, 0.7] }, 
// { name: "Dehradun", rainfall: [12, 5.6, 3.1, 0.55, 11, 16.2, 19] }, 
// { name: "Nanital", rainfall: [8, 1.4, 0.61, 15.5, 6.6, 2, 9.82] }
// ]

// for (let i  = 0; i<arr.length; i++){
//     arr[i].rainfall = (arr[i].rainfall.reduce((a,b)=>a+b)/arr[i].rainfall.length)
// }
// console.log(arr)

// Q4
// let arr = [1, 2, 3]; 
// (function () { 
//     for (x in arr) 
//     arr.unshift(arr.pop()); 
//     console.log(arr); 
// })();

// let randomAdder = function 
// (arr = ["a", "b"]) { 
//     arr[arr.length * arr.length] = arr.length * arr.length; 
// };

// randomAdder(arr); randomAdder();

// console.log(arr[9]); console.log(arr[8]);

// q6
// let a = "This only works if and only if";

// let b = a.slice(a.indexOf("only"));

// let c = b.lastIndexOf("only");

// b[c] = "i";

// console.log(a); console.log(b);

// Q7
// function decToBinary(a){
//     power = 1
//     let binary = 0
//     while (a>=1){
//         dig = a%2
//         a=Math.floor(a/2);
//         binary += dig*power
//         power = power * 10 
//     }
//     console.log(binary)
// }
// decToBinary(45)

// Q8
// function spoon(a,b){
//     c = b[0]+a.slice(1,a.length)
//     d = a[0] + b.slice(1,b.length)
//     console.log(c,d)
// }
// spoon('apple','banana')

// Q9
// function f() { console.log(arguments); }

// function f(a, b) { return a + b; }

// console.log(f(2, 3, 4, 5));

// function f(x, y, z, t) { return x + y + z + t; }

// console.log(f(2, 3, 4, 5));

// Q10
// console.log(a); f(2, 3, 4, 5);
// var a = 1; 
// var a = 2; 
// console.log(a); 
// console.log(b); 
// let b = 2;

// function f() { console.log(arguments); }
//  Q11
// confusing
// let obj = {"concept":""};
// console.log( JSON.parse( JSON.stringify(obj).slice(0, 12) + "JSON" + JSON.stringify(obj).slice(12) ).concept );

// Confusing
// Q12
// let a;
// console.log(a);
// function A() { let a = 2; console.log(a);
// function C() { console.log(a);
// function D() {
//   console.log(a);
//   a = 2;
// }
// D();
// a = 3;
// } C(); }
// function B() { let a; console.log(a);
// function E() { a = 6; console.log(a);
// }
// a = 2; E(); console.log(a); }
// function F() { console.log(a); a = 2; }
// a = 3;

// F(); B(); A();

