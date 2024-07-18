// "use strict";

console.log("Variables");

// let eded = 5;

// console.log("eded=", eded);

// let const var=> deyisenleri teyin etmek ucun acar sozler

// let a = 5;
// a = 10;
// a = "salam";

// // let a=20=> ERROR

// console.log("a=" + a);

// const b = 20;
// // b = 30; => ERROR
// // const b = 40; =>ERROR

// console.log("b=", b);

// var c = 20;
// c = 40;
// c = "sdfg";
// var c = 50;

// console.log("c=", c);

// var func scop

// if (true) {
//   var eded = 10;
//   console.log("Scop eded=" + eded);
// }
// console.log("Scop eded=" + eded);

// function getNumber() {
//   var eded = 10;
//   console.log("Scop eded=" + eded);
// }
// getNumber();

// console.log("Scop eded=" + eded);=>ERROR

// let and const=> block scop

// if (true) {
//   let eded = 10;
//   console.log("block eded=", eded);
// }
// console.log("block eded=", eded); => ERROR

function getNumber() {
  let eded = 20;
  console.log("block eded=", eded);
}
getNumber();
console.log("block eded=", eded);
