// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var writePassword = function() {
  
//ask user to answer a series of questions to provide the necessary components of the password; if user hits cancel, program does not proceed
var proceed = window.confirm("If you would like to create a new password, please click OK, otherwise please click on the CANCEL button");
  
  // if user clicks Cancel, exit process
  if(proceed === false) {
    window.alert("Thank you. Goodbye");
    return;
  }   
  else  {
      //start process by asking user how many characters the password is to be
      var newPasswordLength = parseInt(window.prompt("Please select a number from 8 to 128 to set the length of your new password"));
      // confirm number input is within required range
      if(newPasswordLength < 8 || newPasswordLength > 128) {
        window.alert("You have entered an invalid number.  Please refresh the browser and start again, choosing a number between 8 and 128.");
        return;
      }
      else { 
        // ask user to confirm choices for password components
        window.alert("Please choose at least one of the following options to create your password");
 
        // Letter options
        var includeUpperCase = window.prompt("Would you like to your password to include UPPERCASE, LOWERCASE or BOTH?  For no letter components, please click 'cancel'.");
        
        // use switch to carry out action
        switch (includeUpperCase) {
          
          case "uppercase": 
          case "UPPERCASE":
          // password will include only uppercase
          letterInput = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
          //      
          case "lowercase": 
          case "LOWERCASE":
          // password will include only lowercase
          letterInput ="abcdefghijklmnopqrstuvwxyz";
          break;
          //
          case "both":  
          case "BOTH":
          // password will include both upper- and lowercase
          letterInput = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
          break;
          //
          default:
          // user does not want any letters in password  
          letterInput = "";
          break;   
        }  
                
        // Number options
        var includeNumber = window.prompt("Would you like to your password to INCLUDE numbers?");
         
        // use switch to carry out action
        switch (includeNumber) {
          case "include": 
          case "INCLUDE":
          // password will include numbers
          numInput= "0123456789";
          break;
          //      
          default: 
          // user does not want numbers in password 
          numInput = "";
          break;   
        }  
        
        // Special Character options
        var includeSpecial = window.prompt("Would you like SPECIAL characters in your password?");
         
        // use switch to carry out action
        switch (includeSpecial) {
          case "special":
          case "SPECIAL":
                       
          specCharInput= "!#$%()*+,-./:;<=>?@[]^_`{|}~";
          break;

          // user does not want special characters in password
          default:
          specCharInput = "";
          break; 
        }  
    //combine the user's selections into string with required components
    var passwordCombo = (letterInput + numInput + specCharInput);
         
    // if user somehow chose no options
    if (passwordCombo.length === 0 ) {
    window.alert("You have not entered a valid option. Please return to the beginning and start again.")
    return;
    }  
    else {
      window.alert("Thank you for your information.  Your new password will follow. Please refresh the browser when done to clear your password.");

      // Write password to the #password input - continue adding characters from passwordCombo until number required are strung together to form password   
      function generatePassword() {   
      var password = '';
      for(var i = 0; i < newPasswordLength; i++ ) {
          password += passwordCombo.charAt(Math.floor(Math.random() * passwordCombo.length));
        }
        var passwordText = document.querySelector("#password");
        passwordText.value = password; 
      }
      generatePassword(newPasswordLength);

      } // end of password generating function 
    } // end of if/else statement validating at least one component option chosen
  } // end of else statement validating value entered for # of characters
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

