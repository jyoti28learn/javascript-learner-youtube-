// on the basis of call by value and reference : primitive and non primitive(reference type)

//primitive(copy): 7: string ,number, boolean, null ,undefined ,character, symbol, BigInt


//Javascript is statically or dynamically typed language?
const score =100;
//in typescript : const score1: number =100

const id = Symbol(123)
const anotherId =Symbol(123) //both are different
console.log(id==anotherId)//false

const num = 12345674453765896532245234n// convert to BigInt
console.log(typeof num) //bigint

//reference type : array, objects , functions  

let heros=["iron man","hulk","venom"]
let myObj={
    name:"hitesh",
    age:28
}
//storing a function inside a variable
let function2 = function(){
    console.log('hello')
}

console.log(typeof(function2))//function :object function