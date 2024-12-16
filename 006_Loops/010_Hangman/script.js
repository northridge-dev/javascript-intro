const zero_misses = `
             +----+
                  |
                  |
                  |
                =====`;
const one_miss = `
             +----+
             0    |
                  |
                  |
                =====`;
const two_misses = `
             +----+
             0    |
             |    |
                  |
                =====`;
const three_misses = `
             +----+
             0    |
            /|    |
                  |
                =====`;
const four_misses = `
             +----+
             0    |
            /|\\   |
                  |
                =====`;
const five_misses = `
             +----+
             0    |
            /|\\   |
            /     |
                =====`;
const six_misses = `
             +----+
             😵   |
            /|\\   |
            / \\   |
                =====`;
const drawings = [
  zero_misses,
  one_miss,
  two_misses,
  three_misses,
  four_misses,
  five_misses,
  six_misses,
];

const words = ["aardvark", "baboon", "camel", "dolphin", "elephant"];
let selectedWord, guessedLetters, wrongGuesses, maxWrongGuesses;

const wordDisplay = document.getElementById("word-display");
const hangmanDrawing = document.getElementById("hangman-drawing");
const message = document.getElementById("message");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const resetButton = document.getElementById("reset-button");
const wrongGuessesDisplay = document.getElementById("wrong-guesses");

function initGame() {
  selectedWord = words[Math.floor(Math.random() * words.length)];
  guessedLetters = new Set();
  wrongGuesses = [];
  maxWrongGuesses = 6;

  updateWordDisplay();
  updateHangmanDrawing();
  updateMessage("");
  updateWrongGuesses();
}

function updateWordDisplay() {}

function updateHangmanDrawing() {
  hangmanDrawing.textContent = drawings[wrongGuesses.length];
}

function updateWrongGuesses() {}

function updateMessage(msg) {}

function checkWinOrLose() {}

function disableInput() {
  guessInput.disabled = true;
  guessButton.disabled = true;
}

function handleGuess() {}

guessButton.addEventListener("click", handleGuess);
resetButton.addEventListener("click", initGame);

initGame();
