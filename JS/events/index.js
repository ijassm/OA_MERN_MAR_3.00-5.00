const doc = document;
let isonceAdd = true;

// function triggred() {
//   const h1 = doc.querySelector("h1");
//   if (isonceAdd) h1.textContent = h1.textContent + " " + "sunil";
//   isonceAdd = false;
// }

let c = 0;

function triggred() {
  const h1 = doc.querySelector("h1");
  c++;
  switch (c) {
    case 1:
      h1.textContent = h1.textContent + " " + "sunil";
      break;

    case 2:
      h1.textContent = "myself very intelligent boy";
      break;

    case 3:
      h1.textContent = "also smart";
      break;

    case 4:
      h1.textContent = "nature beauty";
      break;

    case 5:
      h1.textContent = "bye";
      c = 0;
      break;
  }
}
