// Assignment code here
function generatePassword() {

  //password length prompt
  var passwordLength = parseInt(window.prompt("Please choose a length between 8 and 128.", ""), 10);
  while(passwordLength < 8 || 128 < passwordLength || isNaN(passwordLength)) {
    var passwordLength = parseInt(window.prompt("Please choose a length between 8 and 128.", ""), 10);
  }

  // password prompts
  var upperConfirm = window.confirm("Would you like to use uppercase letters?")
  var lowerConfirm = window.confirm("Would you like to use lowercase letters?")
  var numberConfirm = window.confirm("would you like to use numbers?")
  var specialCharacters = window.confirm("Would you like to use special characters?")

  //character var
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var numbers = "1234567890"
  var specialCharacters = "\"\'\@\\!#$%^&()|{}[]^*_+-=<>?"

  //generator statements

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
