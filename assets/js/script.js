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
  var specialConfirm = window.confirm("Would you like to use special characters?")

  //character var
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var numbers = "1234567890"
  var specialChar = "\"\'\@\\!#$%^&()|{}[]^*_+-=<>?"

  //generator statements
  if (upperConfirm && lowerConfirm && numberConfirm && specialConfirm) {
    var randomChar = function() {
      var character = (upperCase + lowerCase + numbers + specialChar)[Math.floor(Math.random() * (upperCase.length + lowerCase.length + numbers.length + specialChar.length))]
      return character
    }
  } else if (upperConfirm && lowerConfirm && numberConfirm) {
    var randomChar = function() {
      var character = (upperCase + lowerCase + numbers)[Math.floor(Math.random() * (upperCase.length + lowerCase.length + numbers.length))]
      return character
    }
  } else if (upperConfirm && lowerConfirm && specialConfirm) {
    var randomChar = function() {
      var character = (upperCase + lowerCase + specialChar)[Math.floor(Math.random() * (upperCase.length + lowerCase.length + specialChar.length))]
      return character
    }
  } else if (lowerConfirm && numbers && specialConfirm) {
    var randomChar = function() {
      var character = (lowerCase + numbers + specialChar)[Math.floor(Math.random() * (lowerCase.length + numbers.length + specialChar.length))]
      return character
    }
  }else if (upperConfirm && numberConfirm && specialConfirm) {
    var randomChar = function() {
      var character = (upperCase + numbers + specialChar)[Math.floor(Math.random() * (upperCase.length + numbers.length + specialChar.length))]
      return character
    }
  }else if (upperConfirm && lowerConfirm) {
    var randomChar = function() {
      var character = (upperCase + lowerCase)[Math.floor(Math.random() * (upperCase.length + lowerCase.length))]
      return character
    }
  } else if (upperConfirm && specialConfirm) {
    var randomChar = function() {
      var character = (upperCase + specialChar)[Math.floor(Math.random() * (upperCase.length + specialChar.length))]
      return character
    }
  } else if (upperConfirm && numberConfirm) {
    var randomChar = function() {
      var character = (upperCase + numbers)[Math.floor(Math.random() * (upperCase.length + numbers.length))]
      return character
    }
  } else if (lowerConfirm && specialConfirm) {
    var randomChar = function() {
      var character = (lowerCase + specialChar)[Math.floor(Math.random() * (lowerCase.length + specialChar.length))]
      return character 
    }
  } else if (lowerConfirm && numberConfirm) {
    var randomChar = function() {
      var character = (lowerCase + numbers)[Math.floor(Math.random() * (lowerCase.length + numbers.length))]
      return character
    }
  } else if (numberConfirm && specialConfirm) {
    var randomChar = function() {
      var character = (numbers + specialChar)[Math.floor(Math.random() * (numbers.length + specialChar.length))]
      return character
    }
  } else if (upperConfirm) {
    var randomChar = function() {
      var character = (upperCase)[Math.floor(Math.random() * (upperCase.length))]
      return character
    }
  } else if (lowerConfirm) {
    var randomChar = function() {
      var character = (lowerCase)[Math.floor(Math.random() * (lowerCase.length))]
      return character
    }
  } else if (specialConfirm) {
    var randomChar = function() {
      var character = (specialChar)[Math.floor(Math.random() * (specialChar.length))]
      return character
    }
  } else if (numberConfirm) {
    var randomChar = function() {
      var character = (numbers)[Math.floor(Math.random() * (numbers.length))]
      return character
    }
  }

  if (randomChar === undefined) {
    var randomPassword = "You need to select at least one character type!"
  }
  else {
    var randomPassword = ""
    for (var i = 0; i < passwordLength; i++) {
      randomPassword += randomChar();
    }
  }
  return randomPassword
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