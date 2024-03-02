/** @format */

// var user = {
//   id: 1,
//   name: "John",
//   surname: "surname",
// };

// for (let [key, itm] in Object.entries(user)) {
//   console.log([key]);
// }
//
// function foo(start, end, sum) {
//   if (start >= end) return sum;
//   sum += start;
//   start++;
//   return foo(start, end, sum);
// }

// console.log(foo(3, 10, 0));
//----------------------------------------- END at the lesson task ----------------------------------

// var user = [
//   {
//     id: 1,
//     name: "John",
//     surname: "surname",
//   },
//   {
//     id: 2,
//     name: "JXXX",
//     surname: "surname",
//   },
// ];

// let array1 = [5, 12, 8, 130, 44];

// function loopFunc(start, end, sum) {
//   if (start == end) return sum;
//   sum += start;
//   // console.log("start:", start, "End", end, "SUM: ", sum);
//   start++;
//   return loopFunc(start, end, sum);
// }

// console.log("SUM: ", loopFunc(2, 10, 0));

let usr = {
  id: 1,
  name: "John",
  surname: "surname",
};
let aryEntries = [];
for (let key in usr) {
  aryEntries.push(usr[key]);
}
console.log("WITH FOR", aryEntries);

console.log(Object.values(usr));
