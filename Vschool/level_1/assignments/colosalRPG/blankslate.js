/*colosal rpg project requirements and planning.

1. Console must greet player with a fun message 
    
    ### *1 **Story Point - Report as Story Point 82**
    
    2. Console must ask for the player's name and store it 
        
        ### ***1 Story Point - Report as Story Point 83**
        
    3. Walking 
    - The console will ask the user to enter a "w" to walk
    - Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
    - Use a while loop to control this flow.
        
        ### ***4 Story Points - Report as Story Point 87**
        
    1. If a wild enemy appears
    - The enemy is random (can be chosen out of a minimum of 3 different enemy names)
    - The user can decide to attack or run
    - If attacking, a random amount of damage will be dealt between a min and max
    - If running, there will be a 50% chance of escaping
    - After the player attacks or runs the enemy attacks back for a random damage amount
    - The player and enemy will attack each other in a loop until one of them passes out or dies.
    - If the player kills the enemy you can give the Player some HP and special item that is stored in the inventory . After this, the player will continue walking.
    - If the enemy kills the player the console prints a cool death message and the game ends. */

const readline = require('readline-sync');



//player object
function Player(name){
    this.name = name;
    // this.lvl = lvl;
    // this.health = health;
    // this.atk = atk;
    // this.def = def;
}

const playerName = readline.question("input name: ") // working - need to edit
const player = new Player(playerName)

const welcome = `Welcome ${player.name}...Says a nerdy yet handsom looking nerd (T_T) as he inches to away from you. suddenly he yells, "FRESH MEAT FOR THE GRINDER BOYS!" and hits a switch`;

console.log(welcome)
console.log("you fall through a trap door. and find yourself in a fire lit corridor.")


// document.addEventListener(KeyboardEvent, move);
// function move(){
//     //const wKey = move.wKey;
//     //hwo to record the key press and how to allocate that value to a variable
//     // idealllly if keyevent = w type moving and run encounter function
//     // encounter function
// }
