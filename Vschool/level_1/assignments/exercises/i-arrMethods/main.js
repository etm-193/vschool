//array methods

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
console.log(vegetables)

fruit.shift()
console.log(fruit)

const orangeIndex = fruit.indexOf("orange");
console.log(orangeIndex);

fruit.push(orangeIndex)
console.log(fruit)

console.log(vegetables.length)
vegetables.push(vegetables.length)
console.log(vegetables)

let food = fruit.concat(vegetables)
console.log(food)

let newFood = food.splice(4, 2)
console.log(newFood)
console.log(food)

console.log(food.reverse())

//code works - confirmed 08/28/2023