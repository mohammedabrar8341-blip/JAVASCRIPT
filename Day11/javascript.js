// let firstImg=document.querySelector("#firstImg")
// firstImg.src="https://tse4.mm.bing.net/th/id/OIP.pWmPOlHDfTRTBrDLevh5fAHaFj?pid=Api&P=0&h=180"
// console.log(firstImg.src);

// let mainImg=document.querySelector("#featured-imageM")
// mainImg.id="main-display"
// console.log(mainImg);

// let heading = document.querySelector("#gallery-title");
// heading.setAttribute("gallery-title", "Marchor");
// console.log(heading);

// let h1 = document.querySelector(".gallery-container");
// h1.style.color = "#007bff";
// h1.style.textAlign = "center";
// h1.style.border = "3px solid #007bff";
// console.log(h1);

// let btnArea = document.querySelector(".btn-area")
// btnArea.innerHTML = "<button>CLick me</button>";

// let newImg = document.querySelector(".thumbnail2");
// newImg.addEventListener("click", () => {
//   newImg.style.border = "2px solid blue";
// });
// let button = document.querySelector("#toggle-caption-btn");
// button.addEventListener("click", () => {
//   button.classList.toggle("btnUp");
// });

// let clickImg = document.querySelectorAll(".featured-imageM");
// clickImg.forEach((ele) => {
//   ele.addEventListener("click", function () {
//     clickImg.forEach((t) => t.classList.remove("active-thumb"));
//     this.classList.add("active-thu");
//   });
// });
// console.log(clickImg);

// let info = document.querySelector("#info-list");
// const btn = document.createElement("button");
// btn.textContent = "HighlightInfo";
// document.body.appendChild(btn);
// btn.addEventListener("click", () => {
//   info.classList.toggle("highlight");
// });
// console.log(info);

// let img1 = document.querySelector("#active-thumb");
// let parent = img1.parentElement;
// console.log(parent.id);

// let parent = document.querySelector4("#main-img");
// let result = parent.children;
// console.log(result);

// const featuredimg = document.querySelector(".featured-imageM3");
// let caption = featuredimg.nextElementSibling;
// caption.style.color = "#28a745";
// console.log(caption);

// let newMess = document.createElement("span");
// newMess.textContent = "[Nature]";
// newMess.style.fontSize = "16px";
// newMess.style.color = "#6c757d";
// let heading = document.querySelector("h1");
// heading.insertAdjacentElement("beforeend", newMess);
// console.log(newMess);
// console.log(heading);

// let newList = document.createElement("li");
// newList.textContent = "Created:2026";
// console.log(newList);
// let mainInfo = document.querySelector("#gallery-title");
// mainInfo.prepend(newList);

const newButton = document.querySelector("#btn");
const image = document.querySelector('#"featured-imageM1"');
newButton.addEventListener("click", () => {
  const lastThem = image.lastElementChild;
  if (lastThem) {
    lastThem.remove();
  }
});

// console.log(newButton);
