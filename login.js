
// button

var email = document.getElementById("email");
var password = document.getElementById("password");
var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  fetch("http://localhost:3000/api/login", {
    method: "POST",
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  })
    .then((r) => r.json())
    .then((response) => {
      // salvam token-ul in storage
      sessionStorage.setItem("token", response.token);
      // navigam spre todos.html
      window.location.assign("products.html");
    });
});




