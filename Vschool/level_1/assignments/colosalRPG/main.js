//colosal rpg game!
const readline = require('readline-sync');

let isGameRunning = true;

function Character(name, health, inventory){
    this.name = name;
    // this.lvl = lvl;
    this.health = health;
    // this.atk = atk;
    // this.def = def;
    this.inventory = [];
}

const playerName = readline.question("input name: ") // working - need to edit
const player = new Character(playerName, 100,);
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
player.inventory.push("stick")
while(isGameRunning){
    let action = readline.question("What do you do? Press[w] to walk, [i] for inventory, or [q] to quit.",{limit:["w","i","q"]});
    
    if(action === "w"){
        console.log("you move forward");
        let enemyChance = randomNumber(1, 4);
        console.log(enemyChance);
        
        if(enemyChance === 3){
            let randomEnemyIndex = randomNumber(0, enemies.length -1);
            let currEnemy = enemies[randomEnemyIndex];
            console.log(`${currEnemy.name} has appeared`);

            const options = ["fight", "run"]
            let fightOrRun = readline.keyInSelect(options,"fight or run? ")
            console.log(options[fightOrRun]);
            if(options[fightOrRun] === "fight"){
                fight(currEnemy);
                if(player.health <= 0){
                    console.log(`Your blood paints the walls and pools on the floor, ${currEnemy} yells "someone get a mop i made a mess!"`)
                    console.log("game over!")
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
                enemies.pop(currEnemy)  
                isFight = false
            } else if(player.health <= 0){
                console.log(`Your blood paints the walls and pools on the floor, ${currEnemy} yells "someone get a mop i made a mess!"`)
                console.log("game over!")
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