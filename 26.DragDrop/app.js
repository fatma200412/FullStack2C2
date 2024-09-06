let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");

let items = document.querySelectorAll(".item");

for (let item of items) {
  item.addEventListener("dragstart", function (e) {
    let selected = e.target;
    console.log("selected", selected);

    box2.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    box2.addEventListener("drop", function (e) {
      e.preventDefault();
      box2.appendChild(selected);
      console.log(selected);
      selected = null;
      console.log(selected);
    });

    box1.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    box1.addEventListener("drop", function (e) {
      e.preventDefault();
      box1.appendChild(selected);
      selected = null;
    });
  });
}
