//step 1 - header
var bronze = "Brought to you by JavaScript!"
var header = document.getElementById('header');
header.innerHTML = bronze;

header.style.fontSize = "30px";

//step 2 - credit

var devName = "Ernesto Torres "
var credStat = "wrote the JavaScript."

var span = document.createElement('span');
var node = document.createTextNode(devName);

span.appendChild(node)
// node.style.color = "blue";
var spanTwo = document.createElement('span');
var nodeTwo = document.createTextNode(credStat)
spanTwo.appendChild(nodeTwo) 

var div = document.createElement("div");
header.appendChild(div)
div.appendChild(span)
div.appendChild(spanTwo)

span.style.color = "blue"
span.style.fontSize = "20px"
spanTwo.style.fontSize = "20px"
div.style.padding = "5px"
//------------------------------------------------------- BRONZE COMPLETED

//SILVER
//Step 1 - clear button



var clearBtn = document.getElementById('clear-button');

var msgs = document.getElementsByClassName('messages')
var msgLeft = document.getElementsByClassName('messageRight');
var msgRight = document.getElementsByClassName('messageLeft');

function forClrBtn(){
    msgLeft.innerHTML = " ";
    msgRight.innerHTML = " ";
}

clearBtn.addEventListener('onclick', forClrBtn);
