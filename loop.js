//for (let i = 1; i <= 3; i++) {
//    console.log("hello, world")
//}

// Loop through array
const tripLocation = ["London", "Bali", "Amsterdam", "Paris"];

/* for (let i= 0; i < tripLocation.length; i++) {
    console.log (tripLocation[i])

}*/

/* for (let i= 0; i < tripLocation.length; i++) {
    if (tripLocation === "Amtersdam") {
        console.log("found Amsterdam")
        break
    }
}
*/

// While loop
//let i = 0
//while (i <= 3){
//    console.log("hello, world")
//    i++
//}

//let count = 1
//while (count < 100 ){
//    count = count + 2
//}

//console.log(count)

//for (let i = 0; i < 3; i++) {
//    console.log("i", i)
//    for (let j = 0; j < 3; j++) {
//        console.log("j", j)
//    }
//}

/* For loop Exercise: 
Write a code that will loop from 0 to 15. For each loop, it will check if the current index number is odd or even, and display a message to the console.

Example Output:
0 is even
1 is odd
2 is even */

// for (let i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }

// for (let i = 0; i <= 15; i++) {
//   i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`);
// }

const callMe = () => {
  console.log("hello from callback function");
};

// const helloSomeone = (name) => {
//   console.log(`Hello, ${name}`);
// };
const greeting = (callback) => {
  console.log("hello, world");
  callback("Men");
};

//greeting(helloSomeone);

// greeting(function () {
//   console.log("hello, from another callback function");
// });

// greeting(() => {
//   console.log("hello, from another callback function");
// });

greeting((name) => {
  console.log(`hello, ${name} from another callback function`);
});
