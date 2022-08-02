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
const decimal = document.querySelector(".decimal");

const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
let firstNumber = 0;
let operator = "";
let secondNumber = 0;
let clearDisplay = false; // True when an operator is clicked
let equalsClicked = false; // True when equals is clicked so that the user can't click equals multiple times
let hasDecimal = false;

const equals = document.querySelector(".equals");

/**
 * Adds a number to the display
 * @param {string} num The number to add to the display
 */
function addNumber(num) {
    // Cap the length at 15
    if (displayText.length < DISPLAY_LIMIT || clearDisplay === true) {
        // If display is 0, erase the display
        if (displayText === "0" || clearDisplay === true) {
            displayText = num;
            clearDisplay = false;
            hasDecimal = false;
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

decimal.addEventListener("click", () => {
    if (!hasDecimal) {
        addNumber(".");
        hasDecimal = true;
    }
});

// Set display to "0" when clear is clicked
clear.addEventListener("click", () => {
    displayText = "0";
    display.textContent = displayText;
    hasDecimal = false;
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
    if (!equalsClicked && operator !== "") {
        secondNumber = Number(displayText);
        let result = operate(operator, firstNumber, secondNumber);
        let numWholeNumbers = Math.round(result).toString().length;
        let roundedResult = Math.round(result * (10 ** (DISPLAY_LIMIT - numWholeNumbers))) / (10 ** (DISPLAY_LIMIT - numWholeNumbers));

        // Check if display limit has been exceeded
        if (roundedResult.toString().length > DISPLAY_LIMIT) {
            displayText = "999999999999999";
        } else {
            displayText = roundedResult + "";
        }

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