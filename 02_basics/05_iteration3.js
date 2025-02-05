//[{object},{object}]
//['','']
// let arr = [1,2,3,4,5]
// for(const num of arr){
//     console.log(`each num of array is ${num}`);
// }

// let greetings = "hello JII";
// for(const greet of greetings){
//     if(greet == ' '){
//         continue;
//     }
//     console.log(`Each Character is  ${greet}`);
// }

//MAPS:unique values

const map = new Map();
map.set('IN',"india")
map.set('INa',"india of america")
map.set('IN',"india")

//console.log(map);
for(const [key , values] of map){
    console.log(key);   
}
for(const key of map){
    console.log(key);   
}
//... cannot use for in loop maps are not iterative
// const myObj = {
//     'game1': 'NFS',
//     'game2': 'Spider'
// }
// for(const [key, value]of myObj){
//     console.log(key, ':-',value);
//  //   TypeError: myObj is not iterable
// }