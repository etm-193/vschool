//Turn an array of numbers into a total of all the numbers


function total(arr) {
   // your code here
   return arr.reduce((sum, num) => sum + num, 0)
}

console.log(total([1,2,3])); // 6


// Turn an array of numbers into a long string of all those numbers.

function stringConcat(arr) {
   // your code here
   return arr.reduce((sum, num) => sum + String(num), '')
}

console.log(stringConcat([1,2,3])); // "123"

// Turn an array of voter objects into a count of how many people voted

function totalVotes(arr) {
   // your code here
   return arr.reduce((count, person) => count + (person.voted? 1 : 0), 0);
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7

//Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

function shoppingSpree(arr) {
   // your code here
    return arr.reduce((total, item) => total + item.price, 0);

}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005


//Given an array of arrays, flatten them into a single array

function flatten(arr) {
   // your code here
   return [].concat(...arr);

}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// Given an array of potential voters, return an object representing the results of the vote

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
 return arr.reduce(
    (result, voter) => {
      if (voter.age >= 18 && voter.age <= 25) {
        result.numYoungPeople++;
        if (voter.voted) {
          result.numYoungVotes++;
        }
      } else if (voter.age >= 26 && voter.age <= 35) {
        result.numMidsPeople++;
        if (voter.voted) {
          result.numMidVotesPeople++;
        }
      } else {
        result.numOldsPeople++;
        if (voter.voted) {
          result.numOldVotesPeople++;
        }
      }
      return result;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0
    }
  );
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/
