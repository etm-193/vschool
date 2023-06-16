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
var textIn = document.getElementById("textOption").value
function textE(event){
    for(var i = 0; i < cValue.length; i++){
        if(event.value == cValue[i]){
            console.log(cValue)
            return cValue
        }
    }
}
HTMLInputElement.addEventListener('input', textE()){
    
}