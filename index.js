/** @format */
// ------------- Fulname control validation-------------------

var fullName = prompt("Enter your full name");
var isFullNameNumber = false;
var isMinFullNameLength = false;
var isMaxFullNameLength = false;
var fullNameControl = false; // general Full name contorl
fullName = fullName.trim();
var fulnameLenght = fullName.length;
console.log(fullName);
for (let i = 0; i < fulnameLenght; i++) {
  // number control
  if (!isNaN(fullName[i])) {
    isFullNameNumber = true;
    alert("Don't use number in your Fullname");
    break;
  } else {
    isFullNameNumber = false;
  }
}
if (!isFullNameNumber) {
  //  full name length contorl
  if (fulnameLenght > 3 && fulnameLenght < 30) {
    isMinFullNameLength = true;
    isMaxFullNameLength = true;
  } else if (fulnameLenght < 3) {
    isMinFullNameLength = false;
    alert("Your Fullname's length don't use small than 3 simvol");
  } else if (fulnameLenght > 30) {
    isMaxFullNameLength = false;
    alert("Your Fullname's length don't use large than 30 simvol");
  }
}

if (isFullNameNumber && isMaxFullNameLength && isMinFullNameLength) {
  // general full name control

  fullNameControl = true;
}

// ------------- END ---- Fulname control validation-------------------

// ---------------------- Paswword control validation --------------------
var passwordValue = prompt("Please enter your password");
var passwordLength = passwordValue.length;
var minPaswrodLength = false;
var maxPaswrodLength = false;
var minAlphabet = 0;
var matchPaswordAlphabet = false;
var uppercaseLetter = false;
var passwordControl = false;            // general password contorl
if (passwordLength < 8) {
  // min length control
  alert("The length of the Passwrod can't be less 8 simvol ");
  minPaswrodLength = true;
} else if (passwordLength > 15) {
  // max length control
  alert("The length of the Passwrod can't be than more 15 simvol ");
  maxPaswrodLength = true;
}
for (let i = 0; i < passwordLength; i++) {
  if (
    // alphabet control
    (passwordValue.charCodeAt(i) >= 65 && passwordValue.charCodeAt(i) <= 90) || // upercase control
    (passwordValue.charCodeAt(i) >= 97 && passwordValue.charCodeAt(i) <= 122) // lowercase control
  ) {
    minAlphabet += 1; // count letter
  }

  if (passwordValue.charCodeAt(i) >= 65 && passwordValue.charCodeAt(i) <= 90) {
    uppercaseLetter = true; // only uppercase control
  }
}
if (!minPaswrodLength && !maxPaswrodLength) {
  if (minAlphabet >= 3) {
    // min letter count control
    matchPaswordAlphabet = true;
  } else {
    matchPaswordAlphabet = false;
    alert("Letter count can't less 3 in Password ");
  }

  if (matchPaswordAlphabet) {
    if (!uppercaseLetter) {
      alert("One letter must uppercase in password");
    }
  }
}

if (
  // general password cotrol
  matchPaswordAlphabet &&
  minPaswrodLength &&
  maxPaswrodLength &&
  uppercaseLetter
) {
  passwordControl = true;
}
// ----------------------- Password validation END ------------------------------


//--------------------------- Email validation ---------------------
var emailValue = prompt("Enter email");
var emailLengthCntrol = false;
var emailNumberControl = false;
var emailAdControl = false;
var emailEndwithControl = false;
var emailEndWithLettr = "";
var emailEndWithStart = false;
var emailControlPart = true;

for (let i = 0; i < emailValue.length; i++) {
  if (emailValue.charCodeAt(i) >= 48 && emailValue.charCodeAt(i) <= 57) {
    // for min one number control in email
    emailNumberControl = true;
  }
  if (emailValue[i] == "@") {
    // for @ simvol control
    emailAdControl = true;
  }
  if (i == emailValue.length - 4) {
    // for email end with control
    emailEndWithStart = true;
  }
  if (emailEndWithStart) {
    //  email endwith simvol count
    emailEndWithLettr += emailValue[i];
  }
}
if (!emailAdControl) {
  // @ simvol contrl in email
  alert("Must be @ simvol in email");
  emailControlPart = false;
}
if (emailEndWithLettr.toLocaleLowerCase == ".com") {
  // for end with contorl in email
  emailEndwithControl = true;
}
if (emailEndwithControl && emailControlPart) {
  // end with control of the email
  alert("Wrong end with of the email, must be -  .com");
  emailControlPart = false;
}

if (emailValue.length < 10 && emailControlPart) {
  // email length control
  emailLengthCntrol = true;
  alert("The length of the email can't be less 10 simvol");
  emailControlPart = false;
}

if (!emailNumberControl && emailControlPart) {
  //  minimum number control in email
  alert("Minimum one number must in email");
  emailControlPart = false;
}
// ------------------------- END email validation ---------------------------