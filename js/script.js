// Created DOM for elements

// This is how the variables connect to the HTML element.

const screen = document.querySelector('.inner-screen .main'); // Grabs the div with a class of inner-screen and main
const screenLog = document.querySelector('.screenlog'); // Prints previous equation

const clear = document.querySelector('.clear');
const deleteNum = document.querySelector('.delete');

const addOperator = document.querySelector('.plus');
const subtractOperator = document.querySelector('.subtract');
const multiplyOperator = document.querySelector('.multiply');
const divideOperator = document.querySelector('.divide');

const equalOperator = document.querySelector('.equal');
const decimal = document.querySelector('.decimal');

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');

// Variables for the display function

let displayMemory = [];
let numberString = " ";
let operatorStorage = " ";
let tempOperator = " ";
let screenStorage = " ";

// Functions for add, subtract, multiply and divide

function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
function subtract(numberOne, numberTwo) {
    return numberOne - numberTwo;
}
function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}
function divide(numberOne, numberTwo) {
    if (numberTwo === 0) { // This is the if else statement to alert when a user tries to divide something by 0
        alert("You can not divide this number by 0!");
        return
    } else {
        return numberOne / numberTwo;
    }
}

// Created a switch function which then calls one of the above functions on the numbers.

function operate(operator, numberOne, numberTwo) {
    switch (operator) {
        case "add":
            result = add(numberOne, numberTwo);
            displayOutput(result); // Shows result of the operation above
            return result; 
        case "subtract":
            result = subtract(numberOne, numberTwo);                          
            displayOutput(result); // Shows result of the operation above
            return result;
        case "multiply":
            result = multiply(numberOne, numberTwo);
            displayOutput(result); // Shows result of the operation above
            return result;            
        case "divide":
            result = divide(numberOne, numberTwo);
            displayOutput(result); // Shows result of the operation above
            return result;
        default:
            return 0;
    }
}

// Created the functions that populate the display when the numbers are clicked

// Updates the display from the operate function

function displayOutput(input) {    
    screen.textContent = input; // Calling displayOutput function (Takes an input and updates the display with the input)
}

// (Numbers at the bottom)
function displayStorage(input) { // When I click a number or decimal it appends the value to the current numberString and display it to the screen
    numberString = numberString + input;
    displayOutput(numberString);
};

// Updates operatorStorage with an input
function operatorDisplayStorage(input) {
    operatorStorage = input; 
}

// Because the display is text it needs to be converted into numbers for the operator function to work.
// Breaks down string to numbers and stores in an array (adds a number to the array)
function displayTemp2Memory() {
    let temp = parseFloat(numberString); // Turns the string into a number
    displayMemory.push(temp); // Pushes(adds) temp at the end of the array
 
    screenStorage = screenStorage + numberString + " " + operatorStorage + " "; // Stores old numberString into screenStorage
    screenLog.textContent = screenStorage; // Display running log;
    numberString = " "; // Empties numberString
};

// Created statements for the buttons

// Reset back to empty strings and arrays
clear.addEventListener('click', function() {
    displayMemory = [];
    numberString = "";
    screen.textContent = 0;
    screenLog.textContent = "0";
    screenStorage = "";
});
 
deleteNum.addEventListener('click', function() {
    if(numberString.length === 1) {
        displayTemp = "";
        screen.textContent = 0; // Reset string
    } else if (numberString.length > 1) {
        numberString = numberString.slice(0, numberString.length-1); // Resetting the string from the first character onwards except the last character
        displayOutput(numberString);
    }
});
 
addOperator.addEventListener('click', function() {
    if(numberString == " ") {
        console.log("empty numString"); // Checking if string is empty
    } else {
        operatorDisplayStorage("+") // inputing the operator to the string(screen)
        displayTemp2Memory(); // Push numberString into displayMemory array. 
 
        // Checks the display memory to see if it has two numbers
        if(displayMemory.length === 2) {
            let multiResult = operate(tempOperator, displayMemory[0], displayMemory[1]);
            displayMemory = [];
            displayMemory[0] = multiResult; // How to add multiple operands for example 1 + 3 + 6 etc...
        }
        tempOperator = "add";
    };
});

subtractOperator.addEventListener('click', function(){
    if(numberString == "") {
        console.log("empty numString");
    } else {    
        operatorDisplayStorage("-") // inputing the operator to the string(screen)
        displayTemp2Memory();

        // Checks the display memory to see if it has two numbers
        if (displayMemory.length === 2) {
            let multiResult = operate(tempOperator, displayMemory[0], displayMemory[1]);
            displayMemory = []; 
            displayMemory[0] = multiResult; // How to subtract multiple operands for example 1 + 3 + 6 etc...
        };     
        tempOperator = "subtract";
    };   
});
 
multiplyOperator.addEventListener('click', function(){
    if(numberString == "") {
        console.log("empty numString");
    } else {
        operatorDisplayStorage("*") // inputing the operator to the string(screen)
        displayTemp2Memory();

        // Checks the display memory to see if it has two numbers
        if (displayMemory.length === 2) {
            let multiResult = operate(tempOperator, displayMemory[0], displayMemory[1]);
            displayMemory = []; 
            displayMemory[0] = multiResult; // How to subtract multiple operands for example 1 + 3 + 6 etc...
        };     
        tempOperator = "multiply";
    };   
});
 
divideOperator.addEventListener('click', function(){
    if(numberString == "") {
        console.log("empty numString");
    } else {
        operatorDisplayStorage("/") // inputing the operator to the string(screen)
        displayTemp2Memory();
        if (displayMemory.length === 2) {
            let multiResult = operate(tempOperator, displayMemory[0], displayMemory[1]);
            displayMemory = []; 
            displayMemory[0] = multiResult;
        };     
        tempOperator = "divide";
    };   
});
 
equalOperator.addEventListener('click', function() {    
    operatorDisplayStorage("=");  // inputing the operator to the string(screen)   
    displayTemp2Memory(); // Push 2nd temp strings into displayMemory array.    
    let result = operate(tempOperator, displayMemory[0], displayMemory[1]);
    displayMemory = []; // Clear memory
    numberString = " "; // Clear temp
    tempOperator = " "; // Clear operator
    screenStorage = " "; // Clear screen log
    // Without this if equals is pressed for a second time instead of NaN it is empty
});

decimal.addEventListener('click', function() {
    if(!numberString.includes(".")) { // Stops the decimal being repeated in the numberString
        displayStorage("."); // Displays the decimal on the screen
    };    
});

// Add event listeners to the buttons
one.addEventListener('click', function() {
    displayStorage(1);
});
 
two.addEventListener('click', function() {
    displayStorage(2);
});
 
three.addEventListener('click', function() {
    displayStorage(3);
});
 
four.addEventListener('click', function() {
    displayStorage(4);
});
 
five.addEventListener('click', function() {
    displayStorage(5);
});
 
six.addEventListener('click', function() {
    displayStorage(6);
});
 
seven.addEventListener('click', function() {
    displayStorage(7);
});
 
eight.addEventListener('click', function() {
    displayStorage(8);
});
 
nine.addEventListener('click', function() {
    displayStorage(9);
});
 
zero.addEventListener('click', function() {
    displayStorage(0);
});