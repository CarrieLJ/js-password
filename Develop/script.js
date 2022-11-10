// Assignment Code
//creating variable for the generate button
var generateBtn = document.querySelector("#generate");

//moved this up so it happens right away; click added to button
generateBtn.addEventListener("click", writePassword);

//variables for password creation
var specChar = "!@#$%^&*()"
var characters = "0123456789abcdefghijklmnopqrstuvwxyx!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
  // var passwordLength = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password")

  passwordText.value = password;

}

function generatePassword() {

  //variables with prompts and confirms for popups with text
  var length = prompt("How many characters do you want your password to contain?");

  var specChar = confirm("Do you want to include special characters?");

  var numbers = window.confirm("Do you want to include numbers?");

  var lowerCase = window.confirm("Do you want to include lowercase letters?");
    if (!lowerCase) {
    }
  var upperCase = window.confirm("Do you want to include uppercase letters?");
    if (!upperCase) {
    }
  }
  
  if (length >= 8 && length <= 128){
    length = (specChar, characters, numbers);
  }
  else (!length); {
    generatePassword.return;
  }

  if (specChar.confirm === True) {
    specChar = (specChar);
  } else {
    specChar != (specChar);
  }

  if (numbers === True) {
  }



//variables for minimum
  // var minLength = "8";
  // var maxLength = "128";
  // var minSpecChar1 = "";
  // var minNumbers = "";
  // var minLowerCase = "";
  // var minUpperCase = "";

  //what the user selected
  // if (specChar1 === True);
  //   minSpecChar1 = passwordRules.getSpecChar1();
  //   minLength++;
  // if (numbers === Ture);
  //   minNumbers = passwordRules.getNumbers();
  // if (lowerCase === True);
  // if (upperCase === True);
  // if (length === i);
    // for (i = 0; i)

  // //
  // var passwordRules = {
  //   getMinLength: function() {

  //   }

  // }

// for (let i = 0; i <)











