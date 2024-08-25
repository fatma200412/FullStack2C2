let start = document.querySelector(".startBtn");
let count = document.querySelector(".count");
let stopBtn = document.querySelector(".stopBtn");
let backBtn = document.querySelector(".backBtn");

let check = true;

// let prom = new Promise((resolve, reject) => {
//   if (check) {
//     console.log("Resolve olundu");
//   } else {
//     console.log("Reject olundu");
//   }
// });

// prom
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log(prom);

let box = document.querySelector(".box");
let getUser = document.querySelector(".getUser");

let myInput = document.querySelector(".myInput");

let arr = [];

getUser.addEventListener("click", function () {
  fetch(
    "https://jsonplaceholder.typicode.com/usershttps://jsonplaceholder.typicode.com/users"
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);

      data.forEach((element) => {
        console.log(element);
        let newCard = `
            <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text">${element.email}</p>
    <a href="${element.website}" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            `;

        box.innerHTML += newCard;
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

let searchBtn = document.querySelector(".searchBtn");
let searchInp = document.querySelector(".searchInp");

async function getData() {
  let res = await fetch("https://restcountries.com/v3.1/all");
  let data = await res.json();
  console.log(data[0]);

  // datalar yarandir
  data.forEach((elem, i) => {
    let newCard = `
      <div class="card" style="width: 18rem;">
  <img src="${elem.flags.png}" class="card-img-top" alt="...">
  <div class="card-body">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name- ${elem.name.common} </li>
    <li class="list-group-item">Capital - ${elem.capital} </li>
    <li class="list-group-item">Population ${elem.population} </li>
  </ul>
</div>
 
</div>
    `;

    box.innerHTML += newCard;
  });

  // btn ile axtaris
  searchBtn.addEventListener("click", function () {
    // console.log(searchInp.value);
    box.innerHTML = "";

    data.forEach((elem) => {
      if (elem.name.common.toLowerCase().includes(searchInp.value)) {
        // console.log(elem.name.common);
        let newCard = `
        <div class="card" style="width: 18rem;">
    <img src="${elem.flags.png}" class="card-img-top" alt="...">
    <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name- ${elem.name.common} </li>
      <li class="list-group-item">Capital - ${elem.capital} </li>
      <li class="list-group-item">Population ${elem.population} </li>
    </ul>
  </div>
   
  </div>
      `;

        box.innerHTML += newCard;
      }
    });
  });

  // input ile axtaris

  searchInp.addEventListener("input", function () {
    console.log(searchInp.value);
    box.innerHTML = "";
    data.forEach((elem) => {
      if (elem.name.common.toLowerCase().includes(searchInp.value)) {
        // console.log(elem.name.common);
        let newCard = `
        <div class="card" style="width: 18rem;">
    <img src="${elem.flags.png}" class="card-img-top" alt="...">
    <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name- ${elem.name.common} </li>
      <li class="list-group-item">Capital - ${elem.capital} </li>
      <li class="list-group-item">Population ${elem.population} </li>
    </ul>
  </div>
   
  </div>
      `;

        box.innerHTML += newCard;
      }
    });
  });
}

getData();
