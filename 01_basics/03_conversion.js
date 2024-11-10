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


//********************OPERATIONS*********************** */

let val =3
let negVal = - val
console.log(negVal) //-3
 
console.log(2+3, 2-3, 2*3 ,2**3 ,2/3 , 2%3); //5 -1 6 8 0.6666666666666666 2

let str1 ="me "
let str2 ="learning"
 let str3 =str1+str2
console.log(str3) //me learning

console.log("1"+2,1+"2",1+'2',"1"+2+2, 1+2+"2") //12 12 12 122 32

//prefix and postfix operator :++num, num++
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


//***************COMPARISIONS : same datatypes ********************/

console.log(2>1 , 2<1 , 2>=1 , 1==2 , 2!=1);//true false true false true
console.log("2">1, "02">1)
console.log(null>0 ,null<0 , null==0, null>=0);//false false false true
//comparision and == ans>= are used diiferently
//srtict check: ===
console.log("2"==2,"2"===2)//true false


