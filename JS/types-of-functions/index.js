// Function Statement

// function greeting() {
//   console.log("hello sunil");
// }

// greeting();

// Function Expression

// let a = function greeting() {
//   console.log("hello sunil");
// };

// Named Function

// let a = function greeting() {
//   console.log("hello sunil");
// };

// a();

// anonymous Function

// let a = function () {
//   console.log("hello sunil");
// };

// a();

// Arrow Function

// let a = () => console.log("hello sunil");

// a();

// IIFE

// (() => {
//   console.log("IIFE => arrow function");
// })();

// (function () {
//   console.log("IIFE => anonymous function");
// })();

// (function name() {
//   console.log("IIFE => anonymous function");
// })();

(function name(a) {
  console.log(`IIFE => ${a}`);
})("anonymous function");

// First Class Function ?

// Higher Order Function

// function greet(name) {
//   console.log("hello" + " " + name);
// }

// function sayHello(c) {
//   c("sunil");
// }

// sayHello(greet);

// function sum(...arr) {
//   let output = 0;
//   for (const i of arr) {
//     output += i;
//   }
//   return output;
// }

// console.log(sum(2, 456, 4));

// console.log(sum(2, 2, 5, 7));

// console.log(sum(2, 2));
