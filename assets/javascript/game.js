var userGuess = document.getElementById("user-guess");
var guessedLetters = []

document.onkeyup = function(event) {
	guessedLetters.push(event.key)
	for (var i = 0; i < guessedLetters.length; i++) {
		while(userGuess.firstChild) userGuess.removeChild(userGuess.firstChild)
		var letter = guessedLetters[i]
		var message = "Your clicked: " + letter;
		var node = document.createElement('p');
		var textNode = document.createTextNode(message)
		node.appendChild(textNode)
		userGuess.appendChild(node)
	}
	console.log(guessedLetters)
}



// ==========================

// var ranLet = Math.floor(Math.random())


// function guessLetter() {
var possibleLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
// for (var i = 0; i < possibleLetters.length; i++) {
	// possibleLetters.charAt(Math.floor(Math.random() * possibleLetters.length));
// }


// ==========================

// var ranLetter = Math.floor((Math.random()*100)+1);
// document.text(ranLetter);

// if (userGuess === possibleLetters) {
// 	couWin += 1;
// 	document.getElementByClass("win").text("Wins: "+couWin);
// } else {
// 	couLos += 1;
// 	document.getElementByClass("loss").text("Losses: "+couLos);
// }



// var couWin=0;





// var counter=0;

// var couLos=0;




