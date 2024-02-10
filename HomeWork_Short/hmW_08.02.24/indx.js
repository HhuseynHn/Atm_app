/** @format */

// -------------Task 1 ------------------

// var maxFn = (ar) => {
//   var firstNm = ar[0];
//   for (let i of ar) {
//     if (i > firstNm) {
//       firstNm = i;
//     }
//   }
//   return firstNm;
// };

// console.log("MAX: ", maxFn(ary));
// -------------Task 2 ------------------

// var minFnshrt = (ar) => {
//   var minN = ar[0];
//   for (let i of ar) {
//     if (i < minN) minN = i;
//   }
//   return minN;
// };

// console.log("Min_nmbr: ", minFnshrt(ary));

// var ary = [3, 6, 2, 5, 10, 12, 14, 20, 60, 4];
//------------------------------------------------

//------------------------------------------

//------------ TASK - FLOOR------------
// var floorFun = (nmb) => {
//   var num = parseInt(nmb);
//   return nmb > num ? num : nmb < num ? num - 1 : nmb;
// };
// var inpNmb = 1.99;
// console.log(floorFun(inpNmb));
// //---------------------------------------------------------

// --------------TASK - CEIL------------
// var ceilFun = (nmb) => {
//   var num = parseInt(nmb);
//   return nmb > num ? num + 1 : nmb < num ? num : nmb;
// };

// var inptNum = -6;
// console.log(ceilFun(inptNum));
//-------------------------------------------------------
// var maxFn = (...ar) => {
//   var maxN = 0;
//   var secnMax = 0;
//   for (let i of ar) {
//     if (i > maxN) {
//       maxN = i;
//     }
//   }
//   var ary = ar.splice(maxFn, 1);
//   console.log(ary);
//   return maxN;
// };

// console.log(maxFn(2, 4, 6, 65, 8));

// var ary = [2, 5, 6, 8, 10, 15];

// var result = ary.filter((a) => a !== 8);

// console.log(result);

//------------------------------------------------
// var strn = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// var lengthFunc = (lngth) => {
//   var randStrng = "";
//   for (let i = 0; i < lngth; i++) {
//     var randIndx = parseInt(Math.random() * strn.length);
//     randStrng += strn[randIndx];
//     }
//     return randStrng
// };

// var nmbLgth = 20;
// console.log(lengthFunc(nmbLgth));











