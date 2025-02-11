//form has a submit button so hence we will first access that
const form =document.querySelector('form')
//form is submitted using post or get
form.addEventListener('submit',function(e){
    e.preventDefault();
    const heightt = parseInt(document.querySelector('#height').value)
    const weightt = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    if(heightt==='' || heightt<0 || isNaN(heightt) ){
        results.innerHTML =`Please give a valid height ${heightt}`
    }
    else if(weightt==='' || weightt<0 || isNaN(weightt) ){
        results.innerHTML =`Please give a valid weight ${weightt}`
    }
    else{
        const bmi=(weightt/ ((heightt*heightt)/10000)).toFixed(2)
      
        
        //show the results
        results.innerHTML = `<span>${bmi}</span>`;
    
    //     if(bmi<=18){
    //         results.textContent = `underWeight`
    //    }
    //    else if(bmi<=24.9 && bmi>18){
    //            results.textContent =`normal range`
    //    }
    //    else if(bmi>24.9){
    //         results.textContent =`Overweight`
    //    }
    
   
    }

})//shd keep height and weight while we click the submit button


