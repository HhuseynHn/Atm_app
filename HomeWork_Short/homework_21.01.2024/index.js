/** @format */

// Task -3
// ededin reqemlerinin cemin tap

// var nmbrPrm = prompt("Enter nmb");

// function sumDgt(nmbr) {
//   var nmStrn = nmbr;
//   var newAry = nmStrn.split("");
//   var sum = 0;
//   for (let i = 0; i < newAry.length; i++) {
//     sum += parseInt(newAry[i]);
//   }
//   return sum;
// }

// console.log(sumDgt(nmbrPrm));

//---------------------------------------------
//=====================================================
// Task - 2
// show the print less than minus digit in the new array

// var aryList = [
//   [4, 3, -1],
//   [2, -1, -2, -3],
//   [3, 4, 5, -6],
// ];

// var minusAryList = function (arynm) {
//   var newAry = [];
//   for (let i = 0; i < arynm.length; i++) {
//     for (let f = 0; f < arynm[i].length; f++) {
//       if (arynm[i][f] < 0) {
//         newAry.push(arynm[i][f]);
//       }
//     }
//   }
//   return newAry;
// };
// console.log(minusAryList(aryList));
//==================================================

// Task - 1
// 1. [122,2132,123,23] bu elementlerin icinde hansinin uzunlugu 2 ye tam olaraq bolunurse onlari array halinda geriye qaytarin (hazir (tostring, length property ve s. funksiyadan istifade etmeden )

// var aryLst = [122, 2132, 123, 23, 156];

// function lengthRtern(ary) {
//   var count = 0;
//   var i = 0;
//   var contrl = true;
//   while (contrl) {
//     if (ary[i] == undefined) {
//       contrl = false;
//     } else {
//       count += 1;
//     }
//     i++;
//   }
//   return count;
// }

// function toStringAry(elmnt) {
//   for (let i = 0; i < lengthRtern(elmnt); i++) {
//     elmnt[i] = `${elmnt[i]}`;
//   }
//   return elmnt;
// }

// function checkDvideRetrn(ary) {
//   var newAry = [];
//   var n = 0;
//   toStringAry(ary);
//   for (let i = 0; i < lengthRtern(ary); i++) {
//     if (lengthRtern(toStringAry(ary[i])) % 2 == 0) {
//       newAry[n] = parseInt(ary[i]);
//       n += 1;
//     }
//   }
//   return newAry;
// }

// console.log(checkDvideRetrn(aryLst));
//==============================================================
// Task - 4
// reqem verilir hemin reqemin sayi qeder randim reqem qaytarmaliyiq
// ve umumi cem sifira beraber olmaldir

// function getRandom(min, max) {
//   return parseInt(Math.random() * (max - min) + min);
// }

// function totalZeroFunc(nmbr) {
//     for (let i = 1; i <= nmbr; i++) {

//   }
// }
//=============================================================
// var ary = [32, 15, 22,11];

// function sumNmbr(nmbr) {
//   var sum = 0;
//   while (nmbr > 0) {
//     sum += nmbr % 10;
//     nmbr = parseInt(nmbr / 10);  //
//   }
//   return sum;
// }

// function arySummry(ary) {
//   var total = 0;
//   for (var i of ary) {
//     total += sumNmbr(i);
//   }
//   return total;
// }

// console.log(arySummry(ary));
//========================================================

// var ary = [-12, -12, 120, 12, 120, 30];

// function isUnicNmb(elmn) {
//   var newAry = [];
//   for (let i of elmn) {
//     if (!newAry.includes(i)) {
//       newAry.push(i);
//     }
//     }
//     return newAry
// }

// var unicAry= isUnicNmb(ary)

// function sumNmbr(nmbr) {
//   var sum = 0;
//   while (nmbr > 0) {
//     sum += nmbr % 10;
//     nmbr = parseInt(nmbr / 10);  //
//   }
//   return sum;
// }

//  function arySummry(ary) {
//   var total = 0;
//   for (var i of ary) {
//     total += sumNmbr(i);
//   }
//   return total;
// }

// console.log(arySummry(unicAry));

//=======================================================
var str = "SalAmR";
console.log(str);
function revrseLetr(word) {
  var newStrng = "";
  for (let i of word) {
    if (i === i.toLocaleLowerCase()) {
      newStrng += i.toLocaleUpperCase();
    } else {
      newStrng += i.toLocaleLowerCase();
    }
  }
  return newStrng;
}

console.log(revrseLetr(str));
