// let studentScores = {
//   student1: {
//     id: 123456789,
//     scores: {
//       exams: [90, 95, 100, 80],
//       exercises: [20, 15, 10, 19, 15],
//     },
//   },
//   student2: {
//     id: 123456799,
//     scores: {
//       exams: [50, 70, 90, 100],
//       exercises: [0, 15, 20, 15, 15],
//     },
//   },
//   student3: {
//     id: 123457789,
//     scores: {
//       exams: [88, 87, 88, 89],
//       exercises: [10, 20, 10, 19, 18],
//     },
//   },
//   student4: {
//     id: 112233445,
//     scores: {
//       exams: [100, 100, 100, 100],
//       exercises: [10, 15, 10, 10, 15],
//     },
//   },
//   student5: {
//     id: 112233446,
//     scores: {
//       exams: [50, 80, 60, 90],
//       exercises: [10, 0, 10, 10, 0],
//     },
//   },
// };

// function generateClassRecordSummary(scores) {
//   function studentGrade(currStudent) {
//     let examAvg =
//       scores[currStudent]["scores"]["exams"].reduce((acc, curr) => acc + curr) /
//       4;
//     let exerciseAvg = scores[currStudent]["scores"]["exercises"].reduce(
//       (acc, curr) => acc + curr
//     );

//     let grade = Math.round(examAvg * 0.65 + exerciseAvg * 0.35);
//     let letterGrade;

//     if (grade < 60) {
//       letterGrade = "F";
//     } else if (grade < 69) {
//       letterGrade = "E";
//     } else if (grade < 77) {
//       letterGrade = "D";
//     } else if (grade < 85) {
//       letterGrade = "C";
//     } else if (grade < 93) {
//       letterGrade = "B";
//     } else {
//       letterGrade = "A";
//     }

//     return `${String(grade)} (${letterGrade})`;
//   }

//   function examInfo(arr, currStudent) {

//   }

//   let scoreKeys = Object.keys(scores);

//   let studentGrades = scoreKeys.map(studentGrade);
//   let exams = scoreKeys.reduce(examInfo, []);

//   return {
//     studentGrades,
//     exams,
//   };
// }

// console.log(generateClassRecordSummary(studentScores));

// // returns:
// // {
// //   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
// //   exams: [
// //     { average: 75.6, minimum: 50, maximum: 100 },
// //     { average: 86.4, minimum: 70, maximum: 100 },
// //     { average: 87.6, minimum: 60, maximum: 100 },
// //     { average: 91.8, minimum: 80, maximum: 100 },
// //   ],
// // }
