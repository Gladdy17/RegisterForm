const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// show input error messgae

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// show input sucess message

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//

// Eventlistners Added
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "Username is requried");
  } else {
    showSuccess(username);
  }
  if (email.value === "") {
    showError(email, "Email is requried");
  } else {
    showSuccess(email);
  }
  if (password.value === "") {
    showError(password, "Password is requried");
  } else {
    showSuccess(password);
  }
  if (password2.value === "") {
    showError(password2, "Password2 is requried");
  } else {
    showSuccess(password2);
  }
});