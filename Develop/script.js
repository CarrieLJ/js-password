// Assignment Code
//creating variable for the generate button
var generateBtn = document.querySelector("#generate");

//moved this up so it happens right away; click added to button
generateBtn.addEventListener("click", writePassword);



  // var passwordLength = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password")

  passwordText.value = password;

}

function generatePassword() {  

  //variables for password creation
  var specCharacters = "!@#$%^&*()";
  var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyx";
  var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCharacters = "0123456789";
  var availableCharacters = "";

  //variables with prompts and confirms for popups with text
  var pwLength = prompt("How many characters do you want your password to contain?");
  if (pwLength < 8){
    alert("You need to pick a number greater than 8.");
    return;
  }
  if (pwLength > 128){
    alert("You need to pick a number less than 128.");
    return;
  }
  
  var incSpecChar = confirm("Do you want to include special characters?");
    
  var incNumbers = confirm("Do you want to include numbers?");

  var incLowerCase = confirm("Do you want to include lowercase letters?");
 
  var incUpperCase = confirm("Do you want to include uppercase letters?");

  if (incSpecChar!==null){
    availableCharacters = specCharacters;
    alert(availableCharacters);
  }

  if (incNumbers!==null){
    availableCharacters += numberCharacters;
    alert(availableCharacters);
  }

  if (inclowerCase!==null){
    availableCharacters += lowerCaseCharacters;
    alert(availableCharacters);
  }

  if (incUpperCase!==null){
    availableCharacters += upperCaseCharacters;
    alert(availableCharacters);
  }

  

  var newpw = "";
  for (var i = 1; i < pwLength; i++) {
    
  }




  // var newpw
  //   for (newpw = specChar.length, i++);

  //   for (lowerCaseCharacters.length, i++);
  //   for (upperCaseCharacters++, numbers++;

  //     newpw

}
  

    // length = (specChar, characters, numbers);
  
  // else (!length); {
  //   generatePassword.return;
  // }


  



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











