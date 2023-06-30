// let text1 = "sea";
// let text2 = "food";
// let result = text1.concat(" ", text2, " ", "is good");

// console.log(result);

// console.log(text1 + " " + text2);

let text = "Hello world";
let result = text.endsWith("lo", 5);

console.log(result);

// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world");

// console.log(result);

// let text = "W3Schools";
// let character = text.at();

// console.log(character);

const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);
// Expected output: "The word "fox" is in the sentence"
