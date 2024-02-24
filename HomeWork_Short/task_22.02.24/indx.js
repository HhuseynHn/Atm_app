/** @format */

let employees = [
  {
    id: 1,
    name: "Baktar",
    surname: "Asadov",
    age: 21,
    job: "Senior Java developer",
    salary: "8000$",
    address: {
      country: "Turkish",
      city: "Istanbul",
      street: "Ashiq Elesger",
    },
    contact: {
      phoneNumber: "051-711-27-57",
      email: "baktarasadov@gmail.com",
    },
  },
  {
    id: 2,
    name: "Tangiz",
    surname: "salamov",
    age: 24,
    job: "Senior Python developer",
    salary: "7999$",
    address: {
      country: "Turkish",
      city: "Izmir",
      street: "Ashiq Elesger 6",
    },
    contact: {
      phoneNumber: "051-211-22-11",
      email: "tangoiz56@gmail.com",
    },
  },
];

// const updateOneEmployeePUT = (id, updateEmployee) => {
//   const findEmployeeIndex = employees.findIndex((emp) => emp.id == id);
//   if (findEmployeeIndex == -1) {
//     return {
//       success: false,
//       message: "Employee not found!",
//     };
//   }
//   employees[findEmployeeIndex] = {
//     ...employees[findEmployeeIndex],
//     ...updateEmployee,
//   };
//   return {
//     success: true,
//     message: "Employee updated successfully",
//     data: employees[findEmployeeIndex],
//   };
// };

// console.log(
//   updateOneEmployeePUT(1, {
//     name: "Serxan ",
//   })
// );

// // console.log(employees);

// const updateOneEmployeePATCH = (id, updateEmployee) => {
//   const findEmployeeIndex = employees.findIndex((emp) => emp.id == id);
//   if (findEmployeeIndex == -1) {
//     return {
//       success: false,
//       message: "Employee not found!",
//     };
//   }
//   const findData = employees[findEmployeeIndex];
//   const update = {
//     ...findData,
//     ...updateEmployee,
//   };

//   employees[findEmployeeIndex] = update;

//   return {
//     success: true,
//     message: "Employee updated successfully",
//     data: employees[findEmployeeIndex],
//   };
// };

// console.log(
//   updateOneEmployeePATCH(1, {
//     name: "Serxan ",
//     age: 250,
//   })
// );

// var product = {
//   name: "Xiyar",
//   price: "5$",
// };

// var result = Object.values(product);
// var resultKey = Object.keys(product);

// console.log(product["name"]);

// var employee = {
//   id: 1,
//   name: "Baktar",
//   surname: "Asadov",
//   age: 21,
//   job: "Senior Java developer",
//   salary: "8000$",
//   address: {
//     country: "Turkish",
//     city: "Istanbul",
//     street: "Ashiq Elesger",
//   },
//   contact: {
//     phoneNumber: "051-711-27-57",
//     email: "baktarasadov@gmail.com",
//   },
// };
//20.02.2024 at the lesson
//---------------------------------------------------------------------------------------

// let car = {
//   nameN: "Mercedes",
//   il: "2009",
//   rengi: "ag",
//   iseSal: (test) => "ISe dusdu",
// };

// car.engine = "5.5Motor";
// // let carVlue = Object.keys(car.il);
// var a = [1, 2, 3, 4, 5, 6];
// var b = console.log(b);
// // console.log(carVlue);

// var men = [
//   {
//     nme: "Hesen",
//     birth: 1990,
//   },
//   {
//     nme: "Hesen",
//     birth: 1995,
//   },
//   {
//     nme: "Hesen",
//     birth: 1999,
//   },
// ];

// function age(ageNm) {

//   var age = ageNm.map((elm) => {

//     elm.birth=
//   })

// }
let human = {
  eye: 2,
  hand: 2,
  leg: 2,
  nock: 1,
  arm: 2,
  hair: "Braown",
  name: "Huseyn",
  surname: "Huseynov",
};
// console.log(human);
// delete human.hand;

// console.log(Object.keys(human));
// console.log(human);

var ary = [1, 2, 3, 4];
var newAry = [...ary];
ary[0] = "OK";
newAry[4] = "TEST";
console.log("ARY", ary);
console.log("newAry", newAry);
var ary2 = ary;
console.log("ARY2", ary2);
console.log("------------------------------------");
ary2[1] = "HUSEYN";
console.log("ARY2", ary2);
console.log("ARY", ary);
console.log("newAry", newAry);

// function man(...a) {
//   console.log(...a);
//   // console.log("B", b);
//   // console.log("C", ...c);
// }

// man(10, 20, 30, 40, 50);
