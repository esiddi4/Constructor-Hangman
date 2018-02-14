function Letter (char) {
	// define a string value to store the underlying character for the letter
	this.character = char;
	// define a boolean value that stores whether that letter has been guessed yet
	this.guessed = false;

	// A function that returns the underlying character if the letter has been guessed
	// or a placeholder (like an underscore) if the letter has not been guessed
	this.renderLetters = function () { 
		if (this.guessed) {
			return this.guessed;
		} else if (this.character === " ") {
			this.guessed = true;
			return this.character;
		} else {
			return "_ ";
		}
	}
  	// A function that takes a character as an argument and checks it against the underlying character
  	// updating the stored boolean value to true if it was guessed correctly
  	this.isCorrect = function(guess) {
  		if (guess === this.character) {
  			this.guessed = true;
  		}
  	}
}

module.exports = Letter;