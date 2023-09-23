let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  confirmPassword = id("confirm password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank", "Name must not be less than 5 characters");
  engine(email, 1, "Email cannot be blank", "Email should contain @ character in it");
  engine(PhoneNumber, 2, "Phone Number cannot be 123456789 and must be a 10 digit number")
  engine(password, 3, "Password cannot be blank", "Password cannot be password or name of the user or less than 8 characters");
  engine(ConfirmPassword, 4, "Password and confirm password should match", "Whenever any of the above are not met, the error should pop saying ex; enter correct email” or “password is not strong” etc");
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};