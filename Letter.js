// Letter constructor
function Letter(char) {
	// define a string value to store the underlying character for the letter
	this.character = char;
	// define a boolean value that stores whether that letter has been guessed yet
	this.guessed = false;

	this.renderLetters = function () { 
		if (this.guessed) {
			return this.character;
		} else if (this.character === " ") {
			this.guessed = true;
			return this.character;
		} else {
			return "_ ";
		}
	}

	this.isCorrect = function(guess) {
		if (guess === this.character) {
			this.guessed = true;
		}
	}
}

// // A function that returns the underlying character if the letter has been guessed
// // or a placeholder (like an underscore) if the letter has not been guessed
// Letter.prototype.renderLetters = function () { 
// 		if (this.guessed) {
// 			return this.character;
// 		} else if (this.character === " ") {
// 			this.guessed = true;
// 			return this.character;
// 		} else {
// 			return "_ ";
// 		}
// }

// // A function that takes a character as an argument and checks it against the underlying character
// // updating the stored boolean value to true if it was guessed correctly
// Letter.prototype.isCorrect = function(guess) {
// 	if (guess === this.character) {
// 		this.guessed = true;
// 		console.log("CORRECT!");
// 	} else {
// 		console.log("INCORRECT!");
// 	}
// }

module.exports = Letter;