/** @format */

// /** @format */

// function solution(inputArray) {
//   var finlAry = [];

//   var result = inputArray.map((a, i) =>
//     i < inputArray.length - 1
//       ? finlAry.push(inputArray[i] * inputArray[i + 1])
//       : ""
//   );
//   return Math.max(...finlAry);
// }

// var ary = [3, 6, -2, -5, 7, 3];
// console.log(solution(ary));
// console.log(ary);
//----------------------------------------------------------
// n = 10          10; 9
// 1 + 2*2 + 3*3 + 4*4 + 5*5
// function solution(statues) {
//   var minElmnt = 1;
//   var maxElmnt = 0;
//   var frst = true;
//   for (let i of statues) {
//     if (i > maxElmnt) {
//       maxElmnt = i;
//     }
//     if (frst) {
//       minElmnt = i;
//       frst = false;
//     }
//     if (i < minElmnt) {
//       minElmnt = i;
//     }
//   }

//   return [maxElmnt, minElmnt];
// }

// var gv = [6, 2, 3, 8];
// console.log(solution(gv));

//====================================================================
// var meyveler = ["alma", "nar", "heyva", "gilas"];

// var test = meyveler.slice();

// test[0] = "banan";
// console.log(test);
// console.log(meyveler);

// function absFun(nm) {
//   var result;
//   if (nm < 0) {
//     nm = nm * -1;
//     result = nm;
//   } else {
//     result = nm;
//   }
//   return result;
// }

// console.log(absFun(0));
//------------------------------------

// function pow(nmbr, pw) {
//   var prdc = 1;
//   for (let i = 1; i <= pw; i++) {
//     prdc *= nmbr;
//   }
//   return prdc;
// }

// console.log(pow(4, 3));
//--------------------------------------------------------------------

// var roundFuc = (nm) => {
//   var finish = 0;
//   var result;
//   var result1;
//   result = nm.toString().split(".").slice(1);
//   result1 = nm.toString().split(".").slice(0, 1);
//   if (result >= 50) {
//     finish = Number(result1[0]) + 1;
//   } else {
//     finish = Number(result1[0]);
//   }

//   return finish;
// };

// console.log(roundFuc(11.4));
// console.log(roundFuc(11.5));
