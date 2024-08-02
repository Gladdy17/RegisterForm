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

//check required fields
function checkRequried(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${input.id} is Requried`);
    } else {
      showSuccess(input);
    }
  });
}

// Eventlistners Added
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequried([username, email, password, password2]);
});
