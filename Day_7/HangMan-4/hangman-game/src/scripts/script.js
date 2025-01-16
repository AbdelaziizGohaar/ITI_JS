// This file contains the main game logic for the HangMan game.
// It imports the word list and exports functions to manage the game state.

import { getRandomWord } from './word-list.js';

let selectedCategory = '';
let currentWord = '';
let guessedLetters = [];
let remainingGuesses = 6;

export function startGame(category) {
    selectedCategory = category;
    currentWord = getRandomWord(selectedCategory);
    guessedLetters = [];
    remainingGuesses = 6;
    updateDisplay();
}

export function checkGuess(letter) {
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        if (!currentWord.includes(letter)) {
            remainingGuesses--;
        }
    }
    updateDisplay();
}

export function updateDisplay() {
    const wordDisplay = currentWord.split('').map(letter => (guessedLetters.includes(letter) ? letter : '_')).join(' ');
    // Update the UI with the current state of the game
    console.log(`Word: ${wordDisplay}`);
    console.log(`Remaining Guesses: ${remainingGuesses}`);
    // Additional UI updates can be added here
}

export function isGameOver() {
    return remainingGuesses <= 0 || currentWord.split('').every(letter => guessedLetters.includes(letter));
}

export function isGameWon() {
    return currentWord.split('').every(letter => guessedLetters.includes(letter));
}