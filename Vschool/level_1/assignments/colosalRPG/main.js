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
const player = new Character(playerName, 100, );
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
    // let newHealth = currEnemy.health - dmg;
    // currEnemy.health = newHealth;
    currEnemy.health -= dmg;
    console.log(`You attack ${currEnemy.name}, dealing ${dmg} points of damage.`);
    
    if (currEnemy.health > 0) {
        let counter = randomNumber(0, 3);
        // let hurtPlayer = player.health - counter;
        // player.health = hurtPlayer;
        player.health -= counter;
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