/** @format */

// /** @format */

// let employees = [
//   {
//     id: 1,
//     name: "Baktar",
//     surname: "Asadov",
//     age: 21,
//     job: "Senior Java developer",
//     salary: "8000$",
//     address: {
//       country: "Turkish",
//       city: "Istanbul",
//       street: "Ashiq Elesger",
//     },
//     contact: {
//       phoneNumber: "051-711-27-57",
//       email: "baktarasadov@gmail.com",
//     },
//   },
//   {
//     id: 2,
//     name: "Tangiz",
//     surname: "salamov",
//     age: 24,
//     job: "Senior Python developer",
//     salary: "7999$",
//     address: {
//       country: "Turkish",
//       city: "Izmir",
//       street: "Ashiq Elesger 6",
//     },
//     contact: {
//       phoneNumber: "051-211-22-11",
//       email: "tangoiz56@gmail.com",
//     },
//   },
//   {
//     id: 3,
//     name: "Hasan",
//     surname: "Mammadov",
//     age: 24,
//     job: "Senior Python developer",
//     salary: "8899$",
//     address: {
//       country: "Turkish",
//       city: "Izmir",
//       street: "Ashiq Elesger 6",
//     },
//     contact: {
//       phoneNumber: "051-211-22-11",
//       email: "tangoiz56@gmail.com",
//     },
//   },
// ];

// let updateEmployeePATCH = (id, update) => {
//   let employeeIndex = employees.findIndex((emp) => emp.id == id);

//   if (employeeIndex == -1) {
//     return {
//       success: false,
//       massage: "Employee not found",
//     };
//   }

//   const findData = employees[employeeIndex];
//   const updateEmplye = {
//     ...findData,
//     ...update,
//   };

//   employees[employeeIndex] = updateEmplye;

//   return {
//     success: true,
//     massage: "Employee successfully updated",
//     data: employees[employeeIndex],
//   };
// };

// console.log(
//   updateEmployeePATCH(1, {
//     age: 60,
//     name: "JEK",
//   })
// );

// let hman = {
//   eye: 2,
//   hair: 1,
//   colorEys: "Brown",
//   age: 35,
//   behavour: function (man) {
//     let women = () => {
//       console.log(this);
//     };
//     return women();
//   },
// };

// let person = {
//   firstNAme: "Huseyn",
//   lastName: "Huseynov",
//   age: 28,
//   midlName: "YES",
//   sayFun: function (hi) {
//     console.log("NormalFun: ",this);
//   },
//   sayArrrowFun: () => {
//   console.log("Arrow: ",this);

// }
// };

// function ok() {

//   console.log("OtherNormalFun: ",this);
// }
// console.log(ok());

// // console.log(person.sayFun());
// // console.log(person.sayArrrowFun());
// //-----------------------------------------------------------------------

// let user = [
//   {
//     id: 1,
//     birthDay: {
//       day: 30,
//       month: 10,
//       year: 1990,
//     },
//     name: "Huseyn",
//     surname: "Huseynov",
//     weight: 90,
//     height: 170,
//     degree: "backlaur",
//   },
//   {
//     id: 2,
//     birthDay: {
//       day: 15,
//       month: 05,
//       year: 1980,
//     },
//     name: "John",
//     surname: "Jordhon",
//     weight: 80,
//     height: 180,
//     degree: "backlaur",
//   },
//   {
//     id: 3,
//     birthDay: {
//       day: 10,
//       month: 02,
//       year: 1975,
//     },
//     name: "Jeck",
//     surname: "Simson",
//     weight: 91,
//     height: 176,
//     degree: "midle",
//   },
// ];

// let findAge = (id,update) => {

// }

//-------------------  Lesson 24.02.204 -------------------------------------------------------------

let books = [
  {
    id: 1,
    name: "Titanic",
    page: 200,
    price: 5,
    writer: {
      id: 2,
      name: "Mickel",
      surname: "Jeckson",
      age: 50,
      citizien: "Germany",
    },
    rejissor: "Mamed Qasanov",
    printDate: 2020,
    title: "Roman",
  },
  {
    id: 2,
    name: "Taxes",
    page: 500,
    price: 10,
    writer: {
      id: 1,
      name: "Richard",
      surname: "Branson",
      age: 50,
      citizien: "Germany",
    },
    rejissor: "Eflatun Qubadov",
    printDate: 2021,
    title: "Taxes authn",
  },
  {
    id: 3,
    name: "Test",
    page: 400,
    price: 20,
    writer: {
      id: 3,
      name: "Mickel",
      surname: "Jeckson",
      age: 50,
      citizien: "Germany",
    },
    rejissor: "Eflatun Qubadov",
    printDate: 2021,
    title: "Taxes authn",
  },
];

let startPrc = prompt("Start price");
let endPrc = prompt("End price");

let result = books.filter(
  (book) => book.price >= startPrc && book.price <= endPrc
);
console.log(result);
