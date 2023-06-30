const fs = require("fs");

// Synchronous
// try {
//   const data = fs.readFileSync("demo.txt", "utf8");
//   console.log(data);
// } catch (e) {
//   console.log(e);
// }

// Asynchronous

// fs.appendFile("demo.txt", " Hello content!", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });

// fs.writeFile("demo.txt", "hi sunil", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });

// fs.readFile("demo.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

// fs.unlink("demo.txt", function (err) {
//   if (err) throw err;
//   console.log("File deleted!");
// });

// fs.rename("myrenamed.txt", "mynew.js", function (err) {
//   if (err) throw err;
//   console.log("File Renamed!");
// });

// fs.open("mynew.js", "w", function (err, file) {
//   if (err) throw err;
//   console.log("Saved!");
// });

console.log("node filehandling");
