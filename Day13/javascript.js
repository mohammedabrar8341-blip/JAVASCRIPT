// function checkVotingEligibility(age) {
//   return new Promise((resolve, reject) => {
//     if (age >= 18) {
//       resolve("Can vote");
//     } else {
//       reject("Cannot vote");
//     }
//   });
// }

// checkVotingEligibility(20)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((mes) => {
//     console.log(mes);
//   });

// checkVotingEligibility(16)
//   .then((mes) => console.log(mes))
//   .catch((err) => console.log(err));

// function validateNumber(num) {
//   return new Promise((resolve, reject) => {
//     if (num > 0) {
//       resolve("postive number");
//     } else if (num < 0) {
//       reject("negative number");
//     } else {
//       reject("Zero is not allowed");
//     }
//   });
// }
// validateNumber(42)
//   .then((mes) => {
//     console.log(mes);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// validateNumber(0)
//   .then((mes) => {
//     console.log(mes);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// validateNumber(-10)
//   .then((mes) => {
//     console.log(mes);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function checkPassword(pass) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (pass.length >= 8) {
//         resolve("Strong password");
//       } else {
//         reject("Weak password");
//       }
//     },1000);
//   });
// }
// checkPassword("abc123")
//   .then((mes) => {
//     console.log(mes);
//   })
//   .catch((er) => {
//     console.log(er);
//   });
// checkPassword("adadadada")
//   .then((mes) => {
//     console.log(mes);
//   })
//   .catch((er) => {
//     console.log(er);
//   });

// function checkEvenOdd(num) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num % 2 === 0) {
//         resolve("number is even");
//       } else {
//         reject("num is odd");
//       }
//     }, 500);
//   });
// }
// checkEvenOdd(3)
//   .then((mes) => {
//     console.log(mes);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function calculateGrade(marks) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (marks >= 90) {
        resolve("Grade :A+");
      } else if (marks >= 80) {
        resolve("A");
      } else if (marks >= 70) {
        resolve("Grade:B");
      } else if (age >= 60) {
        resolve("Grade:C");
      } else if (age >= 40) {
        resolve("Grade:D");
      } else {
        reject("Failed");
      }
    }, 1000);
  });
}
async function cheackingMarks() {
  try {
    const result = await calculateGrade(marks);
    console.log("PASS", result);
  } catch (error) {
    console.log("Fail", error);
  }
}
cheackingMarks(95);
