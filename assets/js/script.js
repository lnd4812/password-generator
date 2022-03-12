// Assignment code here

// user clicks on "generate password button"
document.getElementById("generate").addEventListener("click", function(){

});

  // ask user to answer a series of questions to provide the necessary components of the password
  window.confirm("Welcome to your Password Generator LND2022.  Please click on the button and answer the following questions in order to create your new password");

  // proceed through following steps
  
  // (click) ask user how many characters they want their password to comprise
  var passwordLength = window.prompt("Please select a number from 8 to 128 to set the length of your new password");

  
    // (click) ask user if they'd like to include capital letters in the new password
    var includeUpperCase = window.confirm("Would you like your password to include Capital letters?");
      //If yes - include command to include, else all small letters - validate input and select at least one letter

      if (includeUpperCase) {
        // if yes, function to include at least one Upper Case letter, else function to exclude - in either case, validate input & select at least one number
      var letterInput = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";  
      } 
      else {
        // ensure any letters added to the password are lower case only
      } var letterInput = "abcdefghijklmnopqrstuvwxyz";
 
       
  // (click) ask user if they'd like to include any numbers in the new password

    var includeNumber = window.confirm("Would you like your password to include numbers?");
  
    if (includeNumber) {
      // create var with numbers
      var numComponents = "0123456789";
    } 
    else {
      // ensure no numbers are included in password
    } var numComponnents = null;  //is this correct
 
  // (click) ask user if they'd like to include any special characters in the new password
  var includeSpecial = window.confirm ("Would you like your password to include special characters?");

    // if yes, include special characters, else do not - in either case, validate input and select at least one special character
    if(includeSpecial) {
      // ensure at least one special character is included within password
      var SpecialChar = "!@#$%^&*";
    } 
    else {
      // ensure no special characters are included in password
      var SpecialChar = null;
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


// ask user to click the button again to generate their new password
window.alert("Thank you for confirming your choices.  You may now click the button to generate your new password.");

