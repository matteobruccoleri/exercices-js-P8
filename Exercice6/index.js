const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clear = document.querySelector('.clear');
const calculate = document.querySelector('.calculate');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        let expression = display.value;
        if (expression.includes('/0')) {
            throw new Error("Division by zero is not allowed");
        }
        let result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = error.message;
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        appendToDisplay(button.textContent)
    })
});

clear.addEventListener('click', clearDisplay);
calculate.addEventListener('click', calculateResult);