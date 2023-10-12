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



/*function largestNumber(...numbers){//rest operator
  // const numberArr = [...numbers];//spread operator
  // numberArr.sort(function(a,b){
  //   return b - a
  // })
  // return numberArr[0]
return Math.max(...numbers)

}
// Write a function called `largestNumber` that takes 3 numbers and returns the largest number. Test with the following:

console.log(largestNumber(3, 8, 9, 50, 2, 70))
console.log(largestNumber(25,-10, 10))



/*

1. put the numbers into an array
2. .sort numbers
3. return

*/ 