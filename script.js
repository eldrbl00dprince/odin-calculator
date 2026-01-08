const screen = document.querySelector('.screen')

// Buttons
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const controls = document.querySelectorAll('.control');

let numbers = ['3','8']

function display(number) {
    screen.querySelector('p').textContent = number;
}

digits.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const digit = e.target.innerText;
        numbers[1] += digit;
        display(numbers[1]);
    });
});

operators.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const operator = e.target.dataset.operator;
        operate(operator);
    });
});

// Operate

function operate(operator) {
    switch (operator) {
        case 'add': return display('homo');
        case 'subtract': return display('hetero');
        case 'multiply': return display('trans');
        case 'divide': return display('queer');
    }
}
/*

includes('.') to prevent multiple decimal points

*/