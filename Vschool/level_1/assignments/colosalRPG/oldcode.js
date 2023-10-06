

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
//     this.health = health;
// }

const instructionOne = `Use w to move forward: `;


//logic
function moving(){
    let encounterChance = Math.random() * 5;
    if (encounterChance == 1 || encounterChance == 3 || encounter == 5 ){
        console.log("battle!")
        return encounterChance;
    } else {
        console.log("Nothing yet")
        return encounterChance;
    }


}
function walk(){
    if(readline.keyIn("", {limit:'w'})){
        moving()
        let encounter = moving();
        if(encounter == 0 ||encounter == 2 ||encounter == 4){
            console.log("you live")
            return encounter

    }
}

//game time
const playerName = readline.question("input name: ") // working - need to edit
const player = new Player(playerName)

const welcome = `Welcome ${player.name}`;


//do{
console.log(welcome);
//console.log(instructionOne)
//if(readline.keyIn(instructionOne, {limit: 'w'})){
//    console.log(`nice ${player.name} you are walking now!`)
//} 

// do{
//     walk()
//     let game = walk()
//     if(game == 0 || game== 2 || game== 4){gameOver=true;}
// }    while(gameOver == false)*/





let isGameRunning = true;

function Character(name, health, inventory){
    this.name = name;
    // this.lvl = lvl;
    this.health = health;
    // this.atk = atk;
    // this.def = def;
    this.inventory = inventory[""];
}

const playerName = readline.question("input name: ") // working - need to edit
const player = new Character(playerName, 100,[""]);
const enemy1 = new Character("Annoying Imp", 15, ["Dagger", "gold coins"]);
const enemy2 = new Character("Troll Order", 30, ["Great Sword", "Troll Snot", "troll nails"]);
const enemy3 = new Character("Frustrated Developer", 90, ["keyboard hammer","mouse whip", "monitor-rent talisman", "Coffee"]);

let enemies = [enemy1,enemy2,enemy3];

const randomNumber = (min, max)=>{
    return Math.floor(Math.random()*max - min +1);
}

const welcome = `Welcome ${player.name}...Says a nerdy yet handsom looking developer (T_T) as he inches to away from you. suddenly he yells, "FRESH MEAT FOR THE GRINDER BOYS!" and hits a switch`;

console.log(welcome);
console.log("you fall through a trap door. When you land surprisingly unharmed you look around and find yourself in a fire lit corridor. Hey look there is a stick on the floor, maybe you can whack someone with it.");
// player.inventory.push("stick")
while(isGameRunning){
    let action = readline.question("What do you do? Press[w] to walk, [i] for inventory, or [q] to quit.",{limit:["w","i","q"]});
    
    if(action === "w"){
        console.log("you move forward");
        let enemyChance = randomNumber(1, 4);
        console.log(enemyChance);
        
        if(enemyChance === 3){
            let randomEnemyIndex = randomNumber(0, enemies.length +1);
            let currEnemy = enemies[randomEnemyIndex];
            console.log(`${currEnemy.name} has appeared`);

            const options = ["fight", "run"]
            let fightOrRun = readline.keyInSelect(options,"fight or run? ")
            console.log(options[fightOrRun]);
            if(options[fightOrRun] === "fight"){
                fight(currEnemy);
                if(player.health <= 0){
                    // console.log(`Your blood paints the walls and pools on the floor, ${currEnemy} yells "someone get a mop i made a mess!"`)
                    // console.log("game over!")
                    // isFight = false
                    isGameRunning = false
                }
            } else if(options[fightOrRun] === "run"){
                run()
            }
        }

    } else if(action === "i"){
     console.log(player.inventory)
        
    } else if(action === "q"){
        console.log(`you chose to quit ${player.name}... insert horrible death here`);
        isGameRunning = false;
    }

}

function fight(currEnemy){
    console.log(`Get ready you are facing ${currEnemy.name}`)
    let isFight = true;
    while(isFight === true){
        // console.log(player.health)
        // console.log(currEnemy.health)

        const choice = ["attack", "inventory", "run"]
        let playerChoice = readline.keyInSelect(choice, "attack, inventory, run(again)?")
        console.log(choice[playerChoice]);
        console.log(`your current health : ${player.health}`)
        console.log(`${currEnemy.name}'s health: ${currEnemy.health}`)

        if(choice[playerChoice] === "attack"){
            attack(currEnemy)//working so far however when hp reaches 0 loop continues
            if(enemies == []){
                console.log(`congratulations ${player.name} you beat everyone and live to see another day!`)
                isFight = false;
                
            }  else if (currEnemy.health <= 0){
                console.log(`you defeated ${currEnemy.name} !`)
                enemies = enemies.pop(currEnemy)  
                console.log(`enemies left ${enemies}`)
                isFight = false
            } else if(player.health <= 0){
                console.log(`Your blood paints the walls and pools on the floor, ${currEnemy.name} yells "someone get a mop i made a mess!"`)
                console.log("game over!")
                isFight = false
                isGameRunning = false
            }
        }
        
    }
}

function run(){
    console.log(`you chose to run from ${currEnemy.name}`)
}

function attack(currEnemy){
    let dmg = randomNumber(1,5)
    let newHealth = currEnemy.health - dmg
    currEnemy.health = newHealth
    console.log(`${currEnemy.name} took ${dmg} points of dmg`);
    // health check!

    if(!currEnemy.health <= 0){
    
    //enemy counter attack
    let counter = randomNumber(0,5);
    let hurtPlayer = player.health - counter;
    player.health = hurtPlayer
    console.log(`${currEnemy.name} counter attacks! you took ${counter} points of damage!`)
    
    }
}// loop not breaking



// console.log(enemies.length)
            // if(enemies.length == 1){
            //     console.log(enemies.indexOf(0))
            // } else 

            const playerName = readline.question("What's your name?: ")
            const player = new Character(playerName, 100)
            
            const enemy1 = new Character("Annoying Imp", 15);
            // const enemy1 = new Character("Annoying Imp", 15, ["Dagger", "gold coins"]);
            const enemy2 = new Character("Troll Order", 30);
            // const enemy2 = new Character("Troll Order", 30, ["Great Sword", "Troll Snot", "troll nails"]);
            const enemy3 = new Character("frustrated Developer", 50)
            // const enemy3 = new Character("Frustrated Developer", 90, ["keyboard hammer","mouse whip", "monitor-rent talisman", "Coffee"]);
            let enemies = [enemy1,enemy2,enemy3];
            
            console.log(enemies)
            
            const randomNumber = (min, max)=>{
                return Math.floor(Math.random()*max - min +1);
            }
            
            let action = readline.question("What do you do? Press[w] to walk, [i] for inventory, or [q] to quit.",{limit:["w","i","q"]});
                
                if(action === "w"){
                    console.log("you move forward");
                    let enemyChance = randomNumber(1, 4);
                    console.log(enemyChance);
                    
                    if(enemyChance === 3){
                        let randomEnemyIndex = randomNumber(0, enemies.length +1);
                        let currEnemy = enemies[randomEnemyIndex];
                        console.log(`${currEnemy.name} has appeared`);
            
                        const options = ["fight", "run"]
                        let fightOrRun = readline.keyInSelect(options,"fight or run? ")
                        console.log(options[fightOrRun]);
                        if(options[fightOrRun] === "fight"){
                            fight(currEnemy);
                            if(player.health <= 0){
                                // console.log(`Your blood paints the walls and pools on the floor, ${currEnemy} yells "someone get a mop i made a mess!"`)
                                // console.log("game over!")
                                // isFight = false
                                isGameRunning = false
                            }
                        } else if(options[fightOrRun] === "run"){
                            run()
                        }
                    }
            
                } else if(action === "i"){
                 console.log(player.inventory)
                    
                } else if(action === "q"){
                    console.log(`you chose to quit ${player.name}... insert horrible death here`);
                    isGameRunning = false;
                }
            
            
                
                            
            
            //------------------------------------------------------------- Functions!--------------------------------------------------------------------!
            
            function fight(currEnemy){
                console.log(`Get ready you are facing ${currEnemy.name}`)
                let isFight = true;
                while(isFight === true){
                    // console.log(player.health)
                    // console.log(currEnemy.health)
            
                    const choice = ["attack", "inventory", "run"]
                    let playerChoice = readline.keyInSelect(choice, "attack, inventory, run(again)?")
                    console.log(choice[playerChoice]);
                    console.log(`your current health : ${player.health}`)
                    console.log(`${currEnemy.name}'s health: ${currEnemy.health}`)
            
                    if(choice[playerChoice] === "attack"){
                        attack(currEnemy)
                        //win
                        if(enemies == []){
                            console.log(`congratulations ${player.name} you beat everyone and live to see another day!`)
                            isFight = false;
                            isGameRunning = false;
                        }  
                        // next enemy
                        else if (currEnemy.health <= 0){
                            console.log(`you defeated ${currEnemy.name} !`)
                            enemies.pop(currEnemy)  
                            console.log(enemies)
                            
                            isFight = false
                        } 
                        //game over
                        else if(player.health <= 0){
                            // console.log(`Your blood paints the walls and pools on the floor, ${currEnemy.name} yells "someone get a mop i made a mess!"`)
                            // console.log("game over!")
                            isFight = false
                            isGameRunning = false
                        }
                    }
                    
                }
            }
            
            
            
            //RUN
            function run(currEnemy){
                console.log(`you chose to run from ${currEnemy.name}`)
                
            }
            
            
            //ATK LOGIC
            function attack(currEnemy){
                let dmg = randomNumber(1,5)
                let newHealth = currEnemy.health - dmg
                currEnemy.health = newHealth
                console.log(`${currEnemy.name} took ${dmg} points of dmg`);
                // health check!
            
                if(!currEnemy.health <= 0){
                
                //enemy counter attack
                let counter = randomNumber(0,1);
                let hurtPlayer = player.health - counter;
                player.health = hurtPlayer
                console.log(`${currEnemy.name} counter attacks, you took ${counter} points of damage!`)
                
                }
            }
            
            
            //----------------------------------------------------------- ver 20231005

            //colosal rpg game!
//imports
const readline = require('readline-sync');


//global variables
let isGameRunning = true;

function Character(name, health, inventory){
    this.name = name;
    // this.lvl = lvl;
    this.health = health;
    // this.atk = atk;
    // this.def = def;
    this.inventory = inventory || [];
}

const playerName = readline.question("input name: ") // working - need to edit
const player = new Character(playerName, 100,[""]);
const enemy1 = new Character("Annoying Imp", 15, ["Dagger", "gold coins"]);
const enemy2 = new Character("Troll Order", 30, ["Great Sword", "Troll Snot", "troll nails"]);
const enemy3 = new Character("Frustrated Developer", 90, ["keyboard hammer","mouse whip", "monitor-rent talisman", "Coffee"]);

let enemies = [enemy1,enemy2,enemy3];

const randomNumber = (min, max)=>{
    return Math.floor(Math.random()*max - min +1);
}

const welcome = `Welcome ${player.name}...Says a nerdy yet handsom looking developer (T_T) as he inches to away from you. suddenly he yells, "FRESH MEAT FOR THE GRINDER BOYS!" and hits a switch`;

console.log(welcome);
console.log("you fall through a trap door. When you land surprisingly unharmed you look around and find yourself in a fire lit corridor. Hey look there is a stick on the floor, maybe you can whack someone with it.");
// player.inventory.push("stick")


//main logic

while(isGameRunning){
    let action = readline.keyInSelect(["walk", "inventory", "quit"], "What do you do? Press[w] to walk, [i] for inventory, or [q] to quit: ",{cancel:false});
    
    if(action === 0){
        console.log("you move forward");
        let enemyChance = randomNumber(1, 4);
        console.log(enemyChance);
        if(enemies.length == 1){
            console.log(enemies)
        } else if(enemyChance === 3){
            let randomEnemyIndex = randomNumber(0, enemies.length -1);
            let currEnemy = enemies[randomEnemyIndex];
            console.log(`${currEnemy.name} has appeared`);

            const options = ["fight", "run"]
            let fightOrRun = readline.keyInSelect(options,"fight or run? ", {cancel:false})
            console.log(options[fightOrRun]);
            if(options[fightOrRun] === "fight"){
                fight(currEnemy);
                if(player.health <= 0){
                    // console.log(`Your blood paints the walls and pools on the floor, ${currEnemy} yells "someone get a mop i made a mess!"`)
                    // console.log("game over!")
                    // isFight = false
                    isGameRunning = false
                }
            } else if(options[fightOrRun] === "run"){
                run()
            }
        }

    } else if(action === 1){
     console.log(player.inventory)
        
    } else if(action === 2){
        console.log(`you chose to quit ${player.name}... insert horrible death here`);
        isGameRunning = false;
    }

}

//functions


function fight(currEnemy){
    console.log(`Get ready you are facing ${currEnemy.name}`)
    let isFight = true;
    while(isFight === true){
        // console.log(player.health)
        // console.log(currEnemy.health)

        const choice = ["attack", "inventory", "run"];
        let playerChoice = readline.keyInSelect(choice, "attack, inventory, run?",{cancel:false});
        console.log(choice[playerChoice]);
        console.log(`your current health : ${player.health}`)
        console.log(`${currEnemy.name}'s health: ${currEnemy.health}`)

        if(choice[playerChoice] === 0){
            attack(currEnemy)//working so far however when hp reaches 0 loop continues
            if(enemies.length == 0){
                console.log(`congratulations ${player.name} you beat everyone and live to see another day!`)
                isFight = false;
                
            }  else if (currEnemy.health <= 0){
                console.log(`you defeated ${currEnemy.name} !`)
                enemies.splice(enemies.indexOf(currEnemy), 1); 
                console.log(`enemies left ${enemies}`)
                isFight = false
            } else if(player.health <= 0){
                console.log(`Your blood paints the walls and pools on the floor, ${currEnemy.name} yells "someone get a mop i made a mess!"`)
                console.log("game over!")
                isFight = false
                isGameRunning = false
            }
        }
        
    }
}

function run(currEnemy){
    console.log(`you chose to run from ${currEnemy.name}`)
    let escapeChance = randomNumber(0,1);
    if(escapeChance === 0){
        console.log("You failed to escape!")
        fight(currEnemy);
    } else{
        isFight = false
    }
}

function attack(currEnemy){
    let dmg = randomNumber(1,7)
    let newHealth = currEnemy.health - dmg
    currEnemy.health = newHealth
    console.log(`${currEnemy.name} took ${dmg} points of dmg`);
    // health check!

    if(!currEnemy.health <= 0){
    
    //enemy counter attack
    let counter = randomNumber(0,3);
    let hurtPlayer = player.health - counter;
    player.health = hurtPlayer
    console.log(`${currEnemy.name} counter attacks! you took ${counter} points of damage!`)
    
    }
}


// final code!!!!!


const readline = require('readline-sync');

// Global variables
let isGameRunning = true;
let isFight = false;


function Character(name, health, inventory) {
    this.name = name;
    this.health = health;
    this.inventory = inventory || [];
}

function Item(name, description) {
    this.name = name;
    this.description = description;
}

function Potion(name, description, healingAmount) {
    Item.call(this, name, description);
    this.healingAmount = healingAmount;
}
const healthPotion = new Potion("Health Potion", "Restores 30 HP", 30);

// Create player and enemy characters
const playerName = readline.question("Input name: ");
const player = new Character(playerName, 100, []);
const enemy1 = new Character("Annoying Imp", 15, [healthPotion, healthPotion, healthPotion]);
const enemy2 = new Character("Troll Order", 30, [healthPotion]);
const enemy3 = new Character("Frustrated Developer", 90, [healthPotion,healthPotion]);
let enemies = [enemy1, enemy2, enemy3];

// Function to generate random numbers
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Welcome message
const welcome = `Welcome ${player.name}... Says a nerdy yet handsome-looking developer (T_T) as he inches away from you. Suddenly he yells, "FRESH MEAT FOR THE GRINDER BOYS!" and hits a switch.`;
console.log(welcome);
console.log("You fall through a trap door. When you land surprisingly unharmed, you look around and find yourself in a fire-lit corridor. Hey, look, there is a stick on the floor. Maybe you can whack someone with it.");

// Main game loop
while (isGameRunning) {
    let action = readline.keyInSelect(["Walk", "Inventory", "Quit"], "What do you do? Press [1] to walk, [2] for inventory, or [3] to quit:", { cancel: false });

    if (action === 0) { // Walk
        console.log("You move forward");
        let enemyChance = randomNumber(1, 4);
        console.log(enemyChance);
        if (enemyChance === 3) {
            let randomEnemyIndex = randomNumber(0, enemies.length - 1);
            let currEnemy = enemies[randomEnemyIndex];
            console.log(`${currEnemy.name} has appeared`);
        
            const options = ["Fight", "Run"];
            let fightOrRun = readline.keyInSelect(options, "Fight or run?", { cancel: false });
        
            if (fightOrRun === 0) { // Fight
                fight(currEnemy);
                if (player.health <= 0) {
                    isGameRunning = false;
                }
            } else if (fightOrRun === 1) { // Run
                run(currEnemy);
            }
        }
        
    } else if (action === 1) { // Inventory
        let isFight = false;
        inventory(isFight)
    } else if (action === 2) { // Quit
        console.log(`You chose to quit ${player.name}... Insert horrible death here`);
        isGameRunning = false;
    }
    if (enemies.length === 0) {//GOOD = win GAMEOVER
        console.log(`Congratulations ${player.name}! You beat everyone and live to see another day!`);
        isFight = false;
        isGameRunning = false;}

}

// Functions
function fight(currEnemy) { //fight fucntion
    console.log(`Get ready, you are facing ${currEnemy.name}`);
    isFight = true;

    while (isFight === true) {
        const choice = ["Attack", "Inventory", "Run"];
        let playerChoice = readline.keyInSelect(choice, "Attack, inventory, run?", { cancel: false });

        console.log(choice[playerChoice]);
        console.log(`Your current health : ${player.health}`);
        console.log(`${currEnemy.name}'s health: ${currEnemy.health}`);

        if (choice[playerChoice] === "Attack") {
            attack(currEnemy);
            if (currEnemy.health <= 0) {//defeat enemy
                console.log(`You defeated ${currEnemy.name}!`);
                currEnemy.inventory.forEach(item => player.inventory.push(item));
                enemies.splice(enemies.indexOf(currEnemy), 1);
                console.log(`Enemies left: ${enemies.map(enemy => enemy.name).join(', ')}`);
                isFight = false;
                // isGameRunning = false;
            } else if (player.health <= 0) {
                console.log(`Your blood paints the walls and pools on the floor. ${currEnemy.name} yells, "Someone get a mop, I made a mess!"`);
                console.log("Game over!");
                isFight = false;
                isGameRunning = false;
            }
        } else if (choice[playerChoice] === "Inventory") {
           inventory(isFight); // Pass isFight to the inventory function
        } else if (choice[playerChoice] === "Run") {
            run(currEnemy); // Pass isFight and currEnemy to the run function
        }
    }
}


function run(currEnemy) {
    console.log(`You chose to run from ${currEnemy.name}`);
    let escapeChance = randomNumber(0, 1);
    
    if (escapeChance === 0) {
        console.log("You failed to escape!");
        fight(currEnemy); // Call fight() to continue the fight
    } else {
        isFight = false;
    }
}

function attack(currEnemy) {
    let dmg = randomNumber(1, 7);
    let newHealth = currEnemy.health - dmg;
    currEnemy.health = newHealth;
    
    console.log(`You attack ${currEnemy.name}, dealing ${dmg} points of damage.`);
    
    if (currEnemy.health > 0) {
        let counter = randomNumber(0, 3);
        let hurtPlayer = player.health - counter;
        player.health = hurtPlayer;
        console.log(`${currEnemy.name} counterattacks! You took ${counter} points of damage!`);
    }
}

function inventory(isFight) {
    if (isFight === true) {
        // If in a fight, provide an option to go back to the fight or use a potion
        const backToFight = readline.keyInSelect(["Back to Fight", "Use Potion"], "Press [1] to go back to the fight, [2] to use a potion:", { cancel: false });
        
        if (backToFight === 0) {
            // Continue the fight
            return;
        } else if (backToFight === 1) { // Use a potion
            use();
        }
    } else if (isFight === false) {
        console.log(`you currently have ${player.inventory.length} health potions`);
        let action = readline.keyInSelect(["Use", "Never Mind"], "Use a health potion [1], not right now [2]", { cancel: false });
        
        if (action === 0) {
            use();
        } else if (action === 1) {
            console.log("You decide not to do anything. Time for a coffee break.");
        }
    }
}



function use(){
    console.log(`your health is ${player.health}`)
    if (player.inventory.includes(healthPotion)) { // Check if the health potion is in the inventory
        console.log("you use a health potion");
        player.health += healthPotion.healingAmount;
    
        const potionIndex = player.inventory.indexOf(healthPotion);
        if (potionIndex !== -1) {
            player.inventory.splice(potionIndex, 1);
        }
        
        console.log(`your health is ${player.health}`);

    } else {
        console.log("You don't have any health potions to use.");
    }
}

function attack(currEnemy) {
    let dmg = randomNumber(1, 7);
    let newHealth = currEnemy.health - dmg;
    currEnemy.health = newHealth;
    
    console.log(`You attack ${currEnemy.name}, dealing ${dmg} points of damage.`);
    
    if (currEnemy.health > 0) {
        let counter = randomNumber(0, 3);
        let hurtPlayer = player.health - counter;
        player.health = hurtPlayer;
        console.log(`${currEnemy.name} counterattacks! You took ${counter} points of damage!`);
    }
}

function inventory(isFight) {
    if (isFight === true) {
        // If in a fight, provide an option to go back to the fight or use a potion
        const backToFight = readline.keyInSelect(["Back to Fight", "Use Potion"], "Press [1] to go back to the fight, [2] to use a potion:", { cancel: false });
        
        if (backToFight === 0) {
            // Continue the fight
            return;
        } else if (backToFight === 1) { // Use a potion
            use();
        }
    } else if (isFight === false) {
        console.log(`you currently have ${player.inventory.length} health potions`);
        let action = readline.keyInSelect(["Use", "Never Mind"], "Use a health potion [1], not right now [2]", { cancel: false });
        
        if (action === 0) {
            use();
        } else if (action === 1) {
            console.log("You decide not to do anything. Time for a coffee break.");
        }
    }
}



function use(){
    console.log(`your health is ${player.health}`)
    if (player.inventory.includes(healthPotion)) { // Check if the health potion is in the inventory
        console.log("you use a health potion");
        player.health += healthPotion.healingAmount;
    
        const potionIndex = player.inventory.indexOf(healthPotion);
        if (potionIndex !== -1) {
            player.inventory.splice(potionIndex, 1);
        }
        
        console.log(`your health is ${player.health}`);

    } else {
        console.log("You don't have any health potions to use.");
    }
}
