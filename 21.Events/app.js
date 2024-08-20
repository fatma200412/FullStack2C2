let api = [];

let myForm = document.querySelector(".myForm");
let myInput = document.querySelector(".myInput");
let todoBox = document.querySelector(".todoBox");
// let addBtn = document.querySelector(".add-todo-btn");
let deleteAll = document.querySelector(".deleteAll");
let saveEdit = document.querySelector(".saveEdit");
let modelText = document.querySelector(".modelText");

deleteAll.addEventListener("click", function () {
  api = [];
  createToDo();
});

myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let obj = {
    id: api.length + 1,
    todo: myInput.value,
  };
  console.log(obj);

  api.push(obj);
  console.log(api);
  createToDo();
  myInput.value = "";
});
saveEdit.addEventListener("click", function () {
  console.log(modelText.value);

  api = api.map((elem) => {
    console.log(elem);
    if (elem.id == modelText.getAttribute("data")) {
      elem.todo = modelText.value;
    }
    return elem;
  });

  
  createToDo();
});

function createToDo() {
  todoBox.innerHTML = "";
  api.forEach((element, index) => {
    const todoItem = document.createElement("div");
    const todoText = document.createElement("p");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    todoItem.className = "todoItem ";
    todoText.className = "todoText";
    deleteBtn.className = "btn btn-danger deleteBtn";
    editBtn.className = "btn btn-warning editBtn";

    console.log(element.todo);

    todoText.innerHTML = element.id + " " + element.todo;
    deleteBtn.innerHTML = "Delete";
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("data-bs-toggle", "modal");
    editBtn.setAttribute("data-bs-target", "#exampleModal");
    editBtn.setAttribute("data", element.id);
    deleteBtn.setAttribute("id", element.id);

    todoItem.append(todoText, deleteBtn, editBtn);
    todoBox.appendChild(todoItem);

    deleteBtn.addEventListener("click", function (e) {
      console.log(e.target.getAttribute("id"));

      api = api.filter((elem) => elem.id != e.target.getAttribute("id"));
      createToDo();
    });

    editBtn.addEventListener("click", function (e) {
      console.log(e.target.getAttribute("data"));
      console.log(modelText.value);

      modelText.value = api.find(
        (elem) => elem.id == e.target.getAttribute("data")
      ).todo;

      modelText.setAttribute("data", e.target.getAttribute("data"));
    });
  });
}

let itemBox = document.querySelector(".itemBox");

// itemBox.addEventListener("mouseover", function () {
//   console.log("fghj");
// });

// itemBox.addEventListener("mouseout", function () {
//   console.log("fghj");
// });

// itemBox.addEventListener("mouseenter", function () {
//   console.log("fghj");
// });

// itemBox.addEventListener("mouseleave", function () {
//   console.log("fghj");
// });

// document.addEventListener("keypress", function (e) {
//   console.log(e.key);
// });

// document.addEventListener("keydown", function (e) {
//   console.log(e.key);
// });

// document.addEventListener("keyup", function (e) {
//   console.log(e.key);
//   console.log(e.keyCode)
// });

let input = document.querySelector(".input");

// input.addEventListener("focus", function () {
//   console.log("focus olundu");
// });

// input.addEventListener("copy", function () {
//   console.log("copy olundu");
// });

// input.addEventListener("paste", function () {
//   console.log("paste olundu");
// });

// input.addEventListener("cut", function () {
//   console.log("cut olundu");
// });

input.addEventListener("select", function () {
  console.log("select olundu");
});
