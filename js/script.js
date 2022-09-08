// Created DOM for elements
const screen = document.querySelector('.inner-screen .main'); // Grabs the div with a class of inner-screen and main
const screenLog = document.querySelector('.screenlog'); // Prints previous equation
const clear = document.querySelector('.clear');
const deleteNum = document.querySelector('.delete');
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
const decimal = document.querySelector('.decimal');
const addOperator = document.querySelector('.plus');
const subtractOperator = document.querySelector('.subtract');
const multiplyOperator = document.querySelector('.multiply');
const divideOperator = document.querySelector('.divide');
const equalOperator = document.querySelector('.equal');
const buttons = document.querySelectorAll('.button');

// Variables for the display function /**Delete button?*/
let displayMemory = [];
let numberString = "";
let operatorStorage = "";
let tempOperator = "";
let screenStorage = "";

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
    return numberOne / numberTwo;
}

// Created a switch function which then calls one of the above functions on the numbers.
// This is used to make the numbers do an equation
function operate(operator, numberOne, numberTwo) {
    switch (operator) {
        case "add":
            result = add(numberOne, numberTwo);
            displayOutput(result); // Shows result on the screen
            return result; 
        case "subtract":
            result = subtract(numberOne, numberTwo);                              //* DO WE NEED BREAKS?
            displayOutput(result); 
            return result;
        case "multiply":
            result = multiply(numberOne, numberTwo);
            displayOutput(result);
            return result;            
        case "divide":
            result = divide(numberOne, numberTwo);
            displayOutput(result);
            return result;
        default:
            return 0;
    }
}

// Created the functions that populate the display when the numbers are clicked
// Outputs display numbers to the screen
function displayOutput(input) {    
    screen.textContent = input; // Variable made, inputs text
}
 
function displayStorage(input) {
    if (numberString == "" && input == 0) {
        alert("don't start a number string with zero");
    } else {
        numberString = numberString + input;
        displayOutput(numberString);
    }
};

function operatorDisplayStorage(input) {
    operatorStorage = input;
}
 
// Breaks down string to numbers and stores in an array
function displayTemp2Memory() {
    let temp = parseFloat(numberString);
    displayMemory.push(temp); // Pushes temp into an array
 
    screenStorage = screenStorage + numberString + " " + operatorStorage + " "; // stores old numberString into screenStorage
    screenLog.textContent = screenStorage; // display running log;
    numberString = ""; // empties numberString
};

// Created statements for the buttons
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
        screen.textContent = 0;
    } else if (numberString.length > 1) {
        numberString = numberString.slice(0, numberString.length-1);
        displayOutput(numberString);
    }
});
 
addOperator.addEventListener('click', function() {
    if(numberString == "") {
        console.log("empty numString");
    } else {
        operatorDisplayStorage("+")
        displayTemp2Memory(); // Push numberString into displayMemory array.
 
        if(displayMemory.length === 2) {
            let multiResult = operate(tempOperator, displayMemory[0], displayMemory[1]);
            displayMemory = [];
            displayMemory[0] = multiResult;   
        }
        tempOperator = "add";
    };
});

subtractOperator.addEventListener('click', function(){
    if(numberString == "") {
        console.log("empty numString");
    } else {    
        operatorDisplayStorage("-")
        displayTemp2Memory();
        if (displayMemory.length === 2) {
            let multiResult = operate(tempOperator, displayMemory[0], displayMemory[1]);
            displayMemory = []; 
            displayMemory[0] = multiResult;
        };     
        tempOperator = "subtract";
    };   
});
 
multiplyOperator.addEventListener('click', function(){
    if(numberString == "") {
        console.log("empty numString");
    } else {
        operatorDisplayStorage("*")
        displayTemp2Memory();
        if (displayMemory.length === 2) {
            let multiResult = operate(tempOperator, displayMemory[0], displayMemory[1]);
            displayMemory = []; 
            displayMemory[0] = multiResult;
        };     
        tempOperator = "multiply";
    };   
});
 
divideOperator.addEventListener('click', function(){
    if(numberString == "") {
        console.log("empty numString");
    } else {
        operatorDisplayStorage("/")
        displayTemp2Memory();
        if(displayMemory.length === 2 && displayMemory[1] === 0) {
            screen.textContent = 0;
            screenLog.textContent = "You cannot divide by 0. Press CLEAR.";
            screenStorage = "";
        } else if (displayMemory.length === 2) {
            let multiResult = operate(tempOperator, displayMemory[0], displayMemory[1]);
            displayMemory = []; 
            displayMemory[0] = multiResult;
        };     
        tempOperator = "divide";
    };   
});
 
equalOperator.addEventListener('click', function() {    
        if(displayMemory.length === 0 || displayMemory.length === 1 && numberString == "") {
            console.log("You need either a full equation or a second term in the expression before equaling. Press CLEAR.")
        } else {
            operatorDisplayStorage("=");    
            displayTemp2Memory(); // Push 2nd temp strings into displayMemory array.    
            let result = operate(tempOperator, displayMemory[0], displayMemory[1]);
            displayMemory = []; // clear memory
            numberString = ""; // clear temp
            tempOperator = ""; // clear operator
            screenStorage = ""; // clear screen log
        };         
});

decimal.addEventListener('click', function() {
    if(!numberString.includes(".")) {
        displayStorage(".");
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