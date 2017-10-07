//constant for number of max guess that can be taken
const maxGuesses = 6;

//variable for the word the person is guessing
var wordToGuess = ["biggie", "big sean", "drake", "tupac", "dr dre", "public enemy", "the roots", "jcole", "jayz", 
"brooklyn", "california love", "juicy", "hypnotize", "the blueprint", "kendrick", "kanye", "nas", "illmatic", "stankonia", 
"outkast", "tha carter"];
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
}
document.getElementById("theword").innerHTML = data.join(""); 

//function that tells you if the letter exists in the word or not 
	//loop through each letter place
	//if it exists record the letter 

document.onkeyup = function letterExists (guess){

	var letterChoice = guess.key
	
	console.log(letterChoice);

	for (var i = 0; i < randomWordArr.length; i=i+1) {

		if (letterChoice === randomWordArr[i]) {

			data.splice(i,1,letterChoice);
			document.getElementById("theword").innerHTML = data.join(""); 

		} else {

			missedGuesses.push(letterChoice);

			function removeDuplicates(arr) {
				let s = new Set(arr);
				let it = s.values();
				return Array.from(it);
			}

			var incorrectLetters = removeDuplicates(missedGuesses);
			document.getElementById("userguess").innerHTML = ("Letters guessed: " + incorrectLetters);

			console.log(incorrectLetters);

		}

	}

}

console.log(data);


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

