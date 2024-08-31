let removeAll = document.querySelector(".removeAll");
let productsBox = document.querySelector(".products");

let arr = JSON.parse(localStorage.getItem("basket"));
console.log(arr);
let base_url = "http://localhost:3000/";

fetch(base_url + "products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    data.forEach((element) => {
      arr.forEach((id) => {
        if (id == element.id) {
          productsBox.innerHTML += `
                  <div class="card" style="width: 18rem">
               <img src=${element.image} class="card-img-top" alt="..." />
               <div class="card-body">
                 <h6>${element.title}</h6>
                 <ul class="list-group list-group-flush">
                   <li class="list-group-item">${element.price}</li>
                   <li class="list-group-item">
                     <button class="btn btn-warning basket" name="${element.id}">basket</button>
                   </li>
                   <li class="list-group-item">
                     <button class="btn btn-danger">wishlist</button>
                   </li>
                 </ul>
               </div>
             </div>
                 `;
          removeAll.addEventListener("click", function () {
            localStorage.clear();
            
          });
        }
      });
    });
  });
