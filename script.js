const screen = document.querySelector('.screen')

// Buttons
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const controls = document.querySelectorAll('.control');

let numbers = ['',''];
let operator = '';

function display(number) {
    screen.querySelector('p').textContent = number;
}

digits.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const digit = e.target.innerText;
        console.log(digit);
        numbers[1] += digit;
        display(numbers[1]);
    });
});

operators.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (numbers[0] != '') {
            //intermediary result
            operate(operator);
            display(numbers[1]);
        }
        numbers.reverse();
        operator = e.target.dataset.operator;
    });
});

// Operate

function operate(op) {
    let result;
    switch (op) {
        case 'add': 
        console.log('add operation started');
        result = parseInt(numbers[0])+parseInt(numbers[1]);
        break;
        case 'subtract': 
        console.log('subtract operation started');
        result = parseInt(numbers[0])-parseInt(numbers[1]);
        break;
        case 'multiply': 
        console.log('multiply operation started');
        result = parseInt(numbers[0])*parseInt(numbers[1]);
        break;
        case 'divide':
        console.log('divide operation started');
        result = parseInt(numbers[0])/parseInt(numbers[1]);
        break;
    }
    result.toString()
    // insert result number
    numbers = ['', result];
}
/*

includes('.') to prevent multiple decimal points

*/