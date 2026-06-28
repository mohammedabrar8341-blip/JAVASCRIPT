// let btn = document.querySelector("#clickBtn");
// let para = document.querySelector("#clickCount");
// let count = 0;

// btn.addEventListener("click", () => {
//   count++;
//   para.textContent = `Button clicked ${count} times`;
// });
// const redBtn = document.querySelector("#redBtn");
// const yellowBtn = document.querySelector("#yellowBtn");
// const greenBtn = document.querySelector("#greenBtn");
// const lightBox = document.querySelector(".light-box");

// redBtn.addEventListener("click", () => {
//   lightBox.style.backgroundColor = "red";
//   console.log("Red is activated");
// });

// yellowBtn.addEventListener("click", () => {
//   lightBox.style.backgroundColor = "yellow";
//   console.log("Yellow is activated");
// });

// greenBtn.addEventListener("click", () => {
//   lightBox.style.backgroundColor = "green";
//   console.log("Green is activated");
// });

const card = document.querySelector(".card");
const heading = document.querySelector(".card h2");

// Mouse Enter
card.addEventListener("mouseenter", function () {
  card.style.backgroundColor = "lightblue";
  card.style.border = "3px solid blue";
  heading.style.fontSize = "30px";

  console.log("Mouse entered");
});

// Mouse Leave
card.addEventListener("mouseleave", function () {
  card.style.backgroundColor = "white";
  card.style.border = "1px solid gray";
  heading.style.fontSize = "20px";

  console.log("Mouse left");
});
