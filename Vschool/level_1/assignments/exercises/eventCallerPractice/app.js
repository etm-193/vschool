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
var r = red;
var b = blue;
var g = green;
var y = yellow;
var o = orange;

var cTextVal = [];
cTextVal[0] = r;
cTextVal[1] = b;
cTextVal[2] = g;
cTextVal[3] = y;
cTextVal[4] = o;

document.getElementById("textOption").addEventListener("input", textColor);

function textColor(){
        var textIn = document.getElementById("textOption").value
        //console.log(textIn)
        for(var i = 0; i < cTextVal.length; i++){
            if(textIn == cTextVal[i]){
                square.style.backgroundColor = cTextVal[i];
            } else if (textIn == ""){
              square.style.backgroundColor = cTextVal[4]
            }
        }
}
