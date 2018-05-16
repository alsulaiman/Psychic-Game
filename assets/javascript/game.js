/* ========== 
set a variables to counter, count wins, count loss, user wrong guess, alphabet, random letter, 
 ========== */

var counter = 10;
var couWin=0;
var couLos=0;
var userArray = [];
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 


// Random Guesses
randomalph = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(randomalph);

/* ========== 
when the user press on the keyboard do this:
* get the letter when the user press the keyboard
* change the letter from the upper letter to lower letter
* check if the user press any key other than alohabet letter don't listen to him 
 ========== */
document.onkeyup = function(event) {
	var lowerCase = event.key;
	var userGuess = lowerCase.toLowerCase(lowerCase);
	var validation = alphabet.includes(userGuess);
	if (validation !== true){
		alert('Please enter a letter');
	} else {

/* ========== 
* if counter greater than 0 keep listen to them else exit the game
* if user chose the same litter twice alert you alredy chose the letter
* if the user enter the same random letter count 1 and restart the game
* if the user enter th wrong letter count 10 chance to get the right letter then count 1 loss
 ========== */
		if (counter !== 1) {
			if (userArray.includes(userGuess)){
				alert('You\'ve used this letter, please select another letter')
			} else {
				if (userGuess !== randomalph) {
					wrong();
				} else {
					win();
				}
			}
		} else {
			los();
		}
	}

	/* to restart the game */ 
	function restart() {
		counter = 10;
		userArray = [];
		document.getElementById("guessSoFar").innerHTML= (userArray);
		randomalph = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log(randomalph);
	}

	/* if user win */ 
	function win() {
		couWin += 1;
		alert("You're right");
		document.getElementById("win").innerHTML = couWin;
		restart();
	}

	/* if user loss */ 
	function los() {
		couLos += 1;
		alert("Sorry, you lost");
		document.getElementById("loss").innerHTML = couLos;
		document.getElementById("guessLeft").innerHTML=null;
		restart();
	}

	/* if user git wrong letter */ 
	function wrong() {
		// alert('try agane')
		userArray.push(userGuess)
		counter--
		document.getElementById("guessLeft").innerHTML=counter;
		document.getElementById("guessSoFar").innerHTML= (userArray + ",");
	}	
}
