const coding =['rb','js','cpp'];
//FOR EACH LOOP
// coding.forEach(function(item){
// console.log(item);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);//have to give reference printMe( )X
coding.forEach((item , index, arr)=>{
 console.log(item, index, arr) ;
})
// output:rb 0 [ 'rb', 'js', 'cpp' ]
// js 1 [ 'rb', 'js', 'cpp' ]
// cpp 2 [ 'rb', 'js', 'cpp' ]

const myCode=[
   {
    langName:"javascript",
    langFileName:"js"
   } ,
   {
    langName:"C++",
    langFileName:"cpp"
   } ,
   {
    langName:"html",
    langFileName:"html"
   } ,
   {
    langName:"python",
    langFileName:"py"
   } 
]
myCode.forEach((item)=>{
    console.log(item.langFileName);
})