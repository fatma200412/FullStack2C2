// eger(sert){
//       icra etdiyimiz kodlar
// }eks halda{
//       icra etdiyimiz kodlar
// }

// let num = 50;

// if (num > 0) {
//   console.log("eded musbetdir");
// } else {
//   console.log("eded menfidir");
// }

// if (num == 0) {
//   console.log("eded sifra beraberdir");
// } else if (num > 0) {
//   console.log(`${num}ededi musbetdir`);
// } else {
//   console.log(`${num} ededi menfidir`);
// }

// let result = 40;

// if (result > 50) {
//   console.log("telebe imtahandan ugurlar kecib");
// } else {
//   console.log("telebe imtahandan ugursuz nectice elde edib");
// }

// let btn = 0;

// if (btn) {
//   console.log("komputer yanir");
// } else {
//   console.log("komputer sonub");
// }

// btn == true ? console.log("komputer yanir") : console.log("komputer sonub");

// false deyerler=>false,0,underfined,null,NaN,""

// let a = 0;

// if (a == 0) {
//   console.log("eded sifra beraberdir");
// } else if (a % 2 != 0) {
//   console.log("eded tekdir");
// } else {
//   console.log("eded cutdur");
// }

// if (a % 2 == 0) {
//   if (a == 0) {
//     console.log("eded sifra beraberdir");
//   } else {
//     console.log("eded cutdur");
//   }
// } else {
//   console.log("eded tekdir");
// }

// if (a % 2 == 0 && a != 0) {
//   console.log("cutdur");
// } else if (a % 2 != 0 && a != 0) {
//   console.log("tekdir");
// } else {
//   console.log("eded sifra beraberdir");
// }

// let result = 8;

// if (result < 50) {
//   console.log("telebe kesilib");
// } else if (result > 50 && result < 61) {
//   console.log("Telebe E alib");
// } else if (result > 60 && result < 71) {
//   console.log("Telebe d alib");
// } else if (result > 70 && result < 81) {
//   console.log("Telebe C alib");
// } else if (result > 80 && result < 91) {
//   console.log("Telebe B alib");
// } else if (result > 90) {
//   console.log("Telebe A alib");
// }

// if (result > 50 && result < 61) {
//   console.log("Telebe E alib");
// } else if (result > 60 && result < 71) {
//   console.log("Telebe d alib");
// } else if (result > 70 && result < 81) {
//   console.log("Telebe C alib");
// } else if (result > 80 && result < 91) {
//   console.log("Telebe B alib");
// } else if (result > 90) {
//   console.log("Telebe A alib");
// } else {
//   console.log("telebe kesilib");
// }

// &&(and)=>(true,true)
// ||(or)=>(en azi biri true-dursa)
// !(not)
// ??(nullish)=>(null ve underfined)

// let b;

// if (b ?? 4 < 5) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// let day = 1;

// switch (day) {
//   case 1:
//     console.log("Bazar ertesidir");
//     break;
//   case 2:
//     console.log("Cersenbe axsamidir");
//     break;
//   case 3:
//     console.log("Cersenbedir");
//     break;
//   case 4:
//     console.log("Cume axsamidir");
//     break;
//   case 5:
//     console.log("Cumedir");
//     break;
//   case 6:
//     console.log("Senbedir");
//     break;
//   case 7:
//     console.log("Bazardir");
//     break;

//   default:
//     console.log("heftenin gununu duzgun teyin edin:");
//     break;
// }

// alert("Salam");
// let name = prompt("Adinizi daxil edin:");
// console.log(name);

// let age = prompt("Yasinizi daxil edin:");
// age = Number(age);
// console.log(typeof age);
// console.log("age=", age);
// console.log("Tevellud:", 2024 - age);

// let a = +prompt("Kvadratin terefini teyin edin:");
// // a = Number(a);
// console.log("a-in type:", typeof a);
// let s = a ** 2;
// console.log("Sahe:", s);

// let btn = confirm("Sertlerle razisinizmi?");
// console.log(btn);
// if (btn) {
//   console.log("Beli,raziyam");
// } else {
//   console.log("Xeyr, razi deyilem");
// }

// 1=>balansi gostermek
// 2=>balansa pul elave etmek
// 3=>balansdan pul cekmek
// 4=>ternimaldan cixaraq karti goturmek

let balans = 100;
let emeliyyatlar = +prompt("Emeliyyati secin:");

let mebleg;

switch (emeliyyatlar) {
  case 1:
    alert(`Balansiniz ${balans}AZN-dir.`);
    break;
  case 2:
    mebleg = Number(prompt("Elave etmek istediyiniz meblegi daxil edin:"));
    balans += mebleg;
    //     balans = balans + mebleg;
    alert(`Balansiniz ${balans} AZN-dir.`);
    break;
  case 3:
    mebleg = Number(prompt("Balansdan cekeceyin meblegi daxil edin:"));
    if (mebleg > balans) {
      alert("Balansda kifayet qeder mebleg yoxdur");
    } else {
      //     balans = balans + mebleg;
      balans -= mebleg;
      alert(
        `Balansiniz ${balans} AZN-dir.Balansdan ${mebleg} AZN qeder pul cixdi.`
      );
    }
    break;
  case 4:
    alert(`Terminaldan cixildi.Kartinizi goturun.`);
    break;

  default:
    alert("Emeliyyati duzgun daxil edin.");
    break;
}
