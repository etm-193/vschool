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
const equalsBtn = document.getElementById("equals")

//program logic

const screen = document.getElementById("screen")

let currentInput = '';
let firstOperand = '';
let secondOperand = '';
let operator = '';

function updateScreen(){
    screen.value = currentInput;
}

zeroBtn.addEventListener('click', ()=>{
    if(!operator){
        firstOperand += '0';
    } else {
        secondOperand += '0';
    }
    updateScreen();
}) 




addBtn.addEventListener('click', () => {
    if (firstOperand && !operator) {
        // If a first operand is present and no operator has been selected yet, set the operator
        operator = '+';
    }
    updateScreen();
});




document.getElementById('btnClear').addEventListener('click', () => {
    currentInput = '';
    firstOperand = '';
    operator = '';
    updateDisplay();
});


// imported functionality for error in = btn code

equalsBtn.addEventListener('click', () => {
    if (firstOperand && operator && secondOperand) {
        try {
            // Use Math.js to evaluate the expression
            const expression = firstOperand + operator + secondOperand;
            const result = math.evaluate(expression);
            
            // Update the first operand with the result and clear the second operand and operator
            firstOperand = result.toString();
            secondOperand = '';
            operator = '';
            
            updateScreen();
        } catch (error) {
            // Handle any evaluation errors (e.g., division by zero)
            currentInput = "ERROR"
            updateScreen()
            console.error("Error:", error);
        }
    }
});
