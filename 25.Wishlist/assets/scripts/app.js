let productBox = document.querySelector(".productBox");
let prodUrl = "https://fakestoreapi.com/products";

axios(prodUrl).then((res) => {
  let data = res.data;

  data.forEach((elem) => {
    productBox.innerHTML += `
       <div class="group relative">
         

            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
            >

              <img
                src=${elem.image}
                alt="Front of men&#039;s Basic Tee in black."
                class="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${elem.title}
                  </a>
                </h3>
              </div>
              <p class="text-sm font-medium text-gray-900">$${elem.price}</p>
            </div>
          </div>
            
            <i name="${elem.id}" class="fa-regular fa-heart favIcon" style="font-size:20px;color:red"></i>
    
      `;
  });

  let favIcons = document.querySelectorAll(".favIcon");
  let arr = [];

  let favArr = JSON.parse(localStorage.getItem("wishlist"));

  if (favArr) {
    arr = [...favArr];
  }

  for (let icon of favIcons) {
    for (let elem of arr) {
      // console.log(icon.classList);
      // console.log(icon.getAttribute("name"), elem.id);
      // console.log(icon.getAttribute("name") == elem.id);

      if (icon.getAttribute("name") == elem.id) {
        icon.classList.add("fa-solid");
        icon.classList.remove("fa-regular");
      }
    }
    icon.addEventListener("click", function () {
      console.log(icon.classList.contains("fa-solid"));
      if (icon.classList.contains("fa-solid")) {
        icon.classList.add("fa-regular");
        icon.classList.remove("fa-solid");

        arr = arr.filter((elem) => elem.id != icon.getAttribute("name"));
        console.log(arr);
        localStorage.setItem("wishlist", JSON.stringify(arr));
      } else {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
        arr.push(data[icon.getAttribute("name") - 1]);
        console.log(arr);
        localStorage.setItem("wishlist", JSON.stringify(arr));
      }
    });
  }

  console.log(arr);
});

// get
axios("https://northwind.vercel.app/api/suppliers/").then((res) => {
  console.log(res.data);
});

// delete
axios.delete("https://northwind.vercel.app/api/suppliers/4");

// put

axios.put("https://northwind.vercel.app/api/suppliers/5", {
  ad: "asdfgh",
});

// patch
axios.patch("https://northwind.vercel.app/api/suppliers/6", {
  companyName: "asdfgh",
});

axios.post("https://northwind.vercel.app/api/suppliers/", {
  companyName: "asdfgh",
});
