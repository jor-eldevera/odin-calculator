const display = document.querySelector(".display");
let displayText = "";
const DISPLAY_LIMIT = 15;

const clear = document.querySelector(".clear");

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");

const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
let firstNumber = 0;
let operator = "";
let secondNumber = 0;
let clearDisplay = false; // True when an operator is clicked
let equalsClicked = false; // True when equals is clicked so that the user can't click equals multiple times

const equals = document.querySelector(".equals");

/**
 * Adds a number to the display
 * @param {string} num The number to add to the display
 */
function addNumber(num) {
    // Cap the length at 15
    if (displayText.length < DISPLAY_LIMIT) {
        // If display is 0, erase the display
        if (displayText === "0" || clearDisplay === true) {
            displayText = num;
            clearDisplay = false;
        } else {
            displayText += num;
        }
        display.textContent = displayText;
    }
}

one.addEventListener("click", () => {
    addNumber("1");
});

two.addEventListener("click", () => {
    addNumber("2");
});

three.addEventListener("click", () => {
    addNumber("3");
});

four.addEventListener("click", () => {
    addNumber("4");
});

five.addEventListener("click", () => {
    addNumber("5");
});

six.addEventListener("click", () => {
    addNumber("6");
});

seven.addEventListener("click", () => {
    addNumber("7");
});

eight.addEventListener("click", () => {
    addNumber("8");
});

nine.addEventListener("click", () => {
    addNumber("9");
});

zero.addEventListener("click", () => {
    addNumber("0");
});

// Set display to "0" when clear is clicked
clear.addEventListener("click", () => {
    displayText = "0";
    display.textContent = displayText;
});

addBtn.addEventListener("click", () => {
    firstNumber = Number(displayText);
    operator = "+";
    clearDisplay = true;
    equalsClicked = false;
});

subtractBtn.addEventListener("click", () => {
    firstNumber = Number(displayText);
    operator = "-";
    clearDisplay = true;
    equalsClicked = false;
});

multiplyBtn.addEventListener("click", () => {
    firstNumber = Number(displayText);
    operator = "*";
    clearDisplay = true;
    equalsClicked = false;
});

divideBtn.addEventListener("click", () => {
    firstNumber = Number(displayText);
    operator = "/";
    clearDisplay = true;
    equalsClicked = false;
});

equals.addEventListener("click", () => {
    if (!equalsClicked) {
        secondNumber = Number(displayText);
        let result = operate(operator, firstNumber, secondNumber);
        
        displayText = result + "";
        display.textContent = displayText;
    
        equalsClicked = true;
        clearDisplay = true;
    
        // console.log("FirstNumber = " + firstNumber + ", Operator = " + operator + ", SecondNumber = " + secondNumber);
    }
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
        default:
            break;
    }
}