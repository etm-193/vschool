var square = document.getElementById("square");
var cValue = [
        red = document.getElementById("red").value,
        blue = document.getElementById("blue").value,
        yellow = document.getElementById("yellow").value,
        green = document.getElementById("green").value,
        orange = document.getElementById("orange").value,
    ]

//button logic - done
var buttons = document.getElementsByTagName("button");
function onClick(event){
    for(var i = 0; i < cValue.length; i++)
    if(event.target.id == cValue[i]){
        // console.log(btnValue[i] + "1")
        // console.log(event.target.id); TESTS WORK
        square.style.backgroundColor = cValue[i];
    }

}
for(var button of buttons){
    button.addEventListener("click", onClick)
}

//text logic

var cTextVal = [r, b, g, y, o,];

document.getElementById("textOption").addEventListener("input", textColor);

function textColor(){
        var textIn = document.getElementById("textOption").value
        //console.log(textIn)
        for(var i = 0; i < cTextVal.length; i++){
            if(textIn == cTextVal[i] || textIn == cValue[i]){
                cTextVal[i] = cValue[i];
                square.style.backgroundColor = cTextVal[i];
            } else if (textIn == ""){
              square.style.backgroundColor = cTextVal[4]
            }
        }
}

//mouse events
square.addEventListener('mousedown', squareClick);
function squareClick(){
  square.style.backgroundColor = "red";
}
square.addEventListener('mouseover', squarHover);
function squarHover(){
  square.style.backgroundColor = "blue";
}
square.addEventListener('mouseup', squareRelease);
function squareRelease(){
  square.style.backgroundColor = "yellow";
}
square.addEventListener('dblclick', squareDoubleClick);
function squareDoubleClick(){
  square.style.backgroundColor = "green";
}
document.addEventListener('mousewheel', wheel);
function wheel(){
  square.style.backgroundColor = "orange";
}

/*
For Easy testing please use:
https://codepen.io/ernest_jtorres/pen/OJaNMop
*/
