//constant for number of max guess that can be taken
const maxGuesses = 6;

//variable for the word the person is guessing
var wordToGuess = ["Biggie", "Big Sean", "Drake", "Tupac", "Dr Dre", "Public Enemy", "The Roots", "Big Sean", "Jcole", "Jayz", 
"Brooklyn", "California Love", "Juicy", "Hypnotize", "The Blueprint", "Kendrick", "Kanye", "Nas", "Illmatic", "Stankonia", 
"Outkast", "Tha Carter"];
//variable for array of the guesses that are missed 
var missedGuesses = [];
//number of guesses taken that was missed
var guessesTaken = 0;
//how many times the user has won the game
var winCounter = 0;
//how many time the user has lost the game
var lossCounter = 0;

//number of spaces in the word "_"
var spaces = []



//function to pick random word from array
function chooseWord(words) {
	return words[Math.floor(Math.random() * words.length)];
}

var randomWord = chooseWord(wordToGuess);

console.log(randomWord);

//function that tells you if the letter exists in the word or not 
	//loop through each letter place
	//if it exists record the letter 

document.onkeyup = function letterExists (guess){

	var letterChoice = guess.key
	var randomWordArr = randomWord.split

	for (var i = 0; i < randomWord.length; i=i+1) {
		if (letterChoice === randomWord[i]) {

			var letterPosition = indexOf(i) //IS THIS HOW I WOULD GET THE INDEX OF WHERE LETTER IS LOCATED??
			document.getElementById("center").innerHTML = letterChoice //SHOW LETTER THAT WAS GUESSED CORRECTLY??

		} else {

			missedGuesses.push(guess)

		}
	}

}

//splice method

//show letter guessed wrong
	

	var letterGuessed = document.getElementById("userguess")

	letterGuessed.innerHTML = "Letters already guessed" + missedGuesses;

	console.log(letterGuessed)




//function to reset the game
function reset() {
	guessesTaken = 0;
	missedGuesses = [];
}

//if they take too many guesses
	if (missedGuesses.length === maxGuesses.length) {
		alert("Too many guesses taken. Try again!");
		reset();
	}

