// Select DOM elements
const hangmanImage = document.querySelector(".hangman-box img");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");
const timerText = document.querySelector(".guesses-text strong");
const categorySelect = document.getElementById("category-select");
const startGameBtn = document.getElementById("start-game-btn");
const gameCategoryDiv = document.querySelector(".game-category");
const gameContainer = document.querySelector(".container");

let timer; // Global timer variable
let timeLeft = 10; // Initial time in seconds
let currentword, correctLetters, wrongGuessCount;
let currentWordList = []; // Filtered words for the selected category
const maxGuesses = 6;

// Reset game state
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

// Start the countdown timer
const startTimer = () => {
    timeLeft = 40; // Reset timer to 10 seconds
    timerText.innerText = `${timeLeft}s`; // Display initial time
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

// Select a random word from the current word list
const getRandomWord = () => {
    const { word, hint } = currentWordList[Math.floor(Math.random() * currentWordList.length)];
    currentword = word;
    console.log(currentword);
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
    startTimer(); // Start the timer
};

// Handle game over state
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

// Initialize the game logic
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

    if (wrongGuessCount === maxGuesses) return gameover(false); // Check for game over
    if (correctLetters.length === currentword.length) return gameover(true); // Check for win
};

// Create keyboard buttons
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);

    button.addEventListener("click", (e) => {
        initGame(e.target, String.fromCharCode(i));
    });
}

// Handle category selection and start the game
startGameBtn.addEventListener("click", () => {
    const selectedCategory = categorySelect.value;
    if (!selectedCategory) {
        alert("Please select a category to start the game.");
        return;
    }

    // Filter words based on the selected category
    currentWordList = wordList[selectedCategory];
    if (currentWordList.length === 0) {
        alert("No words available for this category.");
        return;
    }

    // Hide category selection and show game container
    gameCategoryDiv.style.display = "none";
    gameContainer.style.display = "block";

    // Start the game
    getRandomWord();
});

// Play again button logic
playAgainBtn.addEventListener("click", () => {
    getRandomWord();
});
