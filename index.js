/** @format */
//------------------------ 1. Full Name control validation---------------------------------

// function fullNameLength(fullName) {
//   // fullname length return
//   var result = fullName.trim().length;
//   return result;
// }
// var fullNameUser = prompt("Please enter your Full Name:");
// var fullNameCount = fullNameLength(fullNameUser);

// function fullNameLengthValidation(min, max) {
//   // fullname length control
//   var result;
//   if (fullNameCount < min) {
//     result = "lessThanMinLength";
//   } else if (fullNameCount > max) {
//     result = "moreThanMaxLength";
//   }
//   return result;
// }
// var fullNameValidationContrl= fullNameLengthValidation(3, 30);
// if (fullNameValidationContrl == "lessThanMinLength") {
//   alert("Full Name's length can't be less 3 simvol");
// } else if (fullNameValidationContrl == "moreThanMaxLength") {
//   alert("Full Name's length can't be more 30 simvol");
// }

//------------------------ END FUll Name control -------------------------------------------

//------------------------ Password Control ------------------------------------------------

var passwordUserInput = prompt("Enter your password");

// start password length min max control ----
function passwordLengthFunc(passwordUser) {
  var result = passwordUser.length;
  return result;
}
var passwordLength = passwordLengthFunc(passwordUserInput);
function passwrodLengthValidation(min, max) {
  var result;
  if (passwordLength < min) {
    result = "lessMin";
  } else if (passwordLength > max) {
    result = "moreMax";
  }
  return result;
}
var passwordLengthResult = passwrodLengthValidation(8, 15);
var paswrMnMaxContrl = false;
function passwordLengthControl() {
  if (passwordLengthResult == "lessMin") {
    alert("Password length can't be less 8 simvols");
    paswrMnMaxContrl = true;
  } else if (passwordLengthResult == "moreMax") {
    alert("Password length can't be more 15 simvols");
    paswrMnMaxContrl = true;
  }
}

// Password min max control END ----------
//-- password min 3 letter control
function passwordMinLettrLength(paswrdInpt) {
  var countLetr = 0;
  for (let i = 0; i < paswrdInpt.length; i++) {
    if (
      (paswrdInpt.charCodeAt(i) >= 65 && paswrdInpt.charCodeAt(i) <= 90) ||
      (paswrdInpt.charCodeAt(i) >= 97 && paswrdInpt.charCodeAt(i) <= 122)
    ) {
      countLetr += 1;
    }
  }
  return countLetr;
}

var paswrMinLetrCntrl = false;

function passwordControl(passwordMinVlue, minLetter) {
  if (passwordMinVlue < minLetter) {
    paswrMinLetrCntrl = true;
    alert("Minimum must be 3 lettter of the password's simvol");
  }
}
var passwordMinLetrLengthValue = passwordMinLettrLength(passwordUserInput);

// //-- Password min 3 letr END--

//--START Password one letr uppercase control

function passwordMinLetrUpercase(passwordValue) {
  var upperCaseCount = 0;
  for (let i = 0; i < passwordValue.length; i++) {
    if (
      passwordValue.charCodeAt(i) >= 65 &&
      passwordValue.charCodeAt(i) <= 90
    ) {
      upperCaseCount += 1;
    }
  }
  return upperCaseCount;
}

var passwordMinLtrUprcseValue = passwordMinLetrUpercase(passwordUserInput);
var paswrMinLetrUprcsContrl = false;
function passwordMinLetrUpprcaseControl(minUprcseLetr) {
  if (passwordMinLtrUprcseValue < minUprcseLetr) {
    alert(`Min ${minUprcseLetr} uppercase letter in the password`);
    paswrMinLetrUprcsContrl = true;
  }
}

// password uppercase letr endr---

// function passwordConsistencyWork() {
//   if (paswrMnMaxContrl) {
//     passwordLengthControl();
//     console.log("OK-1");
//   } else if (!paswrMinLetrCntrl) {
//     console.log("OK-2");
//     passwordControl(passwordMinLetrLengthValue, 3);
//   } else if (!paswrMinLetrUprcsContrl) {
//     console.log("OK-3");
//     passwordMinLetrUpprcaseControl(1);
//   }
// }
// passwordConsistencyWork();

passwordLengthControl();
passwordMinLetrUpprcaseControl(1);
passwordControl(passwordMinLetrLengthValue, 3);

// -------------------- END Pasword Control Validation ----------------
