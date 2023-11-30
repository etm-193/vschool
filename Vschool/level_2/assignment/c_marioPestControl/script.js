//mario pest control program

//https://www.mariowiki.com/Goomba#/media/File:Goomba_-_Mario_Party_Superstars.png  * gomba img
//https://static.wikia.nocookie.net/mario/images/8/8c/Bob-omb%2C_New_Super_Mario_Bros._U.png/revision/latest?cb=20121119023919  * bob-omb img
//https://static.wikia.nocookie.net/mario/images/7/71/NSMBU_Cheep_Cheep.png/revision/latest/scale-to-width-down/1000?cb=20190808220102   * cheep cheep img

const goombaPrice = 5;
const bobOmbPrice = 7;
const cheepCheepPrice = 11;

let goombaQty = 0;
let bobOmbQty = 0;
let cheepCheepQty = 0;

function calculateTotal() {
    const goombaCount = parseInt(document.getElementById("goombaCount").value) || 0;
    const bombCount = parseInt(document.getElementById("bombCount").value) || 0;
    const cheepCount = parseInt(document.getElementById("cheepCount").value) || 0;

    goombaQty = goombaCount;
    bobOmbQty = bombCount;
    cheepCheepQty = cheepCount;

    let total = goombaQty * goombaPrice + bobOmbQty * bobOmbPrice + cheepCheepQty * cheepCheepPrice;
    document.getElementById("total").textContent = total;
}

document.getElementById("calculateButton").addEventListener("click", calculateTotal);