var Letter = require('./Letter.js');

function Word(currentWord) {
	// stores current word
	this.currentWord = currentWord;
	// array of `new` Letter objects representing the letters of the underlying word
	this.letters = [];

	// push new Letter objects to letters array
	this.getLetters = function(currentWord) {
		for (var i = 0; i < this.currentWord.length; i++) {
			this.letters.push(new Letter.Letter(this.currentWord[i]));
		}
	};

	// A function that returns a string representing the word

	// This should call the function on each letter object (the first function defined in `Letter.js`) that
	// displays the character or an underscore and concatenate those together.
	this.displayWord = function() {
		var display = "";

		for (var i = 0; i < this.letters.length; i++) {
			display += this.letters[i].renderLetters();
		}

		return display;
	}

	// A function that takes a character as an argument and calls the guess function on each letter object
	// (the second function defined in `Letter.js`)
	this.myGuessWord = function(guess){
		for (var i = 0; i < this.currentWord.length; i++) {
			this.letters[i].isCorrect();
		}
	}
}



module.exports = Word;