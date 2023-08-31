// String methods ex

/*
COMPLETED

Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
*/

function capAndLow(string){
    // console.log(string)
    let orgString = string;
    let capString = orgString.toUpperCase()
    // console.log(capString) test = true
    let lowString = orgString.toLowerCase()
    // console.log(lowString) test = true
    let jointString = capString+lowString
    console.log(jointString)
//test = true
}

capAndLow("hello")

/*

complete
    Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
*/

function findMiddleIndex(string){
    let totIndex = string.length;
    let midIndex = totIndex / 2;
    console.log(midIndex)
}

findMiddleIndex("hello")

