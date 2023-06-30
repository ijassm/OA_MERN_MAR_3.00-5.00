// Primitive Type

// let a = 12; //M212
// let b = a; //M2543

// a = 20;

// console.log(a);
// console.log(b);

// Reference Type

// const arr = [1, 2, 3, 4, 5];

// const a = arr;
// const b = arr;
// const c = arr;

// c[0] = 0;

// console.log(arr);
// console.log(a);
// console.log(b);
// console.log(c);

const person = {
  name: "ocean",
  age: 10,
};

const a = person;
const b = a;
const c = a;

c.age = c.age + 1;

// person.name = person.name + " " + "academy";
// person["name"] = person["name"] + " " + "academy";

console.log(person);
console.log(a);
console.log(b);
console.log(c);

// const a = 2;

// a = 5;

// console.log(a);
// console.log(arr[0]);
// console.log(arr[3]);
