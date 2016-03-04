function getPhrase() {
  getData("rest/phrase", showPhrase);
}

var word;
var correct;
var guess;
var guesses = [];
var wrongGuesses = [];
function showPhrase (phrase) {
  // var body = document.querySelector("body");
  var wordDiv = document.getElementById("wordDiv");
  correct = document.createElement("ul");
  correct.setAttribute("id", "correctWord")
  word = phrase.gamePhrase;

  for (var i=0; i<word.length; i++) {
    guess = document.createElement("li");
    // guess.setAttribute("class", "guess");
    if(word[i] === " ") {
      guess.innerHTML = " ";
    } else {
      guess.innerHTML = "_";
    }
    wordDiv.appendChild(correct);
    correct.appendChild(guess);
  }
}
//try adding if word.includes back in:
function checkGuess(letter) {
var wordDiv = document.getElementById("wordDiv");
for(var i=0; i<word.length; i++) {
  if(word[i] === letter) {
    console.log("found: " + letter);
    letter = word[i];
    guess.innerHTML = letter;
    wordDiv.appendChild(correct);
    correct.appendChild(guess);
  }
  else if (word[i] !== letter){
    console.log("in checkGuess else");
    wrongGuesses.push(letter);
    break;
  }

}
guesses.push(letter);
console.log(guesses);
console.log(wrongGuesses);

  // if (word.includes(letter)){
  //   console.log("found the letter");
  // }
  // else {
  //   console.log("in checkGuess else");
  // }
}
