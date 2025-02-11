const clock = document.getElementById('clock')
//const clockk =document.querySelector('#clock')

//to run the methos after a certain interval
setInterval(function(){
    let timee = new Date()
    clock.innerHTML=(timee.toLocaleTimeString()); 
},1000);
