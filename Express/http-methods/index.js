const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
const PORT = 5000;
const data = require("./data");
let students = data;

// middleware
app.use(express.json());

app.post("/addOne", (req, res) => {
  const uniqueId = uuidv4();
  const newObj = { _id: uniqueId, ...req.body };

  students.push(newObj);
  res.status(201).json({ id: uniqueId, message: "created successfully" });
});

app.post("/addMany", (req, res) => {
  const data = req.body;

  if (data !== 0) {
    data.map((obj) => {
      const uniqueId = uuidv4();
      students.push({ _id: uniqueId, ...obj });
    });
    res.status(201).send("created multiple students");
  }

  res.status(204).send("please add any data to post");
});

app.get("/", (req, res) => {
  res.send("<h1>welcome to node express api</h1>");
});

app.get("/get", (req, res) => {
  if (students.length > 0) {
    res.status(200).send(students);
  } else {
    res.status(204).send(students);
  }
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const len = students.length;
  for (let i = 0; i < len; i++) {
    if (students[i].id === id) {
      return res.send(students[i]);
    }
  }
  res.status(404).send("id is not found");
});

app.patch("/:id", (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  const len = students.length;

  for (let i = 0; i < len; i++) {
    if (students[i].id === id) {
      students[i] = { ...students[i], ...updateData };
      return res.status(200).send("updated successfully");
    }
  }

  res.status(404).send("id is not found");
});

app.put("/", (req, res) => {
  const { courseName } = req.query;
  const updateData = req.body;
  const len = students.length;
  let flag = false;
  for (let i = 0; i < len; i++) {
    if (students[i].courseName === courseName) {
      students[i] = { ...students[i], ...updateData };
      flag = true;
    }
  }

  if (flag) return res.status(200).send("updated successfully");

  res.status(404).send("course name is not found");
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  let flag = false;

  const finalDate = students.filter((i) => {
    if (i.id !== id) return i;
    flag = true;
  });
q
  students = finalDate;

  if (flag) return res.status(200).send("deleted successfully");

  res.status(404).send("id is not found");
});

app.delete("/", (req, res) => {
  const data = req.query;

  const keys = Object.keys(data);
  const values = Object.values(data);

  const finalData = students.filter((obj) => {
    let flag = false;
    for (const key in obj) {
      if (keys.includes(key) && values.includes(obj[key])) flag = true;
    }

    return !flag ? obj : undefined;
  });

  // console.log(flag);

  // students = finalDate;

  // if (flag) return res.status(200).send("deleted successfully");

  // res.status(404).send("id is not found");
  res.status(200).send(finalData);
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
