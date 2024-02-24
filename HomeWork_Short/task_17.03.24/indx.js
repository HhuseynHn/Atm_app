/** @format */

// /** @format */

// // /** @format */

// // const ary = ["a", "b", 5, 10, 15, 12];
// // console.log(ary);
// // var newA = ary.forEach((elm) => {
// //   console.log(elm + 5);
// // });
// // console.log(ary);
// // console.log(newA);

// let students = [
//   {
//     name: "Narinc",
//     surName: "Huseynova",
//     age: 30,
//     stepn: 70,
//     exam: [
//       {
//         subject: "Mathmatics",
//         degree: 100,
//       },
//       {
//         subject: "Geografy",
//         degree: 95,
//       },
//       {
//         subject: "Fiziks",
//         degree: 90,
//       },
//     ],
//     average: 0,
//   },
//   {
//     name: "Huseyn",
//     surName: "Huseynova",
//     age: 36,
//     stepn: 80,
//     exam: [
//       {
//         subject: "Mathmatics",
//         degree: 90,
//       },
//       {
//         subject: "Geografy",
//         degree: 90,
//       },
//       {
//         subject: "Fiziks",
//         degree: 40,
//       },
//     ],
//     average: 0,
//   },
//   {
//     name: "Nurus",
//     surName: "Hesenov",
//     age: 26,
//     stepn: 50,
//     exam: [
//       {
//         subject: "Mathmatics",
//         degree: 80,
//       },
//       {
//         subject: "Geografy",
//         degree: 40,
//       },
//       {
//         subject: "Fiziks",
//         degree: 60,
//       },
//     ],
//     average: 0,
//   },
// ];

// students.forEach((stdnt) => {
//   stdnt.average = parseInt(
//     stdnt.exam.reduce((sum, exmn) => sum + exmn.degree, 0) / stdnt.exam.length
//   );
// });

// students.forEach((stnd) => {
//   console.log(stnd.average);
// });

// students.forEach((stdnt) => {
//   if (stdnt.average > 90) {
//     stdnt.stepn = 120;
//   } else if (stdnt.average > 70) {
//     stdnt.stepn = 90;
//   } else if (stdnt.average > 60) {
//     stdnt.stepn = 70;
//   } else {
//     stdnt.stepn = 70;
//   }
// });
// console.log("----------------------------------------");
// students.forEach((stdnt) => console.log(stdnt.name, ": ", stdnt.stepn));
//------------------------------------------------------------------------------------
