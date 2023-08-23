const readline = require("readline-sync");

const funcChoice = readline.question("What are we doing today? add, sub, mult, or div? : ")
const numOne = readline.question("First number: ")
const numTwo = readline.question("Second number: ")

//functions
function add(){
    const result = Number(numOne) + Number(numTwo)
    return result;
}
function sub(){
    const result = Number(numOne) - Number(numTwo)
    return result;
}
function mult(){
    const result = Number(numOne) * Number(numTwo)
    return result;
}
function div(){
    const result = Number(numOne) / Number(numTwo)
    return result;
}

if(funcChoice === "add"){
    console.log(add(numOne,numTwo))
} else if (funcChoice === "sub"){
    console.log(sub(numOne,numTwo))
} else if (funcChoice === "mult"){
    console.log(mult(numOne,numTwo))
} else if (funcChoice === "div"){
    console.log(div(numOne,numTwo))
} else {console.log("thats not an option, good bye.")}



