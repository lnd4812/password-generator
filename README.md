# Password Generator Challenge

The purpose of this project is to use Javascript functions along with concepts learned in Module 3 to generate a password using a modal created from and styled within the starter code.  

![modal developed from starter code](https://lnd4812/github.io/../../../assets/images/password-generator-sample.png).

An event handler has also been included in the starter code as a means of initiating the password generation function from a button embedded in the modal.

The user is asked to choose the number of characters to be included in the password, ranging from 8 to 128 and is then asked a series of questions to determine whether the new password will include some combination of Upper and lower case letters, numbers and/or special characters.  A "for" loop in the function will iterate through a concatenation of the selected input variables until the desired length has been satisfied and output the result to a text field in the modal.

If the function is executed successfully, a password of the required length and character components will display in the text field of the modal as in the following:  

![random generated password displayed](https://lnd4812/github.io/../../../assets/images/password-output-display.png)

## Requirements

No special requirements beyond meeting the acceptance criteria of the challenge.

## Built With

HTML
CSS
Javascript

## Deployment

This site has been published via [Github Pages](https://lnd4812.github.io/password-generator/).
The repository has been stored on [Github](https://github.com/lnd4812/password-generator.git).

## Design

The main design uses the modal created from the Starter Code that enables the user to go go through a series of steps that will determine the length and content of the new password. This is accomplished using a series of window object commands such as window.prompt for the user to indicate the number of characters in the new password and a series of window.confirm commands to determine the component types of the password.

The starter code includes coding to generate the "Generate Password" button and event handler. To then begin the process to generate a password:

1. Using an If/Else statement, the user is first asked if they wish to continue or end the process using window.confirm that will terminate the function if the user clicks Cancel. (*note: tried to delay window.confirm until generate password button clicked, but not yet versed enough yet with event.listener to executed it properly.*)

2. Using an If/Else statement, the user is asked to choose between 8 and 128 characters for the length of the password; if a number outide of this range is chosen, the user is advised to start again and is reminded of the number range options.

3. Once the user has entered an acceptable number, they are taken through a series of questions to determine composition of password using If/Else statements regarding Upper/lower case, numeric and/or (OWASP Foundation) special characters. For some reason, my coding seems to be working in reverse to how I had intended based on output on console.log in image following, but was advised it still appeared to be working as intended during on a consultation with "AskBCS" on Slack.

    ![console.log display from selection criteria](https://github.com/lnd4812/io/../../../../assets/images/console.log-output-for-password-component-options.jpg)

4. Responses for all three criteria are then concatenated into a single string and applied to the function that will subsequently generate the password using the Math.random function applied to the length of the string of characters randomly concatenated through through the length of the newPassword variable and output into the text field.

5. User is asked to press browser when finished to clear password from display (had tried to reset but was not able to - possibly because field is "readonly"?)

## License

An MIT [License] has been included with this project.

## Credits and external Resources

- A full description of Challenge 3's criteria is outlined here: [Module 3 Challenge Project Page](https://courses.bootcampspot.com/courses/1181/assignments/23403?module_item_id=459947).
- Additional assistance was provided by the TA's during Office Hours and online via AskBCS.
- various internet websites including [MDN Docs](https://developer.mozilla.org), [W3Schools](https://www.w3schools.com) and [Stack Overflow](https://stackoverflow.com).

## Task list

[ ] Corrections for issues where acceptance criteria not met (window.confirm pop-up before button click) 

## Contribution

Laurel David (github.com/lnd4812)

## Contact Information

For any questions, comments and/or issues, please contact me at email: laureldavid64@gmail.com.