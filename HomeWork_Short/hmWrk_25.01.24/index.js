/** @format */
// Task 1  => verilen ededi tersine ceviren app yazin meselen 231 -> (132)
// var inptNm = prompt("Enter nmber for reverse");
// function revrseNumFunc(elmnt) {
//   var revrsNm = "";
//   while (elmnt > 0) {
//     revrsNm += elmnt % 10;
//     elmnt = parseInt(elmnt / 10);
//   }
//   return parseInt(revrsNm);
// }

// console.log(revrseNumFunc(inptNm));
//=======================================================================
// Task 2. -  "       Salam    necesen        ishler nece          gedir       "   ←-----   metnini
// “Salam necesen ishler nece gedir” ←--------      halina getirin.

// var textDrty =
//   "       Salam    necesen        ishler nece          gedir       ";

// function cleanTextBlanck(text) {
//   text = text.split(" ");
//   var newAr = [];
//   var result;
//   for (let i of text) {
//     if (i !== "") {
//       newAr.push(i);
//     }
//   }
//   result = newAr.join(" ");
//   return result;
// }

// console.log(cleanTextBlanck(textDrty));
// ========================================================================
// Task -3  =>  Ele bir method yazin ki:  HeLLo WorlD-> chevrilsin olsun hEllO wORLd.
// Yeni boyuk herfler kichikle, kichik herfler boyukle evez olsun
// hint:  ya ASCII ←--interviewlarda bu ustun tutulur

var inptText = "HeLLo WorlD";

function contraLetrFunc(txt) {
  var result = "";
  var charCod;
  for (let i = 0; i < txt.length; i++) {
    charCod = txt.charCodeAt(i);
    if (charCod >= 97 && charCod <= 122) {
      result += String.fromCharCode(charCod - 32);
    } else if (charCod >= 65 && charCod <= 90) {
      result += String.fromCharCode(charCod + 32);
    } else {
      result += txt[i];
    }
  }
  return result;
}
console.log("Before: ", inptText);
console.log("After: ", contraLetrFunc(inptText));
