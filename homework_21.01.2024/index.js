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

var aryLst = [122, 2132, 123, 23, 156];

function lengthRtern(ary) {
  var count = 0;
  var i = 0;
  var contrl = true;
  while (contrl) {
    if (ary[i] == undefined) {
      contrl = false;
    } else {
      count += 1;
    }
    i++;
  }
  return count;
}

function toStringAry(elmnt) {
  for (let i = 0; i < lengthRtern(elmnt); i++) {
    elmnt[i] = `${elmnt[i]}`;
  }
  return elmnt;
}

function checkDvideRetrn(ary) {
  var newAry = [];
  var n = 0;
  toStringAry(ary);
  for (let i = 0; i < lengthRtern(ary); i++) {
    if (lengthRtern(toStringAry(ary[i])) % 2 == 0) {
      newAry[n] = parseInt(ary[i]);
      n += 1;
    }
  }
  return newAry;
}

console.log(checkDvideRetrn(aryLst));
//==============================================================
