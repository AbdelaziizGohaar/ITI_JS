# HangMan Game

## Overview
The HangMan Game is a classic word-guessing game where players try to guess a hidden word by suggesting letters within a certain number of guesses. This project is built using HTML, CSS, and JavaScript modules.

## Project Structure
```
hangman-game
├── src
│   ├── scripts
│   │   ├── word-list.js      # Exports an array of words categorized by themes
│   │   ├── script.js         # Handles game logic and state management
│   │   └── game.js           # Initializes the game and manages user interactions
│   ├── styles
│   │   └── style.css         # Styles for the game interface
│   ├── images
│   │   └── hangman-0.svg     # SVG image for the initial hangman state
│   └── index.html            # Main HTML document for the game interface
└── README.md                 # Documentation for the project
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser to start the game.

## Game Rules
- Select a category from the dropdown menu.
- Start the game and guess letters to reveal the hidden word.
- You have a limited number of incorrect guesses before the game is over.

## How to Contribute
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Submit a pull request detailing your changes.