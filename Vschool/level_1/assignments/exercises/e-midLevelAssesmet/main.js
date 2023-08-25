/*
Challenge 1:  Constructor Functions

Create a constructor function called **`Book`** that takes in parameters for **`title`**, **`author`**, and **`year`**. The constructor function should have a method called **`getDetails`** that returns a string with the book's title, author, and year.  Instantiate two new Books using the below code to test your solution.

*/

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.getDetails = function(){
        console.log(`This book is called ${this.title}, it was written by ${this.author} and it was written in ${this.year}`)
    }
}

const bookOne = new Book("La rueda de la fortuna", "Ernesto Torres", 2023)
console.log(bookOne.getDetails());

const bookTwo = new Book("La historia de Tu y Yo", "Ernesto Torres", 2023)
console.log(bookTwo.getDetails());

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
console.log(book1.getDetails()); // Expected output: Title: The Great Gatsby, Author: F. Scott Fitzgerald, Year: 1925

const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
console.log(book2.getDetails()); // Expected output: Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960

/*
https://codepen.io/ernest_jtorres/pen/LYMpVXw

note when console log detects each instatntiation of a book object it tries to run two console logs one outside of the internal constructor function and one outside that will return an undefined to fix: console.log(book.getDetails()); --> book.getDetails();

*/

/* challenge 2: Arrays and Loops

Write a function called **`removeDuplicates`** that takes an array of numbers as input and returns a new array with duplicate values removed.  Use the below code to test your solution.
*/ 



function removeDuplicates(numArr){
    let arr = [];
    let length = numArr.length;
    for(let i = 0; i < length; i++){
        if(arr.indexOf(numArr[i]) === -1){
            arr.push(numArr[i]);
        }
    
    }
    console.log(arr)
}

let newArr = [1,1,2,2,3,4,5,5,6,7,8,9,9, 10, 10]

removeDuplicates(newArr);