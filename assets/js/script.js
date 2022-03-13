// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var writePassword = function() {
  
  
  document.getElementById("#password").addEventListener("click", function(){
  document.getElementById("password") = null});
    
  // ask user to answer a series of questions to provide the necessary components of the password; if user hits cancel, program does not proceed
  var proceed = window.confirm("Welcome to the Password Generator LND2022.  If you would like to create a new password, please click OK, otherwise please click on the CANCEL button");
  
  // if user pressed OK, proceed through following steps
  if(proceed) {
      var newPasswordLength = window.prompt("Please select a number from 8 to 128 to set the length of your new password");
      // confirm number input is within required range
      if(console.log(newPasswordLength) < 8 || console.log(newPasswordLength) > 128) {
      window.alert("You picked an incorrect option.  Please try again, entering a number between 8 and 128.");
      //return to window prompt command)
      writePassword();
      } 
      else {
    
      // have user enter preferences based on the following 3 components
      // Letter components 
      // ask user if they'd like to include capital letters in the new password
      var includeUpperCase = window.confirm("Would you like your password to include Capital letters?");
        //If yes - include command to include, else all small letters - validate input and select at least one letter
        if(includeUpperCase) {
          // if yes, function to include at least one Upper Case letter, else function to exclude
          var letterInput = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
          } 
          else {
          // ensure any letters added to the password are lower case only
          } var letterInput = "abcdefghijklmnopqrstuvwxyz"; 
      
          // check IncludeUpperCase value in console
          console.log(letterInput);

      //Numeric Components    
      // ask user if they'd like to include any numberic values in the new password
      var includeNum = window.confirm("Would you like your password to include numbers?");
        // If yes, create var with numbers 
        if(includeNum) {
        // if yes, function to include at least one Upper Case letter, else function to exclude - in either case, validate input & select at least one number
        var numInput = "0123456789";
        } 
        else {
          // ensure number string is empty
        } var numInput = "";
      
        // check IncludeNum value in console
        console.log(numInput);
      
        // Special Character Components 
      // ask user if they'd like to include any special characters in the new password
      var specialCharacters = window.confirm("Would you like your password to include special characters?");
        // if yes, include special characters, otherwise no
        if(specialCharacters) {
        // ensure at least one special character is included within password
        var specialCharInput = "!#$%()*+,-./:;<=>?@[\]^_`{|}~";
        } 
        else {
        // ensure no special characters are included in password
        var specialCharInput = ""; // specialCharInput has no value
        }
    
        // check specialCharacters value in console
        console.log(specialCharInput);
        
    //combine the user's selections into string with required components
    var passwordCombo = (letterInput + numInput + specialCharInput);
    
    //check passwordCombo value in console
    console.log(passwordCombo);
        
    // Write password to the #password input
      //continue adding characters from array until number required are strung together to form password   
      function generatePassword() {   
      // ask user how many characters they want in their password
      var password = '';
        for(var i = 0; i < newPasswordLength; i++ ) {
          password += passwordCombo.charAt(Math.floor(Math.random() * passwordCombo.length));
        }
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
      }
      
      generatePassword(newPasswordLength);  
         
    } 
  }
};
writePassword();  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
