//generating a random number
const randomNumber = parseInt(Math.random()*100+1);
const submit =document.querySelector('.subt')
const UserInput = document.querySelector('#guessFeild')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess =[]
let numGuess = 1

let playGame = true;
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(UserInput.value)
        validateGuess(guess)
    });
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess <1){
        alert('number is less than 1')
    }
    else if(guess >100){
        alert('number is greater thab 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game over.Random NUmber was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`you guessed it right`)
        endGame()
    }
    else if(guess<randomNumber){
        displayMessage(`number is too low`)
    }
    else if(guess>randomNumber){
        displayMessage(`number is too high`)
    }
}
function displayMessage(message){
    lowOrHi.innerHTML= `<h3>${message}</h3>`
}
function displayGuess(guess){
    UserInput.value = '';
    guessSlot.innerHTML += `${guess}`;
    numGuess++;
    remaining.innerHTML =`${11 - numGuess}`
}
function endGame(){
    
}
function newGame(){

}

