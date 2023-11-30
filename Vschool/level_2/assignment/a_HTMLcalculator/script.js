/* The Html Calculator


*/


//Button Values
/* 

when button is pressed 

button value is += to the screen by using the updateScreen();

*/
const zeroBtn = document.getElementById("zero")
const oneBtn = document.getElementById("one")
const twoBtn = document.getElementById("two")
const threeBtn = document.getElementById("three")
const fourBtn = document.getElementById("four")
const fiveBtn = document.getElementById("five")
const sixBtn = document.getElementById("six")
const sevenBtn = document.getElementById("seven")
const eightBtn = document.getElementById("eight")
const nineBtn = document.getElementById("nine")

//logic operator buttons

const addBtn = document.getElementById("add")
const subBtn = document.getElementById("sub")
const multiBtn = document.getElementById("mult")
const divBtn = document.getElementById("div")


//program logic

const screen = document.getElementById("screen")

let currentInput = '';
let firstOperand = '';
let secondOperand = '';
let operator = '';


function updateScreen() {
    screen.value = currentInput;
}

zeroBtn.addEventListener('click', () => {

    console.log('Zero button clicked');
    console.log('Current Input:', currentInput);
    console.log('First Operand:', firstOperand);
    console.log('Second Operand:', secondOperand);
    console.log('Operator:', operator);


    if (!operator) {
        firstOperand += '0';
    } else {
        secondOperand += '0';
    }
    currentInput += '0'; // Update the current input
    updateScreen();
});

oneBtn.addEventListener('click', () => {
    if (!operator) {
        firstOperand += '1';
    } else {
        secondOperand += '1';
    }
    currentInput += '1'; // Update the current input
    updateScreen();
});

twoBtn.addEventListener('click', () => {
    if (!operator) {
        firstOperand += '2';

    } else {
        secondOperand += '2';
    }
    currentInput += '2'; // Update the current input
    updateScreen();
});

threeBtn.addEventListener('click', () => {
    if (!operator) {
        firstOperand += '3';
    } else {
        secondOperand += '3';
    }
    currentInput += '3'; // Update the current input
    updateScreen();
});

fourBtn.addEventListener('click', () => {
    if(!operator) {
        firstOperand += '4';
    } else {
        secondOperand += '4';
    }
    currentInput += '4'; // Update the current input
    updateScreen();
});

fiveBtn.addEventListener('click', () => {
    if(!operator) {
        firstOperand += '5';
    } else {
        secondOperand += '5';
    }
    currentInput += '5'; // Update the current input
    updateScreen();
});


sixBtn.addEventListener('click', () => {
    if (!operator) {
        firstOperand += '6';
    } else {
        secondOperand += '6';
    }
    currentInput += '6'; // Update the current input
    updateScreen();
});

sevenBtn.addEventListener('click', () => {
    if (!operator) {
        firstOperand += '7';
    } else {
        secondOperand += '7';
    }
    currentInput += '7'; // Update the current input
    updateScreen();
});

eightBtn.addEventListener('click', () => {
    if(!operator){
        firstOperand += '8';
    
    } else {
        secondOperand += '8';
    }
    currentInput += '8'; // Update the current input
    updateScreen();
});

nineBtn.addEventListener('click', () => {
    if(!operator){
        firstOperand += '9';
    } else {
        secondOperand +='9'
    }
    currentInput += '9'; // Update the current input
    updateScreen();
});

addBtn.addEventListener('click', () => {
    if (firstOperand && !operator) {
        // If a first operand is present and no operator has been selected yet, set the operator
        operator = '+';
    }
    currentInput += '+'; // Update the current input
    updateScreen();

});

subBtn.addEventListener('click', () => {
    if (firstOperand && !operator) {
        // If a first operand is present and no operator has been selected yet, set the operator
        operator = '-';
    }
    currentInput += '-'; // Update the current input
    updateScreen();

});

multiBtn.addEventListener('click', () => {
    if(firstOperand && !operator){
        operator = '*'
    }
    currentInput += '*'; // Update the current input
    updateScreen();
});

divBtn.addEventListener('click', () => {
    if(firstOperand && !operator){
        operator = '/'
    }
    currentInput += '/'; // Update the current input
    updateScreen();
});

document.getElementById('clearBtn').addEventListener('click', () => {
    currentInput = '';
    firstOperand = '';
    operator = '';
    updateScreen();
});

document.getElementById('equals').addEventListener('click', () => {
    if (firstOperand && operator && secondOperand) {
        const num1 = parseFloat(firstOperand);
        const num2 = parseFloat(secondOperand);

        if (!isNaN(num1) && !isNaN(num2)) {
            // Ensure that both operands are valid numbers
            let result;
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        currentInput = 'ERROR: Division by zero';
                        updateScreen();
                        return; // Exit early to prevent further evaluation
                    }
                    result = num1 / num2;
                    break;
                default:
                    currentInput = 'ERROR: Invalid operator';
                    updateScreen();
                    return; // Exit early for an invalid operator
            }

            firstOperand = result.toString();
            secondOperand = '';
            operator = '';

            currentInput = result.toString();
            updateScreen();
        } else {
            currentInput = 'ERROR: Invalid operands';
            updateScreen();
        }
    }
});