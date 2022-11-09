// Assignment Code
var generateBtn = document.querySelector("#generate");
//moved this up so it happens right away
generateBtn.addEventListener("click", writePassword);
//variables for password creation
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
  //variables with prompts and confirms for popups with text
  var length = window.prompt("How many characters do you want your password to contain?");
  var specChar1 = window.confirm("Do you want to include special characters?");
  var numbers = window.confirm("Do you want to include numbers?");
  var lowerCase = window.confirm("Do you want to include lowercase letters?");
  var upperCase = window.confirm("Do you want to include uppercase letters?");
  
//variables for minimum
  var minLength = "";
  var minSpecChar1 = "";
  var minNumbers = "";
  var minLowerCase = "";
  var minUpperCase = "";

  //what the user selected
  if (length === )
  if (specChar1 === True);
  if (numbers === Ture);
  if (lowerCase === True);
  if (upperCase === True);

  //
  var passwordRules = {

  }
}











