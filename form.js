let name = document.getElementById("fname");
let email = document.getElementById("email");
let pwd = document.getElementById("password");
let error = document.getElementById("error");

// name
function validatename(){
    let regname = /^[A-Za-z]{3,20}$/;
    if(regname.test(text.value)==""){
      errorname.innerHTML = "Valid Name";
      errorname.style.color="green";
      return true;
  }
  else{
      errorname.innerHTML="invalid number";
      errorname.style.color="red";
      return false;
  }

}
// e-mail
function validate(){
    let regexp = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        error.innerHTML = "Valid email";
        error.style.color="green";
        return true;
    }
    else{
        error.innerHTML="invalid email";
        error.style.color="red";
        return false;
    }
  }
// password
let myInput = document.getElementById("pwd");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
function validatephone(){
    let regphone = /^[0-9]{10}$/;
    let regphone1 = /^([0-9]{3})\-([0-9]{3})\-([0-9]{4})$/;
    let regphone2 = /^([0-9]{3})\.([0-9]{3})\.([0-9]{4})$/;
    if((regphone.test(phone.value))||(regphone1.test(phone.value))||(regphone2.test(phone.value))){
      errorphone.innerHTML = "Valid phone no";
      errorphone.style.color="green";
      return true;
  }
  else{
      errorphone.innerHTML="invalid number";
      errorphone.style.color="red";
      return false;
  }
}
// function isChecked(){
//   if(document.getElementById("mycheckbox").Checked){
//     document.getElementById("message2").textContent = "checked";
//   }
//   else{
//     document.getElementById("message2").textContent = "not checked";
//   }
// }