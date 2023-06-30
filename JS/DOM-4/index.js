const doc = document;

console.log("start");

setInterval(() => {
  const h1 = doc.querySelector("h1");
  const date = new Date();
  const hr = date.getHours() < 12 ? date.getHours() : date.getHours() - 12;
  const min = date.getMinutes();
  const sec = date.getSeconds();
  h1.textContent = `${hr} Hrs : ${min} Min : ${sec} sec`;
  //   console.log(`${hr} Hrs : ${min} Min : ${sec} sec`);
}, 1000);

console.log("end");

// for (let i = 0; i < 500; i++) {
//   console.log("end");
// }
