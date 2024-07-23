//#region  For dovru

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 30; i > 0; i--) {
//   console.log(i);
// }

// let n = Number(prompt("ededi daxil edin:"));

// for (let i = 0; i <= n; i += 2) {
//   console.log(i);
// }

// for (let i = 0; i <= n; i++) {
//   if (i % 2 == 0 && i != 0) {
//     console.log(`${i} cutdur`);
//   } else if (i % 2 != 0 && i != 0) {
//     console.log(`${i} tekdir`);
//   } else {
//     console.log("eded 0dir");
//   }
// }

// for (let i = 0; i < 11; i++) {
//   if (i == 6) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 10; i < 100; i++) {
//   console.log(i);
// }

// let sum = 0;
// let hasil = 1;

// for (let i = 1; i < 5; i++) {
//   sum += i;
//   console.log("i=", i);
// }
// console.log("sum=", sum);

//#endregion

//#region  While dovru
// let i = 0;

// while (i <= 10) {
//   console.log(i);

//   i++;
// }

// let i = 1;

// while (i <= 15) {
//   // console.log(i);

//   if (i % 2 == 0 && i != 0) {
//     console.log(`${i} cutdur`);
//   } else {
//     console.log(`${i} tekdir`);
//   }

//   i++;
// }

//#endregion

//#region  do While dovru
// let i = 8;

// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// let i = 8;

// do {
//   console.log(i);
//   i++;
// } while (i > 5 && i < 10);

//#endregion

// let month = +prompt("Ayin nomresini daxil edin:");
// let contreller = true;

// do {
//   switch (month) {
//     case 1:
//     case 2:
//     case 12:
//       console.log("qisdir");
//       contreller = false;
//       break;
//     case 3:
//     case 4:
//     case 5:
//       console.log("yazdir");
//       contreller = false;

//       break;
//     case 6:
//     case 7:
//     case 8:
//       console.log("yaydir");
//       contreller = false;

//       break;
//     case 9:
//     case 10:
//     case 11:
//       console.log("payizdir");
//       contreller = false;

//       break;

//     default:
//       month = +prompt("Ayin nomresini duzgun daxil edin:");

//       break;
//   }
// } while (contreller);

//          012345
// let word = "hello world!";

// console.log(word);
// // console.log("wordun uzunlugu=" + word.length);
// // console.log("birinci element=", word[0]);
// // console.log("sonuncu element", word[word.length - 1]);

// for (let i = 0; i < word.length; i++) {
//   // console.log("elementler=>", word[i]);

//   console.log(`elementler=>${word[i]}, indeksler=>${i}`);
// }

// let word = "azerbaycan";

// // for (let i = 0; i < word.length; i++) {
// //   if (word[i] == "c") {
// //     continue;
// //   }
// //   console.log(word[i]);
// // }

// for (let i = 0; i < word.length; i++) {
//   if (word[i] == "a" || word[i] == "e") {
//     console.log(`${word[i]}=> saitdir`);
//     continue;
//   }
//   console.log(word[i]);
// }

// let word1 = "abc";
// let word2 = "dfe";
// let uzunluq;

// for (let i = 0; i < word1.length; i++) {
//   for (let j = 0; j < word2.length; j++) {
//     console.log(word1[i]);
//     console.log(word2[j]);
//     if (word1[i] == word2[j]) {
//       // console.log(word1[i]);
//     }
//   }
// }

// if (word1.length < word2.length) {
//   uzunluq = word2.length;
// } else {
//   uzunluq = word1.length;
// }

// for (let i = 0; i < uzunluq; i++) {
//   if (word1[i] == word2[i]) {
//     console.log(word1[i]);
//   }
// }

let x, y, simvol;

for (x = 0; x < 6; x++) {
  for (y = 0; y < x; y++) {

    console.log(x, y);

    
    simvol += " *";
  }
  console.log(simvol);
  simvol = "";
}
