/** @format */
//--------------------------------Oyun -----------------------------------
// var randIndxFun = (ary) => parseInt(Math.random() * ary.length);

// var checkFun = () => {
//   var live = 3;
//   var win = 0;
//   var lost = 0;
//   var result;
//   while (true) {
//     var indxRand = randIndxFun(meyveler);
//     var promt = parseInt(prompt("ent"));
//     console.log(
//       "User choose: -",
//       meyveler[promt],
//       " | ",
//       "Computer choose: -",
//       meyveler[indxRand]
//     );
//     if (promt == indxRand) {
//       win += 1;
//       live += 1;
//       console.log("Live: ", live, " WIN: = ", win, " LOST: ", lost);
//     } else {
//       lost += 1;
//       live = live - 1;
//       console.log("Live: ", live, " WIN: = ", win, " LOST: ", lost);
//     }

//     if (live == 0) {
//       console.log(`FINISH:  Live = ${live}  WIN = ${win}; Lost = ${lost}`);
//       break;
//     }
//   }
//   return;
// };

// var meyveler = ["gilas", "heyva", "nar", "banan"];
// checkFun();
//---------------------------------------------------------------------
//------------------ 2-ci Max ed-------------------------------
// var firstMax = (arr) => {
//   var max = arr[0];
//   for (let i of arr) {
//     if (i > max) {
//       max = i;
//     }
//   }
//   return max;
// };

// var secndMaxFun = (ar) => {
//   var removeMax = ar.filter((a) => a !== firstMax(ar));
//   var secondMaxElmn = firstMax(removeMax);
//   return secondMaxElmn;
// };
// var gnrlAry = [5, 50, 3, 100, 4, 60, 9, 1, 10, 15, 30, 6];

// console.log("First: ", firstMax(gnrlAry));
// console.log("Second_MAX: ", secndMaxFun(gnrlAry));
//--------------------------------------------------------------------
// --------------------------- 2-ci Min ed----------------------------
// var firstMinFun = (arr) => {
//   var firstMin = arr[0];
//   for (let i of arr) {
//     if (i < firstMin) {
//       firstMin = i;
//     }
//   }
//   return firstMin;
// };

// var secndMinFun = (ary) => {
//   var removeFirstMax = ary.filter((elm) => elm !== firstMinFun(ary));
//   var result = firstMinFun(removeFirstMax);
//   return result;
// };

// var gnrlAry = [5, 50, -1, 0, 3, 100, 4, 60, 9, 1, 10, 15, 30, 6];
// console.log("FirstMIN: ", firstMinFun(gnrlAry));
// console.log("Second_MIN: ", secndMinFun(gnrlAry));
// //--------------------------------------------------------------------
//----------------------- Random sentence-----------------------------------
// var words = [
//   "bu",
//   "asandir",
//   "men",
//   "bilirem",
//   "salam",
//   "necesen",
//   "ne var",
//   "ne yox",
//   "neynirsen",
//   "isler",
//   "necedir",
//   "qonsumuz",
//   "yaxsidir",
// ];

// var getRandInd = (maxLeng) => parseInt(Math.random() * maxLeng.length);

// var getRandIndAry = () => {
//   var randIndAry = [];
//   while (true) {
//     var firstWord = getRandInd(words);
//     if (!randIndAry.includes(firstWord)) {
//       randIndAry.push(firstWord);
//     }
//     if (randIndAry.length == 5) {
//       break;
//     }
//   }

//   return randIndAry;
// };
// var getSentence = (aryWords) => {
//   var indxAry = getRandIndAry();
//   var newRandAry = [];
//   for (let i = 0; i < indxAry.length; i++) {
//     newRandAry.push(words[indxAry[i]]);
//   }
//   return newRandAry.join(" ");
// };

// var workFunc = () => {
//   alert(getSentence(words));
//   var result = confirm("Are you continue?");
//   while (result) {
//     alert(getSentence(words));
//     var result = confirm("Are you continue?");
//   }
// };
// workFunc();
//------------------------------------------------- END -------------------------

// 1. 2 ci max
// 2. elementleri tersine cevir.
// 3. murekkeblerin cixardirsiniz.
// 4. min vereceksiniz


const array = [
  [23, 4, 32, 12],
  [23, 12, 45, 67],
  [12, 34, 121]]

var secndMax = (ary) => {
  var result = ary.map((a) => a.filter((n) => n !== Math.max(...a)));
console.log(result);
}
      

console.log(secndMax(array));


















