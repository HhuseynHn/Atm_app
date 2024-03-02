/** @format */

let users = [
  {
    id: 0,
    name: "Huseyn",
    surname: "Huseynov",
    age: 30,
  },
  {
    id: 1,
    name: "Hesen",
    surname: "Hesenov",
    age: 31,
  },
];

function addUser(id, name, surname, age) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.age = age;
}
let getUser = (userId, data) => {
  let findUser = data.find((elm) => elm.id == userId);
  if (!findUser) {
    return {
      success: false,
      massage: "Not found user",
    };
  }

  return {
    massage: "User found",
    data: findUser,
  };
};
let removeUser = (userId, data) => {
  let findUserIndex = data.findIndex((elm) => elm.id == userId);

  if (findUserIndex == -1) {
    return {
      success: false,
      massage: "User ID not found",
    };
  }

  data.splice(findUserIndex, 1);

  return {
    success: true,
    massage: "User successfully deleted",
  };
};

let updateUserFoo = (userId, data, name, surname, age) => {
  let findUserIndex = data.findIndex((elm) => elm.id == userId);

  if (findUserIndex == -1) {
    return {
      success: false,
      massage: "Not found User Id",
    };
  }
  let findUser = data[findUserIndex];

  let { ...updateUsrElm } = { name: name, surname: surname, age: age };

  let updateUser = {
    ...findUser,
    ...updateUsrElm,
  };

  data[findUserIndex] = updateUser;

  return {
    success: true,
    massage: "User update successfully",
    data: data[findUserIndex],
  };
};
let result = true;
while (result) {
  let getClientValue = prompt(`Enter number:
1 ---- Add user;
2 ---- Get user
3 ---- Delete user
4 ---- Update user
5 ---- Exit program`);
  switch (parseInt(getClientValue)) {
    case 1:
      users.push(
        new addUser(
          prompt("Enter ID"),
          prompt("Enter Name"),
          prompt("Enter surname"),
          prompt("Enter age")
        )
      );
      break;
    case 2:
      console.log(getUser(prompt("Enter user ID for Find"), users));
      break;
    case 3:
      console.log(removeUser(prompt("Enter user ID for delete"), users));
      break;
    case 4:
      console.log(
        updateUserFoo(
          prompt("Enter ID for update"),
          users,
          prompt("Enter user name"),
          prompt("Enter user surname"),
          prompt("Enter user age")
        )
      );
      break;
    case 5:
      alert("Program is closing byee");
      result = false;
      break;
    default:
      alert("Wrong information");
      break;
  }
}
