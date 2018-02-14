var Letter = require('./Letter.js');

function Word(currentWord) {
	// stores current word
	this.currentWord = currentWord;
	// array of `new` Letter objects representing the letters of the underlying word
	this.letters = [];
}

// push new Letter objects to letters array
Word.prototype.pushLetters = function(currentWord) {
	for (var i = 0; i < this.currentWord.length; i++) {
		this.letters.push(new Letter(this.currentWord[i]));
	}
};

// A function that returns a string representing the word
Word.prototype.displayWord = function() {
	var display = "";

	for (var i = 0; i < this.letters.length; i++) {
		display += (this.letters[i].renderLetters());
	}

	return display;
}

// A function that takes a character as an argument and calls the guess function on each letter object
Word.prototype.checkGuess = function(guess){
	for (var i = 0; i < this.currentWord.length; i++) {
		this.letters[i].isCorrect(guess);
	}
}









// var gameWord = new Word("hello world");
// gameWord.pushLetters();
// gameWord.checkGuess("h");
// console.log(gameWord.displayWord());

module.exports = Word;