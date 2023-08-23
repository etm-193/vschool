var readlineSync = require('readline-sync');

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  

//loop through array

const computerCount = [];

for(var i = 0; i < officeItems.length; i++){
    if(officeItems[i] === "computer"){
        computerCount.push("computer")
    }
}

console.log(computerCount.length)
// challenge 1 complete


//loop through object

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
   if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
    console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is old enough to watch the movie.`)
   } else {
    console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is not old enough to watch the movie.`)
   }
    
}

//challenge 2 is complete