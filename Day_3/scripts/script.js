const hangmanImage = document.querySelector(".hangman-box img");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");

let currentword , correctLetters , wrongGuessCount   ;
const maxGuesses = 6;

const resetGame = () =>{
    correctLetters = [] ;
    wrongGuessCount = 0;
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach(btn =>btn.disabled = false) ;
    wordDisplay.innerHTML = currentword.split("").map(() =>'<li class="letter"></li>').join("");
    gameModal.classList.remove("show");


}

const getRandomWord = () => {
    // select random wordss 
    const {word,hint} = wordList[Math.floor(Math.random()* wordList.length)];
    currentword = word ;
    console.log(word);
    document.querySelector(".hint-text b").innerText = hint ;
    resetGame();
 //   wordDisplay.innerHTML = word.split("").map(() =>'<li class="letter"></li>').join("");
}


const gameover = (isVictory) =>{
    // ba3d 600ms of game complete show this model of game data  
     setTimeout(() =>{
        const modelText = isVictory ? `You found the word:` :`the correct word was`;
        gameModal.querySelector("img").src = `images/${isVictory ? 'victory' :'lost'}.gif`;
        gameModal.querySelector("h4").innerText = `${isVictory ? 'Congrats!' :'Game over'}`;
        gameModal.querySelector("p").innerHTML = `${modelText} <b>${currentword}</b> `;
        gameModal.classList.add("show");        
    },300);
}





const initGame = (button , clickedLetter) => {
   // console.log(button , clickedLetter); 
   if (currentword.includes(clickedLetter)) 
    {
     // console.log(clickedLetter , "is exist on word ");
     [...currentword].forEach((letter , index) => {
        if (letter === clickedLetter) {
            correctLetters.push(letter);
            wordDisplay.querySelectorAll("li")[index].innerText = letter;
            wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
        }
    });
   }else 
   {
    /// choose wrong number then  hungman image and number updated 
    wrongGuessCount++;
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;  
   }
   button.disabled = true ;
   guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

///call game over of the game 
   if (wrongGuessCount === maxGuesses) 
    {
      return gameover(false);
    };
    if (correctLetters.length === currentword.length) 
        {
          return gameover(true);
        };
    
}

//    console.log(clickedLetter,"Dont exist on word  ");

/// create keyborad buttons
for (let i = 97; i <= 122; i++){
const button = document.createElement("button");
button.innerText = String.fromCharCode(i);
keyboardDiv.appendChild(button);
/// add actionlistener 
button.addEventListener("click",e => initGame(e.target , String.fromCharCode(i)));

}

getRandomWord();
playAgainBtn.addEventListener("click",getRandomWord);









