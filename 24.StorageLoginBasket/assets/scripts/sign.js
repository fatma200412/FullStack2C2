let signInForm = document.querySelector(".signInForm");
let signInName = document.querySelector(".signInName");
let signInPass = document.querySelector(".signInPass");

let base_url = "http://localhost:3000/";

signInForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let newUser = {};
  newUser.name = signInName.value;
  newUser.password = signInPass.value;
  console.log(newUser);

  fetch(base_url + "users", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

    document.location.href="index.html"
});
