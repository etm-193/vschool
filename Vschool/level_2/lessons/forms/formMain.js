/*
//testing to see if this syntax works

const form = document["myform"] // original code = const form = document.myform did not seem to work
/*else ill use the format provided by the lesson 
1 change the html file form name to my-form
2 replace line 3 of code => const form = documetn["my-form"]



//submit event

form.addEventlistener("submit",function(event){
    event.preventDefault(); //prevents refresh
    //alert("its Working")
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    form.firstName.value = "";
    form.lastName.value = "";


    console.log(`${firstName} ${lastName}`)
})


instructors code

*/

const form = document["my-form"]

// Submit event

form.addEventListener("submit", function(event){
    event.preventDefault()
    
    const firstName = form.firstName.value
    const lastName = form.lastName.value
    form.firstName.value = ""
    form.lastName.value = ""
    
    console.log(firstName + " " + lastName)
})