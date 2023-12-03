# GeneratePassword
This project is for generating password with the requirements given below. 
The GitHub url for the project is: "https://github.com/BaharMahmud/GeneratePassword"
Clone the project from gitHub account to your local using the SSH url. The index.html contains the html code for the web and style.css which is the file for styling the web page.Also, script.js to add interraction and to creat more dynamic content.
The deployed URL for the project is: " https://baharmahmud.github.io/GeneratePassword/".
The purpose of the challenge in the project to mmeet the user story and acceptance criterias given below.

The "Generate Passsword" button is clicked to get criterias for creating the desired password. The questions asked are for the password to be strong and  not breakable by others.
Criterias asked in the page are:
1.Will this contain Lowercase letters?
2.Will this contain UpperCase letters?
3.Will this contain numbers?
4.Will this contain special characters?

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```