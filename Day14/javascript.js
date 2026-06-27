// function checkNumber(num) {
//   return new Promise((resolve, reject) => {
//     setInterval(() => {
//       if (num > 10) {
//         resolve(`succes!${num}is greater than 10`);
//       } else {
//         reject(`Error ${num} is not greater than 10`);
//       }
//     }, 1000);
//   });
// }
// //

// // checkNumber(11)
// //   .then((mes) => {
// //     console.log(mes);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });
// // console.log("Permise initiated");
// // checkNumber(5)
// //   .then((mes) => {
// //     console.log(mes);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });
// async function testNum() {
//   try {
//     console.log("Starting...");
//     const result = await checkNumber(15);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }
// testNum();

// async function testNumFail() {
//   try {
//     const result = await checkNumber(5);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// testNumFail();

// function authenticateUser(username, pass) {
//   return new Promise((resolve, reject) => {
//     console.log("Authenticationg user....");
//     setTimeout(() => {
//       if (username === "admin" && pass === "1234") {
//         resolve({
//           username: username,
//           token: "abc123xyz",
//           message: "Authentication succesful",
//         });
//       } else {
//         reject("Invalid username or pass");
//       }
//     }, 2000);
//   });
// }
// // authenticateUser("admin", "1234")
// //   .then((userData) => {
// //     console.log("succes:", userData.message);
// //     console.log("Token", userData.token);
// //     console.log("Welcome", userData.username);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// async function testing() {
//   try {
//     console.log("Login attempt...");

//     const userData = await authenticateUser("admin", "1234");
//     console.log("succes:", userData.message);
//     console.log("Token", userData.token);
//     console.log("Welcome", userData.username);
//   } catch (error) {
//     console.log(error);
//   }
// }
// testing();

 
