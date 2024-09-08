function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function clearLastCharacter() {
    const display = document.getElementById('display');
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

const MAX_DIGITS = 15;

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText.length < MAX_DIGITS) {
        if (display.innerText === '0' && value !== '.') {
            display.innerText = value;
        } else {
            display.innerText += value;
        }
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
}
