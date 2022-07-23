const display = document.querySelector(".display");
let displayText = "";
// display.textContent = displayText;

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

function addNumber(num) {
    if (displayText.length < 15) {
        displayText += num;
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