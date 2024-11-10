const name = "jyoti"
const repoCount =50
console.log(name + repoCount + "Value")//jyoti50Value : POOR PRACTISE
//use of " backticks `` for string interpolation"
console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`) //Hello my name is jyoti and my repo Count is 50

//new way to write a string : it is key-value pair
const gameName = new String('jyotishi-hc-cam-princess')
console.log(gameName[0]) //j
console.log(gameName.__proto__)//{}
console.log(gameName.length)//8
console.log(gameName.toUpperCase)// function
console.log(gameName.toUpperCase())//JYOTISHI
console.log(gameName.charAt(6));//h
console.log(gameName.indexOf('h')); //6

const newString = gameName.substring(0,4) //[no negatives)
console.log(newString); //jyot

const newString2 = gameName.slice(-6,4) //[---)
console.log(newString2);

const newString3 = "   trjinvjw       "
console.log(newString3); //    trjinvjw    
console.log( newString3.trim());//trjinvjw : trim works for whitespace and new line characters only

const url = "http://hitesh.com/hitesh%20dintbvir"
console.log(url.replace('%20','-')) //http://hitesh.com/hitesh-dintbvir
console.log(url.includes('hitesh')); //true

//converting a string to array on the basis of -
console.log(gameName.split('-')); //[ 'jyotishi', 'hc', 'cam', 'princess' ]





