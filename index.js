var Word = require('./Word.js');
var inquirer = require('inquirer');

var wordBank = [
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
	];

// select a random word from word bank
var selectedWord = new Word(wordBank[Math.floor(Math.random() * wordBank.length)]);

