//make popup for characters count
//answer popup
//do again for special characters, numbers, lowercase, uppercase
//create random password using selected criteria



// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
var specChar = "!@#$%^&*()"
var characters = "0123456789abcdefghijklmnopqrstuvwxyx!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // var passwordLength = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password")

  passwordText.value = password;

}

function generatePassword() {
  var length = window.prompt("How many characters do you want your password to contain?");
  var specChar1 = window.confirm("Do you want to include special characters?");
  var numbers = window.confirm("Do you want to include numbers?");
  var lowerCase = window.confirm("Do you want to include lowercase letters?");
  var upperCase = window.confirm("Do you want to include uppercase letters?");
  

  var minLength = "";
  var minSpecChar1 = "";
  var minNumbers = "";
  var minLowerCase = "";
  var minUpperCase = "";
}






