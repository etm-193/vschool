const numbersArr = []


function fizzBuzz(){
    for(let i = 0; i < 101; i++){
    numbersArr.push(i);
    if(numbersArr[i] % 3 == 0 && numbersArr[i] % 5 == 0){
        console.log("FizzBuzz!")
    } else if(numbersArr[i] % 3 == 0){
        console.log("Fizz!")
    } else if(numbersArr[i] % 5 == 0){
        console.log("Buzz!")
    } else {
        console.log(numbersArr[i])
        }
    }
}

fizzBuzz()
