var Letter = require('./Letter.js');

// Word constructor
function Word(word) {
	// stores current word
	this.word = word;
	// array of `new` Letter objects representing the letters of the underlying word
	this.letters = [];
}

// push new Letter objects to letters array
Word.prototype.pushLetters = function(word) {
	for (var i = 0; i < this.word.length; i++) {
		this.letters.push(new Letter(this.word[i]));
	}
};

// A function that returns a string representing the word
Word.prototype.displayWord = function() {
	var display = "";

	for (var i = 0; i < this.letters.length; i++) {
		display += (this.letters[i].renderLetters());
	}

	console.log(display);
}

// A function that takes a character as an argument and calls the guess function on each letter object
Word.prototype.checkGuess = function(guess){
	for (var i = 0; i < this.word.length; i++) {
		this.letters[i].isCorrect(guess);
	}
}

module.exports = Word;