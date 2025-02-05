//for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element==5){
        console.log("5 is the best number");
    }
    console.log(element);
}

for (let i = 0; i <=10; i++) {
    for (let j = 0; j <=10; j++) {
        // console.log( ` ( ${i},${j})`);
        console.log(i + '*' + j + ' = ' + i*j);
            
    }
    
}
let myArray=["flash","batman","superman"];
console.log(myArray.length);

for (let index = 0; index <  myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

//BREAK AND CONTINUE

for (let index = 0; index <=20; index++) {
   
    if(index==5){
        console.log(`detected 5`);
        continue;
        //galti hogyi to skip krdo
    }
    console.log(`value of index is ${index}`);
}