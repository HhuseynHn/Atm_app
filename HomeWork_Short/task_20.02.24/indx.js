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
  {
    id: 3,
    name: "Vika",
    surname: "Ajarov",
    age: 24,
    job: "Senior JS developer",
    salary: "9999$",
    address: {
      country: "Italy",
      city: "Roma",
      street: "Jhordan Mike 6",
    },
    contact: {
      phoneNumber: "0885-666-22-11",
      email: "jordoiz00@gmail.com",
    },
  },
];

//----------------------------------

//--------------- create --------------------
// let getEmployees = (emplys) => {
//   if (!emplys.length) {
//     return {
//       success: false,
//       massage: "Employee not found",
//     };
//   }
//   return {
//     success: true,
//     massage: "Employee found!",
//     data: emplys,
//   };
// };

// console.log(getEmployees(employees));
//------------------- END ---------------------

//----------------- Update -------------------
// let updateFun = (data, keyWrd) => {
//     data.map((em,in) => {

//   });
// };

// let removeEmployes = (epmly, emId, keyWord) => {
//   let resultId = epmly.find((e) => e.id == emId);
//   if (!resultId) {
//     return {
//       success: false,
//       massage: "Info not found",
//     };
//   }

//   return {
//     success: true,
//     massage: "Info updated",

//     data: resultId,
//   };
// };
// console.log(removeEmployes(employees, 5));
// var ary = [5, 10, 15];
// employees.forEach((e) => {
//   console.log((e.id = 2));
//// });
//-----------------------------------------------------------------
