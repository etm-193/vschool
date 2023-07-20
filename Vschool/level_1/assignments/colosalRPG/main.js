//colosal rpg game!
const readline = require('readline-sync');


//objects and global variables
let gameOver = false; 

function Player(name){
    this.name = name;
    // this.lvl = lvl;
    // this.health = health;
    // this.atk = atk;
    // this.def = def;
}

// function Enemy(enemy){
//     this.lvl = lvl;
//     this.atk = atk;
//     this.def = def;
// }

const instructionOne = `Use w to move forward: `;


//logic


//game time
const playerName = readline.question("input name: ") // working - need to edit
const player = new Player(playerName)

const welcome = `Welcome ${player.name}`;


//do{
console.log(welcome);
//console.log(instructionOne)
if(readline.keyIn(instructionOne, {limit: 'w'})){
    console.log(`nice ${player.name} you are walking now!`)
}



//} 
    //while(gameOver == false);