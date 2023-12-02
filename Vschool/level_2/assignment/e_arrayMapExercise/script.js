// 1) Make an array of numbers that are doubles of the first array
 
function doubleNumbers(arr){
  // your code here
//   const result = arr.map(function(num){
//     return num * 2;
//   })
    const result = arr.map( num => num * 2)
    arr = result
    return arr
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// 2) take an array of nums and make them strings


function stringItUp(arr){
  // your code here
  const result = arr.map(num => num.toString())
  arr = result
  return arr
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// 3) Capitalize the first letter of each name and make the rest of the characters lowercase

function capitalizeNames(arr) {
  const result = arr.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
    arr = result
    return arr
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));


// 4) Make an array of strings of the names

function namesOnly(arr){
  // your code here
  const result = arr.map(person => person.name)
  arr = result
  return arr
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

function makeStrings(arr){
  // your code here
    const result = arr.map(human => {
        if(human.age >= 18){
            return `${human.name} can go to the Matrix`
        } else {
            return `${person.name} is under age!`
        }
    })

}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

//6) Make an array of the names in h1s, and the ages in h2s

function readyToPutInTheDOM(arr) {
  const result = arr.map(person => `<h1>${person.name}</h1><h2>${person.age}</h2>`);
  document.body.innerHTML = result.join('');
  return result;  
}

console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]