// This file initializes the HangMan game and manages user interactions.

import { startGame, checkGuess, updateDisplay } from './script.js';

const categorySelect = document.getElementById('category-select');
const startGameBtn = document.getElementById('start-game-btn');
const gameContainer = document.querySelector('.container');

startGameBtn.addEventListener('click', () => {
    const selectedCategory = categorySelect.value;
    if (selectedCategory) {
        startGame(selectedCategory);
        gameContainer.style.display = 'block';
    } else {
        alert('Please select a category to start the game.');
    }
});

// Additional event listeners and functions can be added here for handling user interactions.