// to set a counter
var counter = 10;

// to count how many time user wins.
var couWin=0;

// to count how many time user losses.
var couLos=0;

// Creating the Answer Array,which stores the letters that have been properly guessed:
var userArray = [];

// Alphabet Letters
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

// Random Guesses
var randomGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

// Listening for key up
document.onkeyup = function(event) {

	// to git key value (Object of event) 
	var userGuess = event.key

	// to make a condition if counter = 0 stop receiving key entrance 
	if (counter !== 1) {

		// to ensure in that user doesn't use the same litter twice
		if (userArray.includes(userGuess)){

			// to popup a window message to the user telling him he was already chose the letter
			alert('Youve used this letter, please select another letter')

			// if the user doesn't insert same letter do this things 
		} else {

			// comparing each of user guess and random letter
			if (userGuess !== randomGuess) {

				// to alert a messeg that is telling user he guess rong letter
				alert('wrong')

				// to stor user guess 
				userArray.push(userGuess)

				// to count how many guess litter will left
				counter--

				// to tell user how many chanse he has to fugerout the right answer
				document.getElementById("guessLeft").innerHTML=counter;

				// to shows user what does letter he click on
				document.getElementById("guessSoFar").innerHTML= (userArray + ", ");

				// to show that the user is chose the right answer
			} else {

				// to popup a window message telling user he just win
				alert('correct!')

				// to add a mount of winning 
				couWin += 1;

				// to showes the resulte of wining 
				document.getElementById("win").innerHTML = couWin;
				restart();

			}
		}

		// to tell the user to refresh the page 
	} else {

		// popup a message tell users to refresh page

		alert("you lost");
		
		// to count how many time user lost
		couLos+=1;

		// to showes the result on lossing
		document.getElementById("loss").innerHTML = couLos;
		restart();
	}
function restart() {
	counter = 10;
	userArray = [];
}
	
}





