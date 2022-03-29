# Password Generator Challenge

The purpose of this project is to use Javascript functions along with concepts learned in Module 3 to generate a password using a dropdown prompt from the starter code.  

![modal developed from starter code](https://raw.githubusercontent.com/lnd4812/password-generator/main/assets/images/password-generator-sample.png).

An event handler has also been included in the starter code as a means of initiating the password generation function from a button embedded in the modal.

The user is asked to choose the number of characters to be included in the password, ranging from 8 to 128 and is then asked a series of questions to determine whether the new password will include some combination of Upper and lower case letters, numbers and/or special characters.  A "for" loop in the function will iterate through a concatenation of the selected input variables until the desired length has been satisfied and output the result to a text field in the modal.

If the function is executed successfully, a password of the required length and character components will display in the text field of the modal as in the following:  

![random generated password displayed](https://raw.githubusercontent.com/lnd4812/password-generator/main/assets/images/password-output-display.png)

## Requirements

No special requirements beyond meeting the acceptance criteria of the challenge.

## Built With

HTML
CSS
Javascript

## Deployment

This site has been published via [Github Pages](https://lnd4812.github.io/password-generator/).
The repository has been stored on [Github](https://github.com/lnd4812/password-generator.git).

## Design and functionality

The main design uses the modal created from the Starter Code that enables the user to go go through a series of steps that will determine the length and content of the new password. This is accomplished using a series of window object commands such as window.prompt for the user to indicate the number of characters in the new password and a series of window.confirm commands to determine the component types of the password.

The starter code includes coding to generate the "Generate Password" button and event handler. To then begin the process to generate a password, a user is asked to first click the Generate Password button.  Then:

1. Using an If/Else statement, the user is asked if they wish to continue or end the process using window.confirm that will terminate the function if the user clicks Cancel.

2. Assuming the user wishes to continue, using an If/Else statement, the user is then asked to choose between 8 and 128 characters for the length of the password; if a number outide of this range is chosen, the user is advised to start again and is reminded of the number range options.

3. Once the user has entered an acceptable number, they are taken through a series of questions via a Switch statement to determine composition of password using If/Else statements regarding Upper/lower case, numeric and/or (OWASP Foundation) special characters.
    ![console.log display from selection criteria](https://raw.githubusercontent.com/lnd4812/password-generator/main/assets/images/console.log-output-for-password-component-options.jpg)

4. Responses for all three criteria are then concatenated into a single string which is first checked to ensure that the string contains actual characters using a ".length < 0 comparison.  If there is nothing in the string, the function stops and the user is asked to start again.

5. If the string is valid, it is used within the function that will subsequently generate the password using the Math.random function applied to the length of the string of characters randomly concatenated through through the length of the newPassword variable and output into the text field.

6. User is asked to refresh browser when finished to clear password from display for security purposes (and I wasn't able to reset the field otherwise).

## License

An MIT [License] has been included with this project.

## Credits and external Resources

- A full description of Challenge 3's criteria is outlined here: [Module 3 Challenge Project Page](https://courses.bootcampspot.com/courses/1181/assignments/23403?module_item_id=459947).
- Additional assistance was provided by the TA's during Office Hours, online via AskBCS and feedback from on first submission.
- various internet websites including [MDN Docs](https://developer.mozilla.org), [W3Schools](https://www.w3schools.com) and [Stack Overflow](https://stackoverflow.com).

## Task list

[ ] Corrections for any ongoing issues where acceptance criteria not met.

## Contribution

Laurel David (github.com/lnd4812)

## Contact Information

For any questions, comments and/or issues, please contact me at email: laureldavid64@gmail.com.
