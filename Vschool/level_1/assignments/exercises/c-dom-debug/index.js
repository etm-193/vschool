const colors = ["red", "blue", "green"]

const addBtn = document.getElementById("add")
addBtn.addEventListener("click", submit)
function submit(e){
    console.log("working")
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
    subItem.style.backgroundColor = colors[0]
}

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){//missing the .length
        const option = document.createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener("change", function(e){
        console.log(e.target.value)
        console.log(e.target.parentElement)
        e.target.parentElement.style.backgroundColor = e.target.value //missing the .style
    })
    return dropDown
}

function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input").value //after adding .value func creates object
    subItem.textContent = subItemValue
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}


//----------------------------------------------- Challenge completed