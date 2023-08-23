//escape room game

const readline = require("readline-sync");
let gameOver = false

function Player(name){
    this.name = name;
    this.hasKey = false;
}

// Player.prototype.choice

//outcome variables

const winStatement = "You insert the key and exit the room, you smell the fresh air and let the releif of freedom take you to a new adventure... hopefully one less claustrophobic"
const location = "you wake up in a room, you get up from the bed, you see a door. There is a hole on the floor..."
const optionDoor = "Way to keep it simple, you check the door but it's locked... did you realy think the door would be open?"
const optionOne = "You look under the bed, hey look its a key!"
const optionTwo = "You approach the hole, you feerlesly plunge your arm torwards the darkness. PAIN UMBEARABLE PAIN, your arm is cut clean off there is blood all over the tiny room, you begin to feel cold and numb all over starting you slowly loose conciousness and die...moral of the story, don't go sticking stuff in holes recklessly game over! "
//const tryAgain = readline.question("Would you like to try again? Y/N: ")

//logic start

//player name
const playerName = readline.question("Hey there, what's your name?: ")
const player = new Player(playerName)
console.log(`Welcome ${player.name}, ${location}`)
do{
    let choice = readline.question("What are you going to do? (1) door, (2) bed, (3) hole. hint: use a number to select an option: ")
    // player.choice = choice;
    if(choice === "1"){
        console.log(optionDoor)
    } else if(choice === "2"){
        // examine posibility later for choice object belonging to player object
        console.log(optionOne)
        player.hasKey = true;
        console.log(winStatement)
        const tryAgain = readline.question("Would you like to go again? Y/N: ")
        if(tryAgain === "Y"||tryAgain === "y"){
            gameOver = false;
        } else {
            gameOver = true;
            console.log("thanks for playing!")
        }
        
        
    } else if(choice === "3"){
        console.log(optionTwo)
        // gameOver = true;
        const tryAgain = readline.question("Would you like to try again? Y/N: ")
        if(tryAgain === "Y"||tryAgain === "y"){
            gameOver = false;
        } else{
            gameOver = true;
            console.log("GAME OVER!")
        }
    } 
} 
    while(gameOver == false)
