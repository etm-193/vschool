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

// var text = document.getElementById("textOption").value
// function typed(event){
//     for(var i = 0; i < btnValue.length; i++)
//     if(event.target.text == btnValue[i]){
//         // console.log(btnValue[i] + "1")
//         // console.log(event.target.id); TESTS WORK
//         square.style.backgroundColor = btnValue[i];
//     }
// }
// for(var typeIn of text){
//     text.addEventListener("keyStroke", typed)
// }
//var textIn = document.getElementById("textOption").value
//console.log(textIn) this onlly gives me the element value as an empty string
document.getElementById("textOption").addEventListener("input", textColor);

function textColor(){
        var textIn = document.getElementById("textOption").value
        console.log(textIn)
        for(var i = 0; i < cValue.length; i++){
            if(textIn == cValue[i]){
                square.style.backgroundColor = cValue[i];
            } else if (textIn == ""){
              square.style.backgroundColor = cValue[4]
            }
        }
}
