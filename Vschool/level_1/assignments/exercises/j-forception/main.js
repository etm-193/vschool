//forception exe

/*
console.log(people)
    for (let i = 0; i < people.length; i++) {
        console.log(people[i])
        people[i].replace(`${people[i]}:`)
        console.log(people)
        //var splitPeeps = people[i].split("")        
        //splitPeeps.push(":")
         
        //console.log(splitPeeps)
       
    }
   // console.log(splitPeeps)

    // people.forEach(person => {
    // //    let peeps = person.split("")
    // // //   console.log(peeps)... peeps are now characters
    // //     let soonPerson = peeps + ": ";
    //     let newPerson = person.join(": ")
    //     newPeople.push(newPerson)
    //     console.log(newPeople)
*/

// Output:
//["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//ver.8
const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
const alphabet = "abcdefghijklmnopqrstuvwxyz"
function forception (people, alphabet){
    for(let i = 0; i < alphabet.length; i++){
        let newPeople = people.join(": "+ alphabet[i]+" ")+": "+alphabet[i];
        console.log(newPeople)

    }
}


forception(people, alphabet)
//result

/*"Jon: abcdefghijklmnopqrstuvwxyz Jacob: abcdefghijklmnopqrstuvwxyz Jingle: abcdefghijklmnopqrstuvwxyz Heimer: abcdefghijklmnopqrstuvwxyz Schmidt: abcdefghijklmnopqrstuvwxyz" */

/*function forception (people, alphabet){
 for(let i = 0; i < alphabet.length; i++){
        let newPeople = people.join(": "+ alphabet[i]+" ")+": "+alphabet[i];
        console.log(newPeople)

    }
}


forception(people, alphabet)

result 
*/