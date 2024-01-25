/** @format */

// function revrseDigit(elmnt) {
//   for (let i = 0; i < elmnt; i++) {}
// }

// function test(alma) {
//   alma();
// }

// function armud() {
//   console.log("Men parametr olaraq oturulen callbackem");
// }

// test(armud());
//============================================================
// var nmbr = 523;

// var prdctNm = (nmbr) =>
//   String(nmbr)
//     .split("")
//     .reduce((a, b) => a * b);

// console.log(prdctNm(nmbr));
//===========================================================

var ar = [1, 5, -3, -2, -4, 10, 12, 6];

var postvPrimeNm = ar
  .filter((e) => e % 2 == 0 && e > 0)
  .reduce((a, b) => a + b);

console.log(postvPrimeNm);
