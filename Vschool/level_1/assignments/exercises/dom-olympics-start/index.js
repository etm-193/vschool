//------------------------------------------------------- SILVER
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

//------------------------------------------------------- SILVER 
//Step 1 - clear button  
var clearBtn = document.getElementById("clearButton");
var msgs = document.getElementsByClassName("messages");
var leftMsg = document. getElementsByClassName("message left");
var rightMsg = document.getElementsByClassName("message right");

clearBtn.addEventListener('click', clear)

function clear(){
    console.log("clear")
    console.log(leftMsg[0])
    for(var i = 0; i < leftMsg.length; i++){
        leftMsg[i].innerHTML = "";
        leftMsg[i].style.backgroundColor = "white";
        console.log(leftMsg[i])
    }
    for(var i = 0; i < rightMsg.length; i++){
        rightMsg[i].innerHTML = "";
        rightMsg[i].style.backgroundColor = "white";
        console.log(rightMsg[i])
    }
}

//Step 2 -- submit button  

var inputFld = document.getElementById("input");
inputFld.value = "Let's start over"
var input = inputFld;
// console.log(document.getElementsByTagName("button")) is being returned as an array

var pointToBtn = document.getElementsByTagName("button")
var sendIt = pointToBtn[1]
// console.log(sendIt) test works - pointing to the second button on the page.

sendIt.addEventListener("click", send)

//i know im breaking the rules of polymorph.inherit.encap.abstract with the functions ive been writing
function send(event){
    event.preventDefault();
    clear();
    leftMsg[0].innerHTML = input.value;
    input.value = "";
    leftMsg[0].style.backgroundColor = "blue";
};
//----------------------------------------------------------- SILVER COMPLETED

// GOLD

var drop = document.getElementById("theme-drop-down")
var valuePoint = drop.getElementsByTagName("option")
var valueOne = valuePoint[0].value
var valueTwo = valuePoint[1].value
var themeOne = valuePoint[0]
var themeTwo = valuePoint[1]

console.log(themeOne, themeTwo)

drop.addEventListener("change", changeTheme)

function changeTheme(event){
    console.log("change")
    console.log(valueOne)
    // console.log(event.target.value) good test
    if(event.target.value == themeOne){
        // console.log(valueOne) good test
    }
}