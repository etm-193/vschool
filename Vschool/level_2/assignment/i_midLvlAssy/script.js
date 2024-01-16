/*
## **Sorting an Array**

Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
*/

function sortArr(numbers) {

  return numbers.sort(function(a, b) {
    return a - b;
  });
}

const numbers = [4, 2, 7, 1, 9, 5];
const sortedNumbers = sortArr(numbers);
console.log(sortedNumbers);

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
