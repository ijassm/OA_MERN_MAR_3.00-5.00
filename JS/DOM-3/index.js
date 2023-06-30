const doc = document;

for (let i = 0; i < 5; i++) {
  const row = doc.createElement("main");
  row.className = "row";
  for (let j = 0; j < 5; j++) {
    const box = doc.createElement("section");
    box.className = "box";
    row.appendChild(box);
  }
  console.log(row);

  doc.body.appendChild(row);
}
