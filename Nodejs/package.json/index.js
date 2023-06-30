const express = require("express");
const app = express();
const PORT = 5000;

const students = [];

app.get("", (req, res) => {
  res.send("welcome to nodejs express api");
});

app.get("/hello", (req, res) => {
  res.status(200).json({
    data: "hello nodejs",
    status: 200,
  });
});

// app.post("add", (req, res) => {
//   res.status(200).json({
//     message: "successfull add one student",
//   });
// });

app.listen(PORT, () => {
  console.log(`server is started successfully at ${PORT}`);
});
