const form = document.addItem
// let userInput = form.title.value


form.addEventListener("submit", add)

function add(event){
  event.preventDefault();
  console.log("testFire")
  console.log(form.title.value)

  let userInput = form.title.value

  console.log(userInput)

  addItemFunc(userInput)
 
    
  form.title.value = "";
    
}

function addItemFunc(userInput){
    const subItem = document.createElement("li")
    const itemName = document.createElement("div")
    const editBtn = document.createElement("button")
    const deleteBtn = document.createElement("button")
    editBtn.textContent = "edit";
    deleteBtn.textContent = "X";
    itemName.textContent = userInput
    subItem.appendChild(itemName)
    subItem.appendChild(editBtn)
    subItem.appendChild(deleteBtn,)
    subItem.setAttribute("class", "listItem")
    document.getElementById("list").appendChild(subItem)
    deleteBtn.addEventListener("click", delFunc)
    editBtn.addEventListener("click", editFunc)
    
  
}


function delFunc(){

}

function editFunc(){
  
}