//Login Place holder
var Ernesto = {
    userName: 'ernesto.torres1',
    passWord: 'password'
}
var guest = {
    userName: 'guest',
    passWord: 'password'
}

let user = [Ernesto, guest,]

let userInput1 = document.getElementById("userName")
let userInput2 = document.getElementById("password")
let logInBtn = document.getElementById("logInBtn")

function onClick(){
    for(var i = 0; i < user.length; i++){
        if(userInput1 === user[i].userName || userInput2 === user[i].passWord){
            window.location.href = "404.html"
        } else {
            alert("Incorrect Log In")
        }
    }
}
logInBtn.addEventListener("click", onClick)