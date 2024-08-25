// console.log(1);
// // console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// setTimeout(() => {
//   console.log(2);
// }, 1000);

// setInterval(() => {
//   console.log(1);
// }, 500);

// Timer

let start = document.querySelector(".startBtn");
let count = document.querySelector(".count");
let stopBtn = document.querySelector(".stopBtn");
let backBtn = document.querySelector(".backBtn");

let timer;

start.addEventListener("click", function () {
  timer = setInterval(() => {
    count.textContent++;
    console.log();
  }, 1000);
});

stopBtn.addEventListener("click", function () {
  clearInterval(timer);
});

let timeOut = setTimeout(() => {
  console.log("salam");
}, 500);

clearTimeout(timeOut);
