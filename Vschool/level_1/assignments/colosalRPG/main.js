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
}

function run(){
    console.log(`you chose to run from ${currEnemy.name}`)
}