/** @format */

// string verilir => icerisindeki "x" ve "y" herflerinin sayini tapiriq
// her iki herflerin sayi 2 tam bolunre gerye funksya true qaytmldir eks halda false

// var findLetrFunc = function (word) {
//   var x = 0;
//   var y = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i].toLocaleLowerCase() == "x") {
//       x += 1;
//     } else if (word[i].toLocaleLowerCase() == "y") {
//       y += 1;
//     }
//   }

//   return [x, y];
// };
// var wordInpt = prompt("Enter word");

// var resultFindLetr = findLetrFunc(wordInpt);
// function checkFindLetr(ary) {
//   if (ary[0] % 2 == 0 && ary[1] % 2 == 0 && ary[0] !== 0 && ary[1] !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkFindLetr(resultFindLetr));

//--------------------------------------------------------------------

// 1. solda duran element sagdakindan boyukdurse soldan sagi cixir yeni Arraya push edir
// 2. solda duran element sagdaki elementden boyukdurse solda duran novbeti elementlere baxir ve sonra egelnden cixir ferqi yeni Arraya push edir
// 3. eger solda duran element sagdakilarin hamisindan boyukdurse o zaman hemin elementin ozunu push edir

// var array = [8, 6, 4, 3, 4];
// function differenceReturnAry(ary) {
//   var newAry = [];
//   var indx = false;
//   for (let i = 0; i < ary.length; i++) {
//     for (let f = i; f < ary.length; f++) {
//       indx = true;
//       if (ary[i] > ary[f]) {
//         newAry.push(ary[i] - ary[f]);
//         indx = false;
//         break;
//       }
//     }
//     if (indx) {
//       newAry.push(ary[i]);
//       indx = false;
//     }
//   }
//   return newAry;
// }

// //---------------------

// console.log(differenceReturnAry(array));
//=====================================================================================
// // murekkeb ededleri arryde qaytaran array
// var inptNumber = prompt("Enter nmbr");

// function isPrimeNmbr(nmbr) {
//   var result = false;

//   for (let i = 2; i < nmbr; i++) {
//     if (nmbr % i == 0) {
//       result = true;
//       break;
//     }
//   }

//   return result;
// }
// function primeNumbrArry(nmber) {
//   var newAry = [];
//   for (let i = 2; i <= nmber; i++) {
//     if (isPrimeNmbr(i)) {
//       newAry.push(i);
//     }
//   }
//   return newAry;
// }
// console.log(primeNumbrArry(inptNumber));

//======================================================
// arrayda reqem sayi 2ye bolunen ededlerinin sayi
// Task 2 during the lesson

// var arry = [122, 2132, 123, 23, 5566, 669988];

// function countNumber(ary) {
//   var count = 0;

//   for (let i = 0; i < ary.length; i++) {
//     if (ary[i].toString().length % 2 == 0) {
//       count += 1;
//     }
//   }
//   return count;
// }
// console.log(countNumber(arry));
//=====================================================
