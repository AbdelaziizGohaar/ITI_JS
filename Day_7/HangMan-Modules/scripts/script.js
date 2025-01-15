const hangmanImage = document.querySelector(".hangman-box img");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");
const timerText = document.querySelector(".guesses-text strong");

let timer; // Global timer variable
let timeLeft = 10; // Initial time in seconds
let currentword, correctLetters, wrongGuessCount;
const maxGuesses = 6;

// Start the countdown timer
const startTimer = () => {
    timeLeft = 10; // Reset timer to 70 seconds
    timerText.innerText = `${timeLeft}s`; // Display the initial time
    clearInterval(timer); // Clear any existing timer

    timer = setInterval(() => {
        timeLeft--;
        timerText.innerText = `${timeLeft}s`; // Update timer display

        if (timeLeft <= 0) {
            clearInterval(timer); // Stop the timer
            wrongGuessCount++; // Increment wrong guesses
            hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
            guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

            if (wrongGuessCount === maxGuesses) return gameover(false); // Check for game over

            startTimer(); // Restart timer for the next countdown
        }
    }, 1000);
};


// here hareset the game state
const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => (btn.disabled = false));
    wordDisplay.innerHTML = currentword
        .split("")
        .map(() => '<li class="letter"></li>')
        .join("");
    gameModal.classList.remove("show");
};

// Ana haselect a random word and reset the game
const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentword = word;
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
    startTimer(); // hastart the timer for the new game
};


// hna haHandle game over state
const gameover = (isVictory) => {
    clearInterval(timer); // Stop the timer
    setTimeout(() => {
        const modelText = isVictory ? `You found the word:` : `The correct word was`;
        gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
        gameModal.querySelector("h4").innerText = isVictory ? "Congrats!" : "Game Over";
        gameModal.querySelector("p").innerHTML = `${modelText} <b>${currentword}</b>`;
        gameModal.classList.add("show");
    }, 300);
};


// here is my main gode initialize the game logic
const initGame = (button, clickedLetter) => {
    if (currentword.includes(clickedLetter)) {
        [...currentword].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                const listItem = wordDisplay.querySelectorAll("li")[index];
                listItem.innerText = letter;
                listItem.classList.add("guessed");
            }
        });
    } else {
        wrongGuessCount++;
        hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    }

    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    if (wrongGuessCount === maxGuesses) return gameover(false); // Check for game over ana 5srt
    if (correctLetters.length === currentword.length) return gameover(true); // Check for  kesbt
};


// hnaCreate keyboard buttons
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);

    button.addEventListener("click", (e) => {
        initGame(e.target, String.fromCharCode(i));
    });
}

//hna ha Start the game
getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);



