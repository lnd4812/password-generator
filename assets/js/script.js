// Assignment code here

// user clicks on "generate password button"
document.getElementById("").addEventListener("click", function(){

});

// ask user if they'd like to generate a new password
window.alert("Welcome to your Password Generator LND2022.  Please answer the following questions in order to generate your new secure password");

// ask user how many characters they want their password to comprise
window.prompt("Please select a number from 8 to 128 to set the length of your new password");

// when user enters the number, that number is recorded somewhere 


// ask user if they'd like to include capital letters in the new password
window.confirm("Would you like your password to include Capital letters?");
  //If yes - include command to include, else all small letters - validate input and select at least one letter
  
// ask user if they'd like to include any numbers in the new password
window.confirm("Would you like your password to include numbers?");
// if yes, function to include numbers, else function to exclude - in either case, validate innput & select at least one number


// ask user if they'd like to include any special characters in the new password
window.confirm("Would you like your password to include special characters?");

// if yes, include special characters, else do not - in either case, validate input and select at least one special character


// ask user to click the button again to generate their new password
window.alert("Thank you for confirming your choices.  You may now click the button to generate your new password.");

// add event listener to run function that generates new and random password

// display new password
window.alert("Your Secure Password " + password );




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




//document.getElementById("button1").addEventListener("click", function(){

  //document.getElementById("box").style.height = "300px";
  //document.getElementById("box").style.width = "300px";

//});

//document.getElementById("button2").addEventListener("click", function(){

  //document.getElementById("box").style.backgroundColor = "blue";

///});

//document.getElementById("button3").addEventListener("click", function(){

  //document.getElementById("box").style.opacity = "25%";
//});


//document.getElementById("button4").addEventListener("click", function(){

  //document.getElementById("box").style.borderRadius = "100%";
//});


//document.getElementById("button5").addEventListener("click", function(){

  //document.getElementById("box").style.borderStyle= "solid";
  //document.getElementById("box").style.borderWidth = "1px%";
  //document.getElementById("box").style.borderColor = "black";
//});

//document.getElementById("button6").addEventListener("click", function(){

     // document.getElementById("box").style.marginLeft = "100px";
//});


//document.getElementById("button7").addEventListener("click", function(){

  //document.getElementById("box").style.height = "150px";
  //document.getElementById("box").style.width = "150px";
  //document.getElementById("box").style.backgroundColor = "orange";
  //document.getElementById("box").style.opacity = "1";
  //document.getElementById("box").style.borderRadius = "0%";
  //document.getElementById("box").style.borderStyle = "none";
  //document.getElementById("box").style.margin = "25px";

//})//