"use strict";

function Login() {
    let mail = document.getElementById("mail").value;
    let password = document.getElementById("pas").value;
    
    let DBtMail = "admin@gmail.com";
    let DBPassword = "12345";

  if (mail != DBtMail && password != DBPassword) {
    alert("Mail and Password invalid!");
  } else if (mail != DBtMail) {
    alert("invalid mail adress!");
  } else if (password != DBPassword) {
    alert("Invalid password!");
  } else {
    alert("Hello Admin :)");
  }
}
