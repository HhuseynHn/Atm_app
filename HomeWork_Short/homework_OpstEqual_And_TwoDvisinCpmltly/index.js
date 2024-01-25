/** @format */

//------------------- 2ye bolunen ededleri arrayde geri qaytaran funksya-----
function isOddList(intger) {
  var result = [];
  intger = parseInt(intger);
  for (let i = 1; i <= intger; i++) {
    if (i % 2 == 0) {
      result.push(i);
    }
  }
  return result;
}

function inputValidation(input) {
  // input validation
  var result = false;
  for (let i = 0; i < input.length; i++) {
    if (input[i].charCodeAt() <= 57 && input[i].charCodeAt() >= 48) {
      result = true;
    } else {
      result = false;
      break;
    }
  }
  return result;
}

var inputFromUser = prompt("Enter number and then will return od number list");
function isOddFuncResult() {
  if (inputValidation(inputFromUser)) {
    return isOddList(inputFromUser);
  }
  {
    return "You must be only number!!!";
  }
}
var result = isOddFuncResult();
alert(`Result:
${result}`);
//-------------------------------------------------------------------

//-------------------- Tersi ile duzunun bir birine beraber olan reqemlerini yoxlayir
function isOppasiteTrue(nmber) {
  var result;
  var revrseNumber = "";
  var newNmber = nmber;
  newNmber = parseInt(newNmber);
  if (!isNaN(newNmber) && !isNaN(nmber)) {
    for (let i = nmber.length - 1; i >= 0; i--) {
      revrseNumber += nmber[i];
    }

    if (newNmber == parseInt(revrseNumber)) {
      result = `It is the same - ${nmber}  =>  ${revrseNumber}`;
    } else {
      result = "It is not the same number";
    }
  } else {
    result = "You must be enter only number";
  }
  return result;
}
// var inptFromUser = prompt("Enter number:");
// alert(isOppasiteTrue(inptFromUser));
//-----------------------------------------------------------------
