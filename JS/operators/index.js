// Arithmetic Operators Example

// console.log(2 + 5);
// console.log(2 - 5);
// console.log(2 * 5);
// console.log(5 ** 3);
// console.log(5 / 2);
// console.log(5 % 2);

// console.log(Math/.pow(5, 3));

// ++	Increment
// --	Decrement

// let a = 0;

// Pre Increment
// Post Increment

// let pre = ++a;
// let post = a++;

// console.log(a);
// console.log(pre);
// console.log(post);

// console.log(a++);
// console.log(++a);
// console.log(a);

// Task
// console.log(a++);
// console.log(--a);
// console.log(a++);
// console.log(++a);
// console.log(a);

// console.log(++a);
// console.log(a--);
// console.log(++a);
// console.log(a--);
// console.log(a++);
// console.log(a);

// console.log(a--);
// console.log(a++);
// console.log(++a);
// console.log(a--);
// console.log(a);

// console.log(a++);
// console.log(a++);
// console.log(--a);
// console.log(--a);
// console.log(a++);
// console.log(a);

// console.log(--a);
// console.log(++a);
// console.log(a++);
// console.log(--a);
// console.log(a--);
// console.log(--a);
// console.log(a++);
// console.log(--a);

// console.log(a++);
// console.log(--a);
// console.log(a++);
// console.log(--a);
// console.log(a++);
// console.log(--a);
// console.log(a++);
// console.log(--a);
// console.log(--a);

// console.log(--a);
// console.log(--a);
// console.log(--a);
// console.log(--a);
// console.log(++a);
// console.log(++a);
// console.log(++a);
// console.log(++a);

// console.log(++a);
// console.log(a++);
// console.log(--a);
// console.log(a--);

// console.log(a);

// Assignment

// let a = 1;

// a = a + 1;

// a += 1;

// a = a + 5;
// a += 5;
// a -= 5;
// a *= 5;
// a %= 5;
// a **= 5;

// console.log(a);

// Comparison Operators

// Operator	   Description
// ==	       equal to
// ===	       equal value and equal type
// !=	       not equal
// !==	       not equal value or not equal type
// >	       greater than
// <	       less than
// >=	       greater than or equal to
// <=	       less than or equal to
// ?	       ternary operator

// it will return a boolean value/

// console.log(1 == "1");
// console.log(1 === "1");

// console.log("------");

// console.log(1 != "1");
// console.log(1 !== "1");

// console.log("------");

// console.log(1 > "0");
// console.log(1 > -99);

// console.log("------");

// console.log(1 < "-81");
// console.log(1 < -99);

// console.log("------");

// console.log(1 >= "1");
// console.log(1 <= 1);

// console.log("------");

// console.log(-5 >= -667867867);
// console.log(45 < 67);
// console.log(1 <= -1);
// console.log(-1 >= 56);
// console.log(-1 == "-1");
// console.log(-1 === "-1");
// console.log(-1 !== "-1");
// console.log(-1 === 1);

// console.log("------");

// // String Comparison

// let text1 = "A";
// let text2 = "B";
// let result = text1 < text2;

// console.log(result);
// console.log("t" > "y");

// console.log("------");

// String Addition (String concatenate)

// const a = window.prompt("enter your name");

// console.log("myself" + " " + a);

// console.log("------");

// let text = "What a very ";
// text += "nice day";

// console.log(text);

// console.log("-----");

// Adding Strings and Numbers

// let x = 5 + 5;
// let y = "5" + 5;
// let z = "Hello" + 5;

// console.log(y);

// console.log("----");

// Logical Operators

// Operator	    Description
// &&	        logical and
// ||	        logical or
// !	        logical not

// &&
// true true = > true
// true true false = > false
// true true true false = > false
// true true true  = > false
// true true = > false

// // ||
// true true = > true
// // true true false = > true
// true true true false = > true
// false false  = > false
// true true = > true

// !
// true = > false
// false = > true

// console.log(2 > 5 && -8 > 6);
// console.log(2 > -5 && -8 > 6);

// console.log("");

// console.log(2 > -5 || -8 > 6);
// console.log(2 > -5 || -8 > 6 || 2 > 5);

// console.log("");

// console.log(2 > -5 || !(-8 > 6));
// console.log(!(2 > -5) || -8 > 6);
// console.log(!(!(2 > -5) || -8 > 6));

// ternary operator (?)

// let a = 3;
// let b = 2;

// console.log(a > b ? "a is greater" : "b is greater");

const age = Number(prompt("enter your age"));

console.log(age, "age");

console.log(age >= 18 ? "eligible for voting" : "not eligible for voting");
