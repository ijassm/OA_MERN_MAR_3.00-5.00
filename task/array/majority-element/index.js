// function findRepeatedValues(arr) {
//   let output = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         if (!output.includes(arr[i])) output.push(arr[i]);
//       }
//     }
//   }

//   return output;
// }

// console.log(findRepeatedValues([1, 2, 3, 3, 3, 2, 2]));

function majorElement(arr) {
  let maxcount = 0;

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if ((arr[i] == arr[j], count++)) {
        if (count > maxcount) {
          maxcount += arr[i];
        }
      }
    }
  }
  return maxcount;
}

console.log(majorElement([1, 2, 2, 2, 3, 3]));
