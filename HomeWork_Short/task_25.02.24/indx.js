/** @format */

// /** @format */

// let peoples = [
//   {
//     id: 1,
//     name: "Huseyn",
//     surname: "Huseynov",
//     birthday: {
//       day: 16,
//       month: 10,
//       year: 1980,
//     },
//     weight: 90,
//     height: 180,
//     citiezen: "Italian",
//     country: "Italy",
//     city: "Roma",
//     birthPlace: "Italy",
//     foo: function () {
//       let residiumMonth = () => {
//         let monthResdium = today.month - this.birthday.month;
//         if (monthResdium > 0) {
//           return 12 - (today.month - this.birthday.month);
//         } else {
//           return Math.abs(today.month - this.birthday.month);
//         }
//       };
//       let residiumDay = () => {
//         let dayResdium = today.day - this.birthday.day;
//         if (dayResdium >= 0) {
//           return Math.abs(this.birthday.day - today.day);
//         } else {
//           return 30 - (this.birthday.day - today.day);
//         }
//       };
//       let residiumYear = () => {
//         let ageIncompletle;
//         if (today.month < this.birthday.month) {
//           ageIncompletle = this.birthday.year - today.year;
//         } else if (
//           today.month <= this.birthday.month &&
//           today.day <= this.birthday.day
//         ) {
//           ageIncompletle = this.birthday.year - today.year;
//         } else {
//           ageIncompletle = ageIncompletle + 1;
//         }
//         return Math.abs(ageIncompletle);
//       };

//       return ` ${residiumYear()} yasi tamam olmagina ${residiumMonth()} ay ${residiumDay()} gun qalib`;
//     },
//   },
//   {
//     id: 2,
//     name: "Vika",
//     surname: "Melecia",
//     birthday: {
//       day: 10,
//       month: 11,
//       year: 1989,
//     },
//     weight: 85,
//     height: 170,
//     citiezen: "German",
//     country: "Germany",
//     city: "Berlin",
//     birthPlace: "Frankfurt",
//     foo: function () {
//       let residiumMonth = () => {
//         let monthResdium = today.month - this.birthday.month;
//         if (monthResdium > 0) {
//           return 12 - (today.month - this.birthday.month);
//         } else {
//           return Math.abs(today.month - this.birthday.month);
//         }
//       };
//       let residiumDay = () => {
//         let dayResdium = today.day - this.birthday.day;
//         if (dayResdium >= 0) {
//           return Math.abs(this.birthday.day - today.day);
//         } else {
//           return 30 - (this.birthday.day - today.day);
//         }
//       };
//       let residiumYear = () => {
//         let ageIncompletle;
//         if (today.month < this.birthday.month) {
//           ageIncompletle = this.birthday.year - today.year;
//         } else if (
//           today.month <= this.birthday.month &&
//           today.day <= this.birthday.day
//         ) {
//           ageIncompletle = this.birthday.year - today.year;
//         } else {
//           ageIncompletle = ageIncompletle + 1;
//         }
//         return Math.abs(ageIncompletle);
//       };

//       return ` ${residiumYear()} yasi tamam olmagina ${residiumMonth()} ay ${residiumDay()} gun qalib`;
//     },
//   },
//   {
//     id: 3,
//     name: "Jek",
//     surname: "Jenny",
//     birthday: {
//       day: 05,
//       month: 06,
//       year: 1995,
//     },
//     weight: 70,
//     height: 175,
//     citiezen: "English",
//     country: "England",
//     city: "London",
//     birthPlace: "Bristol",
//     foo: function () {
//       let residiumMonth = () => {
//         let monthResdium = today.month - this.birthday.month;
//         if (monthResdium > 0) {
//           return 12 - (today.month - this.birthday.month);
//         } else {
//           return Math.abs(today.month - this.birthday.month);
//         }
//       };
//       let residiumDay = () => {
//         let dayResdium = today.day - this.birthday.day;
//         if (dayResdium >= 0) {
//           return Math.abs(this.birthday.day - today.day);
//         } else {
//           return 30 - (this.birthday.day - today.day);
//         }
//       };
//       let residiumYear = () => {
//         let ageIncompletle;
//         if (today.month < this.birthday.month) {
//           ageIncompletle = this.birthday.year - today.year;
//         } else if (
//           today.month <= this.birthday.month &&
//           today.day <= this.birthday.day
//         ) {
//           ageIncompletle = this.birthday.year - today.year;
//         } else {
//           ageIncompletle = ageIncompletle + 1;
//         }
//         return Math.abs(ageIncompletle);
//       };

//       return ` ${residiumYear()} yasi tamam olmagina ${residiumMonth()} ay ${residiumDay()} gun qalib`;
//     },
//   },
// ];
// let today = {
//   day: 25,
//   month: 02,
//   year: 2024,
// };

// // console.log(today.month);
// console.log(peoples[2].foo());
// let result = (data) => {
//   let final = data.map((el) => el.foo());

//   return final;
// };

// console.log(result(peoples));
//-------------------------------------------------------------------

let userCount = prompt("Enter user count");
let userName1 = prompt("Enter Name");
let userSurname1 = prompt("Enter Surname");
let userAge1 = prompt("Enter Age");

let uesrsFoo = (id, userName, userSurname, userAge) => {
  this.id = id;
  this.userName = userName;
  this.userSurname = userSurname;
  this.userAge = userAge;
};
let users = [];
for (let i = 0; i < userCount; i++) {
  users.push();
}
