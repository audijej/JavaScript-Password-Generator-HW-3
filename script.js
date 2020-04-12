
//let ammountCharacters = prompt("How many characters would you like your password to contain?");
//let minLength = 8;
//let maxLength = 128;
//let lowerCase = confirm("Would you like lowercase letters?");
//let upperCase = confirm("Would you like uppercase letters?");
//let numberCase = confirm("Would you like numbers?");
//let symbolCase = confirm("Would you like symbols?");


//The application first starts with this alert.
alert("Let's create a password. Please click Generate Password button");

//This is a the list of arrays and variables used throughout the application.

let completeList = "0123456789!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let numberCaseArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let symbolCaseArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

let combineArray = lowerCaseArray.concat(upperCaseArray).concat(symbolCaseArray).concat(numberCaseArray);

let combinedArr = []

let amountCharacters;

//This is the first function to call gather the users input for parameters of their password.

function buttonPassword() {

    amountCharacters = prompt("How many characters would you like your password to be?");
    while (isNaN(amountCharacters) || amountCharacters < 8 || amountCharacters > 128) amountCharacters = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
        //for ( var i = minLength; i > maxLength; i++);
    

    let lowerCase = confirm("Would you like to use lowercase letters?");
    let upperCase = confirm("Would you like to use uppercase letters?");
    let numberCase = confirm("Would you like to use numbers?");
    let symbolCase = confirm("Would you like to use special characters?");



    while (!lowerCase && !upperCase && !numberCase && !symbolCase) {
        alert("You must select at least one character type!");
        lowerCase = confirm("Would you like to use lowercase letters?");
        upperCase = confirm("Would you like to use uppercase letters?");
        numberCase = confirm("Would you like to use numbers?");
        symbolCase = confirm("Would you like to use special characters?");
    }


    if (lowerCase === true) {
        for (let i = 0; i < lowerCaseArray.length; i++) {
            const lowerRandom = lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)];
            combinedArr.push(lowerRandom);
        }
    }
    if (upperCase === true) {
        for (let i = 0; i < upperCaseArray.length; i++) {
            const upperRandom = upperCaseArray[Math.floor(Math.random() * upperCaseArray.length)];
            combinedArr.push(upperRandom);
        }
    }

    if (numberCase === true) {
        for (let i = 0; i < numberCaseArray.length; i++) {
            const numRandom = numberCaseArray[Math.floor(Math.random() * numberCaseArray.length)];
            combinedArr.push(numRandom);
        }
    }

    if (symbolCase === true) {
        for (let i = 0; i < symbolCaseArray.length; i++) {
            const specialRandom = symbolCaseArray[Math.floor(Math.random() * symbolCaseArray.length)];
            combinedArr.push(specialRandom);
        }
    }
    
}

//The DOM elements to capture that reacts to the users actions on the HTML file.
//let passwordButton = document.querySelector("password");
   
let generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", buttonPassword);    
generateBtn.addEventListener("click", writePassword);    


// This is the function that utilizes the users parameters and prints it to the text box in the HTML file.
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    let randomPassword = "";

    for (var i = 0; i < amountCharacters; i++) {
        randomPassword += combinedArr[Math.floor(Math.random() * combinedArr.length)];
    }
    return randomPassword;

}

}

