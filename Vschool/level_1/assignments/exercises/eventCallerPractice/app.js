var square = document.getElementById("square");

var redBtn = document.getElementById("red");
var blueBtn = document.getElementById("blue");
var greenBtn = document.getElementById("green");
var yellowBtn = document.getElementById("yellow");
var orangeBtn = document.getElementById("orange");
var btnValue = [
        red = document.getElementById("red").value,
        blue = document.getElementById("blue").value,
        yellow = document.getElementById("yellow").value,
        green = document.getElementById("green").value,
        orange = document.getElementById("orange").value,
    ]

var buttons = document.getElementsByTagName("button");
function onClick(event){
    console.log(event.target.id);
}
for(let button of buttons){
    button.addEventListener("click", onClick)
}