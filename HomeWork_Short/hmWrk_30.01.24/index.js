/** @format */

// /** @format */
// // 1,2 ,3,4, 5,6,
// function solution(inputArray) {
//   var a = 0;
//   var b = 1;
//   var prdAry = [];
//   var max = 1;
//   for (let i = 0; i < inputArray.length / 2; i++) {
//     prdAry.push(inputArray[i + a] * inputArray[i + b]);
//     a += 1;
//     b += 1;
//   }

//   for (let i = 0; i < prdAry.length; i++) {
//     console.log(prdAry[i]);
//     if (prdAry[i] > max) {
//       max == prdAry[i];
//     }
//   }

//   return;
// }

// var ar = [3, 6, -2, -5, 7, 3];
// console.log(solution(ar));
//==================================================

// var ary = [
//   [4, 3, -1],
//   [2, -1, -2, -3],
//   [3, 4, 5],
// ];

// var newAry = ary
//   .map((a) => a.filter((b) => b < 0).length)
//   .reduce((a, b) => a + b);

// console.log(newAry);

// var ar = [122, 232, 1234, 3223];

// var result = ar.filter((elm) => elm.toString().length % 2 == 0).length;

// console.log(result);

// var ary = [8, 50, 16, 19, 5, 1, 3, 6, 9, 10, 15];

// var f = ary.every((a, b) => a < 20);
// console.log(ary);
// console.log(f);
