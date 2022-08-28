let registerArr = JSON.parse(localStorage.getItem("user_details"));
console.log(registerArr);

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  //console.log("check");
  registerArr.map(function (elem) {
    let userEmail = document.getElementById("email").value;

    let userPassword = document.getElementById("password").value;

    if (elem.email === userEmail && elem.password === userPassword) {
      alert("Login Successfully!!!");
      window.location.href = "/limitless-dress-2422/Navbar/index.html";
    } else if (elem.email !== userEmail && elem.password == userPassword) {
      alert("Incorrect Email!!");
    } else if (elem.email === userEmail && elem.password !== userPassword) {
      alert("Incorrect Password!!");
    }
  });
});
