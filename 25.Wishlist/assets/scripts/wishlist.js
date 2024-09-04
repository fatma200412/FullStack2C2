let productBox = document.querySelector(".productBox");

let arrLocalFav = JSON.parse(localStorage.getItem("wishlist"));

let datas = [];

if (arrLocalFav) {
  datas = arrLocalFav;
}

datas.forEach((elem) => {
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
            
            <i name="${elem.id}" class="fa-solid fa-heart favIcon" style="font-size:20px;color:red"></i>
      `;

  let favIcons = document.querySelectorAll(".favIcon");

  let arr = [];

  let localFavArr = JSON.parse(localStorage.getItem("wishlist"));

  if (localFavArr) {
    arr = [...localFavArr];
  }

  //   console.log(arr);

  for (let icon of favIcons) {
    //     console.log(icon.getAttribute("name"));

    //     console.log(icon.classList)

    icon.addEventListener("click", function () {
      console.log(icon.getAttribute("name"));
      console.log(icon.classList.contains("fa-solid"));

      console.log(icon.previousElementSibling.remove());
      icon.remove();

      arr = arr.filter((elem) => elem.id != icon.getAttribute("name"));

      localStorage.setItem("wishlist", JSON.stringify(arr));
    });
  }
});
