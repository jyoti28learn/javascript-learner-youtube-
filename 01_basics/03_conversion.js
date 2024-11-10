let score =23

//const{score}=req.body;
console.log(typeof(score)) //number

let score2 ="23abc"
console.log(typeof(score2)) //string
let ValueInNUmber = Number(score2)
console.log(ValueInNUmber)//NaN :not a number

let score3 = undefined

let ValueInNUmber3 = Number(score3)
console.log(ValueInNUmber3); //null:0 undefined:NaN

console.log(typeof(ValueInNUmber))

let loggedIn =1;
let BooleInValue = Boolean(loggedIn)
console.log(BooleInValue) //true

//converting a number to string

let n = 33
let strinN = String(n)
console.log(strinN); //33

console.log(typeof(strinN));//string

