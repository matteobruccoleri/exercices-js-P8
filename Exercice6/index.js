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
        let result = eval(document.getElementById('display').value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        appendToDisplay(button.textContent)
    })
});

clear.addEventListener('click', clearDisplay);
calculate.addEventListener('click', calculateResult);