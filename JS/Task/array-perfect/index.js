const arr = [1, 2, 3, 4];
const rev = [];
let isPerfect = true;

for (let i = arr.length - 1; i >= 0; i--) {
  rev.push(arr[i]);
}

console.log(rev, "rev");
console.log(arr, "arr");

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== rev[i]) {
    isPerfect = false;
    break;
  }
}

if (isPerfect) {
  console.log("it is perfect array");
} else {
  console.log("it is not perfect array");
}
