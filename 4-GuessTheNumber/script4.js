let randomNumber= parseInt(Math.random()*100+1);

const submit= document.querySelector('#subt');
const userInput= document.querySelector('#guessField');
const guessSlot= document.querySelector('.guesses');
const remaining= document.querySelector('.lastResult');
const lowOrHi= document.querySelector('.lowOrHi');
const startOver= document.querySelector('.resultParas');

const p= document.createElement('p')

let prevGuess= []
let numGuess= 1

let playGame= true      // ye hamesha hi rahega sare games mein because is condition ko check kiye bina kuch bhi nhi hoga

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess= parseInt(userInput.value)  // user se input karane ke liye
        console.log(guess);
        validateGuess(guess)  // yaha par bas ham number pass kar diye 
    });
}

function validateGuess(guess){
        // yaha par check karenge ki kahi user a to z to nhi de diya ya bas 1-100 dena hai to kahi wo usse jydaa to nhi de diya
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess<1){
        alert('Please enter a number more than 1')
    }else if(guess>100){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)     // array mein push karne ke liye
    if (numGuess===11){            // agar 11th guess hai uska to end game
        displayGuess(guess)
        displayMessage(`Game Over. Random number was ${randomNumber}`)
        endGame()
    }else{
        displayGuess(guess)
        checkGuess(guess)
    }
    }

}


function checkGuess(guess){
    // yaha par check karenge and print karayenge ki jo guessed value hai wo correct ya low ya high hai
    if(guess=== randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess<randomNumber){
        displayMessage(`Number is Tooooo Low`)
    }else if(guess>randomNumber){
        displayMessage(`Number is Tooo High`)
    }
}

function displayGuess(guess){
    // values ko clean karega, guess ka array ko update karega, remaining guess ko bhi update karega
    userInput.value=''   // yaha par clean kar rhe value
    guessSlot.innerHTML+=`${guess}, `      // yaha par guess ka value ko update nhi kar rha push kar rha ahi
    numGuess++;
    remaining.innerHTML=`${11 - numGuess}`
}


function displayMessage(message){
    // yaha par innerHTML ko empty kar denge and usme apne guess ko add kar denge and numbers ko kam kr denge
    // basically yaha DOM se mainpulation karenge
    lowOrHi.innerHTML= `<h2>${message}</h2>`

}



function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML='<h2 id="newGame">Start new Game</h2>';
    startOver.appendChild(p)
    playGame=false;
    newGame();
}


function newGame(){
    const newGameButton= document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber= parseInt(Math.random()*100+1);
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${10 - numGuess}`
        userInput   .removeAttribute('disabled')
        startOver.removeChild(p);
        playGame=true
    })


}


