let myDate = new Date()
console.log(myDate.toString()); //Sun Nov 10 2024 11:56:49 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString());//2024-11-10T11:56:49.402Z
console.log(myDate.toDateString());//Sun Nov 10 2024
console.log(myDate.toLocaleString());//11/10/2024, 11:56:49 AM
console.log(typeof(myDate));//object

let myCreatedDate = new Date (2023,0,23)//Mon Jan 23 2023

let myCreatedDate2 = new Date ("2024-01-12")

let myCreatedDate3 = new Date ("01-12-2023")//Thu Jan 12 2023
console.log(myCreatedDate3.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp, myCreatedDate.getTime());//1731240340657 1674432000000 in ms
console.log(Math.floor(Date.now()/1000));// in seconds and roundoff :1731240462

let newDate = new Date()
console.log(newDate,newDate.getMonth()+1)//2024-11-10T12:10:10.601Z 10-NOV
console.log(`${newDate.getMonth() } and the day is ${newDate.getDay()}`);//10 and the day is 0

newDate.toLocaleString('default',{ //can customise it
  weekday:'long'
})




