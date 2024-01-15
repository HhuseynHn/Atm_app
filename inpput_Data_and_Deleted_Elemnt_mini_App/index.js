/** @format */

var allComands = [1, 2, 3, 4, 5, 6, "q"];
var allUser = ["a", "b", "c", "d"];
// welcome to program
var text = "Welcome to our page";
function enterUserGretting(word) {
  return word;
}
//----------------------

//----- Take comands from users for repeat comands call-----------
function takeComandFromUser() {
  var infoFromUser = prompt(`Information table follow operation:
  1 - All users show
  2 - Add new user
  3 - Show element according to indeks
  4 - Remove element according to indeks
  5 - All users remove
  6 - Update new element according to indeks
  q - For exit this program
  `);
  return infoFromUser;
}
//----- end calls comand from user funcition
//------------
function saveUser(user) {
  // for add new user
  if (!allUser.includes(user)) {
    var checkUser = checkLengthInpt(user);

    if (!checkUser.length) {
      allUser.push(user);
      return "User successfully added to data";
    } else {
      return checkUser[0];
    }
  } else {
    return "User artiq movcuddur";
  }
}
//-------------
function getAllUsers() {
  // for show All users
  return allUser.length ? allUser : "Users not found";
}
//-------------
function getOneUser(indksElemnt) {
  // show element According to indeks from user
  return allUser[indksElemnt] ? allUser[indksElemnt] : "Not found user";
}
//-------------
function removeOneUser(indksElmnt) {
  // for remove element according indeks
  var result = getOneUser(indksElmnt);
  if (result !== "Not found user") {
    allUser.splice(indksElmnt, 1);
    return "User removed successfully";
  }

  return result;
}
//-------------

function removeAllUser() {
  // for remove All data

  allUser = [];
  return "All users successfully removed";
}

//------------
function updateOneUser(updateIndeks, updateValue) {
  // for update new data to array
  var result = getOneUser(updateIndeks);
  if (result !== "Not found user") {
    if (!allUser.includes(updateValue)) {
      var chekInput = checkLengthInpt(updateValue);

      if (!chekInput.length) {
        allUser[updateIndeks] = updateValue;
        return "User successfully updated";
      } else {
        return chekInput[0];
      }
    } else {
      return "This name is already data ";
    }
  }

  return result;
}
//------------

//--------------------
function exitProgram() {
  // exit program
  var result = confirm("Are you sure exit program");
  return result;
}
//------------

//-------------- validatation input length from user--

function checkLengthInpt(input) {
  // lenght input check
  var erorrList = [];
  var lengthInpt = input.length;
  if (lengthInpt < 3) {
    erorrList.push("MinLength can't be less 3 elemnt");
  } else if (lengthInpt > 20) {
    erorrList.push("MaxLength can't be more 20 elemnt");
  } else if (lengthInpt == 0) {
    erorrList.push("Istifadeci adi bos ola bilmez");
  }

  return erorrList;
}
//-----------------------

//----------- All comands------------
function allFunc(func) {
  var result;
  switch (func) {
    case "q":
      result = alert(exitProgram());
      break;
    case "1":
      result = alert(getAllUsers());
      break;
    case "2":
      result = alert(saveUser(prompt("Enter new user").trim()));
      break;
    case "3":
      result = alert(getOneUser(prompt("Enter user's indeks for to watch")));
      break;
    case "4":
      result = alert(removeOneUser(prompt("Enter indeks for remove")));
      break;
    case "5":
      result = alert(removeAllUser());
      break;
    case "6":
      result = alert(
        updateOneUser(
          prompt("Enter update indeks").trim(),
          prompt("Enter update value").trim()
        )
      );
      break;
    default:
      result = alert("You are enter wrong comand");
      break;
  }
  return result;
}
//-----------------------------------

//------ work program
function workFuncFinaly() {
  var comandsFromUser;
  for (let i = 0; i < 7; i++) {
    comandsFromUser = takeComandFromUser();
    if (comandsFromUser <= 6 && comandsFromUser > 0) {
      allFunc(comandsFromUser);
      if (confirm("Do you want to continue?")) {
        continue;
      } else {
        break;
      }
    } else if (comandsFromUser == "q") {
      if (allFunc(comandsFromUser)) {
        break;
      } else {
        continue;
      }
    } else {
      alert("Wrong comands you are enter");
      if (confirm("Are you continue")) {
        continue;
      } else {
        break;
      }
    }
  }
}

alert(enterUserGretting(text));



workFuncFinaly();
//--------------------------
