// let arr = [1, 2, 3, 4, 5];
// console.log(typeof arr);
// let arr2 = ["armud", "alma", "kivi"];
// let arr3 = [1, 2, 3, "asdgh", false, true, null, { name: "fatma" }];
// console.log(arr3);
// console.log(arr3.length);
// console.log(arr3[1]);
// arr3.length = 10;
// console.log(arr3);
// arr3[9] = "ertyui";
// console.log(arr3);

// for (let i = 0; i < arr2.length; i++) {
//   //   console.log("indeks=>", i, "elementler=>", arr2[i]);
//   //   console.log(arr2[arr2.length - 1]);
//   console.log(arr2[i]);
//   for (let j = 0; j < arr2[i].length; j++) {
//     console.log(arr2[i][j]);
//   }

//   //   if (arr2[i] == "alma") {
//   //     console.log("tapildi");
//   //     break;
//   //   }
// }

// let arr = [-1, -45, -3, -85, -50, -89];
// let max = arr[0];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   sum += arr[i];
// }
// console.log("max=>", max);
// console.log("sum=>", sum);

// //Object

let obj = {
  // key:value
  name: "fatma",
  surname: "guliyeva",
  age: 63,
  password: {
    email: "asdfg@sdfg",
    pass: "asdfg",
  },
};
console.log(Object.keys(obj));
console.log(Object.values(obj));
// // console.log(JSON.stringify(obj));

// let obj2 = JSON.parse(JSON.stringify(obj));
// console.log(obj2);

// console.log(obj.password.pass);

// obj2.name = "Mirane";
// console.log(obj2);
// console.log(obj);

// obj.data = "12.02";
// console.log(obj);

// for in and for of

// for (let key in obj) {
//   //   console.log(key);
//   console.log(obj[key]);
// }

// let arr = [12, 2, 35, 4, 57, 6];

// // for (let elem of arr) {
// //   console.log(elem);
// // }

// for (let elem in arr) {
// //   console.log(elem);
//   console.log(arr[elem]);
// }

// let students = [
//   {
//     id: 1,
//     name: "Medine",
//     age: 18,
//     hobbies: ["musiqiye qulaq asmaq", "filmlere baxmaq"],
//     password: {
//       email: "medine@mail.com",
//       pass: "123456",
//       member: {
//         baci: "baci",
//         qardas: "qardas",
//       },
//     },
//   },
//   {
//     id: 2,
//     name: "Mirane",
//     age: 19,
//     hobbies: ["musiqiye qulaq asmaq", "filmlere baxmaq", "resm cekmek"],
//     password: {
//       email: "mirane@mail.com",
//       pass: "654321",
//       member: {
//         baci: "baci",
//       },
//     },
//   },
// ];

// console.log(students);

// // console.log(students[0].age + students[1].age);  //her zaman duzgun deyil

// let sum = 0;

// for (let i = 0; i < students.length; i++) {
//   sum += students[i].age;

//   //   console.log(students[i].hobbies.toLocaleString());
//   console.log(students[i].name);
//   for (let j = 0; j < students[i].hobbies?.length; j++) {
//     console.log(students[i].hobbies[j]);
//   }
// }
// console.log("sum=", sum);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [2, 4, 6];

// for (let i = 0; i < arr1.length; i++) {
//   //   console.log(arr1[i]);

//   for (let j = 0; j < arr2.length; j++) {
//     //     console.log(arr2);

//     if (arr1[i] == arr2[j]) {
//       console.log(arr1[i]);
//     }
//   }
// }
