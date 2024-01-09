/** @format */

//------------------- 2ye bolunen ededleri geri qaytaran funksya-----
function dvideTwoIntgr(intger) {
  var result;
  if (intger % 2 == 0) {
    result = `${intger} - dive two completle`;
  } else {
    result = `${intger} =>  Don't dive two completle!!!`;
  }
  return result;
}

// var inputFromUser = prompt("Enter number");
// alert(dvideTwoIntgr(inputFromUser));
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
    console.log(nmber);
    console.log(newNmber);
    console.log(revrseNumber);
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
var inptFromUser = prompt("Enter number:");
alert(isOppasiteTrue(inptFromUser));
//-----------------------------------------------------------------
