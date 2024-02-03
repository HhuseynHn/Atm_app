/** @format */

// ----------------------Task 1 ----------

// 1. var array = [21, 140, -123, -340];->[ 12, 41, -321, -43 ]   arrayin daxilindeki ededleri tersine cevirin

// var array = [21, 140, -123, -340];

// var revrseElmnt = (elmn) =>
//   elmn.map((e) =>
//     e > 0
//       ? Number(e.toString().split("").reverse().join(""))
//       : e.toString().split("").splice(1).reverse().slice(0).join("") * -1
//   );
// console.log(array);
// console.log(revrseElmnt(array));

//-------------------------------------------------------------------------

//------------------------Task 2----------------
// 2. [[4,3,2],[2,4,6,8],[3,4,9]] -> 3+3=9=18/3  arrayin daxilindeki ededlerden hansi tekdirse onlari tapib , ededleri ortasin tapan app yazin.  forun zadin basin buraxin. muasir usu

// var ary = [
//   [4, 3, 2],
//   [2, 4, 6, 8],
//   [3, 4, 9],
// ];

// var isOddFindAp = (elm) => {
//   return elm.map(
//     (e) => e.filter((el) => el % 2 !== 0).length
//   )` .reduce((a, b) => a + b);`;
// };
// console.log(isOddFindAp(ary));
//==========================================================================
// var ary1 = [2, 4, 5, 6, 11, 12, 8];
// var ary2 = [4, 6, 5, 3, 11];

// // var repaetFunc(ar) => {

// var count = 0;

// for (let i = 0; i < ary1.length; i++) {
//   if (ary1.includes(ary2[i])) {
//     count += 1;
//   }
// }
// console.log(count);

// var repeatNum = (ar) => {
//   ar.filter(a);
// };   ================> yeni usulla yaz
//-----------------------------------
//-----------------------------
// fiboonocci nin murekkeb ededlerini geri qaytarsin

// var inptNmber = 10;

// var fibo = (nmb) => {
//   var firstNm = 0;
//   var secndNm = 1;
//   var main = firstNm + secndNm;
//   var fibN = [];
//   fibN.push(firstNm);
//   fibN.push(secndNm);
//   while (nmb > main) {
//     fibN.push(main);
//     firstNm = secndNm;
//     secndNm = main;
//     main = firstNm + secndNm;
//   }
//   return fibN;
// };

// console.log(fibo(inptNmber));

//---------------------
