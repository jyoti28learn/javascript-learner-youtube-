const myNumbers=[1,2,3,4,5,6,7,8,9,10]
//
// const newNums= myNumbers.map((num)=>{return num+10})


//CHAINING
const newNums= myNumbers
.map((num)=> num*10)
.map((num)=> num+1)
.filter((num) => num >= 40)
console.log(newNums);

//REDUCE: IN SHOPPING CARTS
const nname = [1,2,3]
const total = nname.reduce(function(acc, currval){
    console.log(`accumulator value is ${acc} and current value is ${currval}`);
    return acc+currval
},0)
console.log(total);
//better code
const total1 = nname.reduce((acc,curr)=>acc+curr, 0)
console.log(total1);

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "xjs course",
        price: 1999
    },
    {
        itemName: "jsml course",
        price: 2999
    },
]
const orderPrice = shoppingCart.reduce((acc,item)=>acc+item.price ,0)
console.log(orderPrice);
