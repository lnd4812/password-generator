// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


var writePassword = function() {
  
  //ask user to answer a series of questions to provide the necessary components of the password; if user hits cancel, program does not proceed
  var proceed = window.confirm("Welcome to your Secure Password Generator.If you would like to create a new password, please click OK, otherwise please click on the CANCEL button");
  
  // if user clicks Cancel, exit process
  if(proceed === false) {
    window.alert("Thank you. Goodbye");
    return;
  }   
  else  {
      //start process by asking user how many characters the password is to be
      var newPasswordLength = window.prompt("Please select a number from 8 to 128 to set the length of your new password");
      // confirm number input is within required range
      if(newPasswordLength < 8 || newPasswordLength > 128) {
        window.alert("You have entered an invalid number.  Please refresh the browser and start again, choosing a number between 8 and 128.");
        return;
      }
      else { // User to now enter preferences based on the following 3 components
      // Letter components 
      // ask user if they'd like to include capital letters in the new password
      var includeUpperCase = window.confirm("Would you like your password to include Capital letters?");
        //If no - exclude, else include
        if(includeUpperCase === false) {
          // if no, ensure any letters added to the password are lower case only
          var letterInput = "abcdefghijklmnopqrstuvwxyz"; 
        } 
        else {
          // add Upper case letters to string
          var letterInput = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
        // check IncludeUpperCase value in console
        console.log(letterInput);
        } 
      //Numeric Components    
      // ask user if they'd like to include any numberic values in the new password
      var includeNum = window.confirm("Would you like your password to include numbers?");
        if(includeNum === false) {
        // if no, return empty string
        var numInput = "";
        } 
        else {
          // string includes numbers from 0-9
         var numInput = "0123456789";
        // check IncludeNum value in console
        console.log(numInput);
        }
      // Special Character Components 
      // ask user if they'd like to include any special characters in the new password
      var includeSpecial = window.confirm("Would you like your password to include special characters?");
        if(includeSpecial === false) {
        // if no, return empty string
        var specialCharInput = "";
        } 
        else {
        // string includes special characters
        var specialCharInput = "!#$%()*+,-./:;<=>?@[]^_`{|}~";
        // check IncludeNum value in console
        console.log(specialCharInput);
        } 
    
      //combine the user's selections into string with required components
      var passwordCombo = (letterInput + numInput + specialCharInput);
      //check passwordCombo value in console
      console.log(passwordCombo);
        
      // advise user to refresh browser when done to clear password from display
      window.alert("Thank you for your information.  Your new password will follow. Please refresh the browser when done to clear your password.");

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
    }// end of password generating function 
  } // end of else statement in line 13 to start process
}; 
writePassword(); 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
