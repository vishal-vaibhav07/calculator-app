// Function to append values to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Appends the value (e.g., '00') to the display
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to handle backspace
function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            if (value === 'C') {
                clearDisplay();
            } else if (value === '=') {
                calculateResult();
            } else {
                appendToDisplay(value);
            }
        });
    });
});