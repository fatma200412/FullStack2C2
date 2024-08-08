// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]*2);
// // }

// let arr2 = arr.forEach((element, index, array) => {
//   //   console.log(array);
// //   console.log(element * 2);
//   return element * 2;
// });

// let arr3 = arr.map((element, index, array) => {
//   //   console.log(array);
//   return element * 2;
// });

// console.log("arr2=>", arr2);
// console.log("arr3=>", arr3);

let students = [
  {
    name: "Mirane",
    age: 20,
  },
  {
    name: "Medine",
    age: 18,
  },
  {
    name: "Samir",
    age: 20,
  },
  {
    name: "Fatma",
    age: 25,
  },
];

console.log(students.sort((a, b) => b.name.localeCompare(a.name)));

// if (students.age > 20) {
//   let students2 = students.map((elememt) => {
//     return elememt.name;
//   });

//   console.log(students2);
// }

// let adult = students.map((elem) => {
//   //   console.log(elem.age);

//   if (elem.age < 20) {
//     console.log(elem.name);
//   }
// });

let adult = [];

// adult = students.find((elem) => elem.age == 20);
// console.log("find methodunun neticesi=>", adult);

// adult = students.filter((elem) => elem.age != 25);
// console.log("filter methodunun neticesi=>", adult);

// adult = students.every((elem) => elem.age > 20);
// console.log("every methodunun neticesi=>", adult);

// adult = students.some((elem) => elem.age > 24);
// console.log("some methodunun neticesi=>", adult);

// let arr2 = [1, 2, 3, 4, 5];

// let arr3 = arr2.reduce((acc, elem, index, array) => {
//   //   console.log(acc);
//   //   console.log(elem);
//   //   console.log(index);
//   //   console.log(array);

//   //   console.log(acc + elem);
//   //   return acc;

//   //   if (elem > 0) {
//   //     acc.push(elem * 2);
//   //   }

//   return acc + elem;
// }, 0);

// console.log(arr3);

let arr = [52, 10, 69, 42, 12];

console.log(arr.sort((a, b) => b - a));
