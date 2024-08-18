// let h1 = document.querySelector("h1");

// console.log(h1.textContent);

// let h1 = document.querySelectorAll("h1");
// console.log(h1)

// let h1 = document.getElementsByTagName("h1");

// let h1 = document.getElementsByClassName("heading1");

// let h1 = document.getElementById("heading1");

// let h1 = document.getElementsByName("heading");

// console.log(h1);

// let parentElement = document.querySelector(".parentClass");
// let box = document.querySelectorAll(".box");

// let box1 = document.querySelector(".box1");
// let box2 = document.querySelector(".box2");
// let box3 = document.querySelector(".box3");

// console.log(parentElement.childElementCount);

// console.log(box1.parentElement)

let card = document.querySelector(".card");
let btnHeart = document.querySelector(".btnHeart");

// // console.log(btnHeart.parentElement.parentElement);

// console.log(btnHeart.parentElement.previousElementSibling.children);

// let card = document.createElement("div");
// card.className = "card";
// card.style.border = "1px solid black";
// card.style.width = "100px";
// card.style.height = "100px";

// let img = document.createElement("div");
// img.className = "img";

// let title = document.createElement("div");
// img.className = "title";

// let btn = document.createElement("button");
// img.className = "btn";

// // card.innerHTML = "salam";

// card.append(img, title, btn);

// document.body.appendChild(card);

// console.log(card);

btnHeart.addEventListener("click", function () {
  console.log("salam");
  console.log(btnHeart.parentElement.previousElementSibling.children);
  console.log(btnHeart.parentElement.parentElement);
});
