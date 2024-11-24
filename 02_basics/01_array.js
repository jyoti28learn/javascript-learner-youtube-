const myArr = [0,1,true,"hitesh"]
console.log(myArr[3]);

//shalow copy:copies share the same reference 

//different methods in array
const heros =["hulk", "iron man"]
const myArr2 = new Array(0,1,2,3,4)

//array methods

myArr.push(6)
console.log(myArr); //[ 0, 1, true, 'hitesh', 6 ]
myArr.pop()
console.log(myArr); //[ 0, 1, true, 'hitesh' ]
 
myArr.unshift(9)
console.log(myArr); //shift this value to the starting :[ 9, 0, 1, true, 'hitesh' ]
//unshift not used much coz pressurize the system

myArr.shift();
console.log(myArr);//remove the starting

//bool methods 
console.log(myArr.includes(2));//F
console.log(myArr.includes(1));//T
console.log(myArr.indexOf(1));//1

const newArray = myArr.join() //converts an array to the string
console.log(newArray,typeof(newArray))//0,1,true,hitesh string

//slice , splice
console.log("A :",myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B :",myArr);
const myn2 = myArr.splice(1,3);
console.log("C :",myArr);
console.log(myn2);

/*A : [ 0, 1, true, 'hitesh' ]  SLICE
[ 1, true ]
B : [ 0, 1, true, 'hitesh' ]
C : [ 0 ]      SPLICE:manipulate the original array cut the array
[ 1, true, 'hitesh' ]*/
