const display = document.querySelector(".display");
let displayText = "";

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

/**
 * Adds a number to the display
 * @param {string} num The number to add to the display
 */
function addNumber(num) {
    // Cap the length at 15
    if (displayText.length < 15) {
        // If display is 0, erase the display
        if (displayText === "0") {
            displayText = num;
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
})

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