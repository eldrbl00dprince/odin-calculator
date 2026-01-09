const screen = document.querySelector('.screen')

// Buttons
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');

const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');

let num1 = '';
let num2 = '';
let operator = '';
let didEqualOp = false;

// maybe make another variable to save last result?

function display(str) {
    screen.querySelector('p').textContent = str;
}

digits.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const digit = e.target.innerText;
        if (didEqualOp == true) {
            // start with num 1 if equals was pressed
            num1 = '';
            num1 += digit;
            operator = ''; // reset operator
            didEqualOp = false;
        }
        else if (operator == '') {
            // append to num1 if no operator was set
            num1 += digit;
            display(num1);
            console.log('first: '+num1);
        }
        else {
            // append to num2
            num2 += digit;
            display(num2);
            console.log('second: '+num2);
        };
    });
});

// Operator

operators.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // if an operator was set already
        // and num2 has been set
        // evaluate previous
        if (operator != '' && num2 != '') { evaluate() };
        // initialize operator
        operator = e.target.dataset.operator;
        console.log(operator);
        if (didEqualOp) {didEqualOp = false};
    });
});

// Equals

equalButton.addEventListener('click', (e) => {
    if (!didEqualOp) {
    evaluate()
    didEqualOp = true
    };
})

// Clear

clearButton.addEventListener('click', (e) => {
        num1 = '';
        num2 = '';
        operator = '';
        didEqualOp = false;
        display('cleared');
})

// Evaluate a pair of numbers

function operate(a, b, op) {
    // convert strings to numbers 
    a = parseInt(a);
    b = parseInt(b);
    switch (op) {
        case '+': return (a+b);
        case '-': return (a-b);
        case '*': return (a*b);
        case '/': return (a/b);
    }
}

function evaluate() {
    let result = operate(num1, num2, operator);
    display(result);
    console.log('equals: '+result);
    // pass result to num1 and reset num2
    num1 = result;
    num2 ='';
}
/*

includes('.') to prevent multiple decimal points

*/