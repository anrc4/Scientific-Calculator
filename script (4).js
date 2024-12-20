// script.js

const resultDisplay = document.getElementById('result');

// Append value to the display
function append(value) {
    resultDisplay.value += value;
}

// Clear the display
function clearDisplay() {
    resultDisplay.value = '';
}

// Backspace function
function backspace() {
    resultDisplay.value = resultDisplay.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        resultDisplay.value = eval(resultDisplay.value);
    } catch (error) {
        resultDisplay.value = 'Error';
    }
}

// Square root
function squareRoot() {
    try {
        resultDisplay.value = Math.sqrt(eval(resultDisplay.value));
    } catch (error) {
        resultDisplay.value = 'Error';
    }
}

// Power function
function power() {
    try {
        const base = prompt('Enter base:');
        const exponent = prompt('Enter exponent:');
        resultDisplay.value = Math.pow(base, exponent);
    } catch (error) {
        resultDisplay.value = 'Error';
    }
}

// Logarithm
function logarithm() {
    try {
        resultDisplay.value = Math.log10(eval(resultDisplay.value));
    } catch (error) {
        resultDisplay.value = 'Error';
    }
}

// Trigonometric functions
function trig(func) {
    try {
        resultDisplay.value = Math[func](eval(resultDisplay.value) * Math.PI / 180).toFixed(5);
    } catch (error) {
        resultDisplay.value = 'Error';
    }
}

// Factorial function
function factorial() {
    try {
        let num = parseInt(resultDisplay.value);
        if (num < 0) {
            resultDisplay.value = 'Error';
            return;
        }
        let fact = 1;
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        resultDisplay.value = fact;
    } catch (error) {
        resultDisplay.value = 'Error';
    }
}
