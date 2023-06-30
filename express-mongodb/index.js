const { connectDB } = require("./connection");
const express = require("express");
const app = express();
const router = require("./routes/mentor-route");
const PORT = 5000;

connectDB();

// middleware json convertion
app.use(express.json());

// middleware route
app.use("/mentor", router);

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
