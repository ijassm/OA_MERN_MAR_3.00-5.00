// var a = 50;
// var b = 60;
// var c = 30;

// var a = window.prompt("enter ");
// var vote = window.prompt("enter a vote B");
// var vote = window.prompt("enter a vote C");

// if (a > b && a > c) console.log("a is greater");
// if (b > a && b > c) console.log("b is greater");
// if (c > a && c > b) console.log("c is greater");

// if (a > b && a > c) console.log("a is greater");
// else if (b > a && b > c) console.log("b is greater");
// else console.log("c is greater");

// let a = -10;

// if (a > 0) console.log("positive");
// else if (a == 0) console.log("zero");
// else console.log("negative");

// let a = 20;

// if (a % 5 == 0) {
//   console.log("divisible");
// } else {
//   console.log(" not divisible");

// let a = 11;

// if (a % 2 == 0) {
//   console.log("odd number");
// } else {
//   console.log("even number");
// }

// let year = 20;

// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   console.log("leap year");
// } else {
//   console.log("comman year");
// }

// let alph = window.prompt("enter ");
// if (alph >= "a" && alph <= "z") {
//   console.log("alphabet");
// } else {
//   console.log("not alphabet");
// }

// var vow = "i";

// if (vow == "a" || vow == "e" || vow == "i" || vow == "o" || vow == "u")
//   console.log("vowels");
// else console.log("consonant");

let money = 5432,
  rs2000,
  rs500,
  rs200,
  rs100,
  rs50;

if (money >= 2000) {
  rs2000 = Math.floor(money / 2000);
  money %= 2000;
  console.log(money, "remaining");
  console.log(rs2000, "how many notes");
}
console.log(money, "money remaining");
console.log("-----");

// if (money >= 500) {
//   console.log(money % 500, "remaining");
//   rs500 = Math.floor(money / 500);
//   console.log(Math.floor(money / 500), "how many notes");
//   money -= (money % 500) * rs500;
// }
// console.log(money);
// console.log("-----");

// if (money >= 200) {
//   console.log(money % 200, "remaining");
//   rs200 = Math.floor(money / 2000);
//   console.log(Math.floor(money / 200), "how many notes");
//   money -= (money % 200) * rs200;
// }
// console.log(money);
// console.log("-----");

// if (money >= 100) {
//   console.log(money % 100, "remaining");
//   rs100 = Math.floor(money / 100);
//   console.log(Math.floor(money / 100), "how many notes");
//   money -= (money % 100) * rs100;
// }

// console.log(money);
// console.log("-----");

// if (money >= 50) {
//   console.log(money % 50, "remaining");
//   rs50 = Math.floor(money / 50);
//   console.log(Math.floor(money / 50), "how many notes");
//   money -= (money % 50) * rs50;
// }

// console.log(money);
// console.log("-----");

// if (money >= 10) {
//   console.log(money % 10, "remaining");
//   rs10 = Math.floor(money / 10);
//   console.log(Math.floor(money / 10), "how many notes");
//   money -= (money % 10) * rs10;
// }

// console.log(money);
// console.log("-----");

console.log("rs2000", rs2000);
console.log("rs500", rs500);
console.log("rs200", rs200);
console.log("rs100", rs100);
console.log("rs50", rs50);
