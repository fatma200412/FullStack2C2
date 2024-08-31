// // gondermek

localStorage.setItem("ad", "fatma");
localStorage.setItem("il", 2004);
localStorage.setItem("arr", [1, 2, 3, 4]);

// goturmek yeni cagirmaq

console.log(localStorage.getItem("ad"));
console.log(localStorage.getItem("arr"));

let arr = ["asd", "fgh", "fghj"];

localStorage.setItem("array", JSON.stringify(arr));

console.log(typeof localStorage.getItem("array"));
let local = localStorage.getItem("array");
console.log(JSON.parse(localStorage.getItem("array")));
console.log(typeof JSON.parse(localStorage.getItem("array")));

// localStorage.clear();
localStorage.removeItem("ad");

// sessionStorage.setItem("ad", "fatma");

// // gondermek

// sessionStorage.setItem("ad", "fatma");
// sessionStorage.setItem("il", 2004);
// sessionStorage.setItem("arr", [1, 2, 3, 4]);

// // goturmek yeni cagirmaq

// console.log(sessionStorage.getItem("ad"));
// console.log(sessionStorage.getItem("arr"));

// let arrs = ["asd", "fgh", "fghj"];

// sessionStorage.setItem("array", JSON.stringify(arrs));

// console.log(typeof sessionStorage.getItem("array"));
// let locals = sessionStorage.getItem("array");
// console.log(JSON.parse(sessionStorage.getItem("array")));
// console.log(typeof JSON.parse(sessionStorage.getItem("array")));
// // sessionStorage.setItem("ad", "fatma");
