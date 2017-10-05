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



//function to pick random word from array
function chooseWord(words) {
	return words[Math.floor(Math.random() * words.length)];
}

var randomWord = chooseWord(wordToGuess);

console.log(randomWord);

//change word into an array of letters

var randomWordArr = randomWord.split("");

console.log(randomWordArr);

//Have array with empty underscores
var data = [];
var length = randomWordArr.length;

for (var i = 0; i < length; i++) {
	data.push("_ ");
	//document.getElementById("theword").innerHTML = data.join("");
}

console.log(data);

//function that tells you if the letter exists in the word or not 
	//loop through each letter place
	//if it exists record the letter 

document.onkeyup = function letterExists (guess){

	var letterChoice = guess.key
	
	console.log(letterChoice);

	for (var i = 0; i < randomWordArr.length; i=i+1) {
		if (letterChoice === randomWord[i]) {

			data.splice(i,0,letterChoice);

		} else {

			missedGuesses.push(letterChoice); //if space is not that letter pushes it to missedGuesses a million times

		}

		console.log(data);
		console.log(missedGuesses);
	}

}


//show letter guessed wrong	
	var letterGuessed = document.getElementById("userguess")

	//letterGuessed.innerHTML = "Letters already guessed" + missedGuesses;

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

