

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var writePassword = function() {//The click event
  // ask user to answer a series of questions to provide the necessary components of the password; if user hits cancel, program does not proceed
  var proceed = window.confirm("Welcome to your Password Generator LND2022.  If you would like to create a new password, please click OK, otherwise please click on the CANCEL button");
  
  // if used pressed OK, proceed through following steps
  if(proceed) 

    // ask user how many characters they want in their password
    var newPasswordLength = window.prompt("Please select a number from 8 to 128 to set the length of your new password");
      
    console.log(newPasswordLength);
    // ask user if they'd like to include capital letters in the new password
      var includeUpperCase = window.confirm("Would you like your password to include Capital letters?");
        //If yes - include command to include, else all small letters - validate input and select at least one letter
        if(includeUpperCase) {
        // if yes, function to include at least one Upper Case letter, else function to exclude - in either case, validate input & select at least one number
        var letterInput = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"];  
        } 
        else {
        // ensure any letters added to the password are lower case only
        } var letterInput = ["abcdefghijklmnopqrstuvwxyz"];  
        
      // ask user if they'd like to include any numbers in the new password
      var includeNumber = window.confirm("Would you like your password to include numbers?");
        // If yes, create var with numbers
        if(includeNumber) {
          // if yes, function to include at least one Upper Case letter, else function to exclude - in either case, validate input & select at least one number
          var numInput = ["0123456789"];  
          } 
          else {
          // ensure any letters added to the password are lower case only
          } var numInput = "";  

      // ask user if they'd like to include any special characters in the new password
      var includeSpecial = window.confirm("Would you like your password to include special characters?");
        // if yes, include special characters, else do not - in either case, validate input and select at least one special character
        if(includeSpecial) {
        // ensure at least one special character is included within password
        var specialCharInput = ["~!@#$%^&*"];
        } 
        else {
        // ensure no special characters are included in password
        var specialCharInput = ""; // specialCharInput has no value
        } 
      
    //create an array to include selected options from above steps
    var passwordCombo = (letterInput + numInput + specialCharInput);
    console.log(passwordCombo);
    
    // Write password to the #password input
       
      //concatenate values from array until number of required characters are strung together to form password 
        var password = "";
        for(var i = 0; i < newPasswordLength + 1; i++ ) {
          var generatePassword = Math.floor(Math.random() * newPasswordLength);
          password = passwordCombo[generatePassword];
        }
        return password;
}
        var passwordText = document.querySelector("#password");
        passwordText.value = password;

 writePassword();  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
