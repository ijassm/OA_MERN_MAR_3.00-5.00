const doc = document;

console.log(doc.head);
console.log(doc.body);

const h1 = doc.querySelector("h1");

h1.textContent = h1.textContent + " " + "sunil";
h1.style.color = "red";
h1.style.fontSize = "50px";
