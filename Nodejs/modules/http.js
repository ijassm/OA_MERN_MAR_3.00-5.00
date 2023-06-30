// const http = require("http");
const readline = require("readline");

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r.question("what is your age: ", (input) => {
  if (input >= 18) console.log("eligible for voting");
  else console.log("not eligible for voting");
  r.close();
});

process.on("exit", () => {
  console.log("nodejs program finished");
});

// console.log(process);
