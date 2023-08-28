/*

# **Preliminaries**

1. Write a for loop that prints to the console the numbers 0 through 9.
2. Write a for loop that prints to the console 9 through 0.
3. Write a for loop that prints these fruits to the console.`**const fruit = ["banana", "orange", "apple", "kiwi"]**

*/


let num = []
function numPush(num){

    for(let i = 0; i < 10; i++){
        num.push(i)
        console.log(num[i])
    }
    return num;
}

let newNum= []

for(let i = 9; i > 0; i--){
    newNum.push(num.indexOf(i))
}
newNum.push(0)
console.log(newNum);

const fruit = ["banana", "orange", "apple", "kiwi"]

for(let i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

/*
Bronze medal

1. Write a for loop that will push the numbers 0 through 9 to an array.
2. Write a for loop that prints to the console only even numbers 0 through 100.
3. Write a for loop that will push every other fruit to an array.
`const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]`

*/

// 1. complete
numPush(num);

//2.complete
function countEven(){
    let evenNums = []
    for(let i = 0; i < 101; i++){
        if(i % 2 == 0){
            evenNums.push(i)
            console.log(evenNums)
        }
    }
}
countEven()

// 3.complete

    const fruitTwo = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
    let newFruit = [];
    for(let i = 0; i < fruitTwo.length; i++){
        if( i % 2 == 1){
            newFruit.push(fruitTwo[i])
        }
    }
    console.log(newFruit)
/*
# **Silver Medal**

1. Write a loop that will print out all the names of the people of the people array
2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.
3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to *another* array starting with, in this case, "Singer".

Think about what good names for the arrays would be. Since it will be an array of each name or occupation, the plurals of name and occupation would be appropriate.


*/

