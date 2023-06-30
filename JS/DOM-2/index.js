const doc = document;

// console.log(doc.querySelector("h1"));
// console.log(doc.querySelectorAll("h1"));

// console.log(doc.getElementsByClassName("heading"));
// console.log(doc.getElementById("heading"));

// console.log(doc.getElementsByTagName("h1"));

// let c = 0;

// function addElement() {
//   const h1 = doc.createElement("h1");
//   h1.textContent = ++c;
//   h1.style.padding = "20px";
//   h1.style.border = "1px solid red";

//   doc.body.appendChild(h1);
// }

let a = 0;
function addElement() {
  const h2 = doc.createElement("h2");
  const h1 = doc.createElement("h1");

  h2.textContent = ++a;
  h2.style.color = "red";
  h2.style.border = "solid blue";
  h2.style.padding = "2px 5px 5px";

  h1.textContent = --a;
  h1.style.color = "red";
  h1.style.border = "solid blue";
  h1.style.padding = "2px 5px 5px";
  doc.body.append(h1, h2);
}
