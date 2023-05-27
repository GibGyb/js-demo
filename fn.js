//Scoped

// let foo = "foo";

// function f() {
//   console.log(foo);
// }

// f();

// const one = () => {
//   return 1;
// };
// console.log(one);

// function filter(arr, cb) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let item = arr[i];
//     if (cb(item)) {
//       result.push(item);
//     }
//   }

//   return result;
// }

// const neg = (n) => {
//   /*   if (n < 0) {
//   //     return true
//   //   } else {
//   //     return false
//      }*/

//   return n < 0;
// };

// const pos = (n) => {
//   return n >= 0;
// };

// console.log(filter([-1, -2, 1, 2, 3], neg));

// console.log(filter([-1, 1, 2, 3], pos));

// function chooseMax(a, b) {
//   if (a > b) return a;

//   return b;
// }

// function reduce(arr, cb) {
//   answer = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];

//     answer = cb(answer, item);
//   }

//   return answer;
// }

// console.log(reduce([10, 20, 1], chooseMin));

// function chooseMin(a, b) {
//   if (a < b) return a;
//   return b;
// }

// ****** Practice ********

// function total(arr, cd) {
//   let result = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     const item = arr[i];
//     result = cd(result, item);
//   }
//   return result;
// }

// function sum(a, b) {
//   return a + b;
//   a;
// }

// console.log(total([1, 2, 3], sum));

//__________________________________

// ***** .forEach *****

// [0, 1, 2, 3, 4, 5, 6].forEach((v, i) => {
//   if (i % 2 === 0) {
//     console.log(v);
//   }
// });

// ["Beagle", "Banana", "Mr Donut"].forEach((v, i) => {
//   if (v.startsWith("Mr")) {
//     console.log(v, i);
//   }
// });

//_____________________________________

// ***** .map ***********

// const a = ["Beagle", "Banana", "Mr Donut"].map((n) => {
//   return n[0];
// });
// console.log(a);

//______________________________________

// ****** .filter ******

// const n = [1, 3, 6, 9, 13, 26, 36].filter((n) => {
//   return n % 3 === 0 || n % 13 === 0;
// });

// console.log(n);

//_____________________________________________

// Create map function instead of .map
// const map = (arr, cb) => {
//   let mapped = new Array(arr.length);
//   arr.forEach((item, i) => {
//     console.log("i", i, "item", item, "arr[i]", arr[i]);
//     mapped[i] = cb(item);
//   });

//   // for (let i=0; i < arr.length; i++) {
//   //    mapped[i] = cb(arr[i])
//   //}
//   return mapped;
// };

// const neg = (n) => n < 0;

// console.log(map([-2, -1, 0, 1, 2], neg));

//________________________________________________
// ***** Object ******

// [
//   ["art", 26, true],
//   ["tiger", 23, false],
//   ["build", 30, false],
// ];

// function personFactory(person) {
//   return {
//     name: person[0],
//     age: person[1],
//     isHandsome: person[2],
//   };
// }
// function peopleFactory(arr) {
//   return arr.map((v) => personFactory(v));
// }

// console.log(
//   peopleFactory([
//     ["art", 26, true],
//     ["tiger", 23, false],
//     ["build", 30, false],
//   ])
// );
//___________________________________________

const bodin = {
  name: "bodin",
  type: "school",
  students: [{ name: "art" }, { name: "beam" }, { name: "mond" }],
  teachers: [{ name: "boo" }, { name: "somchai" }],
  address: undefined,
};
console.log(bodin.address, bodin.foobar); //undefined, undefined
console.log("address" in bodin, "foobar" in bodin);

//____________________________________________

// TEST TEST TEST
