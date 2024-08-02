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

// check input lenght
function checkLenght(input, min, max) {
  if (input.value.length < min) {
    showError(input, `must be atleast ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `must be atleast ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// Checkpasswords
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords dont Match");
  } else {
    showSuccess(input2);
  }
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
  checkLenght(username, 3, 15);
  checkLenght(password, 6, 25);
  checkPasswordsMatch(password, password2);
});
