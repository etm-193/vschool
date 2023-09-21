

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


