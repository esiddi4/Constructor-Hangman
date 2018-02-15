var Word = require('./Word.js');
var inquirer = require('inquirer');

var game = {

	wordBank: [
		"friends",
		"the fresh prince of belair",
		"the simpsons",
		"animaniacs",
		"home improvement",
		"buffy the vampire slayer",
		"rugrats",
		"full house",
		"saved by the bell",
		"sabrina the teenage witch",
		"everybody loves raymond",
		"seinfeld",
		"hey arnold",
		"pinky and the brain",
		"boy meets world",
		"family matters"
	],

	guessesRemaining: 0,
	currentWord : null,

	initializeGame: function() {
		this.resetGuesses();
		this.currentWord = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
		this.currentWord.pushLetters();
		this.currentWord.displayWord();
	},

	guessALetter: function() {
		inquirer.prompt([
			{
				name: "guess",
				message: "Guess a letter!",
				type: "input"
			}
		]).then(function(guessRes){
			var guess = guessRes.guess;
			game.currentWord.checkGuess(guess);
			game.currentWord.displayWord();
			game.gameResult(guess);
		});
	},

	resetGuesses: function() {
		this.guessesRemaining = 10;
	},

	gameResult: function(guess) {
		var lettersArr = this.currentWord.letters;
		var countCorrect = 0;
		var foundLetter = false;

		for (var i = 0; i < lettersArr.length; i++) {
			// count how many letters have been guessed
			if (lettersArr[i].guessed) {
				countCorrect++;
			}

			if (guess === lettersArr[i].character) {
				foundLetter = true;
			}
		}

		if (game.guessesRemaining === 0) {
			console.log("\nOut of guesses! Try again.");
			game.initializeGame();
		} else if (countCorrect === lettersArr.length) {
			console.log("\nYou got it right! Next word!");
			game.initializeGame();
		} else if (foundLetter) {
			console.log("\nCORRECT!!!");
			game.guessALetter();
		} else if (!foundLetter) {
			this.guessesRemaining--;
			console.log("\nINCORRECT!!!");
			console.log(this.guessesRemaining + " guesses remaining!!!");
			game.guessALetter();
		}
	}

}

console.log("Welcome to 90s Hangman!");
game.initializeGame();
game.guessALetter();

// guess a letter
// if correct, 
// Inquirer alert: CORRECT!!!
// Display puzzle
// Inquirer message "guess a letter"
// Word.checkGuess();


// if incorrect,
// guessesRemaining--
// Inquirer alert: INCORRECT!!! {guessesRemaining} guesses remaining!!!
// DO NOT DISPLAY PUZZLE3






