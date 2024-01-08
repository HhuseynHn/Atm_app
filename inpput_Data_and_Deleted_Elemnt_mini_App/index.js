/** @format */

alert("Welcome to our software");
var allComands = [1, 2, 3, 4, 5, 6, "q"];
var allUser = ["a", "b", "c", "d"];
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
function addUserToData(user) {
  // for add new user
  allUser.push(user);
}
//-------------
function showAllUser() {
  // for show All users
  return allUser;
}
//-------------
function showElement(indksElemnt) {
  // show element According to indeks from user
  return allUser.splice(indksElemnt, 1);
}
//-------------
function removeElement(indksElmnt) {
  // for remove element according indeks
  var newUserList = [];
  for (let i = 0; i < allUser.length; i++) {
    if (i == indksElmnt) {
      continue;
    } else {
      newUserList.push(allUser[i]);
    }
  }
  allUser = newUserList;
  return allUser;
}
//-------------

function removeAllUser() {
  // for remove All data
  return (allUser = []);
}

//------------

function updateData(updateIndeks, updateValue) {
  // for update new data to array
  return (allUser[updateIndeks] = updateValue);
}
//------------

function exitProgram() {
  // exit program
  return confirm("Are you sure exit program");
}
//------------
//----------- All comands------------
function allFunc(func) {
  var result;
  switch (func) {
    case "q":
      result = exitProgram();
      break;
    case "1":
      result = console.log(showAllUser());
      break;
    case "2":
      result = addUserToData(prompt("Enter new user"));
      break;
    case "3":
      result = console.log(
        showElement(prompt("Enter user's indeks for to watch"))
      );
      break;
    case "4":
      result = removeElement(prompt("Enter indeks for remove"));
      break;
    case "5":
      result = removeAllUser();
      break;
    case "6":
      result = updateData(
        prompt("Enter update indeks"),
        prompt("Enter update value")
      );
      break;
    default:
      result = "You are enter wrong comand";
      break;
  }
  return result;
}
//-----------------------------------
//------ work program 
var comandsFromUser;
for (let i = 0; i < 7; i++) {
  comandsFromUser = takeComandFromUser();
  console.log(comandsFromUser);
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
    alert("You are enter wrong comand");
    if (confirm("Are you continue")) {
      continue;
    } else {
      break;
    }
  }
}
//--------------------------
