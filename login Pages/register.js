let form = document.querySelector("form");

form.addEventListener("submit", registeration);

let registerArr = JSON.parse(localStorage.getItem("user_details")) || [];

function registeration(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;

  let company = document.getElementById("company_name").value;

  let email = document.getElementById("email").value;
  let plan = document.getElementById("plan").value;
  let password = document.getElementById("password").value;
  let confirmPass = document.getElementById("confirm_password").value;

  let registerObj = {
    name,
    company,
    email,
    plan,
    password,
    confirmPass,
  };
  if (registerObj.password !== registerObj.confirmPass) {
    alert("Password is not same");
  } else {
    registerArr.push(registerObj);

    localStorage.setItem("user_details", JSON.stringify(registerArr));

    alert("Account created Succesfully😄");
    window.location.href = "smartCopy.html";
  }
}
