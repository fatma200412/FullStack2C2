// f(x)=5x

// first-order    high-order
// salamlamaq();
// function salamlamaq() {
//   console.log("salam");
// }
// salamlamaq();

// salam();
// let salam = function salamlamaq() {
//   console.log("Salam");
// };

// salam();

// func =>dexlaration expression

// 3formadda

// let sayHello = function () {
//   console.log("Hello");
// };
// sayHello();

// let sayHello = () => console.log("hello");  //arrow function
// sayHello();
// function () {
//   console.log("first");
// };

// function getSum(a, b) {
//   //   console.log(a + b);

//   return a + b;
// }
// getSum(2, 2);
// getSum(50, 90);

// console.log(getSum(6, 9));

// function getSum(a = 5, b = 9) {
//   console.log(a + b);

//   return a + b;
// }

// getSum(10);

// let obj = {
//   name: "mirane",
//   surname: "quliyeva",
//   getFullNameArrow: () => {
//     return "fatma " + "quliyeva";
//     //     return this;
//   },
//   getFullNameRegular: function () {
//     return this.name + " " + this.surname;
//   },
// };

// obj.year = "dfghj";

// // // console.log(obj.getFullNameArrow());
// // console.log(obj.getFullNameRegular());

// console.log(this);

// console.log(window.alert());

// Function task

//#region Task1.1. Stringdəki hər bir simvolun sayını qaytaran funksiya yazı

// function herflerinSayi(str) {
//   let deyisenler = {};

//   for (let char of str) {
//     if (deyisenler[char]) {
//       deyisenler[char]++;
//     } else {
//       deyisenler[char] = 1;
//     }

//     console.log(deyisenler, deyisenler[char]);

//     // console.log(char);
//   }

//   return deyisenler;
// }

// let result = herflerinSayi("hello world");
// console.log(result);

//#endregion

//#region Task2.Arraydə tekrarlanan ədədləri konsolo yazan funksiya yazın.
// ([1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 1]=>[4, 6, 1])

// function findDuplicates(arr) {
//   let seen = new Set();
//   let dupl = new Set();

//   for (let num of arr) {
//     if (seen.has(num)) {
//       dupl.add(num);
//     } else {
//       seen.add(num);
//     }
//   }
//   console.log("ededler", seen);
//   console.log("tekrar", dupl);

//   return Array.from(dupl);
// }

// let result = findDuplicates([1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 1]);
// console.log(result);

//#endregion

//#region  Task3. Arraydə təkrarlanan ədədləri silin konsolo yazan funksiya yazın.

// function removeDuplicates(arr) {
//   return new Set(arr);
// }

// let result = removeDuplicates([1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 1]);
// console.log(result);

// let a = new Set([1, 2, 3, 4, 5, 5, 6]);
// console.log(a);

//#endregion

//#region Task4.Fibonacci ededleri üçün funksiya yazin

// function fibonacci(n) {
//   let ededler = [0, 1];

//   for (let i = 2; i < n; i++) {
//     ededler[i] = ededler[i - 1] + ededler[i - 2];
//   }

//   return ededler.slice(0, n);
// }
// //  0 1 2 3 4 5 6  =>i
// // [0,1,1,2,3,5,8] =>ededler[i]

// let n = +prompt("ededi daxil edin");
// let result = fibonacci(n);
// console.log(result);

//#endregion

//#region Task5.Verilmiş string-in palindron olub olmadığını yoxlayan funksiya yazin

function isPalindrome(str) {
  let cleaned = str.replace(/[A-Za-z0-9]/g, "").toLowerCase();
  let reversed = cleaned.split("").reverse().join("");

  return cleaned == reversed;
}

let str = prompt("daxil edin");
let result = isPalindrome(str);
console.log(result);

// let str = "asdfg";
// console.log(str.reverse());

//#endregion
