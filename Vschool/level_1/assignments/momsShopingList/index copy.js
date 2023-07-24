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
    //function variables
    const subItem = document.createElement("li")
    const itemName = document.createElement("div")
    const editBtn = document.createElement("button")
    const deleteBtn = document.createElement("button")

    //inputs and buttons
    itemName.textContent = userInput //initial input
    //edit btn
    editBtn.textContent = "edit";
    editBtn.addEventListener("click", edit)
    function edit(){

      const tempInput = document.createElement("input")
      const oldText = itemName.textContent
      tempInput.placeholder = oldText
      itemName.textContent = ""
      itemName.append(tempInput)
      
      
      const tempBtn = document.createElement("button")
      tempBtn.textContent = "save"
      itemName.appendChild(tempBtn)
      tempBtn.addEventListener("click", function(){
        itemName.textContent = tempInput.value
        subItem.appendChild(editBtn)//Attach edit button to item
        subItem.appendChild(deleteBtn)//Attach delete button to item
      })
      



    }
    //delete btn
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", delBtnFunc)
    function delBtnFunc(){
      document.getElementById("list").removeChild(subItem)
    }
    
    
    
    
    //appending to parent - list
    subItem.appendChild(itemName)
    subItem.appendChild(editBtn)
    subItem.appendChild(deleteBtn)
    subItem.setAttribute("class", "listItem")
    document.getElementById("list").appendChild(subItem)
    
  
}



// deleteBtn.addEventListener("click", delFunc)
// editBtn.addEventListener("click", editFunc)
// function delFunc(subItem){
//   document.getElementById("list").removeChild(subItem.this);
// }
// function editFunc(){
  
// }

