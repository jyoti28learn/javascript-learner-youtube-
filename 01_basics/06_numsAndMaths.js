const score =400.454643
const balance = new Number (300); //is a prototype and its properties
console.log(score,balance); //400 [Number: 300]
console.log(balance.toString(),typeof(balance.toString())); //300 string
console.log(balance.toString().length) //3
console.log(balance.toFixed(2));//300.00

console.log(score.toPrecision(4)); //400.5
const hundred = 1000000
console.log(hundred.toLocaleString()); //1,000,000
console.log(hundred.toLocaleString('en-IN')); //10,00,000
//min and max value number.min value , min safe value

console.log(Math,Math.abs(-4),Math.round(4.6),Math.ceil(4.2),Math.floor(4.9))//Object [Math] {} 4 5 5 4
console.log(Math.min(4,6,5,2),Math.max(4,5,6,2));//2 6

console.log(Math.random()); //between 0-1
console.log((Math.random()*10+1));//5.2372616329041595 keeps on changing
console.log(Math.floor(Math.random()*10+1))//5

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);





