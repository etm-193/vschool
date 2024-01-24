/*
## **Sorting an Array**

Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
*/

function sortArr(numbers) {

  return numbers.sort(function(a, b) {
    return b - a;
  });
}

// const numbers = [4, 2, 7, 1, 9, 5];
// const sortedNumbers = sortArr(numbers);
// console.log(sortedNumbers);

/*
## **Mapping an Array**

Write a function that takes an array of strings and returns a new array where each string is converted to uppercase.
*/


function convertToUppercase(strings) {
  
  return strings.map(function(string) {
    return string.toUpperCase();
  });
}

const strings = ['hello', 'world', 'javascript'];
const uppercaseStrings = convertToUppercase(strings);
console.log(uppercaseStrings);  // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']


//itteration of my array = i in a for loop


// code challenge 

// Write a function that takes an array of numbers and returns a new array containing only the even numbers.

//Use .filter function to itterate through the array of nums 
// use a conditional statement to check value with a modulo so the result is returned to the evenNumbers variable

function filterEvenNumbers(numbers) {
    return numbers.filter(num => {
      if(num % 2 === 0){
        return num;
      }
    })
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);  // Output: [2, 4, 6]